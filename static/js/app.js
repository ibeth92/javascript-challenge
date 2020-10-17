// Reference the table body 
let tableBody = d3.select("tbody")

// Assign a variable for the data 
let ufoData = data; 

// Populate the table with the data from data.js
data.forEach((ufoSighting) => {



// Function to filter the data if date entered 
function dataFilter() {
// Prevent the page from refreshing on submit 
    d3.event.preventDefault();
// Select the html where the date will be entered 
    let inputDate = d3.select("#datetime");
// Get the value of what was entered 
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
