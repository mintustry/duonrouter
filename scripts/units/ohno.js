//변수 정의
    //어빌리티
const healColor = Color.valueOf("98ffa9");
const healerColor = Color.valueOf("db401c");
const spawnUnit = Vars.content.getByName(ContentType.unit, "arkyid");
const spawnUnit2 = Vars.content.getByName(ContentType.unit, "reign");
const spawnUnit3 = Vars.content.getByName(ContentType.unit, "corvus");
const unitSpawn1 = new UnitSpawnAbility(spawnUnit3, 15 * 60, 0, 0);
const healField1 = new RepairFieldAbility(50, 2 * 60, 20 * 8);
const ohnoEntity = prov(() => extend(AmmoDistributePayloadUnit, {}));
EntityMapping.nameMap.put("ohno", ohnoEntity);
const ohno = extendContent(UnitType, "testunit4", {});
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
testunit4.abilities.add(new JavaAdapter(RepairFieldAbility, {}, 50, 2 * 60, 20 * 8));
testunit4.abilities.add(new ForceFieldAbility(15*8, 0.5, 550, 2 * 60));
testunit4.abilities.add(new UnitSpawnAbility(spawnUnit2, 5 * 60, 18, 7));
testunit4.abilities.add(new UnitSpawnAbility(spawnUnit2, 5 * 60, -18, 7));
testunit4.abilities.add(new UnitSpawnAbility(spawnUnit, 7 * 60, 18, -7));
testunit4.abilities.add(new UnitSpawnAbility(spawnUnit, 7 * 60, -18, -7));
testunit4.abilities.add(new UnitSpawnAbility(spawnUnit3, 10 * 60, 0, 0));
/*
//로그 확인
    //어빌리티
print("HealColor" + " : " + healColor);
print("spawnUnit" + " : " + spawnUnit);
print("spawnUnit2" + " : " + spawnUnit2);
print("spawnUnit3" + " : " + spawnUnit3);
print("UnitSpawn1" + " : " + UnitSpawn1);
print("healField1" + " : " + healField1);
print("healField1.healEffect" + " : " + healField1.healEffect);
    //엔티티
print("testunit4Entity" + " : " + testunit4Entity);
print("testunit4Entity" + " : " + testunit4);
    //탄환
print("testFragBullet1" + " : " + testFragBullet1);
print("testBullet1" + " : " + testBullet1);
print("testBullet2" + " : " + testBullet2);
    //무기
print(testWeapon1);
print(testWeapon2);
print(testWeapon3);
    //그래픽 효과
print("mendSpawn" + " : " + mendSpawn);
print("healIn" + " : " + healIn);
    //유닛
print("testunit4.abilities" + " : " + testunit4.abilities);
print("testunit4.weapons" + " : " + testunit4.weapons);
*/
