window.onload= function(){
    var canvas=document.getElementById("canvas");
    width=canvas.width=window.innerWidth;
    height=canvas.height=window.innerHeight;
    var ctx=canvas.getContext("2d");
    
    var myball=new Ball(100,100,40);
    
    gameLoop();
    function gameLoop(){
        ctx.clearRect(0,0,width,height);
        myball.update();
        myball.draw(ctx);
        requestAnimationFrame(gameLoop);
    }
};