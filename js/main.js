(()=> {

//VARIABLES

let currentIndex = 0;

const player = new Plyr('video'),
      menuItems = document.querySelectorAll('.mobile-menu-item'),
      studentPortfolioCon = document.querySelector('#student-grid'),
      devPortfolioCon = document.querySelector('#developer-grid'),
      testimonialWrapper = document.querySelector('#testimonial-container'),
      mobileMenu = document.querySelector('#mobile-menu'),
      hamburgerMenu = document.querySelector('#hamburger-menu');


//Students
const studentPortfolios = [
    { studentName: "Diego Rodriguez-Ramos", portfolioLink: "d.rodriguez-ramos.com" },
    { studentName: "Kayla Cooper", portfolioLink: "k.cooper.com" },
    { studentName: "Ramona Lozon", portfolioLink: "r.lozon.com" },
    { studentName: "Qingdong Chen", portfolioLink: "q.chen.com" },
    { studentName: "Taylor Khan", portfolioLink: "t.khan.com" },
    { studentName: "Cassidy Pelacek-Boutilier", portfolioLink: "c.pelacek-boutilier.com" },
    { studentName: "Ezra Carriere", portfolioLink: "e.carriere.com" },
    { studentName: "Shauraya Salwan", portfolioLink: "s.salwan.com" },
    { studentName: "Rebin Reji Vazhavilayil", portfolioLink: "r.vazhavilayil.com" },
    { studentName: "Divij Saddul", portfolioLink: "d.saddul.com" },
    { studentName: "Kyuri Park", portfolioLink: "k.park.com" },
    { studentName: "Nikolai Meijer", portfolioLink: "n.meijer.com" },
    { studentName: "Xaviere Hanbury", portfolioLink: "x.hanbury.com" },
    { studentName: "Amari Buck", portfolioLink: "a.buck.com" },
    { studentName: "Thaseekaran Sivaskaran", portfolioLink: "t.sivaskaran.com" },
    { studentName: "Meet Amrutbhai Parmar", portfolioLink: "m.parmar.com" },
    { studentName: "Justin Rian Reyes", portfolioLink: "j.reyes.com" },
    { studentName: "Alisher Yantizhanov", portfolioLink: "a.yantizhanov.com" },
    { studentName: "Parvesh Thakur", portfolioLink: "p.thakur.com" },
    { studentName: "Meghan Damen", portfolioLink: "m.damen.com" },
    { studentName: "Saif Amjad Omar Abu-Sa'ad", portfolioLink: "s.abu-sa-ad.com" },
    { studentName: "Bozhi Zhang", portfolioLink: "b.zhang.com" },
    { studentName: "Qiao-Yi Chu", portfolioLink: "q.chu.com" },
    { studentName: "Sashoye Maxwell", portfolioLink: "s.maxwell.com" },
    { studentName: "Dina Bondarchuk", portfolioLink: "d.bondarchuk.com" },
    { studentName: "Wisdom Utenwojo Okutepa", portfolioLink: "w.okutepa.com" },
    { studentName: "Ezekiel John Celis", portfolioLink: "e.celis.com" },
    { studentName: "Katrina Macadams", portfolioLink: "k.macadams.com" },
    { studentName: "Ali El Maniary", portfolioLink: "a.maniary.com" },
    { studentName: "Lok Ting Tina Yam", portfolioLink: "l.yam.com" },
    { studentName: "Thi Thanh Thuong Nguyen", portfolioLink: "t.nguyen.com" },
    { studentName: "Jenifer Quelali Evangelista", portfolioLink: "j.evangelista.com" },
    { studentName: "Rodrigo Nobre Do Nascimento", portfolioLink: "r.nascimento.com" },
    { studentName: "Milana Gabbassova", portfolioLink: "m.gabbassova.com" },
    { studentName: "Izel Esteban Cardenas Ramos", portfolioLink: "i.ramos.com" },
    { studentName: "Loi Pan Sit", portfolioLink: "l.sit.com" },
    { studentName: "Napas Polchai", portfolioLink: "n.polchai.com" },
    { studentName: "Akamjot Singh", portfolioLink: "a.singh.com" },
    { studentName: "Emmanuel Opadele", portfolioLink: "e.opadele.com" },
    { studentName: "Shon Sojan", portfolioLink: "s.sojan.com" },
    { studentName: "Ishan Mehra", portfolioLink: "i.mehra.com" },
    { studentName: "Shiyon Biju Varghese", portfolioLink: "s.varghese.com" },
    { studentName: "Jashan Kumar", portfolioLink: "j.kumar.com" },
    { studentName: "Meetinder Singh Dhaliwal", portfolioLink: "m.dhaliwal.com" },
    { studentName: "Harnoorpreet Kaur", portfolioLink: "h.kaur.com" },
    { studentName: "Sydney Bandarra", portfolioLink: "s.bandarra.com" },
    { studentName: "Osarieme Ogbeide", portfolioLink: "o.ogbeide.com" },
    { studentName: "Tanya Mae Huertas", portfolioLink: "t.huertas.com" },
    { studentName: "Carlos Andres Cano Menendez", portfolioLink: "c.menendez.com" },
    { studentName: "Kamana Bishokarma", portfolioLink: "k.bishokarma.com" },
    { studentName: "King Yin Sham", portfolioLink: "k.sham.com" },
    { studentName: "Tapshveer Benipal", portfolioLink: "t.benipal.com" },
    { studentName: "Dixie Marie Laput", portfolioLink: "d.laput.com" },
    { studentName: "Faizan Khan", portfolioLink: "f.khan.com" },
    { studentName: "Keith Lie", portfolioLink: "k.lie.com" },
    { studentName: "Henrique Gamborgi Menezes", portfolioLink: "h.menezes.com" },
    { studentName: "Natchanon Mahaittidon", portfolioLink: "n.mahaittidon.com" },
    { studentName: "Wing Lam Stephanie Chan", portfolioLink: "w.chan.com" },
    { studentName: "Yi Ting Lai", portfolioLink: "y.lai.com" },
    { studentName: "Sheldon Gohetia", portfolioLink: "s.gohetia.com" },
    { studentName: "Joyal Gregory", portfolioLink: "j.gregory.com" },
    { studentName: "Sukhbhag Singh Sidhu", portfolioLink: "s.sidhu.com" },
    { studentName: "Het Shah", portfolioLink: "h.shah.com" },
    { studentName: "Lav Pareshkumar Patel", portfolioLink: "l.patel.com" },
    { studentName: "Simon Dasilva", portfolioLink: "s.dasilva.com" },
    { studentName: "Wimarsha Heshan Jayasinghe Mudalige", portfolioLink: "w.mudalige.com" },
    { studentName: "Gia Khang Ho", portfolioLink: "g.ho.com" },
    { studentName: "Kristina Bendzsel", portfolioLink: "k.bendzsel.com" }
];
    
//Developers
const devPortfolios = [
    { devName: "Bryle Flores", devLink: "bfdesigns.com" },
    { devName: "Music Jun.", devLink: "mujun.com" },
    { devName: "Isaac Bilyea", devLink: "isaacbilyea.com" },
    { devName: "Bernardo Mac.", devLink: "bermac.com" }
];

const testimonialCards = [
    {
        name: "David Patterson",
        job: "Marketing Lead, Cineplex Studios",
        image: "images/david-patterson.png",
        text: "It’s been a great experience working with these talented students to bring our vision to life. From planning to final development, their skills in multimedia truly impressed us. We’re excited to see all of them succeed!"
    },
    {
        name: "Samantha Taylor",
        job: "Northern Commerce, Head of Development",
        image: "images/samantha-taylor.png",
        text: "Seeing the outputs produced by every student was very impressive, mastering their skills in web development, brand designs, and innovative artistry. I am confident that this opens multiple doors of opportunities for them."
    },
    {
        name: "Christopher Martin",
        job: "Tech Alliance, Brand Supervisor",
        image: "images/christopher-martin.png",
        text: "Getting to watch the teams present their final client project is amazing to witness with their professionalism and strengths in navigating through their content. Kudos to all students and their professors. Great work!"
    }
];

//FUNCTIONS

//This function formats the name to be first name and last initial
function formatName(fullName) {

    //This splits the name into an array where each word is an element
    let splitName = fullName.split(' ');

    let firstName = splitName[0];
    let lastName = splitName[splitName.length - 1];
    let lastInitial = lastName[0];
    return `${firstName} ${lastInitial}.`;

}

studentPortfolios.forEach(portfolio => {

    let studentCon = document.createElement('div');
    let studentLink = document.createElement('a');

    studentLink.textContent = formatName(portfolio.studentName);
    studentLink.href = `https://${portfolio.portfolioLink}`;

    studentLink.target = "_blank";

    studentCon.appendChild(studentLink);

    studentPortfolioCon.appendChild(studentCon);
});

devPortfolios.forEach(dev => {

    let devCon = document.createElement('div');
    let devName = document.createElement('p');
    let devLink = document.createElement('a');

    devName.textContent = dev.devName;
    
    devLink.textContent = dev.devLink;
    devLink.href = `https://${dev.devLink}`;
    devLink.target = "_blank";

    devCon.appendChild(devName);
    devCon.appendChild(devLink);

    devPortfolioCon.appendChild(devCon);
});

function toggleMenu() {
    hamburgerMenu.classList.toggle('activate');
    mobileMenu.classList.toggle('show');
};

testimonialCards.forEach((testimonial, i) => {

    //Creates a div for each testimonial card
    let testimonialCon = document.createElement('div');
    
    //Creates elements for each card
    let image = document.createElement('img');
    let name = document.createElement('p');
    let job = document.createElement('p');
    let text = document.createElement('p');

    //Applies elements to their respective properties from the object
    image.src = testimonial.image;
    name.textContent = testimonial.name;
    job.textContent = testimonial.job;
    text.textContent = testimonial.text;

    //Adds classes to each element to allow for CSS styling
    testimonialCon.classList.add('testimonial-card');
    name.classList.add('testimonial-name');
    job.classList.add('testimonial-job');
    text.classList.add('testimonial-text');
    image.classList.add('testimonial-image');

    // Only display the first card (index 0)
    if (i !== currentIndex) {
        testimonialCon.style.display = 'none';
    }

    //Puts all the created elements into the div created in this loop (each card)
    testimonialCon.append(image, name, job, text);

    testimonialCon.setAttribute('data-index', i);

    //Appends the card to the already existing div inside the html acting as a wrapper
    testimonialWrapper.appendChild(testimonialCon);

});

//This adds an event listener to all the menu items so the menu is toggled off when a menu item is clicked
menuItems.forEach(item => {
    const links = item.querySelector('a');
    links.addEventListener('click', toggleMenu);
});

//This function is for scrolling through multiple cards using arrows
//I made it reusable by taking in 4 elements and then calling the functions for their respective containers, cards and arrows
function scrollCards(cardContainer, cardClass, prevBtn, nextBtn) {
    
    const container = document.querySelector(cardContainer),
    cards = document.querySelectorAll(`${cardContainer} ${cardClass}`), //This puts all the cards in a variable, container is needed first as finalists and honour have the same card class
    prevButton = document.querySelector(prevBtn),
    nextButton = document.querySelector(nextBtn),
    dotContainer = container.querySelector('.dot-container'),
    dots = []; //empty array

    for (let i = 0; i < cards.length; i++) {
        //creates a dot for each card
        const dot = document.createElement('span');
        dot.classList.add('dot');

        //puts each dot inside of the dotContainer
        dotContainer.appendChild(dot);
        dots.push(dot);
    }

    //This goes through the cards and hides all the ones that aren't at the current index and toggles the active class on the dots
    function showCard(currentIndex) {
        for (let i = 0; i < cards.length; i++) {
            if (i === currentIndex) {
                cards[i].style.display = 'block';
                dots[i].classList.add('active');
            } else {
                cards[i].style.display = 'none';
                dots[i].classList.remove('active');
            }
        }
    }

    showCard(currentIndex);

    //adds functionality to the buttons
    function prevClick() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;//% cards.length makes it wrap around -> eg. 3%3=0 (first card)
        showCard(currentIndex);
    }

    function nextClick() {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }

    //Adds event listeners to buttons
    prevButton.addEventListener('click', prevClick);
    nextButton.addEventListener('click', nextClick);
}

//These call the function created above with their respective id's and classes
scrollCards('#event-card-wrapper', '.event-card', '#event-prev-btn', '#event-next-btn');
scrollCards('#finalists-wrapper', '.project-card', '#finalists-prev-btn', '#finalists-next-btn');
scrollCards('#honour-wrapper', '.project-card', '#honour-prev-btn', '#honour-next-btn');
scrollCards('#testimonial-container', '.testimonial-card', '#testimonial-prev-btn', '#testimonial-next-btn');

// EVENT LISTENERS

hamburgerMenu.addEventListener('click', toggleMenu);

})();

//GSAP

(()=> {

gsap.registerPlugin(ScrollTrigger);

//gsap.utils is a collection of methods from GSAP
//Takes a bunch of elements and turns them into an Array so we can mass apply a basic scrollTrigger animation
gsap.utils.toArray(".section-headings, .section-subheadings, #student-grid div, .featured-work-card, #event-info-con *, #event-stats-con *, #scroll-images-con, #project-heading h4, #client-con *, #testimonial-container, #course-info-con *, #developer-portfolios div, #event-video-con").forEach((item) => {

//Sets initial state
gsap.set(item, { opacity: 0, y: 50 });

gsap.to(item, {
    scrollTrigger: {
    trigger: item, 
    start: "top 90%", //Starts when top of card reaches % of viewport
    end: "bottom 75%", //Ends when bottom of card reaches % of viewport
    toggleActions: "play none none reverse", //Reverse is set so animation plays again if someone goes back to top and scrolls through again
    scrub: true, //Links animation progress to scroll - making it smoother
    },
    opacity: 1, 
    y: 0,  
    duration: 1, 
    ease: "power2.inOut",
});
});

//Staggered cards
gsap.set("#finalists-wrapper .project-card", { opacity: 0, y: 50 });
gsap.set("#honour-wrapper .project-card", { opacity: 0, y: 50 });
gsap.set(".event-card", { opacity: 0, y: 50 });

//Didn't use forEach loop cause I couldn't figure out how to use stagger with it
gsap.to("#finalists-wrapper .project-card", {
    scrollTrigger: {
      trigger: "#finalists-wrapper .project-card",
      start: "top 90%",
      end: "bottom 75%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
    opacity: 1,
    y: 0,            
    duration: .5,      
    ease: "power3.out",
    stagger: 0.1, //staggers each card           
});

gsap.to("#honour-wrapper .project-card", {
    scrollTrigger: {
      trigger: "#honour-wrapper .project-card",
      start: "top 90%",
      end: "bottom 75%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
    opacity: 1,
    y: 0,            
    duration: .5,      
    ease: "power3.out",
    stagger: 0.1,            
});

gsap.to(".event-card", {
    scrollTrigger: {
    trigger: ".event-card",
    start: "top 90%",
    end: "bottom 75%",
    toggleActions: "play none none reverse",
    scrub: true,
    },
    opacity: 1,
    y: 0,            
    duration: .5,      
    ease: "power3.out",
    stagger: 0.1,            
});

})();