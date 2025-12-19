const crushedToNugget = 
[
  { crushed: 'kubejs:crushed_iron', nugget: 'minecraft:iron_nugget', pure: 'kubejs:raw_pure_iron', result: 'minecraft:iron_ingot', xp: 0.7 }
]

ServerEvents.recipes(event => 
{
  crushedToNugget.forEach(r => 
  {
    event.remove({type: "minecraft:smelting", output: r.result});
    event.remove({type: "minecraft:blasting", output: r.result});

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
    ).xp(r.xp);
  })
})
