class Mangoes {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Plucking_mangoes/mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     image(this.image, pos.x, pos.y, this.width, this.height);
     
    }
  };
