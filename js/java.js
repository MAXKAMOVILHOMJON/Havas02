const loading = document.getElementById("loadi");

window.addEventListener("load",()=>{
    setTimeout(()=>{
   loading.classList.add("hide")
    }, 3000)
})