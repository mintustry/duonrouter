var minSpd = 1.1;
var maxSpd = 3.3;
var col = Color.valueOf("#a9d8ff");
const zaps = extendContent(UnitType, "zap", {
  ammoType: AmmoTypes.powerLow
});

zaps.constructor = () => extend(UnitEntity, {});
zaps.defaultController = ais.flareAI(95, [BlockFlag.factory, BlockFlag.battery, BlockFlag.generator, BlockFlag.core]);
zaps.abilities.add(new MoveLightningAbility(6.4 * Vars.state.rules.unitDamageMultiplier, 11, 0.3, 19/4, minSpd, maxSpd, Color.valueOf("#a9d8ff")));
