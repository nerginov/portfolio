
  const aboutSection = document.querySelector('.about-section')
  const scrollBtn = document.querySelector('.scroll-btn')
  const projects = document.querySelectorAll('.project')
  const projectsSection = document.querySelector('.projects-section')

  //typing text using Typed lib
  const typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
      typeSpeed: 70,
    });

    
  scrollBtn.addEventListener('click',()=>{
    aboutSection.scrollIntoView({behavior: 'smooth'})
  })

  
  //creating observer with default options(omitted)
let observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting && entry.target.classList.contains('project--3')){
     entry.target.classList.add('slideInRight')
    }
    if(entry.isIntersecting && entry.target.classList.contains('project--2')){
     entry.target.classList.add('slideInLeft')
    }
    if(entry.isIntersecting && entry.target.classList.contains('project--1')){
     entry.target.classList.add('slideInBottom')
    }
  })
})

//destructoring nodelist into array
const projectsArray= [...projects]
//looping trough the array observing each element
projectsArray.forEach(e => {
 observer.observe(e)
});

//event propagating github and live site links
projectsSection.addEventListener('click', (e)=>{
 
  switch(true){
  case e.target.classList.contains('github-icon--1'):
    window.open('https://github.com/nerginov/Rock-Paper-Scissors-Lizard-Spock', '_blank')
  break;
  case e.target.classList.contains('arrowSquare-icon--1'):
    window.open('https://nerginov.github.io/Rock-Paper-Scissors-Lizard-Spock/', '_blank')
    break;

  case e.target.classList.contains('github-icon--2'):
    window.open('https://github.com/nerginov/Calc-app', '_blank')
  break;
  case e.target.classList.contains('arrowSquare-icon--2'):
    window.open('https://nerginov.github.io/Calc-app/', '_blank')
  break;

  case e.target.classList.contains('github-icon--3'):
    window.open('https://github.com/nerginov/url-shortener', '_blank')
  break;
  case e.target.classList.contains('arrowSquare-icon--3'):
    window.open('https://nerginov.github.io/url-shortener/', '_blank')
    break;
  }
  })



