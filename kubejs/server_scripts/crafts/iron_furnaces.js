ServerEvents.recipes(event => 
{
  event.remove({ output: 'ironfurnaces:iron_furnace'});
  event.shaped(
    Item.of('ironfurnaces:iron_furnace', 1),
    [ 
      'ABA',
      'ACA',
      'DDD'
    ],
    {
      A: 'modern_industrialization:iron_plate',
      B: 'modern_industrialization:iron_gear',
      C: 'minecraft:furnace',
      D: 'modern_industrialization:iron_large_plate',
    }
  );
  
});