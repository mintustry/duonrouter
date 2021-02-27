const spawnUnit3 = Vars.content.getByName(ContentType.unit, "oh-no");
const unitSpawn1 = new UnitSpawnAbility(spawnUnit3, 15 * 60, 0, 0);
oh-no.abilities.add(new UnitSpawnAbility(spawnUnit3, 10 * 60, 0, 0));
