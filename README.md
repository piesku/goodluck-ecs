# goodluck-ecs

This is a minimal implementation of Goodluck's core, useful for benchmarks. Most probably, you're looking for the [Goodluck template repository](https://github.com/piesku/goodluck) instead. The template repo includes is a fully-featured toolkit for creating small browser games. It includes the game loop code, input handling, and many example components and systems.

## Usage

```js
// 1. Define component masks.

const HAS_POSITION = 1 << 0;
const HAS_VELOCITY = 1 << 1;


// 2. Define components storage.

class World extends WorldImpl {
    Position = [];
    Velocity = [];
}

// 3. Define component data and mixin functions.

function position(x = 0, y = 0) {
    return function(world, entity) {
        world.Signature[entity] |= HAS_POSITION;
        world.Position[entity] = {x, y};
    };
}

function velocity(dx = 0, dy = 0) {
    return function (world, entity) {
      world.Signature[entity] |= HAS_VELOCITY;
      world.Velocity[entity] = {dx, dy};
    };
}


// 4. Define the system.

const QUERY_MOVE = HAS_POSITION | HAS_VELOCITY;
function sys_move(world) {
    for (let entity = 0; entity < world.Signature.length; entity++) {
        if ((world.Signature[entity] & QUERY_MOVE) === QUERY_MOVE) {
            let position = world.Position[entity];
            let velocity = world.Velocity[entity];
            position.x += velocity.dx;
            position.y += velocity.dy;
        }
    }
}


// 5. Set up the scene.

let world = new World();
instantiate(world, [
    position(1, 2),
    velocity(3, 4),
]);


// 6. Call the system every frame.

sys_move(world);
```
