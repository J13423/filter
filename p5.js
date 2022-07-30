let x, y = 0
function preload() {
    mustache = loadImage('https://i.postimg.cc/5NL72MYP/R.png')
}
function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture('VIDEO')
    video.size(300, 300)
    video.hide()
    
    posenet = ml5.poseNet(video, () => {
        console.log('Loaded')
    })

    posenet.on('pose', (result) => {
        if (result != 0) {
            x = result[0].pose.nose.x
            y = result[0].pose.nose.y
            console.log(result)
        }
    })
}
function draw() {
    image(video, 0, 0, 300, 300)
    image(mustache, x - 25, y, 50, 20)
}
function snap() {
    save('vid.png')
}
