document.addEventListener("DOMContentLoaded", function () {
    showFrame(1);
});

function showFrame(frameNumber) {
    const frames = document.querySelectorAll(".sponsor-frame");
    frames.forEach(frame => frame.classList.remove("active"));

    document.getElementById(`frame-${frameNumber}`).classList.add("active");
}
