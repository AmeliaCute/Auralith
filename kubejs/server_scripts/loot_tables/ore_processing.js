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
  ],
  "kubejs:crushed_lead":
  [
    "mekanism:lead_ore",
    "mekanism:deepslate_lead_ore",
    "modern_industrialization:lead_ore",
    "modern_industrialization:deepslate_lead_ore",
  ],
  "kubejs:crushed_antimony":
  [
    "modern_industrialization:antimony_ore",
    "modern_industrialization:deepslate_antimony_ore",
  ],
  "kubejs:crushed_gold":
  [
    "minecraft:gold_ore",
    "minecraft:deepslate_gold_ore",
    "minecraft:nether_gold_ore"
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
      pool.apply(entry => entry.setCount([3, 6]));
    });
  });
});
