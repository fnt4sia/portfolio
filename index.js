let btn = document.querySelectorAll("#button");
let link = document.querySelectorAll(".nav-link");
let sect = document.querySelectorAll("section");
let opened = false;

btn.forEach((i) => {
    i.addEventListener("click", ()=>{
        if(!opened){
            let socmedIcon = document.querySelectorAll("#scmd");
    
            socmedIcon.forEach((i) => {
                setTimeout(()=>{
                    i.style.display = "block";
                }, 0)
            });
            i.style.scale = -1;
    
            opened = true
        }
        else{
            let socmedIcon = document.querySelectorAll("#scmd");
    
            socmedIcon.forEach((i) => {
                setTimeout(()=>{
                    i.style.display = "none";
                }, 0)
            });
            i.style.scale = 1;
            opened = false;
        }
    });
})


function checkActive(){
    sect.forEach((i, p) => {
        const rect = i.getBoundingClientRect();
        if(rect.top === 0){
            link.forEach((e) => {
                e.classList.remove("active");
            });
            link[p].classList.add("active");
        }
    });
}

window.onscroll = () => {
    
    sect.forEach((i, p) => {
        const rect = i.getBoundingClientRect();
        if(rect.top === 0){
            link.forEach((e) => {
                e.classList.remove("active");
            });
            link[p].classList.add("active");
        }
    });
}


checkActive();

