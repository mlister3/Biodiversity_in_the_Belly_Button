function gaugePlot(wash) {
    let trace3 = {
        type: "indicator",
        mode: "gauge",
        value: wash,
        title: { text: "Belly Button Washing Frequency", font: { size: 24 } },
        gauge: {
            axis: { range: [null, 500], tickwidth: 1, tickcolor: "darkblue" },
            bar: { color: "darkblue" },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
                { range: [0, 1], color: "cyan" },
                { range: [1, 2], color: ""},
                { range: [2, 3], color: ""},
                { range: [3, 4], color: ""},
                { range: [4, 5], color: ""},
                { range: [5, 6], color: ""},
                { range: [6, 7], color: ""},
                { range: [7, 8], color: ""},
                { range: [8, 9], color: ""},
                { range: [9, 10], color: "royalblue" }
            ],
        }
    };

    let data3 = [trace3];

    Plotly.newPlot('gauge', data3);

};