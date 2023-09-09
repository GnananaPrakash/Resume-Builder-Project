const profilePic = document.getElementById("profile-pic");

const uname = document.getElementById("user-name");
const bio = document.getElementById("bio"); 
const email = document.getElementById("email"); 

const youtubeLink = document.getElementById("youtube"); 
const twitterLink = document.getElementById("twitter");
const linkedinLink = document.getElementById("linkedIn");
const githubLink = document.getElementById("github");

const skill_1 = document.getElementById("skill-1");
const skill_2 = document.getElementById("skill-2");
const skill_3 = document.getElementById("skill-3");
const skill_4 = document.getElementById("skill-4");

const tech_1 = document.getElementById("tech1"); 
const tech_2 = document.getElementById("tech2"); 
const tech_3 = document.getElementById("tech3"); 
const tech_4 = document.getElementById("tech4"); 

const work_title = document.getElementById("Work-title");
const work_desc = document.getElementById("work-desc");

const project_1 = document.getElementById("project1"); 
const project_2 = document.getElementById("project2"); 
const project_3 = document.getElementById("project3"); 
const project_4 = document.getElementById("project4"); 

const {
    profile,
    username,
    userabout,
    useremail,
    ytLink,
    tweetLink,
    linkedInLink,
    gitLink,
    skill1,
    skill2,
    skill3,
    skill4,
    tech1,
    tech2,
    tech3,
    tech4,
    workTitle,
    userWork,
    project1,
    project2,
    project3,
    project4
} = JSON.parse(localStorage.getItem('resume-data'))

// function renderData() {
//     console.log(profile);
    
// const outputPic = document.getElementById("profile-pic")
// outputPic.onload = () => {
//     URL.revokeObjectURL(outputPic.src);  // no longer needed, free memory
// }

// // coverts a file into a image source
// // - URL.createObjectURL(file)
// outputPic.src = URL.createObjectURL(profile)
// }

// renderData()

uname.textContent = username; 
bio.textContent = userabout; 
email.textContent = useremail; 

youtubeLink.href = ytLink; 
twitterLink.href = tweetLink; 
linkedinLink.href = linkedInLink; 
githubLink.href = gitLink; 

skill_1.textContent = skill1; 
skill_2.textContent = skill2; 
skill_3.textContent = skill3; 
skill_4.textContent = skill4; 

tech_1.textContent = tech1; 
tech_2.textContent = tech2; 
tech_3.textContent = tech3; 
tech_4.textContent = tech4; 

work_title.textContent = workTitle; 
work_desc.textContent = userWork; 

project_1.textContent = project1; 
project_2.textContent = project2; 
project_3.textContent = project3; 
project_4.textContent = project4; 


// Setting the profile image from user
document.addEventListener("DOMContentLoaded", () => {

    const recentImageDataUrl = localStorage.getItem("user-image");

    if (recentImageDataUrl) {
        profilePic.src = recentImageDataUrl; 
    }
});


// Convert page to pdf
