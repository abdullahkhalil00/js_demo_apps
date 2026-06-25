let count = document.getElementById('counter');
let incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', () => {
    let currentCount = parseInt(count.textContent);
    count.textContent = currentCount + 1;
});
let decrement = document.getElementById('decrement');
decrement.addEventListener('click', () => {
    let currentCount = parseInt(count.textContent);
    count.textContent = currentCount - 1;

})
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    count.textContent = 0
})
