// Set constant URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Read JSON from URL
d3.json(url).then(function(data) {
    console.log(data);
    
// Get dropdown menu and fill with options
    let dropdownMenu = d3.select("#selDataset");
    let ids = data.names;
    ids.forEach(function(id) {
        dropdownMenu.append("option").text(id).property("value", id);
    });

    function updatePlots(selectedID) {            
    }  

});

function optionChanged(value) {
    console.log(`Selected option: ${value}`);
    let selectedID = value;
}

d3.selectAll("#selDataset").on("change", updatePlots);