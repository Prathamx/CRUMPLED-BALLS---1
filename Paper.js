class Paper {
    constructor(x,y,width) {
        var options = {
            restitution:0.8,
            friction:0.3,
            density:1.2,
            isStatic:false
        }
        this.body = Bodies.circle(x, y, width, options);
        this.radius = width;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        
        ellipseMode(CENTER);
        stroke("green");
        fill(255,0,0);
        ellipse(pos.x, pos.y,this.radius);
    }
}