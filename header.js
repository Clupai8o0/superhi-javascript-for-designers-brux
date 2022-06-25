const headerTag = document.querySelector("header");

const toggleHeader = () => {
	const pixels = window.scrollY;

	if (pixels > 60) {
		headerTag.classList.add("scrolled");
	} else {
		headerTag.classList.remove("scrolled");
	}
};

const fadeBox = () => {
	const pixels = window.scrollY;
	const alpha = Math.min(pixels / 1000, 0.5); // goes for the min value
	headerTag.style.boxShadow = `0 0 10px rgba(0,0,0,${alpha})`;
};

toggleHeader();
fadeBox();

document.addEventListener("scroll", () => {
	toggleHeader();
	fadeBox();
});
