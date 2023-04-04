function optionChanged(value) {
    console.log(`Selected option: ${value}`);
    updatePlots(value);
}

function updatePlots(value) {
    let subjectInfo = samples.find(obj => obj.id === value);

    let sampleValues = subjectInfo.sample_values.slice(0, 10).reverse();

    let otuIDs = subjectInfo.otu_ids.slice(0, 10).reverse();

    let otuLabels = subjectInfo.otu_labels;

    barPlot(sampleValues, otuIDs, otuLabels);
    bubblePlot(otuIDs, sampleValues, otuLabels);
};

function barPlot(xdata, ydata, hoverData) {
    
    let trace = {
        x: xdata,
        y: ydata.map(ydata => `OTU ${ydata}`),
        text: hoverData,
        type: "bar",
        orientation: "h"
    };

    let data = [trace];

    Plotly.newPlot("bar", data);
};

function bubblePlot(xdata, ydata, textData){
    console.log(xdata, ydata, textData);
    let trace2 = {
        x: xdata,
        y: ydata,
        mode: 'markers',
        type: 'scatter',
        text: textData,
        marker: {
            color: xdata,
            colorscale: 'Electric',
            size: ydata
        }
    };

    let data2 = [trace2];

    Plotly.newPlot('bubble', data2);

};