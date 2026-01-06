ServerEvents.recipes(event => 
{
  event.remove(
  [
    { output: "mekanismgenerators:heat_generator" },
    { output: "mekanismgenerators:solar_generator" },
    { output: "mekanismgenerators:gas_burning_generator" },
    { output: "mekanismgenerators:bio_generator" },
    { output: "mekanismgenerators:advanced_solar_generator" },
    { output: "mekanismgenerators:wind_generator" },

    { output: "mekanismgenerators:fission_reactor_casing" },
    { output: "mekanismgenerators:fission_reactor_port" },
    { output: "mekanismgenerators:fission_reactor_logic_adapter" },
    { output: "mekanismgenerators:fission_fuel_assembly" },
    { output: "mekanismgenerators:fission_rod_assembly" },

    { output: "mekanismgenerators:fusion_reactor_casing" },
    { output: "mekanismgenerators:fusion_reactor_frame" },
    { output: "mekanismgenerators:fusion_reactor_port" },
    { output: "mekanismgenerators:fusion_reactor_logic_adapter" }
  ]
  );
});