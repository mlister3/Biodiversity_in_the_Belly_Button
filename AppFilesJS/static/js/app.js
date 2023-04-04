function optionChanged(value) {
    console.log(`Selected option: ${value}`);
    updatePlots(value);
}

function updatePlots(value) {
    let subjectInfo = samples.find(obj => obj.id === value);

    let sampleValues = subjectInfo.sample_values.slice(0, 10).reverse();

    let otuIDs = subjectInfo.otu_ids.slice(0, 10).reverse();

    let otuLabels = subjectInfo.otu_labels;

    barPlot(sampleValues, otuIDs);
};

function barPlot(xdata, ydata) {
    
    let trace = {
        x: xdata,
        y: ydata.map(ydata => `OTU ${ydata}`),
        text: ydata,
        type: "bar",
        orientation: "h"
    };

    let data = [trace];

    Plotly.newPlot("bar", data);
};