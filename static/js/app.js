// Use d3 to select the table body
let tableBody = d3.select("tbody")

// Assign a variable for the data 
let tableData = data; 

// Iterate through the ufo sightings in data.js in order to populate data
data.forEach((ufoSightings) => {

// Console log 
    console.log(ufoSightings);
// Append one table row 'tr' to table body
    let row = tableBody.append('tr');
    Object.entries(ufoSightings).forEach(([key, value]) => {
        let cell = row.append('td');
        cell.text(value);
    });
}); 

// Set the button and date field to variables 
let button = d3.select("#filter-btn");
let form = d3.select("#form");

// Create the event handlers
button.on("click", dataFilter);
form.on("submit", dataFilter);

// Use the event handler function to filter data
function runEnter() {
// Prevent the page from refreshing after pressing enter
    d3.event.preventDefault();
// Select HTML node and the input element
    let inputDate = d3.select("#datetime");
// Get the value of the input element
    let dateValue = inputDate.property("value");
// Console log data 
    let filteredData = ufoData.filter(sighting => sighting.datetime === dateValue);
// Console log 
    let tbody = d3.select("tbody");
// Clear the previously displayed data 
    tbody.html(" ");
// Populate the table area 
    filteredData.forEach((foundDate) => {
        console.log(foundDate);
        let newRow = tbody.append('tr');
        Object.defineProperties(foundDate).forEach(([key, value]) => {
            let newCell = newRow.append('td');
            newCell.text(value);     
        });
    });  
}
