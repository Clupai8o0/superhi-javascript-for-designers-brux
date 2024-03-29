const irisLeft = document.querySelector("div.iris-left");
const irisRight = document.querySelector("div.iris-right");

let interval = null;

const startInterval = () => {
  clearInterval(interval);
  interval = setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    moveEye(irisLeft, x, y);
    moveEye(irisRight, x, y);
  }, 3000)
}

const moveEye = (tag, mouseX, mouseY) => {
	const eyeMidX = tag.getBoundingClientRect().left;
	const eyeMidY = tag.getBoundingClientRect().top;

	const diffX = mouseX - eyeMidX;
	const diffY = mouseY - eyeMidY - window.scrollY;

	const diff = Math.sqrt(diffX ** 2 + diffY ** 2);

  const radius = Math.min(3, diff);

	const angle = Math.atan2(diffY, diffX);

	const cappedX = radius * Math.cos(angle);
	const cappedY = radius * Math.sin(angle);

	const eyeTag = tag.querySelector("div");
	eyeTag.style.left = cappedX + "px";
	eyeTag.style.top = cappedY + "px";
};

startInterval();

document.addEventListener("mousemove", (event) => {
  startInterval()
	moveEye(irisLeft, event.pageX, event.pageY);
	moveEye(irisRight, event.pageX, event.pageY);
});
