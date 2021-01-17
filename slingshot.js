class SlingShot{
    constructor(x,y,body){
        const options={
            pointA: {
                x: x,
                y: y,
            },
            bodyB: body,
            stiffness : 0.1,
            lenght :100
        }
        this.sling = Constraint.create(options);
        World.add(world , this.sling);
    }
    release (){
        this.sling.bodyB = null;
    }
    spawn(){
        if(this.sling.bodyB){
        stroke(255);
        const posA = this.sling.pointA;
        const posB = this.sling.bodyB.position;
        line(posA.x , posA.y , posB.x , posB.y);
    }}

}