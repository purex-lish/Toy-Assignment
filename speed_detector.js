const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    rl.question("Enter your speed limit: ", (input) => {
        try {
            const speed = parseFloat(input);
            if (speed <= speedLimit) {
                console.log("Ok");
            } else {
                const kmOverLimit = speed -speedLimit;                
                 const demeritPoints = Math.floor(kmOverLimit / kmPerDemeritPoint); console.log(`Demerit points: ${demeritPoints}`);
              return demeritPoints;
            }
        } catch (error) {
            console.error("An error occurred:", error);
        } finally {
            rl.close();
        }
    });
}

// Call main function to start the program
calculateDemeritPoints();