class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0,
          'friction':1,
          'density':1.0
      }
  
      
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill('green');
      rect(0, 0, 40, 40);
      pop();
    }
  }