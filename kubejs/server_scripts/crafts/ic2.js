ServerEvents.recipes(event => 
{
  event.remove({ output: 'mekanism:dust_bronze'});
  event.remove({ output: 'modern_industrialization:bronze_dust'});
  event.shapeless(
    Item.of('modern_industrialization:bronze_dust', 3),
    [
      '#c:dusts/copper',
      '#c:dusts/copper',
      '#c:dusts/copper',
      "#c:dusts/tin",
      "#c:dusts/tin",
      "#c:dusts/tin",
    ]
  );

  event.remove({ output: 'modern_industrialization:bronze_boiler'});
  event.shaped(
    Item.of('modern_industrialization:bronze_boiler', 1),
    [ 
      'ABA',
      'ACA',
      'DED'
    ],
    {
      A: 'modern_industrialization:bronze_plate',
      B: 'modern_industrialization:bronze_tank',
      C: 'ironfurnaces:iron_furnace',
      D: 'modern_industrialization:fire_clay_bricks',
      E: 'modern_industrialization:bronze_machine_casing'
    }
  );
  
  event.remove({ output: 'modern_industrialization:item_pipe'});
  event.shaped(
    Item.of('modern_industrialization:item_pipe', 16),
    [
      'AAA',
      'B B',
      'AAA'
    ], 
    {
      A: 'modern_industrialization:bronze_curved_plate',
      B: 'modern_industrialization:bronze_gear'
    }
  );

  event.shapeless(
    Item.of('modern_industrialization:item_pipe', 1),
    [
      '#modern_industrialization:item_pipes',
      'minecraft:water_bucket'
    ]
  )

  Color.DYE.forEach(color => {
    const pipe = `modern_industrialization:${color}_item_pipe`
    const dye = `minecraft:${color}_dye`
    event.remove({ output: pipe })

    event.shaped(
      Item.of(pipe, 16),
      [
      'AAA',
      'CBC',
      'AAA'
      ], 
      {
      A: 'modern_industrialization:bronze_curved_plate',
      B: dye,
      C: 'modern_industrialization:bronze_gear'
    });

    event.shapeless(
    Item.of(pipe, 1),
    [
      '#modern_industrialization:item_pipes',
      dye
    ]
  )
  });

});