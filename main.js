NoseX = 0
NoseY = 0

function preload() {
    nose = loadImage('https://express.adobe.com/post/JUHOX8uDC3upH/')
}

function draw() {g
    image(cam, 0, 0, 300, 300)

    image(nose, NoseX, NoseY, 200, 180)
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    cam = createCapture(VIDEO)
    cam.size(300, 300)
    cam.hide()
    posenet = ml5.poseNet(cam, modelLoaded)
    posenet.on('pose', gotposes)
}

function modelLoaded() {
    console.log("modelLoaded")
}

function gotposes(result) {
    console.log(result)
    console.log("nose x =" + result[0].pose.nose.x)
    console.log("nose x =" + result[0].pose.nose.y)
    NoseX = result[0].pose.nose.x - 100
    NoseY = result[0].pose.nose.y - 90
}

function snapshot() {
    save('pic.png')
}