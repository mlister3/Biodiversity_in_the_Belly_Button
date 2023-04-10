function gaugePlot(wf) {
    // Define the trace data
    let trace4 = {
        type: "indicator",
        mode: "gauge",
        value: wf,
        title: { text: "Belly Button Washing Frequency", font: { size: 24 } },
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

    let layout = {
        shapes: [{
            type: 'path',
            path: 'M 0.5 0.52 L 0.5 0.82 L 0.52 0.8 Z',
            fillcolor: 'red',
            line: {
                color: 'red'
            },
            xref: 'paper',
            yref: 'paper',
            x0: 0.45,
            x1: 0.55,
            y0: 0.25,
            y1: 0.85
        }]
    };

    // Create the plot
    let plot = Plotly.newPlot('gauge', data4, layout);

    // Update the needle position based on wf
    Plotly.update('gauge', {shapes: [{
        type: 'path',
        path: 'M 0.5 0.52 L 0.5 ' + (0.52 + 0.3 * wf / 10) + ' L 0.52 ' + (0.5 + 0.28 * wf / 10) + ' Z',
        fillcolor: 'red',
        line: {
            color: 'red'
        },
        xref: 'paper',
        yref: 'paper',
        x0: 0.45,
        x1: 0.55,
        y0: 0.25,
        y1: 0.85
    }]});
}
