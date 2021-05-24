const rotateBlock = extend(DrawMixer, {
    draw(entity){
        const rotation = entity.block.rotate ? entity.rotdeg() : 0;

        Draw.rect(this.bottom, entity.x, entity.y, rotation);
        Draw.rect(this.rotator, entity.x, entity.y, entity.totalProgress * 6);
        Draw.rect(this.top, entity.x, entity.y, rotation);
    },
    load(block){
        this.rotator = Core.atlas.find(block.name + "-rotator");
        this.top = Core.atlas.find(block.name + "-top");
        this.bottom = Core.atlas.find(block.name + "-bottom");
    },
    icons(block){
        return [
          this.bottom,
          this.rotator,
          this.top
        ];
    }
});
//stole it form Sharlottes/ExampleMod
const dingusrotatething = extendContent(GenericCrafter, "dingus-rotate-thing", {});
dingusrotatething.drawer = rotateBlock;
