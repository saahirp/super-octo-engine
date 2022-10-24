song1 = "music.mp3";
song2 = "music2.mp3";
rightwristx = 0;
rightwristy = 0;
leftwristx = 0;
leftwristy = 0;

function setup(){
    canvas = createCanvas(505, 505);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function preload(){
    loadSound("music.mp3");
    loadSound("music2.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);
}
function modelLoaded(){
    console.log("Model Loaded!");
}