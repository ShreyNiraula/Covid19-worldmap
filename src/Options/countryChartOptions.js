export const countryChartOptions = {
  chart: {
    type: "spline",
  },

  title: {
    text: "Chart",
  },

  // subtitle: {
  //     text: 'chart sub'
  // },

  yAxis: {
    title: {
      text: "Date",
    },
  },

  xAxis: {
    title: {
      text: "Days",
    },
    accessibility: {
      rangeDescription: `Corona Case`,
    },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
    },
  },

  series: [
    {
      name: "Cases",
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    },
  ],

  // responsive: {
  //     rules: [{
  //         condition: {
  //             maxWidth: 500
  //         },
  //         chartOptions: {
  //             legend: {
  //                 layout: 'horizontal',
  //                 align: 'center',
  //                 verticalAlign: 'bottom'
  //             }
  //         }
  //     }]
  // }
};
