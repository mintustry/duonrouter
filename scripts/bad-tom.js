  size: 4,
  range: 3000,
  health: 1800,
  shootSound: Sounds.shootBig,
  targetAir: true,
  targetGround: true,
  rotateSpeed: Number.MAX_VAULE,
  cooldown: 0.11,
  inaccuracy: 8,
  shootEffect: Fx.none,
  smokeEffect: Fx.none,
  ammoUseEffect: Fx.none,
  reloadTime: 3,
  shots: 1

  const MiniCopper = extend(ShrapnelBulletType, {
  sprite: "prog-mats-minigun-ball",
  length: 10000,
  damage: 100E+1000,
  width: 100,
  serrationLenScl: 10,
  serrationSpaceOffset: 10,
  serrationFadeOffset: 0,
  serrations: 15,
  serrationWidth: 30,
  fromColor: Pal.ffffff,
  toColor: Pal.000000,
  lifetime: 10,
  shootEffect: sparkShoot,
  smokeEffect: sparkShoot,
});

minigun.ammo(
  Items.copper, MiniCopper,
