
// Slowly reduce opacity of an element from 1 to 0
function fadeOut(element, opacity) {
    if (opacity<=1 && opacity > 0) {
        opacity -= .1;
        setTimeout(function(){fadeOut(element, opacity)},50);
    }
    element.style.opacity = opacity;
}

// Slide an element from bottom to its actual position
function slideUp(element, time) {
    element.animate([
        { transform: 'translateY(100vh) scale(2)' },
        { transform: 'translateY(0px) scale(1)' },
    ], {
        duration: time,
        iterations: 1
    });
}
