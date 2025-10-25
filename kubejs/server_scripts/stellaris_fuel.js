ServerEvents.recipes(event => 
{
  event.recipes.modern_industrialization.mixer({
    eu: 4,
    duration: 200,
    fluid_inputs: [
      {fluid: 'modern_industrialization:molten_redstone', amount: 90}
    ],
    item_inputs: [
      {item: 'minecraft:wheat_seeds', amount: 4}
    ],
    fluid_outputs: [
      { fluid: 'stellaris:fuel', amount: 90}
    ]
  });
});