//confirm javascript is sourced correctly
console.log("Javascript works!");

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

function updateMonthlyCost(salary) {
  //...
}
