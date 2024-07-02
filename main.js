import inquirer from "inquirer";
async function BMI() {
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "weight",
            message: "What is your weight? (in KG)",
        },
        {
            type: "input",
            name: "height",
            message: "What is your height? (in Metre)",
        },
    ]).then((answer) => {
        let weight = parseFloat(answer.weight);
        let height = parseFloat(answer.height);
        function calculateBMI(height, weight) {
            return weight / (height * height);
        }
        let BMIValue = calculateBMI(height, weight);
        console.log(`Your BMI ratio is ${BMIValue}`);
        return BMIValue;
    });
}
BMI();
