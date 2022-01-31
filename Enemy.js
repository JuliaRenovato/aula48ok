class Enemy{
    constructor(x, y) {
        var options = {
            'restitution':0.1,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = y;
        this.image = loadImage("bird.png");
        World.add(world, this.body);
        Matter.Body.setVelocity(this.body, {x:4,y:0});
      }
      display(){
        //var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      setVelocity(){
        var limitLeft = this.x-90;
        var limitRight = this.x+90;
        console.log(this.body.position.x);
        console.log(limitRight);
        if(this.body.position.x < limitLeft){
          Matter.Body.setVelocity(this.body, {x:4,y:0});
          this.image = loadImage("bird.png");
        }
        if(this.body.position.x > limitRight){
          Matter.Body.setVelocity(this.body, {x:-4,y:0});
          this.image = loadImage("birdEsquerda.png");
        }
      }
    }