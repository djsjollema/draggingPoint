window.addEventListener("load",function(){ 
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    P = new Point(400,200,50,"255,255,255,.3");
    console.log(P.x,P.y);
    P.draw(context)
})
