// Element variables ke naam clear rakhein
let habitInput = document.getElementById('addhabit');
let addBtn = document.getElementById('add');
let habitList = document.getElementById('habitList');
let item_clear = document.getElementById('no_item');
let count = 0


addBtn.addEventListener('click', () => {
    if (habitInput.value == "") {
        alert("Please Enter some thing");
        return;
    }

    if (item_clear) {
        item_clear.remove();
        item_clear = null;
    }
    let newHabitText = habitInput.value;

    let li = document.createElement("li");

    li.id = count;
    li.textContent = newHabitText;

    let done_buton = document.createElement('button');
    let delete_button = document.createElement('button');
    done_buton.textContent = "Done";
    delete_button.textContent = "Delete"



    li.appendChild(done_buton);

    li.appendChild(delete_button);

    habitList.appendChild(li);

    count++;
    delete_button.addEventListener('click', function (e) {
        e.target.parentElement.remove();
    });
    done_buton.addEventListener('click', (e) => {
        done_buton.innerText = "✔";
        done_buton.disabled = true;
    });
});
