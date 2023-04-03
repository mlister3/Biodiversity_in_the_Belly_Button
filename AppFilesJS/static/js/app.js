// Set constant URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Read JSON from URL
d3.json(url).then(function(data) {
    console.log(data);

    // Get dropdown menu and fill with options
    var dropdownMenu = d3.select("#selDataset");
    var ids = data.names;
    ids.forEach(function(id) {
        dropdownMenu.append("option").text(id).property("value", id);
    });

});

let sorted = data.samples.sort((a, b) => b.sample_values - a.sample_values);
sortedTopTen = sorted.slice(0, 10).reverse();
console.log(sortedTopTen);