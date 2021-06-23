// Approach 1
document.querySelector('[name="btnK"]').click();
setTimeout(() => {
let btn = document.querySelector("[name='gs_lcp']");
let prev = btn.value;
setInterval(() => {
    if(btn.value !== prev) {
        console.log("1. WE ARE PRINTING SOMETHING ON CONSOLE");
        prev = btn.value;
    }
}, 500);
    
}, 1000);


// Approach 2
let btn1 = document.createElement('button');
btn1.setAttribute("id", "new-btn");
btn1.addEventListener('click', function() {
    console.log("2. WE ARE PRINTING SOMETHING ON CONSOLE")
})

let a = document.querySelector('.o3j99.ikrT4e.om7nvf');
a.parentNode.insertBefore(btn1, a);
