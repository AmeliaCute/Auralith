ServerEvents.recipes(event => 
{
  event.shapeless(
    Item.of('patchouli:guide_book[patchouli:book="bigreactors:erguide"]', 1),
    [
      'minecraft:book',
      "bigreactors:yellorium_ingot"
    ]
  )
});