// class Paper extends Baseclass
// {
//     constructor(x,y,width,height){
//         super(x,y,width,height)
//         this.image=loadImage("paper.png")
//     }
//     // display(){
//     //     super.display();
//     // }
// }
//class Paper{
//     constructor(x,y,width,height){
        
//         this.w=w;;
//         this.h=h;
//         var options ={
//             'restitution':0.3, 
//             'friction':0,
//             'density':1.2
//         }
//         this.body=Bodies.circle(x,y,width,height,options)
//         this.image=loadImage("paper.png")
//         World.add(world,this.body)
//         this.w=width;;
//         this.h=height;
//     }
//     display(){
//         var pos =this.body.position;
//         var angle=this.body.angle;
//         push()
//         translate(pos.x,pos.y);
//         rotate(angle);
//         imageMode(CENTRE);
//         image(this.image,0,0,this.w,this.h);
//         pop()

//     }
// }

class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}