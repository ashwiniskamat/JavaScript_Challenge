// from data.js
var tableData = data;
console.log(tableData);

// Reference to the table body
var tbody = d3.select("tbody");

// Add data to table
tableData.forEach((ufosightings) => {
    console.log(ufosightings);

    var row = tbody.append("tr")

    Object.entries(ufosightings).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    })
});

// Select the button
var button = d3.select("#filter-btn");

// Select the input date
var inputElement = d3.select("#datetime");
button.on("click", runEnter);
inputElement.on("change", runEnter);


// Complete the event handler function for the button and/or input field
function runEnter() {
    // Get the value property of the input
    var inputValue = inputElement.property("value");
    // Create event handlers 

    // console.log input value
    console.log(inputValue);
    console.log(tableData);

    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(ufosightings => ufosightings.datetime === inputValue);

    // console.log filter values
    //console.log(filteredData);

    // Need to empty the table data before appending those meeting criteria
    tbody = d3.select("tbody")
    tbody.html("")

    filteredData.forEach((ufosightings) => {

        // Append a table row for each sighting
        var row = tbody.append("tr");
        try{
            Object.entries(ufosightings).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
                console.log(value)
            })
        }
        catch(err) {
            console.log(err.text)
        }
    });
}