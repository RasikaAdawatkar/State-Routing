angular.module('stateRoutingApp')
  .controller('chartCtrl', function ($scope,$http) {
   $(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Availability Of Staff'
        },
        xAxis: {
            categories: [
                'English',
                'French',
                'Hindi',
                'Mathematics',
                'Science'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Staff Strength'
            }
        },
        credits:{
            enabled:false
        },
        tooltip: {
            headerFormat: '<span style="font-size:13px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Available',
            data: [7, 4, 5, 8, 4]

        }, {
            name: 'On Leave',
            data: [0, 1,2, 2, 1]

        }]
    });
});
	
  });