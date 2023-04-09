function optionChanged(value) {
    console.log(`Selected option: ${value}`);
    updatePlots(value);
}

function updatePlots(value) {
    let subjectInfo = samples.find(obj => obj.id === value);
    let subjectMetaData = metadata.find(obj => obj.id == value);

    let sampleValues = subjectInfo.sample_values.slice(0, 10).reverse();

    let otuIDs = subjectInfo.otu_ids.slice(0, 10).reverse();

    let otuLabels = subjectInfo.otu_labels;

    let washFreq = subjectMetaData.wfreq;
    
    barPlot(sampleValues, otuIDs, otuLabels);
    bubblePlot(otuIDs, sampleValues, otuLabels);
    metaDataFrame(subjectMetaData);
    gaugePlot(washFreq);
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

function metaDataFrame(SD) {
    // Extract metadata properties
    console.log(SD);
    let id = SD.id;
    let ethnicity = SD.ethnicity;
    let gender = SD.gender;
    let age = SD.age;
    let location = SD.location;
    let bbtype = SD.bbtype;
    let wfreq = SD.wfreq;
  
    // Create an HTML string with metadata properties
    let htmlString = `
        <div class="panel-body">
            <p>ID: ${id}</p>
            <p>Ethnicity: ${ethnicity}</p>
            <p>Gender: ${gender}</p>
            <p>Age: ${age}</p>
            <p>Location: ${location}</p>
            <p>BB Type: ${bbtype}</p>
            <p>WFreq: ${wfreq}</p>
        </div>
    `;
  
    // Set the innerHTML of an element with id "sample-metadata" to the metadata HTML string
    document.getElementById("sample-metadata").innerHTML = htmlString;
}
  