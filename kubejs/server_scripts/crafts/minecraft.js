ServerEvents.recipes(event => 
{
  event.remove({
    input: '#minecraft:logs',
    output: /_planks/
  });

  Ingredient.of('#minecraft:logs').itemIds.forEach(log => 
  {

    let plank = log
      .replace('_log', '_planks')
      .replace('_wood', '_planks')
      .replace('stripped_', '')

    if (Item.exists(plank)) 
    {
      event.shapeless(
        Item.of(plank, 1),
        log
      )
    }
  });

  event.shaped(
    Item.of('minecraft:flint', 1),
    [ 
      'AA',
      'AA',
    ],
    {
      A: 'minecraft:gravel',
    }
  );

  event.remove({ output: 'minecraft:stick'});
  event.shaped(
    Item.of('minecraft:stick', 1),
    [ 
      'A',
      'A',
    ],
    {
      A: '#minecraft:planks',
    }
  );


  event.remove({ output: 'minecraft:crafting_table'});
  event.shaped(
    Item.of('minecraft:crafting_table', 1),
    [ 
      'AA',
      'BB',
    ],
    {
      A: 'minecraft:flint',
      B: '#minecraft:planks',
    }
  );

  event.remove({ output: 'minecraft:chest' });
  event.remove({ output: 'minecraft:crafting_table'});
  event.shaped(
    Item.of('minecraft:chest', 1),
    [ 
      'CBC',
      'CAC',
      'CBC'
    ],
    {
      A: 'minecraft:flint',
      B: '#minecraft:planks',
      C: '#minecraft:logs'
    }
  );

  event.remove({ output: 'minecraft:furnace'});
  event.shaped(
    Item.of('minecraft:furnace', 1),
    [ 
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'minecraft:flint',
      B: '#c:cobblestones',
      C: 'mysticalagriculture:inferium_essence'
    }
  );
  
  event.remove({ output: 'minecraft:stone_shovel'});
  event.shaped(
    Item.of('minecraft:stone_shovel', 1),
    [ 
      ' B ',
      ' A ',
      ' A '
    ],
    {
      A: '#c:rods/wooden',
      B: '#c:cobblestones',
    }
  );

  event.remove({ output: 'minecraft:stone_pickaxe'});
  event.shaped(
    Item.of('minecraft:stone_pickaxe', 1),
    [ 
      'CBC',
      ' A ',
      ' A '
    ],
    {
      A: '#c:rods/wooden',
      B: '#c:cobblestones',
      C: 'minecraft:flint'
    }
  );

  event.remove({ output: 'minecraft:stone_axe'});
  event.shaped(
    Item.of('minecraft:stone_axe', 1),
    [ 
      'CBB',
      'CA ',
      ' A '
    ],
    {
      A: '#c:rods/wooden',
      B: '#c:cobblestones',
      C: 'minecraft:flint'
    }
  );

  event.remove({ output: 'minecraft:stone_hoe'});
  event.shaped(
    Item.of('minecraft:stone_hoe', 1),
    [ 
      'CB ',
      ' A ',
      ' A '
    ],
    {
      A: '#c:rods/wooden',
      B: '#c:cobblestones',
      C: 'minecraft:flint'
    }
  );
  
  event.remove({ output: 'minecraft:stone_sword'});
  event.shaped(
    Item.of('minecraft:stone_sword', 1),
    [ 
      ' C ',
      ' B ',
      ' A '
    ],
    {
      A: '#c:rods/wooden',
      B: '#c:cobblestones',
      C: 'minecraft:flint'
    }
  );
});