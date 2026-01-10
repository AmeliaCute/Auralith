ServerEvents.recipes(event => 
{
  event.remove(
  [
    { output: 'enderio:energetic_photovoltaic_module' },
    { output: 'enderio:pulsating_photovoltaic_module' },
    { output: 'enderio:vibrant_photovoltaic_module' },

    { output: 'enderio:stirling_generator' },
  ]);
});