let questions = ["What is 2 + 2", "What is 3 + 3", "what is 4 + 4", "What is 5 + 5 "];
let answerers = [4, 6, 8, 10];
let opttions = [[1, 2, 3, 4], [4, 5, 6, 7], [7, 8, 9, 10], [10, 12, 23, 23]];
let next_question = document.getElementById('next_question');


let put_question = document.getElementById('question');
let count = 0;
put_question.textContent = questions[count];
let opt1 = document.getElementById('lbl_1');
let opt2 = document.getElementById('lbl_2');
let opt3 = document.getElementById('lbl_3');
let opt4 = document.getElementById('lbl_4');

let opt_1 = document.getElementById('opt_1');
let opt_2 = document.getElementById('opt_2');
let opt_3 = document.getElementById('opt_3');
let opt_4 = document.getElementById('opt_4');
opt1.textContent = opttions[count][0];
opt2.textContent = opttions[count][1];
opt3.textContent = opttions[count][2];
opt4.textContent = opttions[count][3];

opt_1.value = opttions[count][0];
opt_2.value = opttions[count][1];
opt_3.value = opttions[count][2];
opt_4.value = opttions[count][3];
let selected_options = []
console.log(questions.length);
next_question.addEventListener('click', () => {

    let selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("Choose option");
        return;
    }

    selected_options[count] = selected.value;

    document.querySelectorAll('input[name="answer"]').forEach(r => r.checked = false);

    if (count < questions.length - 1) {

        count++;
        put_question.textContent = questions[count];

        opt1.textContent = opttions[count][0];
        opt2.textContent = opttions[count][1];
        opt3.textContent = opttions[count][2];
        opt4.textContent = opttions[count][3];

        opt_1.value = opttions[count][0];
        opt_2.value = opttions[count][1];
        opt_3.value = opttions[count][2];
        opt_4.value = opttions[count][3];

        if (count == questions.length - 1) {
            next_question.textContent = 'Submit'
        }
        console.log(selected.value);
        console.log(selected_options);
    } else {
        selected_options[count] = selected.value;
        console.log(selected.value);
        console.log(selected_options);
        let body_text = document.querySelector('body');

        let isWrong = false;
        let wrong_index = []
        for (let i = 0; i < answerers.length; i++) {
            if (answerers[i] != selected_options[i]) {
                isWrong = true;
                wrong_index.push(i);

            }
        }

        body_text.innerHTML = isWrong
            ? `<h1>Wrong Answer</h1> <p> ${wrong_index.map(i => questions[i]).join(", ")}</p>`
            : '<h1>Correct Answer</h1>';
    }
});
