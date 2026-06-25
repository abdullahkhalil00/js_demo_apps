# JavaScript Task 01 - Project Showcase

A professional repository containing three essential JavaScript applications developed to demonstrate core web development skills, including DOM manipulation, event handling, and conditional logic.

## 🚀 Live Demo
You can view the live projects here:
[https://abdullahkhalil00.github.io/js_demo_apps/Task%2001/](https://abdullahkhalil00.github.io/js_demo_apps/Task%2001/)

---

## 📂 Project List

### 1. People Counter
A simple yet functional counter application.
- **Features**: Increment, Decrement, and Reset.
- **Folder**: `/counter`

### 2. Quiz Application
An interactive quiz that tests users with multiple-choice questions.
- **Features**: Dynamic question switching, score calculation, and performance feedback.
- **Folder**: `/Quiz`

### 3. Habit Tracker / To-Do List
A productivity tool to manage daily tasks.
- **Features**: Add new habits, mark as completed (✔), and delete tasks.
- **Folder**: `/to_do`

---

## 🏗 Repository Structure
The repository is organized into a clean, modular structure:

```text
Task 01/
│
├── index.html          # Repository Homepage
├── README.md           # Documentation
│
├── counter/            # People Counter Project
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Quiz/               # Quiz Application Project
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── to_do/              # Habit Tracker Project
    ├── index.html
    ├── style.css
    └── script.js
```

---

## 🛠 Technologies Used
- **HTML5**: Semantic structure for web content.
- **CSS3**: Modern styling with responsive layouts and hover effects.
- **JavaScript**: Core logic, event listeners, and dynamic UI updates.

---

## ⚙ Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/abdullahkhalil00/js_demo_apps.git
   ```
2. Navigate to the task directory:
   ```bash
   cd "Task 01"
   ```
3. Open `index.html` in any modern web browser to view the hub.
4. Click on any project card to launch the respective application.

---

## 📝 Technical Notes & Array Length Issue
### The "Array Length" Explanation
During the development of the Quiz application, a common challenge was correctly managing the relationship between the **array length** and **index-based access**.
- **The Issue**: Arrays in JavaScript are 0-indexed, meaning the first item is at index `0` and the last item is at index `length - 1`. Beginners often face "undefined" errors or missed items when using `count < questions.length` instead of `count < questions.length - 1`.
- **The Solution**: The logic implemented carefully uses the `questions.length - 1` boundary to identify the final question, at which point the UI dynamically switches the "Next" button to a "Submit" button. This ensures that the final state is handled correctly without pushing the counter out of the array's bounds.

### Learning Process
This project served as a foundational exercise in:
- **State Management**: Keeping track of counts and user inputs across clicks.
- **DOM Manipulation**: Updating text content, styles, and list items dynamically.
- **Code Organization**: Learning the importance of separating concerns into HTML, CSS, and JS files for better maintainability and scalability.

---
*Note: All original project implementation details, including logic and variable names (e.g., `opttions`), have been preserved exactly as they were in the original submission.*
