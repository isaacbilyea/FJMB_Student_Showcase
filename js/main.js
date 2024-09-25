//VARIABLES

const player = new Plyr('video');

const menuItems = document.querySelectorAll('.mobile-menu-item');

//Students
const studentNames = [
"Diego Rodriguez-Ramos", 
"Kayla Cooper", 
"Ramona Lozon", 
"Qingdong Chen", 
"Taylor Khan", 
"Cassidy Pelacek-Boutilier", 
"Ezra Carriere", 
"Shauraya Salwan", 
"Rebin Reji Vazhavilayil", 
"Divij Saddul", 
"Kyuri Park", 
"Nikolai Meijer", 
"Xaviere Hanbury", 
"Amari Buck", 
"Thaseekaran Sivaskaran", 
"Meet Amrutbhai Parmar", 
"Justin Rian Reyes", 
"Alisher Yantizhanov", 
"Parvesh Thakur", 
"Meghan Damen", 
"Saif Amjad Omar Abu-Sa'ad", 
"Bozhi Zhang", 
"Qiao-Yi Chu", 
"Sashoye Maxwell", 
"Dina Bondarchuk", 
"Wisdom Utenwojo Okutepa", 
"Ezekiel John Celis", 
"Katrina Macadams", 
"Ali El Maniary", 
"Lok Ting Tina Yam", 
"Thi Thanh Thuong Nguyen", 
"Jenifer Quelali Evangelista", 
"Rodrigo Nobre Do Nascimento", 
"Milana Gabbassova", 
"Izel Esteban Cardenas Ramos", 
"Loi Pan Sit", 
"Napas Polchai", 
"Akamjot Singh", 
"Emmanuel Opadele", 
"Shon Sojan", 
"Ishan Mehra", 
"Shiyon Biju Varghese", 
"Jashan Kumar",
"Meetinder Singh Dhaliwal", 
"Harnoorpreet Kaur", 
"Sydney Bandarra", 
"Osarieme Ogbeide", 
"Tanya Mae Huertas", 
"Carlos Andres Cano Menendez", 
"Kamana Bishokarma", 
"King Yin Sham", 
"Tapshveer Benipal", 
"Dixie Marie Laput", 
"Faizan Khan", 
"Keith Lie", 
"Henrique Gamborgi Menezes", 
"Natchanon Mahaittidon", 
"Wing Lam Stephanie Chan", 
"Yi Ting Lai", 
"Sheldon Gohetia", 
"Joyal Gregory", 
"Sukhbhag Singh Sidhu", 
"Het Shah", 
"Lav Pareshkumar Patel", 
"Simon Dasilva", 
"Wimarsha Heshan Jayasinghe Mudalige", 
"Gia Khang Ho", 
"Kristina Bendzsel"
];

//The map method creates a new array so you can apply functions to each element inside the original array
const portfolioLinks = studentNames.map(names => {

    //This takes the first initial by using the slice method with an index of 0 to 1 which is basically just 
    //the first letter of each string and then converts it to lower case
    const firstInitial = names.slice(0, 1).toLowerCase();

    //This looks for the last space in each name in the array and then the +1 takes whatever is
    //after the last space using the slice method and then converts it to lower case
    const lastName = names.slice(names.lastIndexOf(' ') + 1).toLowerCase();
  
    //This '${}' allows you to put expressions inside a string without having to do a bunch of +'s signs basically
    return `${firstInitial}.${lastName}.com`;
});


//Developers
const devNames = [
    "Bryle Flores", 
    "Music Juntarattanakamol", 
    "Isaac Bilyea",
    "Bernardo Jr. Macapagal"
];

//See portfolioLinks for descriptions
const devPortfolioLinks = devNames.map(names => {
    const firstInitial = names.slice(0, 1).toLowerCase();
    const lastName = names.slice(names.lastIndexOf(' ') + 1).toLowerCase();
  
    return `${firstInitial}.${lastName}.com`;
});

const testimonialCards = {

    image: ["images/profile-placeholder.png", "images/profile-placeholder.png", "images/profile-placeholder.png"],
    name: ["David Patterson", "Samantha Taylor", "Christopher Martin"],
    job: ["Marketing Lead, Cineplex Studious", "Northern Commerce, Head of Development", "Tech Alliance, Brand Supervisor"],
    text: ["It’s been a great experience working with these talented students to bring our vision to life. From planning to final development, their skills in multimedia truly impressed us. We’re excited to see all of them succeed!","Seeing the outputs produced by every student was very impressive, mastering their skills in web development, brand designs, and innovative artistry. I am confident that this opens multiple doors of opportunities for them.", "Getting to watch the teams present their final client project is amazing to witness with their professionalism and strengths in navigating through their content. Kudos to all students and their professors. Great work!"]

};

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

//This function creates the HTML elements and appends them appropriately 
function studentGrid(name,link){

    //This div is a container for each student, including their name and link
    let studentCon = document.createElement('div');

    let studentLink = document.createElement('a');

    //The link is displayed as text and the text is linked to the portfolio
    studentLink.textContent = formatName(name);
    studentLink.href = link;

    //This makes it so when the name is clicked its open in a new window
    studentLink.target = "_blank";

    //This puts the name and link inside the div created above
    studentCon.appendChild(studentLink);

    //This appends that div to the div already exisiting inside the HTML to keep the grid in one container
    document.getElementById('student-grid').appendChild(studentCon);
};

//This function creates the HTML elements and appends them appropriately 
function devGrid(name,link){

    //This div is a container for each student, including their name and link
    let devCon = document.createElement('div');

    let devName = document.createElement('p');
    let devLink = document.createElement('button');

    devName.textContent = formatName(name);

    //The link is displayed as text and the text is linked to the portfolio
    devLink.textContent = 'LINK';
    devLink.href = link;

    //This makes it so when the link is clicked its open in a new window
    devLink.target = "_blank";

    devLink.addEventListener('click', function() {
        window.open(link);
    });

    //This puts the name and link inside the div created above
    devCon.appendChild(devName);
    devCon.appendChild(devLink);

    //This appends that div to the div already exisiting inside the HTML to keep the grid in one container
    document.getElementById('developer-grid').appendChild(devCon);
};

function toggleMenu() {
    document.getElementById('hamburger-menu').classList.toggle('activate');
    document.getElementById('mobile-menu').classList.toggle('show');
};

//This goes through each item in the studentNames and portfolioLinks array and calls the above studentGrid function
for(let i = 0; i < studentNames.length; i++){

    let name = studentNames[i];
    let link = portfolioLinks[i];
    studentGrid(name, link);

};

for(let i = 0; i < devNames.length; i++){

    let name = devNames[i];
    let link = devPortfolioLinks[i];
    devGrid(name,link);

};

//This loops through the testimonialCards object 
for(let i = 0; i < testimonialCards.name.length; i++){

    let currentIndex = 0;

    //Creates a div for each testimonial card
    let testimonialCon = document.createElement('div');

    //Creates elements for each card
    let image = document.createElement('img');
    let name = document.createElement('p');
    let job = document.createElement('p');
    let text = document.createElement('p');

    //Applies elements to their respective array
    image.src = testimonialCards.image[i];
    name.textContent = testimonialCards.name[i];
    job.textContent = testimonialCards.job[i];
    text.textContent = testimonialCards.text[i];

    //Adds classes to each element to allow for CSS styling
    testimonialCon.classList.add('testimonial-card');
    name.classList.add('testimonial-name');
    job.classList.add('testimonial-job');
    text.classList.add('testimonial-text');
    image.classList.add('testimonial-image');

    if (i !== currentIndex) {
        testimonialCon.style.display = 'none';
    }

    //Puts all the created elements into the div created in this loop (each card)
    testimonialCon.append(image, name, job, text);

    testimonialCon.setAttribute('data-index', i);

    //Appends the card to the already existing div inside the html acting as a wrapper
    document.getElementById('testimonial-container').appendChild(testimonialCon);

};

//This adds an event listener to all the menu items so the menu is toggled off when a menu item is clicked
for (items of menuItems) {

    const links = items.querySelector('a');
    links.addEventListener('click', toggleMenu);

};

//This function is for scrolling through multiple cards using arrows
//I made it reusable by taking in 4 elements and then calling the functions for their respective containers, cards and arrows
function scrollCards(cardContainer, cardClass, prevBtn, nextBtn) {
    //This puts all the cards in a variable, container is needed first as finalists and honour have the same card class
    const cards = document.querySelectorAll(`${cardContainer} ${cardClass}`);
    let currentIndex = 0;

    //This goes through the cards and hides all the ones that aren't at the current index
    function showCard(index) {
        for (let i = 0; i < cards.length; i++) {
            if (i === index) {
                cards[i].style.display = 'block';
            } else {
                cards[i].style.display = 'none'; 
            }
        }
    }

    //This shows the first card
    showCard(currentIndex);

    //Adds event listeners to buttons
    document.querySelector(prevBtn).addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;//% cards.length makes it wrap around -> eg. 3%3=0 (first card)
        showCard(currentIndex);
    });

    document.querySelector(nextBtn).addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    });
}

//These call the function created above with their respective id's and classes
scrollCards('#event-card-wrapper', '.event-card', '#event-prev-btn', '#event-next-btn');
scrollCards('#finalists-wrapper', '.project-card', '#finalists-prev-btn', '#finalists-next-btn');
scrollCards('#honour-wrapper', '.project-card', '#honour-prev-btn', '#honour-next-btn');
scrollCards('#testimonial-container', '.testimonial-card', '#testimonial-prev-btn', '#testimonial-next-btn');

// EVENT LISTENERS

document.getElementById('hamburger-menu').addEventListener('click', toggleMenu);

