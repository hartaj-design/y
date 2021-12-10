function setup(){
    canvas=createCanvas(300,300);
    canvas.position(200,200);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
   image(video,0,0,300,300);
   fill(blue);
   stroke(blue);
 rect(20,100,200,50);
}