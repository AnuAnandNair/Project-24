class bucket {

	constructor(x,y){

		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallWidth=20;
		this.angle=0;	
        
        var options = {
            isStatic:true
        }

        this.bottomobj=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallWidth, options);
        
		this.leftWall=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallWidth, this.dustbinHeight, options);
		Matter.Body.setAngle(this.leftWall, this.angle);
		
		this.rightWall=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallWidth, this.dustbinHeight, options);
        Matter.Body.setAngle(this.rightWall, (-1)*this.angle);
        
		World.add(world, this.bottomobj);
		World.add(world, this.leftWall);
		World.add(world, this.rightWall);

	}
	display()
	{
			var bottompos=this.bottomobj.position;
			var leftpos=this.leftWall.position;
			var rightpos=this.rightWall.position;			

			push();
			translate(leftpos.x, leftpos.y);
			rectMode(CENTER);
			
			stroke("white");
			fill("blue");
			
			rotate(this.angle);
			rect(0,0,this.wallWidth, this.dustbinHeight);
			pop();

			push();
			translate(rightpos.x, rightpos.y);
			rectMode(CENTER);
			stroke(255);
			angleMode(RADIANS);
			fill("blue");
			rotate(-1*this.angle);
			rect(0,0,this.wallWidth, this.dustbinHeight);
			pop();

			push();
			translate(bottompos.x, bottompos.y);
			rectMode(CENTER);
			stroke(255);
			angleMode(RADIANS);
			fill("blue");
			rect(0,0,this.dustbinWidth, this.wallWidth);
			pop();
			
	}

}