x = 0
y = 0 

function preload(){
    clown_nose = loadimage('download.jpg')
}



function setup() {
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Pose net is intialized');
}

function gotPoses(result) {
    if(result.length > 0)
    {
        console.log(result)
        console.log("nose x =", + result[0].pose.nose.x)
        console.log("nose y =", + result[0].pose.nose.y)
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshort(){
    save('myFilterImage.png')
}



