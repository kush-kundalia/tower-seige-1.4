class Ground{
    constructor(x, y , w , h ){
        this.body = Matter.Bodies.rectangle(x, y, w, h);
        Matter.World.add(world , this.body);
        this.w = w;
        this.h = h;
        this.body.isStatic = true;
        
    }

    spawn(){
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x , pos.y);
        rotate(angle);
        fill(0,255,255);
        // noFill();
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}