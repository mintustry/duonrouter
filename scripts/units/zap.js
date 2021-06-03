const ais = require("libs/ai");

let minSpd = 1;
let maxSpd = 100;
let col = Color.valueOf("#a9d8ff");
const aaa = extend(UnitType, "zap", {});

aaa.constructor = () => extend(UnitEntity, {});
aaa.defaultController = ais.noWeaponFlareAI(70, [BlockFlag.factory, BlockFlag.battery, BlockFlag.generator, BlockFlag.core]);
aaa.abilities.add(new MoveLightningAbility(6 * Vars.state.rules.unitDamageMultiplier, 8, 0.3, 17/4, minSpd, maxSpd, col, "purple-air-needle-heat"));
