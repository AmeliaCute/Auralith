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
  
});