const crushed = {
  "kubejs:crushed_iron": [
    "minecraft:iron_ore",
    "minecraft:deepslate_iron_ore"
  ]
}

LootJS.lootTables(event => {
  Object.entries(crushed).forEach(([item, ores]) => {
    const tables = event.modifyBlockTables(ores)

    tables.clear();

    tables.createPool(pool => 
    {
      pool.addEntry(item);
      pool.apply(entry => entry.setCount([1, 4]));
    })
  })
})
