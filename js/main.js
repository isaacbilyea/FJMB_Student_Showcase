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
"Ishan Mehra Ishan Mehra", 
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
    "Apapat Juntarattanakamol", 
    "Bernardo Jr. Macapagal", 
    "Bryle Timothy Flores",
    "Isaac Bilyea"
];

//See portfolioLinks for descriptions
const devPortfolioLinks = devNames.map(names => {
    const firstInitial = names.slice(0, 1).toLowerCase();
    const lastName = names.slice(names.lastIndexOf(' ') + 1).toLowerCase();
  
    return `${firstInitial}.${lastName}.com`;
});