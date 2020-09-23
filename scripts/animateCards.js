
// code for animating the cards

const boxes = document.querySelectorAll('.content');
      
let observer = new IntersectionObserver((enteries) => {
  enteries.forEach(entry => {
    if (screen && screen.width < 1030) {
      if(entry.intersectionRatio > 0 ) {
        entry.target.style.transform = 'translate(0)';  
      }
      else {
        entry.target.style.transform = 'translate(-100%)';
      }
    } 
  })
})


boxes.forEach(box => {
  observer.observe(box);
})