function gaugePlot(wf) {
   
    let base_chart = {
        // Chart data
        values: [5.6, 5.6, 5.6, 5.6, 5.6, 5.6, 5.6, 5.6, 5.6, 49.6],
        labels: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", " "],
        // Chart color set
        marker: {
            colors: 
                ["rgba(248, 243, 236, 100)",
                "rgba(244, 241, 229, 100)",
                "rgba(233, 230, 202, 100)",
                "rgba(229, 231, 179, 100)",
                "rgba(213, 228, 157, 100)",
                "rgba(183, 204, 146, 100)",
                "rgba(140, 191, 136, 100)",
                "rgba(138, 187, 143, 100)",
                "rgba(133, 180, 138, 100)",
                "rgba(255, 255, 255, 0)"
                ],
        },
        // Chart sizing
        rotation: -90.72,
        direction: "clockwise",
        name: "gauge",
        hole: 0.45,
        type: "pie",
        // Data Sort
        sort: false,
        showlegend: false,
        hoverinfo: "none",
        textinfo: "label",
        textposition: "inside"
        //needle: {
        //    value: wf,
        //    rotation: -90.72,
        //    thickness: 0.2,
        //    line: {
        //        color: "black",
        //        width: 3
        //    },
        }

    let data4 = [base_chart];

    let title = {
        margin: { t: 60 },
        title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week", font: { size: 18 } },
        shapes: [{
            type: 'path',
            path: 'M 0.5 0.52 L 0.52 0.5 L 0.5 0.5 Z',
            fillcolor: 'red',
            line: {
                color: 'red'
            },
            //xref: 'paper',
            //yref: 'paper',
            //x0: 0.45,
            //x1: 0.55,
            //y0: 0.25,
            //y1: 0.85
    }]
    }

Plotly.newPlot('gauge', data4, title);

};