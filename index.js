let btn = document.querySelector(".left-button");
let btn2 = document.querySelector(".up-button");
let opened = false;
let opened2 = false;
let link = document.querySelectorAll(".nav-link");

btn.addEventListener("click", ()=>{

    if(!opened){
        let socmedIcon = document.querySelectorAll(".socmed-icon");

        socmedIcon.forEach((i) => {
            setTimeout(()=>{
                i.style.display = "block";
            }, 0)
        });
        btn.style.scale = -1;

        opened = true
    }
    else{
        let socmedIcon = document.querySelectorAll(".socmed-icon");

        socmedIcon.forEach((i) => {
            setTimeout(()=>{
                i.style.display = "none";
            }, 0)
        });
        btn.style.scale = 1;
        opened = false;
    }

})

btn2.addEventListener("click", ()=>{

    if(!opened2){
        let socmedIcon = document.querySelectorAll(".socmed-icon");

        socmedIcon.forEach((i) => {
            setTimeout(()=>{
                i.style.display = "block";
            }, 0)
        });
        btn2.style.scale = -1;

        opened2 = true
    }
    else{
        let socmedIcon = document.querySelectorAll(".socmed-icon");

        socmedIcon.forEach((i) => {
            setTimeout(()=>{
                i.style.display = "none";
            }, 0)
        });
        btn2.style.scale = 1;
        opened2 = false;
    }

})

link.forEach(i => {
    i.addEventListener('click', () => {
        
        link.forEach(e => {
            e.classList.remove('active');
        })
        i.classList.add('active');
        
    })
});
