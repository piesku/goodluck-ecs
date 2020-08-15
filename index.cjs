class BaseWorld {
    MAX_ENTITIES = 10000;
    Signature = [];
}

function createEntity(world, signature = 0) {
    for (let i = 0; i < world.MAX_ENTITIES; i++) {
        if (!world.Signature[i]) {
            world.Signature[i] = signature;
            return i;
        }
    }
    throw new Error("No more entities available.");
}

function destroyEntity(world, entity) {
    world.Signature[entity] = 0;
}

function instantiate(world, blueprint) {
    let entity = createEntity(world);
    for (let mixin of blueprint.Using) {
        mixin(world, entity);
    }
    return entity;
}

module.exports = {
    BaseWorld,
    createEntity,
    destroyEntity,
    instantiate,
};
