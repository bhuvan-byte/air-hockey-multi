window.onload= function(){
    var canvas=document.getElementById("canvas");
    width=canvas.width=400;
    height=canvas.height=600;
    var ctx=canvas.getContext("2d");
    
    var myball=new Ball(100,100,50);
    var striker=new Ball(300,100,70);
    gameLoop();
    function gameLoop(){
        ctx.clearRect(0,0,width,height);
        myball.collide(striker);
        myball.update();
        striker.update();
        myball.draw(ctx);
        striker.draw(ctx);
        requestAnimationFrame(gameLoop);
    }
};