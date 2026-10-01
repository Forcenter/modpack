LootJS.modifiers((event) => {
    // Передаём массив блоков в addBlockModifier
    event.addBlockLootModifier([
        "minecraft:crafting_table",
        "minecraft:furnace",
        "minecraft:chest"
    ])
    .removeLoot(Ingredient.all)
    .addLoot("minecraft:air");
});