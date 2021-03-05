const bad = extend(ItemTurret, "bad-tom", {
  load(){
    this.turretRegions = [];
    this.outlineRegions = [];
    this.heatRegions = [];
    
    this.teamRegion = Core.atlas.find("error");
    this.baseRegion = Core.atlas.find("block-4");
    }
  },
  icons(){
    return[
      this.baseRegion,
      this.turretRegions[0]
    ];
  }, 
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
  length: 10000,
  damage: Number.MAX_VALUE,
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

bad.ammo(
  Items.copper, MiniCopper,
