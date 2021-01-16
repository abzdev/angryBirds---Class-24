class Bird {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':0.3,
          'density':1.0,
          'isStatic':false
      }
  
      
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255,0,0);
      rect(0, 0, 40, 40);
      
      pop();
    }
  }
  