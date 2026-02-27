ServerEvents.recipes(function(event) {

  var METALS = [
    { crushed: 'create:crushed_raw_iron',      ingot: 'minecraft:iron_ingot',                         xp: 0.7 },
    { crushed: 'create:crushed_raw_copper',    ingot: 'minecraft:copper_ingot',                       xp: 0.4 },
    { crushed: 'create:crushed_raw_gold',      ingot: 'minecraft:gold_ingot',                         xp: 0.7 },
    { crushed: 'create:crushed_raw_zinc',      ingot: 'create:zinc_ingot',                            xp: 0.7 },
    { crushed: 'create:crushed_raw_osmium',    ingot: 'mekanism:ingot_osmium',                        xp: 1.2 }, // override mekanism
    { crushed: 'create:crushed_raw_tin',       ingot: 'modern_industrialization:tin_ingot',            xp: 0.9 }, // override MI
    { crushed: 'create:crushed_raw_lead',      ingot: 'modern_industrialization:lead_ingot',           xp: 0.9 }, // override MI
    { crushed: 'create:crushed_raw_uranium',   ingot: 'mekanism:ingot_uranium',                       xp: 3.4 }, // override mekanism
    { crushed: 'create:crushed_raw_nickel',    ingot: 'modern_industrialization:nickel_ingot',         xp: 1.4 }, // override MI
    { crushed: 'create:crushed_raw_platinum',  ingot: 'modern_industrialization:platinum_ingot',       xp: 0.7 }, // override MI
    { crushed: 'auralithcore:crushed_antimony',ingot: 'modern_industrialization:antimony_ingot',       xp: 1.2 }, // override MI
    { crushed: 'auralithcore:crushed_iridium', ingot: 'modern_industrialization:iridium_ingot',        xp: 1.2 }, // override MI
    { crushed: 'auralithcore:crushed_silver',  ingot: 'modern_industrialization:silver_ingot',         xp: 0.2 }, // override MI
    { crushed: 'auralithcore:crushed_titanium',ingot: 'modern_industrialization:titanium_ingot',       xp: 0.7 }, // override MI
    { crushed: 'auralithcore:crushed_tungsten',ingot: 'modern_industrialization:tungsten_ingot',       xp: 1.6 }, // override MI
  ]

  for (var i = 0; i < METALS.length; i++) 
  {
    event.remove({ output: METALS[i].ingot });
    event.remove({ input: METALS[i].crushed });
  }

  for (var j = 0; j < METALS.length; j++) 
  {
    var m = METALS[j]

    event.smelting(m.ingot, m.crushed)
      .xp(m.xp)
      .cookingTime(200)

    event.blasting(m.ingot, m.crushed)
      .xp(m.xp)
      .cookingTime(100)

  }
})