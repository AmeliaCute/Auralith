ServerEvents.recipes(event => 
{
  event.remove({ output: 'create_connected:large_crank_wheel' });
  event.shapeless(
    Item.of('create_connected:large_crank_wheel', 1),
    [
      'create:hand_crank',
      'modern_industrialization:steel_gear'
    ]
  );

  event.remove({ output: 'create_connected:parallel_gearbox' });
  event.shapeless(
    Item.of('create_connected:parallel_gearbox', 1),
    [
      'create:gearbox',
      'modern_industrialization:steel_gear'
    ]
  );

  event.remove({ output: 'create:chain_conveyor' });
  event.shaped(
    Item.of('create:chain_conveyor', 1),
    [
      'CAC',
      'BAB',
      'CBC'
    ],
    {
      A: 'modern_industrialization:bronze_gear',
      B: 'create:andesite_casing',
      C: 'modern_industrialization:analog_circuit'
    }
  )
});