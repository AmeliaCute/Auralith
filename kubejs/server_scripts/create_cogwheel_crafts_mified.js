ServerEvents.recipes(event => 
{
  event.remove({ output: 'create_connected:encased_chain_cogwheel' });
  event.shapeless(
    Item.of('create_connected:encased_chain_cogwheel', 1),
    [
      'create:encased_chain_drive',
      'modern_industrialization:steel_gear'
    ]
  );

  event.remove({ output: 'create_connected:crank_wheel' });
  event.shapeless(
    Item.of('create_connected:crank_wheel', 1),
    [
      'create:hand_crank',
      'modern_industrialization:steel_gear'
    ]
  );

  event.remove({ output: 'create_connected:six_way_gearbox' });
  event.shaped(
    Item.of('create_connected:six_way_gearbox', 1),
    [
      'AB ',
      'BCB',
      ' BA'
    ],
    {
      A: 'modern_industrialization:bronze_gear',
      B: 'modern_industrialization:steel_gear',
      C: 'create:andesite_casing'
    }
  );

  
  event.remove({ output: 'create_connected:brass_gearbox' });
  event.shaped(
    Item.of('create_connected:brass_gearbox', 1),
    [
      ' B ',
      'BAB',
      ' B '
    ],
    {
      A: 'create:rotation_speed_controller',
      B: 'modern_industrialization:steel_gear',
    }
  );

  event.remove({ output: 'create_connected:freewheel_clutch' });
  event.shapeless(
    Item.of('create_connected:freewheel_clutch', 1),
    [
      'create:andesite_casing',
      'create:shaft',
      '#c:plates/iron',
      'modern_industrialization:steel_gear'
    ]
  );

  event.remove({ output: 'create:wrench' });
  event.shaped(
    Item.of('create:wrench', 1),
    [
      'AA ',
      'AB ',
      ' C '
    ],
    {
      A: '#c:plates/gold',
      B: 'modern_industrialization:steel_gear',
      C: '#c:rods/wooden'
    }
  );

  event.remove({ output: 'create:large_cogwheel' });
  event.shaped(
    Item.of('create:large_cogwheel', 1),
    [
      ' B ',
      'BAB',
      ' B '
    ],
    {
      A: 'modern_industrialization:steel_gear',
      B: '#minecraft:planks',
    }
  );

  event.remove({ output: 'create:gearbox' });
  event.shaped(
    Item.of('create:gearbox', 1),
    [
      ' B ',
      'BAB',
      ' B '
    ],
    {
      A: 'create:andesite_casing',
      B: 'modern_industrialization:bronze_gear',
    }
  );

  event.remove({ output: 'create:vertical_gearbox' });
  event.shaped(
    Item.of('create:vertical_gearbox', 1),
    [
      'B B',
      ' A ',
      'B B'
    ],
    {
      A: 'create:andesite_casing',
      B: 'modern_industrialization:bronze_gear',
    }
  );

  event.remove({ output: 'create:gearshift' });
  event.shapeless(
    Item.of('create:gearshift', 1),
    [
      'create:andesite_casing',
      'modern_industrialization:steel_gear',
      'mekanism:alloy_infused'
    ]
  );

  event.remove({ output: 'create:millstone' });
  event.shaped(
    Item.of('create:millstone', 1),
    [
      ' A ',
      ' B ',
      ' C '
    ],
    {
      A: 'modern_industrialization:copper_gear',
      B: 'create:andesite_casing',
      C: '#c:stones'
    }
  );

  event.remove({ output: 'create:mechanical_mixer' });
  event.shaped(
    Item.of('create:mechanical_mixer', 1),
    [
      ' A ',
      ' B ',
      ' C '
    ],
    {
      A: 'modern_industrialization:copper_gear',
      B: 'create:andesite_casing',
      C: 'create:whisk'
    }
  );

  event.remove({ output: 'create:weighted_ejector' });
  event.shaped(
    Item.of('create:weighted_ejector', 1),
    [
      ' A ',
      ' B ',
      ' C '
    ],
    {
      A: 'modern_industrialization:iron_large_plate',
      B: 'create:depot',
      C: 'modern_industrialization:bronze_gear'
    }
  );

  event.remove({ output: 'create:mechanical_pump' });
  event.shapeless(
    Item.of('create:mechanical_pump', 1),
    [
      'modern_industrialization:bronze_gear',
      'create:fluid_pipe'
    ]
  );

  event.remove({ output: 'create:gantry_carriage' });
  event.shaped(
    Item.of('create:gantry_carriage', 1),
    [
      ' A ',
      ' B ',
      ' C '
    ],
    {
      A: '#minecraft:wooden_slabs',
      B: 'create:andesite_casing',
      C: 'modern_industrialization:steel_gear'
    }
  );

  event.remove({ output: 'create:sequenced_gearshift' });
  event.shapeless(
    Item.of('create:sequenced_gearshift', 1),
    [
      'create:brass_casing',
      'modern_industrialization:steel_gear',
      'create:electron_tube'
    ]
  );

  event.remove({ output: 'sliceanddice:slicer' });
  event.shaped(
    Item.of('sliceanddice:slicer', 1),
    [
      ' A ',
      ' B ',
      ' C '
    ],
    {
      A: 'modern_industrialization:copper_gear',
      B: 'create:andesite_casing',
      C: 'create:turntable'
    }
  );

});