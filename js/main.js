//VARIABLES

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
    "Music Jun.", 
    "Isaac Bilyea",
    "Bernardo Mac."
];

//See portfolioLinks for descriptions
const devPortfolioLinks = devNames.map(names => {
    const firstInitial = names.slice(0, 1).toLowerCase();
    const lastName = names.slice(names.lastIndexOf(' ') + 1).toLowerCase();
  
    return `${firstInitial}.${lastName}.com`;
});

const testimonialCards = {

    image: ["images/profile-placeholder.png", "images/profile-placeholder.png", "images/profile-placeholder.png"],
    name: ["David Patterson", "Julia Emsworth", "Reishi Cordyceps"],
    job: ["Project Manager", "Accounts Executive", "Project Manager"],
    text: ["lorem ipsum", "lorem ipsum", "lorem ipsum"]

};

//FUNCTIONS

//This function creates the HTML elements and appends them appropriately 
function studentGrid(name,link){

    //This div is a container for each student, including their name and link
    let studentCon = document.createElement('div');

    let studentLink = document.createElement('a');

    //The link is displayed as text and the text is linked to the portfolio
    studentLink.textContent = name;
    studentLink.href = link;

    //This makes it so when the name is clicked its open in a new window
    studentLink.target = "_blank";

    //This puts the name and link inside the div created above
    studentCon.appendChild(studentLink);

    //This appends that div to the div already exisiting inside the HTML to keep the grid in one container
    document.getElementById('student-grid').appendChild(studentCon);
};

//This goes through each item in the studentNames and portfolioLinks array and calls the above studentGrid function
for(let i = 0; i < studentNames.length; i++){

    let name = studentNames[i];
    let link = portfolioLinks[i];
    studentGrid(name,link);

};

//This function creates the HTML elements and appends them appropriately 
function devGrid(name,link){

    //This div is a container for each student, including their name and link
    let devCon = document.createElement('div');

    let devName = document.createElement('p');
    let devLink = document.createElement('button');

    devName.textContent = name;

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

for(let i = 0; i < devNames.length; i++){

    let name = devNames[i];
    let link = devPortfolioLinks[i];
    devGrid(name,link);

};

//This loops through the testimonialCards object 
for(let i = 0; i < testimonialCards.name.length; i++){

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
    testimonialCon.classList.add('testimonial-card')
    name.classList.add('testimonial-name');
    job.classList.add('testimonial-job');
    text.classList.add('testimonial-text');
    image.classList.add('testimonial-image');

    //Puts all the created elements into the div created in this loop (each card)
    testimonialCon.append(image, name, job, text);

    //Appends the card to the already existing div inside the html acting as a wrapper
    document.getElementById('testimonial-container').appendChild(testimonialCon);

};

//EVENT LISTENERS