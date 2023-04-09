function gaugePlot(wf) {
    let trace4 = {
        type: "indicator",
        mode: "gauge",
        value: wf,
        title: { text: "Belly Button Washing Frequency", font: { size: 24 } },
        needle: "red",
        colorscales: "greens",
        gauge: {
            axis: { range: [null, 10], tickwidth: 1},
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
                { range: [0, 1]},
                { range: [1, 2]},
                { range: [2, 3]},
                { range: [3, 4]},
                { range: [4, 5]},
                { range: [5, 6]},
                { range: [6, 7]},
                { range: [7, 8]},
                { range: [8, 9]},
                { range: [9, 10]}
            ],
        }
    };

    let data4 = [trace4];

    Plotly.newPlot('gauge', data4);

};