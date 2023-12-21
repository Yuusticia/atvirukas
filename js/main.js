const fireworks = document.querySelector('.fireworks');
let rotation = 0;
function animateFireworks() {
 rotation += 0;
 fireworks.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
 requestAnimationFrame(animateFireworks);
}
animateFireworks();
