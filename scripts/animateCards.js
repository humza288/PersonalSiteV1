
// code for animating the cards


const boxes = document.querySelectorAll('.content');
      
let observer = new IntersectionObserver((enteries) => {
  enteries.forEach(entry => {
      if(entry.intersectionRatio > 0 ) {
        entry.target.style.transform = 'translate(0)';
        console.log("hi")
  
      }
      else {
        entry.target.style.transform = 'translate(-100%)';
        console.log("hi")
      }
  })
})


boxes.forEach(box => {
  observer.observe(box);
})