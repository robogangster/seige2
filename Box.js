class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
   this.image = loadImage("sprites/wood1.png");
  }
  display(){
    if (this.body.speed<5){
      
      super.display();
    }else{
      push();
      this.visibility-=5
     tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
      World.remove(world,this.body);

    }
  }

};
