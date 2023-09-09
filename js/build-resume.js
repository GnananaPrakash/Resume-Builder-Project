// User details
// const profilePic = document.getElementById("profileFile");
const userName = document.getElementById("user-name");
const about = document.getElementById("user-about");
const email = document.getElementById("user-email");

// User Social Links
const youtube = document.getElementById("user-youtube");
const twitter = document.getElementById("user-twitter");
const linkedin = document.getElementById("user-linkedin");
const github = document.getElementById("user-github");

// User skill
const skill1 = document.getElementById("user-skill-1");
const skill2 = document.getElementById("user-skill-2");
const skill3 = document.getElementById("user-skill-3");
const skill4 = document.getElementById("user-skill-4");

// User Tech Stack
const tech1 = document.getElementById("user-stack-1");
const tech2 = document.getElementById("user-stack-2");
const tech3 = document.getElementById("user-stack-3");
const tech4 = document.getElementById("user-stack-4");

// User work profile
const workTitle = document.getElementById("user-work-title");
const userWork = document.getElementById("user-work");

// User project profile
const project1 = document.getElementById("user-project1");
const project2 = document.getElementById("user-project2");
const project3 = document.getElementById("user-project3");
const project4 = document.getElementById("user-project4");

const form = document.getElementById("get-details");

// profilePic.addEventListener('change', (e) => {
//     console.log(e.target.files[0]);
//     const dp = document.getElementById("dp");
  
// })

document.querySelector("#profileFile").addEventListener("change", function () {
    const reader = new FileReader(); 

    reader.addEventListener("load", () => {
        localStorage.setItem("user-image", reader.result);
        // console.log(reader.result); 
    }); 

    reader.readAsDataURL(this.files[0]);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
        // profile: profilePic.files[0],
        username: userName.value,
        userabout: about.value,
        useremail: email.value,
        ytLink: youtube.value,
        tweetLink: twitter.value,
        linkedInLink: linkedin.value,
        gitLink: github.value,
        skill1: skill1.value,
        skill2: skill2.value,
        skill3: skill3.value,
        skill4: skill4.value,
        tech1: tech1.value,
        tech2: tech2.value,
        tech3: tech3.value,
        tech4: tech4.value,
        workTitle: workTitle.value,
        userWork: userWork.value,
        project1: project1.value,
        project2: project2.value,
        project3: project3.value,
        project4: project4.value,
    }


    console.log(data);
    const userData = JSON.stringify(data)
    localStorage.setItem('resume-data', userData)

    location.href = "/pages/output-resume.html"

    // coverts a file into a image source
    // - URL.createObjectURL(file)
});
