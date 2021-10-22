"strict"

const resume=document.querySelector(".resume")
const projects=document.querySelector(".projects")
const aboutMe=document.querySelector(".aboutMe")
const button=document.querySelector(".left-arrow")



button.addEventListener("click",function(){

        resume.classList.add(".hide")
        projects.classList.add(".hide")
        aboutMe.classList.add(".hide")
        
        console.log("working")

})