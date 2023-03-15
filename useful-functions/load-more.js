// Add a button to show more content
function loadMore(button, target, load_qtt) {
    if (document.querySelectorAll(target).length > 0) {
        for (i=0; i < load_qtt ; i++) {
            document.querySelectorAll(target)[0].classList.remove('hidden');
        }
    }
    if (document.querySelectorAll(target).length == 0){
        document.querySelector(button).classList.add('hidden');
    }
}