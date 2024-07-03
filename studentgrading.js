const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

function main() {
    rl.question("Enter the student's mark (0-100): ", (input) => {
        try {
            let mark = parseFloat(input);
            if (isNaN(mark) || mark < 0 || mark > 100) {
                console.log("Invalid input. Mark should be a number between 0 and 100.");
            } else {
                let grade = calculateGrade(mark);
                console.log(`The grade for mark ${mark} is: ${grade}`);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        } finally {
            rl.close();
        }
    });
}

// Call main function to start the program
main();