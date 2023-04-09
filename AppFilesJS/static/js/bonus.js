function gaugePlot(wash) {
    let trace3 = {
        type: "indicator",
        mode: "gauge",
        value: wash,
        title: { text: "Speed", font: { size: 24 } },
        delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
        gauge: {
            axis: { range: [null, 500], tickwidth: 1, tickcolor: "darkblue" },
            bar: { color: "darkblue" },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
                { range: [0, 250], color: "cyan" },
                { range: [250, 400], color: "royalblue" }
            ],
            threshold: {
            line: { color: "red", width: 4 },
            thickness: 0.75,
            value: 490
            }
        }
    };

    let data3 = [trace3];

};