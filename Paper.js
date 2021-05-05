class Paper{
    constructor(x,y,r){
        var options = {
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.image = loadImage("paper.png");
        this.r = r;
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r*2.8,this.r*2.8);
    }
}   