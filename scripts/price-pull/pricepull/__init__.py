"""pricepull — reusable price-data extraction suite for PP_PRICE_DATA_MASTER_v1.md.

Layers:
  normalize        shared rules ($/mg, blends, scope filter, display names)
  decoders         compound matcher + per-vendor coded-GLP decoders (+ verify standard)
  variation_models the five variation shapes (dosage/pack-size/kit/vial-kit/form-strength)
  adapters         platform fetchers (woo / purity_api / nextjs)
  registry         the 25-vendor config + blocked set; reads code/discount from vendors.ts
  build            classify + render a section in the exact master-doc format

Entry point: ../refresh.py
"""
