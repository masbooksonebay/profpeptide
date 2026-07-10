import React from "react";
import { ImageResponse } from "next/og.js";
import { writeFileSync, readFileSync } from "node:fs";

const svg = readFileSync("src/app/icon.svg", "utf8");
const dataUri = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

async function pngAt(size) {
  const el = React.createElement(
    "div",
    { style: { width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" } },
    React.createElement("img", { width: size, height: size, src: dataUri })
  );
  const res = new ImageResponse(el, { width: size, height: size });
  return Buffer.from(await res.arrayBuffer());
}

function packIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(count, 4);
  const dir = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  images.forEach((img, i) => {
    const b = 16 * i;
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, b + 0);
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, b + 1);
    dir.writeUInt8(0, b + 2); dir.writeUInt8(0, b + 3);
    dir.writeUInt16LE(1, b + 4); dir.writeUInt16LE(32, b + 6);
    dir.writeUInt32LE(img.data.length, b + 8);
    dir.writeUInt32LE(offset, b + 12);
    offset += img.data.length;
  });
  return Buffer.concat([header, dir, ...images.map((x) => x.data)]);
}

const sizes = [16, 32, 48];
const images = [];
for (const s of sizes) images.push({ size: s, data: await pngAt(s) });
writeFileSync("src/app/favicon.ico", packIco(images));
console.log("favicon.ico written:", images.map((i) => `${i.size}px=${i.data.length}b`).join(", "));
