status=""
input=""
function setup(){
    canvas=createCanvas(600,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()

}
function draw(){
    image(video, 0, 0, 600, 450)
    
}
function start(){
    objectDetector=ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects"
    input=document.getElementById("obj").value 
}

function modelloaded(){
    console.log("modelloaded");
    status=true
}