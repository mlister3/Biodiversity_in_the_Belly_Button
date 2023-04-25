# Biodiversity_of_the_Belly_Button
## Deployed Dashboard

Welcome to the Belly Button Biodiversity Dashboard.

- Following the instructions below in the "Instructions" section, a dashboard was created and deployed that you can use and interact with on this site [https://mlister3.github.io/Biodiversity_of_the_Belly_Button/](https://mlister3.github.io/Biodiversity_of_the_Belly_Button/)

- If you wish to view the HTML, please see the [index.html](index.html) file.

- To see the JavaScript involved with the dashboard, please see the [JS page](AppFiles/static/js).

## Instructions

1. Use the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    - Use `sample_values` as the values for the bar chart.

    - Use `otu_ids` as the labels for the bar chart.

    - Use `otu_labels` as the hovertext for the chart.

See below:

![Horizontal Bar Chart](Images/hw01.png)

3. Create a bubble chart that displays each sample.

    - Use `otu_ids` for the x values.

    - Use `sample_values` for the y values.

    - Use `sample_values` for the marker size.

    - Use `otu_ids` for the marker colors.

    - Use `otu_labels` for the text values.

See below:

![Bubble Chart](Images/bubble_chart.png)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

See below:

![Demographics](Images/hw03.png)

6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

See below:

![Dashboard](Images/hw02.png)

7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

Advanced Challenge

- Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/Links to an external site. to plot the weekly washing frequency of the individual.

- You will need to modify the example gauge code to account for values ranging from 0 through 9.

- Update the chart whenever a new sample is selected.

See below:

![Gauge Chart](Images/gauge.png)

- - -

## References

Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

- - -

© 2023 edX Boot Camps LLC