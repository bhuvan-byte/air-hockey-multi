class Ball{
    constructor(x,y,radius){
        this.x=x;
        this.y=y;
        this.vx=-Math.random()*4;
        this.vy=Math.random()*5;
        this.radius=radius;
        this.friction=1;
        this.mass=1;
        this.color='#000';
    }
    draw (ctx){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.strokeStyle=(this.color);
        ctx.stroke();
    }
    collide (ball2){
        let dx=ball2.x-this.x,
			dy=ball2.y-this.y,
			radSum=ball2.radius+this.radius;
		if(dx*dx + dy*dy< radSum*radSum){
			let dist=Math.sqrt(dx*dx + dy*dy),
				dif=radSum-dist;
			dx/=dist;
			dy/=dist;
			let dot=dx*this.vx+dy*this.vy,
				dot2=dx*ball2.vx+dy*ball2.vy,
				impulsex=(dot-dot2)*dx,
				impulsey=(dot-dot2)*dy;
			//console.log(dot,dot2,impulsex,impulsey);
			this.vx-=impulsex;
			this.vy-=impulsey;
			ball2.vx+=impulsex;
			ball2.vy+=impulsey;
			this.x-=dif*dx;
			this.y-=dif*dy;
			ball2.x+=dif*dx;
			ball2.y+=dif*dy;
			//this.dx+=dif*dx/2;
			//this.dy+=dif*dy/2;
			//if(this.radius>10)this.radius-=5;
        }
    }
    update(){
        if(this.x -this.radius< 0){
            this.vx=-this.vx;
        }
        if(this.x+this.radius>width){
            this.vx=-this.vx;
        }
        if(this.y -this.radius< 0 || this.y+this.radius>height){
            this.vy=-this.vy;
        }
        this.x+=this.vx;
        this.y+=this.vy;
        this.vx*=this.friction;
        this.vy*=this.friction;
    }
}