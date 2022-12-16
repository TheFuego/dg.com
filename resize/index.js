const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 800
canvas.height = 600

var size = 50
var maxSize = 280
var resizePromptPos = canvas.width/2 - 250/2 - 50 + size

//c.fillRect(0, 0, 1024, 574)
function object(s) {
	c.fillStyle = 'black'
	c.fillRect(canvas.width/2 - s/2, canvas.height/2 - s + s/4, s, s)
}

function bg() {
	c.fillStyle = 'aqua'
	c.fillRect(0, 0, canvas.width, canvas.height)
}

function resizePrompt() {
	c.fillStyle = 'gray'
	c.fillRect(canvas.width/2 - 250/2, canvas.height/2 + 150, 250, 15)
	
	c.fillStyle = 'black'
	c.fillRect(resizePromptPos, canvas.height/2 + 150-2, 20, 20)
	
	if(resizePromptPos < canvas.width/2 - 250/2 - 50 + size) {
		resizePromptPos = canvas.width/2 - 250/2 - 50 + size
	}

	if(resizePromptPos > canvas.width/2 - 250/2 - 50 + size) {
		resizePromptPos = canvas.width/2 - 250/2 - 50 + size
	}


	if(size > maxSize) {
		size = maxSize
	}

	if(size < 50) {
		size = 50
	}
}

window.addEventListener("keydown", event => {
	switch (event.key){
		case 'd':
			size += 3
		break
		case 'a':
			size -= 3
		break
	}
})

window.addEventListener("click", event => {
	var x = event.clientX-resizePromptPos;
	
	size += x
})

//button()

function main() {
	requestAnimationFrame(main)
	c.clearRect(0, 0, canvas.width, canvas.height)
	
	bg()
	object(size)
	resizePrompt()


	console.log(size)
}

main()