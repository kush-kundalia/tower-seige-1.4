class Bird{
    constructor(x, y ,r){
    this.body = Matter.Bodies.circle(x,y,r);
    Matter.World.add(world , this.body);
    // this.r = r;
    // restitution = 2; 
}

display(){
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x , pos.y);
    rotate(angle);
    noFill();
    strokeWeight(4);
    circle(0, 0, this.r);
    pop();
}
}