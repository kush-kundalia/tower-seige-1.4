class Box{
    constructor(x, y , w , h ){
        this.body = Matter.Bodies.rectangle(x, y, w, h);
        Matter.World.add(world , this.body);
        this.w = w;
        this.h = h;
        
        
    }

    spawn(){
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x , pos.y);
        rotate(angle);
        var randomColour = color(random(0,255),random(0,255),random(0,255));
        fill(randomColour);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}