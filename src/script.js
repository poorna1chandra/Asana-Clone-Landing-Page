// HEADER

const header = document.getElementsByClassName('headCheck')[0];
        const check = document.getElementsByClassName('check')[0];

        window.addEventListener('scroll', () => {
            const rect = check.getBoundingClientRect();
            const isPastCheckDiv = rect.bottom <= 0; 

            if (isPastCheckDiv) {
                console.log('hello')
                header.classList.add("drop-shadow-md")
                // header.classList.remove('drop-shadow-md');
            } else {
                console.log('gdh')
                header.classList.remove('drop-shadow-md')
                // header.classList.add('drop-shadow-md');
            }
        });



// WORKING OF ASANA

document.addEventListener("DOMContentLoaded", () => {
    
    const buttons = document.querySelectorAll('.topics button');
    const infoSections = document.querySelectorAll('.allinfo > div');

    
    const resetButtonStyles = () => {
        buttons.forEach(btn => {
            btn.style.color = '';  
            btn.style.backgroundColor = '';  
        });
    };

    
    const setActiveButtonAndSection = (index) => {
        
        resetButtonStyles();
        
        buttons[index].style.color = '#690031';
        buttons[index].style.backgroundColor = '#ffebed';
        
        infoSections.forEach(section => section.classList.add('hidden'));
        
        infoSections[index].classList.remove('hidden');
        infoSections[index].classList.add('flex');
    };

    // SHOW FIRST DEFALT
    setActiveButtonAndSection(0);

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            setActiveButtonAndSection(index);
        });
    });
});






// GOALS AND AI

const goalDiv = document.getElementById('goal');
const aiDiv = document.getElementById('ai');
const goalImg = document.getElementById('goalimg');
const aiImg = document.getElementById('aiimg');
const goalTex = document.getElementById('goaltex');
const aiTex = document.getElementById('aitex');

// Function to check if the screen is >= lg
function setupHoverListeners() {
    // GOAL MOUSEOVER
    goalDiv.addEventListener('mouseover', function() {
        if (window.matchMedia("(min-width: 1024px)").matches) {
            goalDiv.style.width = '65%';
            aiDiv.style.width = '35%';

            goalTex.style.width = '50%';
            aiTex.style.width = '100%'; 

            goalImg.classList.remove('lg:hidden');
            aiImg.classList.add('lg:hidden');
        }
    });

    // AI MOUSEOVER
    aiDiv.addEventListener('mouseover', function() {
        if (window.matchMedia("(min-width: 1024px)").matches) {
            aiDiv.style.width = '65%';
            goalDiv.style.width = '35%';

            aiTex.style.width = '50%'; 
            goalTex.style.width = '100%'; 

            aiImg.classList.remove('lg:hidden');
            goalImg.classList.add('lg:hidden');
        }
    });
}

// Call the setup function
setupHoverListeners();

// Optional: Add a listener for window resize to set up listeners again if needed
window.addEventListener('resize', function() {
    // Clear existing listeners and re-setup if necessary
    setupHoverListeners();
});









// page numberrs


const containers = document.querySelectorAll('.cont1, .cont2, .cont3, .cont4');
const pageno = document.querySelectorAll('.page1, .page2, .page3, .page4');
let currentIndex = 0;


const arrowLeft = document.querySelector('.arrowleft');
const arrowRight = document.querySelector('.arrowright');
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showContainer(index) {
  // CONTAINER NUMBER
  containers.forEach((container, i) => {
    if (i === index) {
      container.classList.remove('hidden');
    } else {
      container.classList.add('hidden');
    }
  });

  // PAGE NUMBER
  pageno.forEach((page,i) =>{
    if(i === index) {
        page.classList.remove('bg-[#f2f2f2]');
        page.classList.add('bg-[#ff594a]');
    } else {
        page.classList.remove('bg-[#ff594a]');
        page.classList.add('bg-[#f2f2f2]');
    }
  })
  // ARROW BUTTONS
  if (currentIndex === 0) {
    
    arrowLeft.style.backgroundColor = '#fafafa';
    prev.style.filter = "invert(20%)"
    
  } else {
    arrowLeft.style.backgroundColor = 'black';
    prev.style.filter = "invert(0%)";
  }

  if (currentIndex === containers.length - 1) {
    
    arrowRight.style.backgroundColor = '#fafafa';
    next.style.filter = "invert(20%)"
    
  } else {
    arrowRight.style.backgroundColor = 'black';
  }
}

document.querySelector('.arrowleft').addEventListener('click', () => {
  // STOP AT START
  if (currentIndex > 0) {
    currentIndex--;
    showContainer(currentIndex);
  }
});

document.querySelector('.arrowright').addEventListener('click', () => {
  // STOP AT END
  if (currentIndex < containers.length - 1) {
    currentIndex++;
    showContainer(currentIndex);
  }
});

// SHOW FIRST AS DEFAULT
showContainer(currentIndex);


  

// SLIDING ANIMATION
document.addEventListener("DOMContentLoaded", function() {
  const topContainer = document.querySelector('.top .flex');
  const bottomContainer = document.querySelector('.bottom .flex');

  
  const topLogos = topContainer.innerHTML;
  const bottomLogos = bottomContainer.innerHTML;

  // Prepend 
  topContainer.innerHTML = topLogos + topLogos; 

  // Append 
  bottomContainer.innerHTML += bottomLogos; 

  // Scroll speed
  const speed = 0.5; 
  // let topScrollAmount = -topContainer.scrollWidth / 2;  
  let topScrollAmount = 0;
  let bottomScrollAmount = -bottomContainer.scrollWidth / 2;
  // let bottomScrollAmount = 0;  

  function scroll() {
    
    topScrollAmount += speed;
   
    bottomScrollAmount += speed;

    topContainer.style.transform = `translateX(-${topScrollAmount}px)`; 
    bottomContainer.style.transform = `translateX(${bottomScrollAmount}px)`;

    
    // if (topScrollAmount >= 0) {
    //   topScrollAmount = -topContainer.scrollWidth / 2;
    // }

    if (topScrollAmount >= topContainer.scrollWidth / 2) {
      topScrollAmount = 0;
    }

    if (bottomScrollAmount >= 0) {
      bottomScrollAmount = -bottomContainer.scrollWidth / 2;
    }
    
    // if (bottomScrollAmount >= bottomContainer.scrollWidth / 2) {
    //   bottomScrollAmount = 0;
    // }

    requestAnimationFrame(scroll);
  }

  scroll();
});





