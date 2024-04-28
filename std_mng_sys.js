import inquirer from "inquirer";
let code;
let std_mng_sys = await inquirer.prompt([
    {
        message: "Enter new student: ",
        type: "input",
        name: "st_name"
    },
    {
        message: "Want to generate pin: ",
        type: "number",
        name: "pin",
        default: "yes"
    },
    {
        message: "Enroll student to courses: ",
        type: "checkbox",
        name: "courses",
        choices: ["maths", "english", "physics", "chemistry", "computer science"]
    },
    {
        message: "Enter balance :",
        type: "number",
        name: "check_bal"
    },
    {
        message: "Is tuition fees paid: ",
        type: "confirm",
        name: "tui_fee"
    },
    {
        message: "Would you like to see the status(yes/no): ",
        type: "input",
        name: "status",
        default: "yes"
    }
]);
if (std_mng_sys.pin == "yes") {
    code = Math.floor(Math.random() * (90001 - 10000) + 10000);
}
;
if (std_mng_sys.status == "yes") {
    console.log(`Student Name: ${std_mng_sys.st_name}`);
    console.log(`Student ID: ${code}`);
    console.log(`Student Courses: ${std_mng_sys.courses}`);
    console.log(`Student Balance: ${std_mng_sys.check_bal}`);
}
