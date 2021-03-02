const healColor = Color.valueOf("98ffa9");
const healerColor = Color.valueOf("db401c");
const healField1 = new RepairFieldAbility(50, 2 * 60, 20 * 8);
const zapEntity = prov(() => extend(AmmoDistributePayloadUnit, {}));
EntityMapping.nameMap.put("zap", zapEntity);
var minSpd = 1.1;
var maxSpd = 3.3;
const a = extendContent(UnitType, "zap", {});
  ammoType: AmmoTypes.powerLow
});

healField1.healEffect = healIn;
a.abilities.add(new JavaAdapter(RepairFieldAbility, {}, 50, 2 * 60, 20 * 8));
a.abilities.add(new ForceFieldAbility(15*8, 0.5, 550, 2 * 60));
a.abilities.add(new MoveLightningAbility(6.4 * Vars.state.rules.unitDamageMultiplier, 11, 0.3, 19/4, minSpd, maxSpd, Color.valueOf("#a9d8ff"), "purple-air-dart-heat"));
