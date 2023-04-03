function optionChanged(value) {
    console.log(`Selected option: ${value}`);
    console.log(names);
    updatePlots(value);
}

function updatePlots(selectedID) {
    console.log("Updating...");
    //barPlot();
    console.log("Done.");
    TestSubject = samples[selectedID];
    console.log(samples);
    //let otuIDs = TestSubject.otu_ids;
    //let sampleValues = TestSubject.sample_values;
    //let otuLabels = TestSubject.otu_labels;
    //console.log(otuIDS);           
};  

function barPlot() {
    let otuIDs = samples.otu_ids;
    let sampleValues = samples.sample_values;
    let otuLabels = samples.otu_labels;

    let trace = {
        x: sampleValues,
        y: otuIDs.map(id => `OTU ${id}`),
        text: otuLabels,
        type: "bar",
        orientation: "h"
    };

    let data = [trace];

    let layout = {
        title: `Top 10 OTUs for Test Subject ID ${selectedID}`,
        xaxis: { title: "Sample Values" },
        yaxis: { title: "OTU IDs" }
    };

    // Plot the chart
    Plotly.newPlot("bar", data, layout);
};