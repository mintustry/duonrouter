const rotateBlock = extend(DrawMixer, {
    draw(entity){
        const rotation = entity.block.rotate ? entity.rotdeg() : 0;

        Draw.rect(this.rotator, entity.x, entity.y, entity.totalProgress * 6);
    },
    load(block){
        this.rotator = Core.atlas.find(block.name + "-rotator");
    },
    icons(block){
        return [
          this.rotator
        ];
    }
});
// stole it from Sharlottes/ExampleMod
const atmosphericCooler = extendContent(GenericCrafter, "dingus-rotate-thing", {});
atmosphericCooler.drawer = rotateBlock;
