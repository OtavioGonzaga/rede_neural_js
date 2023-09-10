function setup() {
	createCanvas(1000, 400)

	new RedeNeural(1, 3, 1).FeedForward([1, 2, 3])
}

function draw() {
	background(20, 20, 20)
}