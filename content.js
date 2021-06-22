document.querySelector('[name="btnK"]').click();
// setTimeout(() => {
let btn = document.querySelector("[name='gs_lcp']");
let prev = btn.value;
setInterval(() => {
    if(btn.value !== prev) {
        console.log("PRINT");
        prev = btn.value;
    }
}, 500);
    
// }, 1000);
