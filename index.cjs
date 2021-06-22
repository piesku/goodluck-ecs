class WorldImpl {
    Signature = [];
    Graveyard = [];

    CreateEntity() {
        if (this.Graveyard.length > 0) {
            return this.Graveyard.pop();
        }

        // Push a new signature and return its index.
        return this.Signature.push(0) - 1;
    }

    DestroyEntity(entity) {
        this.Signature[entity] = 0;
        this.Graveyard.push(entity);
    }
}

// type Mixin = (world: WorldImpl, entity: number) => void;
// type Blueprint = Array<Mixin>;
function instantiate(world, blueprint) {
    let entity = world.CreateEntity();
    for (let mixin of blueprint) {
        mixin(world, entity);
    }
    return entity;
}

module.exports = {
    WorldImpl,
    instantiate,
};
