let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function countIncrement() {
    count +=1
    countEl.textContent = count;
}

function save() {
    let newCount = `${count} `;
    saveEl.textContent += newCount;
    console.log(newCount);
    countEl.textContent = 0;
    count = 0;
}


