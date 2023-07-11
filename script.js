

// Add Student
const addStudentButton = document.getElementById("add-student");
addStudentButton.addEventListener("click", function() {
  const tableBody = document.querySelector("#student-management table tbody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td><input type="text"></td>
    <td><input type="text"></td>
    <td><button>Delete</button></td>
  `;
  tableBody.appendChild(newRow);
});

// Delete Student
const deleteButtons = document.querySelectorAll("#student-management table tbody button");
deleteButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  });
});

// Record Check-In
const recordCheckInButton = document.getElementById("record-check-in");
recordCheckInButton.addEventListener("click", function() {
  const checkboxes = document.querySelectorAll("#roll-call table tbody input[type='checkbox']");
  const checkInDate = document.getElementById("check-in-date").value;
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      const row = checkbox.parentNode.parentNode;
      const checkInCell = row.querySelector("td:last-child");
      checkInCell.textContent = checkInDate;
      checkbox.checked = false;
    }
  });
});

// View Report
const viewReportButton = document.querySelector("#attendance-report button");
viewReportButton.addEventListener("click", function() {
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;
  const rows = document.querySelectorAll("#attendance-report table tbody tr");
  rows.forEach(function(row) {
    const checkIns = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const totalCheckInsCell = row.querySelector("td:nth-child(2)");
    const percentageAttendanceCell = row.querySelector("td:last-child");
    totalCheckInsCell.textContent = checkIns;
    percentageAttendanceCell.textContent = Math.round((checkIns / 10) * 100) + "%";
  });
});