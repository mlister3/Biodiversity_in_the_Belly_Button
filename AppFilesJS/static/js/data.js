// Set constant URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

console.log("Loading data from URL: " + url);

let names;
let samples;
let metadata;

// Read JSON from URL
const loadData = () => {
    return new Promise((resolve, reject) => {
        console.log(d3.version)
        d3.json(url).then(function(data){
            console.log("Success")
            names = data.names;
            samples = data.samples;
            metadata = data.metadata;
            resolve(data);
        });
    });
};

loadData()
    .then((data) => {
    console.log("Callback function called");
    console.log("Data loaded:", data);
    updatePlots("940");
    
    // Get dropdown menu and fill with options
    let dropdownMenu = d3.select("#selDataset");
    names.forEach(function(id) {
        dropdownMenu.append("option").text(id).property("value", id);
    });
    
    })