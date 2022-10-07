function hideElement(element){
    if ((document.getElementsByClassName(element))[0].innerText == ''){
      let targetElement = (document.getElementsByClassName(element)[0]);
      targetElement.style.setProperty("display", "none");
    }
  }