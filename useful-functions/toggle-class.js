function toggleClass(element, tClass) {
    if (document.querySelector(element).classList.contains(tClass)) {
        document.querySelector(element).classList.remove(tClass)
    }
    else{
        document.querySelector(element).classList.add(tClass);
    }
}