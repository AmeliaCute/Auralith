ServerEvents.recipes(event => 
{
  event.remove([
    { output: 'create:electron_tube' },
    { output: 'create:mechanical_crafter' }
  ]);

  event.shaped(
    Item.of('create:electron_tube', 1),
    [ 
      ' A ',
      ' B ',
      ' C '
    ],
    {
      A: 'mekanism:alloy_infused',
      B: '#c:plates/iron',
      C: 'modern_industrialization:copper_wire'
    }
  );

  event.shaped(
    Item.of('create:mechanical_crafter', 3),
    [ 
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'modern_industrialization:bronze_gear',
      B: 'modern_industrialization:aluminum_plate',
      C: 'enderio:crafter'
    }
  );

});