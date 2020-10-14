class BaseWorld {
    constructor(max = 10000) {
        this.MAX_ENTITIES = max;
        this.Signature = [];
    }
}

function createEntity(world) {
    for (let i = 0; i < world.MAX_ENTITIES; i++) {
        if (i === world.Signature.length || world.Signature[i] === 0) {
            world.Signature[i] = 0;
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
