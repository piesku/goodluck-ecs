# Changelog

## v7.0.0

- (Skipped v6 to align with the [piesku/goodluck](https://github.com/piesku/goodluck) template versioning.)
- Blueprints are now regular arrays of component mixins. No more `Using: […]`.
- Renamed `BaseWorld` to `WorldImpl`.
- Removed `createEntity` and `destroyEntity` in favor of `WorldImpl`'s methods.

## v5.2.0

- Recycle entity indices for constant-time creation.

## v5.1.0

- Avoid out-of-bounds check in create_entity.

## v5.0.0

- Initial release corresponding to Goodluck as of August 2020.
