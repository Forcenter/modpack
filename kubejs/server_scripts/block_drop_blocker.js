LootJS.modifiers((event) => {
    // Передаём массив блоков в addBlockModifier
    event.addBlockLootModifier([
            "minecraft:crafting_table",
            "minecraft:furnace",
            "minecraft:anvil",
            "minecraft:chest",
            "minecraft:barrel",
        ])
    .removeLoot(Ingredient.all)
    .addLoot("minecraft:air");
});