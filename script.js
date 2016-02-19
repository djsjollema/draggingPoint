window.addEventListener("load",function(){ 
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    P = new Point(400,200,10,"255,255,255,.3");
    console.log(P.x,P.y);
    P.draw(context);
    
    function animate(){
        window.requestAnimationFrame(animate);
        context.clearRect(0,0,800,450);
        P.update();
        P.draw(context);
    }
    
    animate();
})
