var narizX = 0

var narizy = 0

var punhodireitoX = 0

var punhoesquerdoX = 0

var diferenca = 0

function draw(){
    background("SlateBlue")
    square(narizX,narizy,diferenca)
    stroke("red")
}

function preload(){

}

function setup(){
video = createCapture(VIDEO)
video.size(675,450)
video.position(200 ,260)
 canvas = createCanvas(550,450)
 canvas.position(1020,260)
 poseNet = ml5.poseNet(video,modelLoaded)
 poseNet.on("pose",gotPoses)
}

function modelLoaded(){
    console.log("modelLoaded")
}

function gotPoses(){

    if(results.length>0){
        narizX = results[0].pose.nose.x
        narizY = results[0].pose.nose.y
        punhodireitoX = results[0].pose.rightWrist.x
        punhodireitoY = results[0].pose.leftWrist.y
        diferenca = punhoesquerdoX - punhodireitoX
    }
}
