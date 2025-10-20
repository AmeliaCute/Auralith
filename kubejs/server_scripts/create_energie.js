ServerEvents.recipes(event => 
{
  event.remove([
    { output: 'create:water_wheel' },
    { output: 'create:large_water_wheel' },

    { output: 'create:sail_frame' },
    { output: 'create:white_sail' },
    
    { output: 'createaddition:electric_motor' }
  ]);

  event.shaped(
    Item.of('createaddition:electric_motor', 1),
    [
      'ABA',
      'CDC',
      'AEA'
    ],
    {
      A: 'modern_industrialization:aluminum_plate',
      B: 'mekanism:alloy_infused',
      C: 'modern_industrialization:electronic_circuit',
      D: 'modern_industrialization:copper_wire',
      E: 'enderio:advanced_capacitor_bank',
    }
  );

})