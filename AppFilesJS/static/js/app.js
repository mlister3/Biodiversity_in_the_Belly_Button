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

// Call createBarChart function on initial load
    createBarChart(ids[0]);

// Function to create horizontal bar chart
    function createBarChart(id) {
    }

});
// Filter data for selected id
//        var sampleData = data.samples.filter(d => d.id === id)[0];
//        var values = sampleData.sample_values.slice(0, 10).reverse();
//        var labels = sampleData.otu_ids.slice(0, 10).reverse().map(d => "OTU " + d);
//        var hovertext = sampleData.otu_labels.slice(0, 10).reverse();

// Create trace for bar chart
//        var trace = {
//            x: values,
//            y: labels,
//            text: hovertext,
//            type: "bar",
//            orientation: "h"
//        };

  // Create data array and layout object for plot
//        var data = [trace];
//        var layout = {
//            title: "Top 10 OTUs",
//            xaxis: { title: "Sample Values" },
//            yaxis: { tickfont: { size: 14 } },
//            margin: { t: 30, l: 150 }
//        };

// Plot bar chart
//        Plotly.newPlot("bar", data, layout);



    // Get dropdown menu and fill with options
//    let dropdownMenu = d3.select("#selDataset");
// Assign the value of the dropdown menu option to a variable
//    let ids = data.names;

//    ids.forEach(function(id){
//    dropdownMenu.append("option").text(id).property("value", id);
//    });

    // Call updatePlotly() when a change takes place to the DOM
//    d3.selectAll("#selDataset").on("change", createBarChart);

// Function to create horizontal bar chart
//    function createBarChart(id) {
//    }

//    let id = dropdownMenu.property("value");
//        createBarChart(id);
    
//});
    



// Initial chart
//  createBarChart(ids[0]);

// Event listener for dropdown menu
//  dropdownMenu.on("change", function() {
//    var id = d3.select(this).property("value");
//    createBarChart(id);
//    });

// Call updatePlotly() when a change takes place to the DOM
//d3.selectAll("#selDataset").on("change", updatePlotly);

//  var ids = data.names;
//  ids.forEach(function(id) {
//    dropdownMenu.append("option").text(id).property("value", id);
//  });
  
  // Function to create horizontal bar chart
//  function createBarChart(id) {
    
    // Filter data for selected id
//    var sampleData = data.samples.filter(d => d.id === id)[0];
//    var values = sampleData.sample_values.slice(0, 10).reverse();
//    var labels = sampleData.otu_ids.slice(0, 10).reverse().map(d => "OTU " + d);
//    var hovertext = sampleData.otu_labels.slice(0, 10).reverse();

    // Create trace for bar chart
//    var trace = {
//      x: values,
//      y: labels,
//      text: hovertext,
//      type: "bar",
//      orientation: "h"
//    };

    // Create data array and layout object for plot
//    var data = [trace];
//    var layout = {
//      title: "Top 10 OTUs",
//      xaxis: { title: "Sample Values" },
//      yaxis: { tickfont: { size: 14 } },
//      margin: { t: 30, l: 150 }
//    };

    // Plot bar chart
//    Plotly.newPlot("bar", data, layout);
//  }

//initData();