//변수 정의
    //어빌리티
const healColor = Color.valueOf("98ffa9");
const healerColor = Color.valueOf("db401c");
const spawnUnit = Vars.content.getByName(ContentType.unit, "oh no");
const spawnUnit2 = Vars.content.getByName(ContentType.unit, "oh no");
const spawnUnit3 = Vars.content.getByName(ContentType.unit, "oh no");
const unitSpawn1 = new UnitSpawnAbility(spawnUnit3, 15 * 1, 0, 0);
const healField1 = new RepairFieldAbility(50, 2 * 60, 20 * 8);
const ohnoEntity = prov(() => extend(AmmoDistributePayloadUnit, {}));
EntityMapping.nameMap.put("ohno", ohnoEntity);
const ohno = extendContent(UnitType, "ohno", {});
const mendSpawn = new Effect (120, e => {
    if(!(e.data instanceof UnitType)) {
        return;
    }
    Draw.color(healColor);
    Draw.alpha(e.fin());

    var scl = 1 + e.fout() * 2;

    var unit = e.data();
    var region = unit.icon(Cicon.full);

    Draw.rect(region, e.x, e.y, region.width * Draw.scl * scl, region.height * Draw.scl * scl, 180);
});
const healIn = new Effect (60, e => { //유닛 치료 그래픽 효과
    Draw.color(e.color);

    e.scaled(8, e2 => {
        Draw.stroke(e2.fout() * 4);
        Lines.circle(e2.x, e2.y, 4 + e2.fin() * 27);
    });

    Draw.stroke(e.fout() * 2);

    Angles.randLenVectors(e.id, 30, 4 + 40 * e.fin(), (x, y) => {
        Draw.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fin() * 4 + 1);
    });
    Draw.color(Pal.heal);
    Lines.stroke(e.fout() * 2);
    Lines.circle(e.x, e.y, 4 + e.finpow() * 65);

    Draw.color(Pal.heal);
    for(i = 0; i < 4; i++){
        Drawf.tri(e.x, e.y, 6, 100 * e.fout(), i*90);
    };

    Draw.color();
    for(i = 0; i < 4; i++){
        Drawf.tri(e.x, e.y, 3, 35 * e.fout(), i*90);
    };
});



//실행문


    //그래픽 효과
unitSpawn1.spawnEffect = mendSpawn;
healField1.healEffect = healIn;

    //어빌리티
ohno.abilities.add(new JavaAdapter(RepairFieldAbility, {}, 50, 2 * 60, 20 * 8));
ohno.abilities.add(new ForceFieldAbility(15*8, 0.5, 550, 2 * 60));
ohno.abilities.add(new UnitSpawnAbility(spawnUnit2, 5 * 1, 18, 7));
ohno.abilities.add(new UnitSpawnAbility(spawnUnit2, 5 * 1, -18, 7));
ohno.abilities.add(new UnitSpawnAbility(spawnUnit, 7 * 1, 18, -7));
ohno.abilities.add(new UnitSpawnAbility(spawnUnit, 7 * 1, -18, -7));
ohno.abilities.add(new UnitSpawnAbility(spawnUnit3, 10 * 1, 0, 0));
