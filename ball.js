function Ball(x,y,radius){
    this.x=x;
    this.y=y;
    this.vx=-1;
    this.vy=2;
    this.radius=radius;
    this.draw = function(ctx){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.stroke();
    }
    this.update= function(){
        if(this.x -this.radius< 0 || this.x+this.radius>width){
            this.vx=-this.vx;
        }
        if(this.y -this.radius< 0 || this.y+this.radius>height){
            this.vy=-this.vy;
        }
        this.x+=this.vx;
        this.y+=this.vy;
    }
}