//Gráfico de Linha


/*

new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'grafico',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { year: '2018', value: 642 },
        { year: '2019', value: 845 },
        { year: '2020', value: 345 },
        { year: '2021', value: 467 },
        { year: '2022', value: 750 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});
*/

//Gráfico de barra

new Morris.Bar({
    // ID of the element in which to draw the chart.
    element: 'grafico2',
    // Chart data records -- each entry in this array corresponds to a point on

    // the chart.
    data: [
        { year: '2018', value: 642 },
        { year: '2019', value: 845 },
        { year: '2020', value: 345 },
        { year: '2021', value: 467 },
        { year: '2022', value: 750 }
    ],


    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value'],

    barColors: [
        { color: 'Red' },


    ]


});



//Gráfico de pizza

/*
new Morris.Donut({
    // ID of the element in which to draw the chart.
    element: 'grafico3',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { year: '2018', value: 642 },
        { year: '2019', value: 845 },
        { year: '2020', value: 345 },
        { year: '2021', value: 467 },
        { year: '2022', value: 750 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});
*/

//Grafico de area
/*
new Morris.Area({
    // ID of the element in which to draw the chart.
    element: 'grafico4',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { year: '2018', value: 642 },
        { year: '2019', value: 845 },
        { year: '2020', value: 345 },
        { year: '2021', value: 467 },
        { year: '2022', value: 750 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});
*/