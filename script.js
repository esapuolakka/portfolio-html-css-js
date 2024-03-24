let logo = document.getElementsByClassName('logo')[0];
let about = document.getElementById('about');
let skills = document.getElementById('skills');
let contact = document.getElementById('contact');

let toBanner = document.getElementsByClassName('banner')[0];
let toAbout = document.getElementsByClassName('about-me')[0];
let toSkills = document.getElementsByClassName('skills')[0];
let toContact = document.getElementsByClassName('contact-content')[0];


let showBanner = function() {
    toBanner.style.display = 'flex';
    toAbout.style.display = 'none';
    toSkills.style.display = 'none';
    toContact.style.display = 'none';
}
let showAboutMe = function() {
    toBanner.style.display = 'none';
    toAbout.style.display = 'flex';
    toSkills.style.display = 'none';
    toContact.style.display = 'none';
}
let showSkills = function() {
    toBanner.style.display = 'none';
    toAbout.style.display = 'none';
    toSkills.style.display = 'flex';
    toContact.style.display = 'none';
}
let showContact = function() {
    toBanner.style.display = 'none';
    toAbout.style.display = 'none';
    toSkills.style.display = 'none';
    toContact.style.display = 'flex';
}

logo.addEventListener('click', showBanner);
about.addEventListener('click', showAboutMe);
skills.addEventListener('click', showSkills);
contact.addEventListener('click', showContact);


let eng = document.getElementById('eng-flag');
let fin = document.getElementById('fin-flag');

let engText = document.querySelectorAll('p.eng-text');
let finText = document.querySelectorAll('p.fin-text');

function showEng () {
    engText.forEach(function(element) {
        element.style.display = 'flex';
    });
    finText.forEach(function(element) {
        element.style.display = 'none';
    });
}

function showFin() {
    engText.forEach(function(element) {
        element.style.display = 'none';
    });
    finText.forEach(function(element) {
        element.style.display = 'flex';
    });
}

eng.addEventListener('click', showEng);
fin.addEventListener('click', showFin);

// Show skill texts

let elements = [
    { id: "html", name: "HTML" },
    { id: "css", name: "CSS" },
    { id: "js", name: "JavaScript" },
    { id: "node", name: "Node.js" },
    { id: "npm", name: "Node Package Manager" },
    { id: "react", name: "React" },
    { id: "chrome", name: "Chrome DevTools" },
    { id: "github", name: "GitHub" },
    { id: "cli", name: "Command Line" },
    { id: "cpp", name: "C++" },
    { id: "java", name: "Java" },
    { id: "dotnet", name: ".NET" },
    { id: "liferay", name: "Liferay" },
    { id: "slack", name: "Slack" },
    { id: "atlassian", name: "Jira"},
    { id: "trello", name: "Trello"}
];
let skillContainer = document.getElementById('show-skill-name');
let skillName = document.createElement('h3');

const showSkillName = (elementName) => {
    let newSkillName = document.createElement('h3');
    skillName.innerHTML = elementName;


    let randomColor = () => Math.floor(Math.random() * 157 + 100);
    let randomRGB = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    newSkillName.style.color = randomRGB;

    skillContainer.appendChild(newSkillName);

    skillContainer.classList.add('visible');

    clearTimeout(skillContainer.timerId);

    skillContainer.timerId = setTimeout(() => {
        skillContainer.classList.remove('visible');
    }, 2200);
}

elements.forEach(element => {
    let selected = document.getElementById(element.id);
    if (selected) {
        selected.addEventListener('click', () => showSkillName(element.name));
        skillContainer.appendChild(skillName);
    } else {
        console.error(`Element with ID ${element.id} not found`);
    }
});

//Submit form
const sendMessage = () => {
    return alert('Message sent (not really)');
}

let submitForm = document.getElementById("send-form");

submitForm.addEventListener('click', sendMessage);
