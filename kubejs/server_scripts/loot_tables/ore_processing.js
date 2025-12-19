const crushed = {
  "kubejs:crushed_iron": 
  [
    "minecraft:iron_ore",
    "minecraft:deepslate_iron_ore"
  ],
  "kubejs:crushed_tin": 
  [
    "mekanism:tin_ore",
    "mekanism:deepslate_tin_ore",
    "modern_industrialization:tin_ore",
    "modern_industrialization:deepslate_tin_ore",
  ],
  "kubejs:crushed_copper":
  [
    "minecraft:copper_ore",
    "minecraft:deepslate_copper_ore"
  ]
}

LootJS.lootTables(event => 
{
  Object.entries(crushed).forEach(([item, ores]) => 
  {
    const tables = event.modifyBlockTables(ores)

    tables.clear();
    tables.createPool(pool => 
    {
      pool.addEntry(item);
      pool.apply(entry => entry.setCount([1, 4]));
    });
  });
});
