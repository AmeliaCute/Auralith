const crushedToNugget = [
  { crushed: 'kubejs:crushed_iron', nugget: 'minecraft:iron_nugget', pure: 'kubejs:raw_pure_iron', result: 'minecraft:iron_ingot', xp: 0.7 },
  { crushed: 'kubejs:crushed_copper', nugget: 'create:copper_nugget', pure: 'kubejs:raw_pure_copper', result: 'minecraft:copper_ingot', xp: 0.4 },
  { crushed: 'kubejs:crushed_tin', nugget: 'modern_industrialization:tin_nugget', pure: 'kubejs:raw_pure_tin', result: 'modern_industrialization:tin_ingot', xp: 0.9 }
]

ServerEvents.recipes(event => 
{
  crushedToNugget.forEach(r => 
  {
    const nuggetName = r.nugget.split(':')[1].replace('nugget', '').replace('_', '');
    event.remove({ output: r.nugget }); 
    event.remove({ output: '#c:nuggets/'+nuggetName });
    event.remove({ input: r.nugget }); 
    event.remove({ input: '#c:nuggets/'+nuggetName }); 
  });



  crushedToNugget.forEach(r => 
  {
    event.remove({ type: "minecraft:smelting", output: r.result });
    event.remove({ type: "minecraft:blasting", output: r.result });

    event.smelting(
      r.nugget,
      r.crushed
    ).xp(r.xp);

    event.shaped(
      Item.of(r.pure, 1),
      [ 
        'AA',
        'AA',
      ],
      {
        A: r.nugget,
      }
    );

    event.smelting(
      r.result,
      r.pure
    ).xp(r.xp).cookingTime(20);
  });
});
