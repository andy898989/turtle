class Turtle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "turtleU");
        this.scene = scene;
        scene.physics.world.enable(this);
        scene.add.existing(this);
        this.setBounce(0);
        this.setCollideWorldBounds(false);
        this.head = "no";
        this.direction = "up";
        this.st = "";
        this.locateX = 0;
        this.locateY = 0;
        
    }

    getHead() { return this.head; }
    setHead(head) { this.head = head; }

    getDirection() { return this.direction; }
    setDirection(dir) { this.direction = dir; }
 
    getSt() { return this.st; }
    setSt(st) { this.st = st; }

    getLocateX() { return this.locateX; }
    setLocateX(locateX,) { this.locateX = locateX; }

    getLocateY() { return this.locateY; }
    setLocateY(locateY) { this.locateY = locateY; }

  }