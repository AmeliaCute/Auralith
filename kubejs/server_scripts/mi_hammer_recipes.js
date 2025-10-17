ServerEvents.recipes(event => 
{

  event.remove({ output: 'modern_industrialization:iron_hammer' });
  event.shaped(
    Item.of('modern_industrialization:iron_hammer', 1),
    [
      'AAA',
      'ABA',
      ' B '
    ],
    {
      A: '#c:plates/iron',
      B: '#c:rods/wooden'
    }
  );

  event.remove({ output: 'modern_industrialization:steel_hammer' });
  event.shaped(
    Item.of('modern_industrialization:steel_hammer', 1),
    [
      'AAA',
      'ABA',
      ' B '
    ],
    {
      A: '#c:plates/steel',
      B: '#c:rods/wooden'
    }
  );

  event.remove({ output: 'modern_industrialization:diamond_hammer' });
  event.shaped(
    Item.of('modern_industrialization:diamond_hammer', 1),
    [
      'AAA',
      'ABA',
      ' B '
    ],
    {
      A: '#c:plates/diamond',
      B: '#c:rods/wooden'
    }
  );
});