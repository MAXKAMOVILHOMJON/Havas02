const loading = document.getElementById("loading");

window.addEventListener("load",()=>{
    setTimeout(()=>{
   loading.classList.add("hide")
    }, 3000)
})