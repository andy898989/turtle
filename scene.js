class Scene extends Phaser.Scene{
    constructor(){
        super({ key: "Scene" });
        this.turtle=null;
        this.fence=null;
    }
    
    preload(){
        this.load.audio('lose', 'music/lose.mp3');
        this.load.audio('pick', 'music/pick.mp3');

        this.load.image("fence","assets/fence30.png");
        this.load.image("turtleU","assets/turtle30U.png");
        this.load.image("turtleD","assets/turtle30D.png");
        this.load.image("turtleL","assets/turtle30L.png");
        this.load.image("turtleR","assets/turtle30R.png");

        this.load.image("buttonUp","PNG/up90.png");
        this.load.image("buttonDown","PNG/down90.png");
        this.load.image("buttonLeft","PNG/left90.png");
        this.load.image("buttonRight","PNG/right90.png");
    }

    create(){
        this.valueX = 0;
        this.valueY = 0;

        // 單位寬度
        this.block = 30;
        // 遊戲預備
        this.gamePreStart = 3;
        // 遊戲狀態
        this.gameStart = false;

        // 紀錄按鍵後，頭的座標
        this.commandX = 0;
        this.commandY = 0;

        // 計數
        this.count = 0;
        // 移動速度
        this.speed = 20;

        // 準備吃
        this.eatNext = 3;

        // 分數
        this.score = 0;

        this.perStartText =this.add.text(-1000, -1000, "3", {
            fontSize: "256px",
            color: "#ff0000"
        });

        // 
        this.scoreText = this.add.text(10, 20, "分數:", {
            fontSize: 32,
            fill: "white"
        });
        this.speedText = this.add.text(460, 20, "速度:", {
            fontSize: 32,
            fill: "white"
        });

        this.fence=this.physics.add.staticGroup();
        for(var i=15; i<=585; i+=this.block){
            this.fence.create(i,75,'fence');
            this.fence.create(i,585,'fence');
        }
        for(var i=75; i<=555; i+=this.block){
            this.fence.create(15,i,'fence');
            this.fence.create(585,i,'fence');
        }

        this.turtle1=new Turtle(this,0,0);
        this.turtle2=new Turtle(this,0,0);
        this.turtle3=new Turtle(this,0,0);
        this.turtle4=new Turtle(this,0,0);
        this.turtle5=new Turtle(this,0,0);
        this.turtle6=new Turtle(this,0,0);
        this.turtle7=new Turtle(this,0,0);
        this.turtle8=new Turtle(this,0,0);
        this.turtle9=new Turtle(this,0,0);
        this.turtle10=new Turtle(this,0,0);
        this.turtle11=new Turtle(this,0,0);
        this.turtle12=new Turtle(this,0,0);
        this.turtle13=new Turtle(this,0,0);
        this.turtle14=new Turtle(this,0,0);
        this.turtle15=new Turtle(this,0,0);
        this.turtle16=new Turtle(this,0,0);
        this.turtle17=new Turtle(this,0,0);
        this.turtle18=new Turtle(this,0,0);
        this.turtle19=new Turtle(this,0,0);
        this.turtle20=new Turtle(this,0,0);
        this.turtle21=new Turtle(this,0,0);
        this.turtle22=new Turtle(this,0,0);
        this.turtle23=new Turtle(this,0,0);
        this.turtle24=new Turtle(this,0,0);
        this.turtle25=new Turtle(this,0,0);
        this.turtle26=new Turtle(this,0,0);
        this.turtle27=new Turtle(this,0,0);
        this.turtle28=new Turtle(this,0,0);
        this.turtle29=new Turtle(this,0,0);
        this.turtle30=new Turtle(this,0,0);
        
        this.turtle1.setHead("Y");
        this.turtle1.setDirection("up"); 
        this.turtle1.setSt("N"); 
        this.turtle1.setLocateX(10*this.block+15); 
        this.turtle1.setLocateY(12*this.block+45);
        this.turtle1.disableBody(true, true);

        this.turtle2.setHead("N");
        this.turtle2.setDirection("up"); 
        this.turtle2.setSt("N"); 
        this.turtle2.setLocateX(10*this.block+15); 
        this.turtle2.setLocateY(13*this.block+45);
        this.turtle2.disableBody(true, true);

        this.turtle3.setHead("N");
        this.turtle3.setDirection("up"); 
        this.turtle3.setSt("N"); 
        this.turtle3.setLocateX(10*this.block+15); 
        this.turtle3.setLocateY(14*this.block+45);
        this.turtle3.disableBody(true, true);

        this.turtles = [this.turtle1, this.turtle2, this.turtle3, this.turtle4, this.turtle5, this.turtle6, this.turtle7, this.turtle8, this.turtle9, this.turtle10, 
                        this.turtle11, this.turtle12, this.turtle13, this.turtle14, this.turtle15, this.turtle16, this.turtle17, this.turtle18, this.turtle19, this.turtle20, 
                        this.turtle21, this.turtle22, this.turtle23, this.turtle24, this.turtle25, this.turtle26, this.turtle27, this.turtle28, this.turtle29, this.turtle30
        ];

        for (var i=3; i<this.turtles.length; i++){
            this.turtles[i].setHead("N");
            this.turtles[i].setDirection("up"); 
            this.turtles[i].setSt("N"); 
            this.turtles[i].setLocateX(0); 
            this.turtles[i].setLocateY(0);
            this.turtles[i].disableBody(true, true);
        }

        this.turtles_now = [this.turtle1, this.turtle2, this.turtle3];
        this.turtles_eat = [this.turtle4, this.turtle5, this.turtle6, this.turtle7, this.turtle8, this.turtle9, this.turtle10,
                            this.turtle11, this.turtle12, this.turtle13, this.turtle14, this.turtle15, this.turtle16, this.turtle17, this.turtle18, this.turtle19, this.turtle20, 
                            this.turtle21, this.turtle22, this.turtle23, this.turtle24, this.turtle25, this.turtle26, this.turtle27, this.turtle28, this.turtle29, this.turtle30
        ];

        this.anims.create({
            key: 'down',
            frames:   
            [ 
            { key: 'turtleD' },
            { key: 'turtleD' },
            ],
            frameRate: 2,
            repeat: -1,
        });

        this.anims.create({
            key: 'up',
            frames:   
            [ 
            { key: 'turtleU' },
            { key: 'turtleU' },
            ],
            frameRate: 2,
            repeat: -1,
        });

        this.anims.create({
            key: 'left',
            frames:   
            [ 
            { key: 'turtleL' },
            { key: 'turtleL' },
            ],
            frameRate: 2,
            repeat: -1,
        });

        this.anims.create({
            key: 'right',
            frames:   
            [ 
            { key: 'turtleR' },
            { key: 'turtleR' },
            ],
            frameRate: 2,
            repeat: -1,
        });

        this.physics.add.overlap(
            this.turtle1, 
            this.turtles_now, 
            this.game_over,
            null,
            this
        );

        this.physics.add.overlap(
            this.turtle1, 
            this.fence, 
            this.game_over,
            null,
            this
        );

        this.physics.add.overlap(
            this.turtle1, 
            this.turtles_eat, 
            this.turtle1_touch_eat,
            null,
            this
        );

        this.buttonUp=this.add.image(100,650,"buttonUp").setInteractive({ useHandCursor: true }).on("pointerup", () => {this.btnUp();});
        //this.buttonUp1=this.add.image(200,650,"buttonUp").setInteractive({ useHandCursor: true }).on("pointerup", () => {this.btnUp();});
        this.buttonDown=this.add.image(100,750,"buttonDown").setInteractive({ useHandCursor: true }).on("pointerup", () => {this.btnDown();});
        //this.buttonDown1=this.add.image(200,750,"buttonDown").setInteractive({ useHandCursor: true }).on("pointerup", () => {this.btnDown();});
        
        this.buttonLeft=this.add.image(425,700,"buttonLeft").setInteractive({ useHandCursor: true }).on("pointerup", () => {this.btnLeft();});
        //this.buttonLeft1=this.add.image(425,750,"buttonLeft").setInteractive({ useHandCursor: true }).on("pointerup", () => {this.btnLeft();});
        this.buttonRight=this.add.image(525,700,"buttonRight").setInteractive({ useHandCursor: true }).on("pointerup", () => {this.btnRight();});
        //this.buttonRight1=this.add.image(525,750,"buttonRight").setInteractive({ useHandCursor: true }).on("pointerup", () => {this.btnRight();});

        //this.physics.add.collider(this.fence);
        this.cursors = this.input.keyboard.createCursorKeys();

    }

    turtle1_touch_eat(){
        this.turtles[this.eatNext].disableBody(true, true);

        this.turtles[this.eatNext].setTint();
        this.turtles[this.eatNext].setSt("Y"); 
        this.turtles[this.eatNext].setDirection(this.turtles[this.eatNext-1].getDirection()); 
        this.turtles[this.eatNext].setLocateX(this.turtles[this.eatNext-1].getLocateX()); 
        this.turtles[this.eatNext].setLocateY(this.turtles[this.eatNext-1].getLocateY());
        if (this.turtles[this.eatNext].getSt() === "Y" || this.turtles[this.eatNext].getSt() === "X"){
            this.turtles[this.eatNext].enableBody(true, this.turtles[this.eatNext].getLocateX(), this.turtles[this.eatNext].getLocateY(), true, true);         
        } else{
            this.turtles[this.eatNext].disableBody(true, true);
        }
        this.turtles[this.eatNext].anims.play(this.turtles[this.eatNext].getDirection(), true);

        // 動態加入陣列
        this.turtles_now.splice(this.eatNext, 0, this.turtles[this.eatNext]);
        // 動態刪除陣列
        this.turtles_eat.splice(0, 1);

        this.eatNext+=1;
        if (this.speed > 1){
            this.speed-=1;
        }        
        this.score+=100;

        this.sound.play('pick');

        this.show_next();
    }

    game_over(){
        if (this.gameStart){
            this.gameStart = false;

            this.sound.play('lose');

            this.add.text(150, 250, "GameOver!", {
                fontSize: "64px",
                color: "#ff0000"
            });

            this.clickButton=this.add.text(200,350,'[ 再玩一次 ]',{fontSize:'30px',color:'white'}).setInteractive({useHandCursor:true}).on('pointerup',()=>{
                this.restart();
            });
        }
    }

    restart() {
        this.scene.start();
    }

    show_next(){
        this.valueX = 0;
        this.valueY = 0;
        for (var i=0; i<this.turtles.length; i++){
            if(i === this.eatNext){
                var rndOk = false;
                while (!rndOk){
                    rndOk = true;
                    this.valueX = Phaser.Math.Between(1, 18);
                    this.valueY = Phaser.Math.Between(1, 16);
                    for (var j=0; j<this.eatNext; j++){
                        if (this.valueX*this.block+15 === this.turtles[j].getLocateX() && this.valueY*this.block+45 === this.turtles[j].getLocateY()){
                            rndOk = false;
                        }
                    }
                    if (this.valueX === 0 || this.valueY === 0){
                        rndOk = false;
                    }
                }
                
                this.turtles[this.eatNext].setDirection("up"); 
                this.turtles[this.eatNext].setSt("X"); 
                this.turtles[this.eatNext].setLocateX(this.valueX*this.block+15); 
                this.turtles[this.eatNext].setLocateY(this.valueY*this.block+75);
                if (this.turtles[this.eatNext].getSt() === "Y" || this.turtles[this.eatNext].getSt() === "X"){
                    this.turtles[this.eatNext].enableBody(true, this.turtles[this.eatNext].getLocateX(), this.turtles[this.eatNext].getLocateY(), true, true);         
                } else{
                    this.turtles[this.eatNext].disableBody(true, true);
                }
                this.turtles[this.eatNext].setTint(0xff69b4);
            }
        }
    }

    btnUp(){
        if (this.gameStart){
            if (this.commandX != this.turtle1.getLocateX() || this.commandY != this.turtle1.getLocateY()){
                if (this.turtle1.getDirection() != "down") {
                    this.turtle1.setDirection("up");
                    this.turtle1.anims.play('up', true);
                    this.commandX = this.turtle1.getLocateX();
                    this.commandY = this.turtle1.getLocateY();
                }
            }
        }
    }

    btnDown(){
        if (this.gameStart){
            if (this.commandX != this.turtle1.getLocateX() || this.commandY != this.turtle1.getLocateY()){
                if (this.turtle1.getDirection() != "up") {
                    this.turtle1.setDirection("down");
                    this.turtle1.anims.play('down', true);
                    this.commandX = this.turtle1.getLocateX();
                    this.commandY = this.turtle1.getLocateY();
                }
            }
        }
    }

    btnLeft(){
        if (this.gameStart){
            if (this.commandX != this.turtle1.getLocateX() || this.commandY != this.turtle1.getLocateY()){
                if (this.turtle1.getDirection() != "right") {
                    this.turtle1.setDirection("left");
                    this.turtle1.anims.play('left', true);
                    this.commandX = this.turtle1.getLocateX();
                    this.commandY = this.turtle1.getLocateY();
                }
            }
        }
    }

    btnRight(){
        if (this.gameStart){
            if (this.commandX != this.turtle1.getLocateX() || this.commandY != this.turtle1.getLocateY()){
                if (this.turtle1.getDirection() != "left") {
                    this.turtle1.setDirection("right");
                    this.turtle1.anims.play('right', true);   
                    this.commandX = this.turtle1.getLocateX();
                    this.commandY = this.turtle1.getLocateY();
                }
            }
        }
    }
  
    update(){ 
        if (this.gamePreStart > 0){
            this.perStartText.x=250;
            this.perStartText.y=200;
            this.perStartText.setText(this.gamePreStart);
            if (this.count < this.speed*2){
                this.count++;
            } else {
                this.count = 0;
                this.gamePreStart -= 1;
            }

            if (this.gamePreStart === 0){
                this.perStartText.x=-1000;
                this.perStartText.y=-1000;

                this.turtle1.setSt("Y"); 
                if (this.turtle1.getSt() === "Y"){
                    this.turtle1.enableBody(true, this.turtle1.getLocateX(), this.turtle1.getLocateY(), true, true);         
                } else{
                    this.turtle1.disableBody(true, true);
                }
        
                this.turtle2.setSt("Y"); 
                if (this.turtle2.getSt() === "Y"){
                    this.turtle2.enableBody(true, this.turtle2.getLocateX(), this.turtle2.getLocateY(), true, true);         
                } else{
                    this.turtle2.disableBody(true, true);
                }
        
                this.turtle3.setDirection("up"); 
                this.turtle3.setSt("Y"); 
                if (this.turtle3.getSt() === "Y"){
                    this.turtle3.enableBody(true, this.turtle3.getLocateX(), this.turtle3.getLocateY(), true, true);         
                } else{
                    this.turtle3.disableBody(true, true);
                }

                this.show_next();

                this.count = 0;
                this.gameStart = true;
            }
        }

        if (this.gameStart){
            if (this.commandX != this.turtle1.getLocateX() || this.commandY != this.turtle1.getLocateY()){
                if(this.cursors.up.isDown){
                    if (this.turtle1.getDirection() != "down") {
                        this.turtle1.setDirection("up");
                        this.turtle1.anims.play('up', true);
                        this.commandX = this.turtle1.getLocateX();
                        this.commandY = this.turtle1.getLocateY();
                    }
                } else if(this.cursors.down.isDown){
                    if (this.turtle1.getDirection() != "up") {
                        this.turtle1.setDirection("down");
                        this.turtle1.anims.play('down', true);
                        this.commandX = this.turtle1.getLocateX();
                        this.commandY = this.turtle1.getLocateY();
                    }
                } else if(this.cursors.left.isDown){
                    if (this.turtle1.getDirection() != "right") {
                        this.turtle1.setDirection("left");
                        this.turtle1.anims.play('left', true);
                        this.commandX = this.turtle1.getLocateX();
                        this.commandY = this.turtle1.getLocateY();
                    }
                } else if(this.cursors.right.isDown){
                    if (this.turtle1.getDirection() != "left") {
                        this.turtle1.setDirection("right");
                        this.turtle1.anims.play('right', true);   
                        this.commandX = this.turtle1.getLocateX();
                        this.commandY = this.turtle1.getLocateY();
                    }
                }
            }       

            if (this.count < this.speed){
                this.count++;
            } else {
                this.count=0;

                var NextX = this.turtle1.getLocateX();
                var NextY = this.turtle1.getLocateY();
                if (this.turtle1.getDirection() === "up") {
                    NextY-=this.block;
                } else if(this.turtle1.getDirection() === "down"){
                    NextY+=this.block;
                } else if(this.turtle1.getDirection() === "left"){
                    NextX-=this.block;
                } else if(this.turtle1.getDirection() === "right"){
                    NextX+=this.block;
                }

                if (this.turtle1.getLocateX() === NextX && this.turtle1.getLocateY() === NextY){
                } else {
                    // 換方向
                    for (var i=this.turtles.length-1; i>0; i--){
                        if (this.turtles[i].getSt() === "Y"){
                            if (i > 0){
                                this.turtles[i].setLocateX(this.turtles[i-1].getLocateX());
                                this.turtles[i].setLocateY(this.turtles[i-1].getLocateY());

                                this.turtles[i].setDirection(this.turtles[i-1].getDirection());
                                this.turtles[i].anims.play(this.turtles[i].getDirection(), true);
                            }
                        }
                    }

                    this.turtle1.setLocateX(NextX);
                    this.turtle1.setLocateY(NextY);
                }
                for (var i=0; i<this.turtles.length; i++){
                    this.turtles[i].x=this.turtles[i].getLocateX();
                    this.turtles[i].y=this.turtles[i].getLocateY();
                }
            }    
        }
        

        var cam = this.cameras.main;
        var gameObjectCanvasX = this.turtle1.x - cam.scrollX * this.turtle1.scrollFactorX + cam.x;
        var gameObjectCanvasY = this.turtle1.y - cam.scrollY * this.turtle1.scrollFactorY + cam.y;
        this.scoreText.setText("分數:" + this.score);
        this.speedText.setText("速度:" + this.speed);
  }
}