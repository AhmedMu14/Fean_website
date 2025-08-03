document.addEventListener("DOMContentLoaded",() => {
    
    document.getElementById("all_btn").addEventListener("click",()=>{
        document.querySelectorAll(".all_item").forEach((e)=>{
            e.style.display = "block"
        })
    })

    document.getElementById("burger").addEventListener("click",()=>{
        document.querySelectorAll(".all_item").forEach((e)=>{
            if(e.classList.contains("burger")){
                e.style.display = "block"
            }
            else{
                e.style.display = "none"
            }
        })
    })


    document.getElementById("pizza").addEventListener("click",()=>{
        document.querySelectorAll(".all_item").forEach((e)=>{
            if(e.classList.contains("pizza")){
                e.style.display = "block"
            }
            else{
                e.style.display = "none"
            }
        })
    })

    document.getElementById("pasta").addEventListener("click",()=>{
        document.querySelectorAll(".all_item").forEach((e)=>{
            if(e.classList.contains("pasta")){
                e.style.display = "block"
            }
            else{
                e.style.display = "none"
            }
        })
    })

    document.getElementById("fries").addEventListener("click",()=>{
        document.querySelectorAll(".all_item").forEach((e)=>{
            if(e.classList.contains("fries")){
                e.style.display = "block"
            }
            else{
                e.style.display = "none"
            }
        })
    })
})




// For siderbar

function showSidebar(){
    const sidebar =document.querySelector('.Sidebar')
    // easy and flexible hota ha queryselector is leye use karte han
    sidebar.style.display='flex '
}

function hideSidebar(){
    const navbar=document.querySelector('.Sidebar')
    navbar.style.display='none'
}
