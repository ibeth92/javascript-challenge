// Bring in data from data.js
let tableData = data; 

// Use d3 to select the table body
let tableBody = d3.select("tbody");

// Iterate through the ufo sightings in data.js
// Check if this iteration is necessary before next function?
tableData.forEach((ufoSightings) => {
// Append one table row 'tr' to table body
    let row = tableBody.append('tr');
    Object.entries(ufoSightings).forEach(([key, value]) => {
        let cell = row.append('td');
        cell.text(value);
    });
}); 

//Select the form field
let form = d3.select("#form");

// Select the button field
let button = d3.select("#filter-btn");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Filter data using event handlers from the form
function runEnter() {
// Prevent the page from refreshing after pressing enter
    d3.event.preventDefault();
// Select HTML node and the input element
    let inputDate = d3.select("#datetime");
// Get the value of the input element
    let dateValue = inputDate.property("value");
// Console log data 
// console.log(dateValue);
// Use the form input to filter through data
    let filteredData = tableData.filter(sightings => sightings.datetime === dateValue);
// Console log 
// console.log(filteredData);
// Clear the previously displayed data
    let tbody = d3.select("tbody"); 
    tbody.html("");
// Populate the table by appending data
    filteredData.forEach((sightDate) => {
        console.log(sightDate);
        let newRow = tbody.append('tr');
        Object.entries(sightDate).forEach(([key, value]) => {
            let newCell = newRow.append('td');
            newCell.text(value);     
        });
    });  
}
// button.on('click', runEnter);
// Button function previously coded 
