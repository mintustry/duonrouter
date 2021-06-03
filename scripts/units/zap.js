const ais = require("libs/ai");

var minSpd = 0;
var maxSpd = 100;
var col = Color.valueOf("#a9d8ff");
const aaa = extend(UnitType, "zap", {});

aaa.defaultController = ais.flareAI(95, [BlockFlag.factory, BlockFlag.battery, BlockFlag.generator, BlockFlag.core]);
aaa.abilities.add(new MoveLightningAbility(6.4 * Vars.state.rules.unitDamageMultiplier, 11, 0.3, 19/4, minSpd, maxSpd, Color.valueOf("#a9d8ff"),"1"));
