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

    let sampleValues = subjectInfo.sample_values.slice(0, 10);
    console.log(sampleValues); //x

    let otuIDs = subjectInfo.otu_ids.slice(0, 10);
    console.log(otuIDs); //y

    let otuLabels = subjectInfo.otu_labels;
    console.log(otuLabels); 

    barPlot(sampleValues, otuIDs);
};

function barPlot(xdata, ydata) {

    //let text = hoverData.map((xdata, index) => `hoverData: ${xdata}<br>y: ${y[index]}`);

    let trace = {
        values: xdata,
        labels: ydata.map(id => `OTU ${ydata}`),
    //    text: text,
    //    mode: "markers",
        type: "bar",
        orientation: "h"
    };

    let data = [trace];

    // Plot the chart
    Plotly.newPlot("bar", data);
    console.log("Bar Done.");
};