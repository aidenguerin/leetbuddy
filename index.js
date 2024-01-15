function Problem(name, difficulty) {
    this.name = name;
    this.difficulty = difficulty;

    const getName = () => {return this.name}
    const getDifficulty = () => {return this.difficulty}

    return { getName, getDifficulty}
}

function ProblemList() {
    this.problems = []; 

    const add = (problem) => {
        this.problems.push(problem);
    };

    const remove = (problem) => {
        idx = this.problems.indexOf(problem);
        this.problems.pop(idx);
    }

    const display = () => {
        this.problems.forEach(problem => {
            console.log(values(problem))
        });
    }

    const getProblems = () => {
        return this.problems;
    }

    return { add, display, getProblems}
}

function Display() {
    // TEMP PROBLEM INITIALISATION
    const problemList = new ProblemList()
    problemList.add(new Problem("1. Two Sum", "Easy"))
    problemList.add(new Problem("2. Add Two Numbers", "Medium"))
    // 

    const display = document.querySelector(".wrapper");

    const problems = problemList.getProblems()
    display.appendChild(ProblemTableComponent(problems))
}

function ProblemTableComponent(problems) {
    const problemTable = document.createElement("table")

    problemTable.appendChild(ProblemTableHeader())
    problems.forEach(problem => {
        problemTable.appendChild(ProblemTableRow(problem))
    });
    

    return problemTable
}

function ProblemTableHeader() {
    const header = document.createElement("tr")
    header.classList.add("table-header") 

    const name = document.createElement("td")
    name.innerHTML = "Problem"
    header.appendChild(name)

    const difficulty = document.createElement("td")
    difficulty.innerHTML = "Difficulty"
    header.appendChild(difficulty)

    return header
}

function ProblemTableRow(problem) {
    const row = document.createElement("tr")
    row.dataset.name = problem.getName()

    const name = document.createElement("td")
    name.innerText = problem.getName()
    row.appendChild(name)

    const difficulty = document.createElement("td")
    difficulty.innerText = problem.getDifficulty()
    row.appendChild(difficulty)

    return row
}

Display()