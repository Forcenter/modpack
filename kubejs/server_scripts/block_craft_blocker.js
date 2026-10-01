ServerEvents.recipes(
    event => {
        const blocked_crafts = [
            "minecraft:crafting_table",
            "minecraft:furnace",
            "minecraft:anvil",
            "minecraft:chest",
            "minecraft:barrel",
        ];

        blocked_crafts.forEach(craft => {
            event.remove({ output: craft })
        });
    }
);