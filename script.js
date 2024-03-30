//confirm javascript is sourced correctly
console.log("Javascript works!");

//add function for onclick event
function addEmployee(event){
    // get field input and store it in variables
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let employeeID = document.getElementById("employeeID");
    let jobTitle = document.getElementById("jobTitle");
    let annualSalary = document.getElementById("annualSalary")
    console.log("data entered: ", firstName, lastName, employeeID, jobTitle, annualSalary);
    // select the table body
    // add a new table row with the input
    // update total monthly cost
    updateMonthlyCost(salary);
    // clear inputs
}

function updateMonthlyCost(salary){
    //...
}