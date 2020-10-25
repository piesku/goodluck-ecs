class BaseWorld {
    constructor() {
        this.Signature = [];
        this.Graveyard = [];
    }
}

function createEntity(world) {
    if (world.Graveyard.length > 0) {
        return world.Graveyard.pop();
    }

    return world.Signature.push(0) - 1;
}

function destroyEntity(world, entity) {
    world.Signature[entity] = 0;
    world.Graveyard.push(entity);
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
