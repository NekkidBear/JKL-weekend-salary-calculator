//confirm javascript is sourced correctly
console.log("Javascript works!");

//declare global variable for total cost since all employees' salaries are included.
let totalMonthlyCost = 0

/** submit takes in the form data, stores it in variables, and then creates a new
 * table row in the DOM with the data. It calls updateMonthlyCost and passes in the annual salary data.
 * Finally it clears the inputs so a new row can be typed.
 */
function submit(event) {
  //prevent legacy default form behavior
  event.preventDefault();

  // get field input and store it in variables
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let employeeID = document.getElementById("employeeID").value;
  let jobTitle = document.getElementById("jobTitle").value;
  let annualSalary = document.getElementById("annualSalary").value;
  console.log(
    "data entered: ",
    firstName,
    lastName,
    employeeID,
    jobTitle,
    annualSalary
  );

  // select the table body
  let tableBody = document.getElementById("tableBody");

  // add a new table row with the input
  tableBody.innerHTML += `<tr>
                                <td>${firstName}</td>
                                <td>${lastName}</td>
                                <td>${employeeID}</td>
                                <td>${jobTitle}</td>
                                <td>${annualSalary}</td>
                            </tr>`;

  
  // update total monthly cost
  updateMonthlyCost(annualSalary);

  // clear inputs
  document.getElementById("firstName").innerText = "";
  document.getElementById("lastName").innerText = "";
  document.getElementById("employeeID").innerText = "";
  document.getElementById("jobTitle").innerText = "";
  document.getElementById("annualSalary").innerText = "";
}


/**
 * updateMonthlyCost takes the salary argument passed from the submit function
 * and recalculates it based on the new employee entered.
 */
function updateMonthlyCost(salary) {
    //divide the annual cost by the number of months in the year
    let monthlyCost = Number(salary)/12;
    
    //update total costs
    totalMonthlyCost  += monthlyCost;

    //display updated cost in DOM
    let monthlyCostLocation = document.getElementById("monthlyCost");
    monthlyCostLocation.innerText = totalMonthlyCost;
    
    //get footer location
    let footer = document.getElementById("footer");
    if(totalMonthlyCost>20000){
        footer.classList.toggle("over-budget");
    }

}
