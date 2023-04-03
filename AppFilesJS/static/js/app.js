function optionChanged(value) {
    console.log(`Selected option: ${value}`);
    updatePlots(value);
}

function updatePlots(value) {
    console.log("Updating...");
    subjectSearch(value);
}; 

function subjectSearch(value) {
    let subjectInfo = samples.find(obj => obj.id === value);

    let otuIDs = subjectInfo.otu_ids;
    console.log(otuIDs); //y

    let sampleValues = subjectInfo.sample_values;
    console.log(sampleValues); //x

    let otuLabels = subjectInfo.otu_labels;
    console.log(otuLabels); 
};

function barPlot(value, xdata, ydata) {

    let trace = {
        x: xdata,
        y: ydata.map(id => `OTU ${ydata}`),
        text: labels,
        type: "bar",
        orientation: "h"
    };

    let data = [trace];

    // Plot the chart
    Plotly.newPlot("bar", data, layout);
    console.log("Bar Done.");
};