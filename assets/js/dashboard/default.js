


Chart.defaults.global = {
    animation: true,
    animationSteps: 60,
    animationEasing: "easeOutIn",
    showScale: true,
    scaleOverride: false,
    scaleSteps: null,
    scaleStepWidth: null,
    scaleStartValue: null,
    scaleLineColor: "#eeeeee",
    scaleLineWidth: 1,
    scaleShowLabels: true,
    scaleLabel: "<%=value%>",
    scaleIntegersOnly: true,
    scaleBeginAtZero: false,
    scaleFontSize: 12,
    scaleFontStyle: "normal",
    scaleFontColor: "#717171",
    responsive: true,
    maintainAspectRatio: true,
    showTooltips: true,
    multiTooltipTemplate: "<%= value %>",
    tooltipFillColor: "#333333",
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
    tooltipFontSize: 14,
    tooltipFontStyle: "normal",
    tooltipFontColor: "#fff",
    tooltipTitleFontSize: 16,
    TitleFontStyle : "Raleway",
    tooltipTitleFontStyle: "bold",
    tooltipTitleFontColor: "#ffffff",
    tooltipYPadding: 10,
    tooltipXPadding: 10,
    tooltipCaretSize: 8,
    tooltipCornerRadius: 6,
    tooltipXOffset: 5,
    onAnimationProgress: function() {},
    onAnimationComplete: function() {}
};
var pieData = [
    {
        value: 300,
        color: "#ab8ce4",
        highlight: "#ab8ce4",
        label: "Primary"
    },
    {
        value: 50,
        color: "#26c6da",
        highlight: "#26c6da",
        label: "Secondary"
    },
    {
        value: 100,
        color: "#FF5370",
        highlight: "#FF5370",
        label: "Danger"
    }
];
var pieOptions = {
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    percentageInnerCutout: 0,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};


var doughnutData = [
    {
        value: 15,
        color: "#4aba70",
        highlight: "#4aba70",
        label: "Blood test"
    },
    {
        value: 35,
        color: "#02cccd",
        highlight: "#02cccd",
        label: "Fever meditation"
    },
    {
        value: 200,
        color: "#a5a5a5",
        highlight: "#a5a5a5",
        label: "Malaria treatment complete"
    },
    {
        value: 15,
        color: "#ffbc58",
        highlight: "#ffbc58",
        label: "Sugar test"
    },
    {
        value: 50,
        color: "#81ba00",
        highlight: "#81ba00",
        label: "Bed Rent (On Request)"
    }
];
var doughnutOptions = {
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    percentageInnerCutout: 50,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};
var doughnutCtx = document.getElementById("myDoughnutGraph").getContext("2d");
var myDoughnutChart = new Chart(doughnutCtx).Doughnut(doughnutData, doughnutOptions);


var doughnutData2 = [
    {
        value: 12,
        color: "#4aba70",
        highlight: "#4aba70",
        label: "Blood test"
    },
    {
        value: 30,
        color: "#02cccd",
        highlight: "#02cccd",
        label: "Fever meditation"
    },
    {
        value: 70,
        color: "#a5a5a5",
        highlight: "#a5a5a5",
        label: "Malaria treatment complete"
    },
    {
        value: 12,
        color: "#ffbc58",
        highlight: "#ffbc58",
        label: "Sugar test"
    },
    {
        value: 40,
        color: "#81ba00",
        highlight: "#81ba00",
        label: "Bed Rent (On Request)"
    }
];
var doughnutOptions2 = {
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    percentageInnerCutout: 50,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};
var doughnutCtx2 = document.getElementById("myDoughnutGraph2").getContext("2d");
var myDoughnutChart2 = new Chart(doughnutCtx2).Doughnut(doughnutData2, doughnutOptions2);


$(".pie-colours-1").peity("pie", {
    fill: ["#ff8084", "#02cccd", "#ffbc58", "#a5a5a5"],
    width: '250',
    height: '180'
})

// chartist chart
new Chartist.Line('.ct-4', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
        [5, 9, 7, 8, 5, 3, 5, 4]
    ]
}, {
    low: 0,
    showArea: true
});

// buy sell chart
Chart.defaults.global = {
    animation: true,
    animationSteps: 60,
    animationEasing: "easeOutIn",
    showScale: true,
    scaleOverride: false,
    scaleSteps: null,
    scaleStepWidth: null,
    scaleStartValue: null,
    scaleLineColor: "#eeeeee",
    scaleLineWidth: 1,
    scaleShowLabels: true,
    scaleLabel: "<%=value%>",
    scaleIntegersOnly: true,
    scaleBeginAtZero: false,
    scaleFontSize: 12,
    scaleFontStyle: "normal",
    scaleFontColor: "#717171",
    responsive: true,
    maintainAspectRatio: true,
    showTooltips: true,
    multiTooltipTemplate: "<%= value %>",
    tooltipFillColor: "#333333",
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
    tooltipFontSize: 14,
    tooltipFontStyle: "normal",
    tooltipFontColor: "#fff",
    tooltipTitleFontSize: 16,
    TitleFontStyle : "Raleway",
    tooltipTitleFontStyle: "bold",
    tooltipTitleFontColor: "#ffffff",
    tooltipYPadding: 10,
    tooltipXPadding: 10,
    tooltipCaretSize: 8,
    tooltipCornerRadius: 6,
    tooltipXOffset: 5,
    onAnimationProgress: function() {},
    onAnimationComplete: function() {}
};
var lineGraphData = {
    labels: ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],
    datasets: [{
        label: "My First dataset",
        fillColor: "transparent",
        strokeColor: "#02cccd",
        pointColor: "#02cccd",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#000",
        data: [20, 5, 80, 10, 100, 15,11]
    }, {
        label: "My Second dataset",
        fillColor: "transparent",
        strokeColor: "#a5a5a5",
        pointColor: "#a5a5a5",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#000",
        pointHighlightStroke: "rgba(30, 166, 236, 1)",
        data: [0, 50, 20, 70, 30, 27,15]
    }]
};
var lineGraphOptions = {
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: true,
    pointDotRadius: 4,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};
var lineCtx = document.getElementById("myGraph").getContext("2d");
var myLineCharts = new Chart(lineCtx).Line(lineGraphData, lineGraphOptions);


// sparkline

var sparkline_chart = {
    init: function() {
        setTimeout(function(){
            $("#simple-line-chart-sparkline").sparkline([85, 83, 90, 70, 85, 60, 65, 63, 68, 68, 65, 40, 60, 68, 75, 70, 90], {
                type: 'line',
                width: '100%',
                height: '100%',
                tooltipClassname: 'chart-sparkline',
                lineColor: '#02cccd',
                fillColor: 'transparent',
                highlightLineColor: "#02cccd",
                highlightSpotColor: false,
                targetColor: "#02cccd",
                performanceColor: "#02cccd",
                boxFillColor: "#02cccd",
                medianColor: "#02cccd",
                minSpotColor: false,
                maxSpotColor: false,
                spotColor: false
            });
            $("#simple-line-chart-sparkline-1").sparkline([85, 83, 90, 70, 85, 60, 65, 63, 68, 68, 65, 40, 60, 68, 75, 70, 90], {
                type: 'line',
                width: '100%',
                height: '100%',
                tooltipClassname: 'chart-sparkline',
                lineColor: '#a5a5a5',
                fillColor: 'transparent',
                highlightLineColor: "#a5a5a5",
                highlightSpotColor: false,
                targetColor: "#a5a5a5",
                performanceColor: "#a5a5a5",
                boxFillColor: "#a5a5a5",
                medianColor: "#a5a5a5",
                minSpotColor: false,
                maxSpotColor: false,
                spotColor: false
            });
            $("#simple-line-chart-sparkline-2").sparkline([85, 83, 90, 70, 85, 60, 65, 63, 68, 68, 65, 40, 60, 68, 75, 70, 90], {
                type: 'line',
                width: '100%',
                height: '100%',
                tooltipClassname: 'chart-sparkline',
                lineColor: '#ffbc58',
                fillColor: 'transparent',
                highlightLineColor: "#ffbc58",
                highlightSpotColor: false,
                targetColor: "#ffbc58",
                performanceColor: "#ffbc58",
                boxFillColor: "#ffbc58",
                medianColor: "#ffbc58",
                minSpotColor: false,
                maxSpotColor: false,
                spotColor: false
            });
            $("#simple-line-chart-sparkline-3").sparkline([20, 5, 80, 10, 100, 15], {
                type: 'line',
                width: '100%',
                height: '100%',
                tooltipClassname: 'chart-sparkline',
                lineColor: '#ff8084',
                fillColor: 'transparent',
                highlightLineColor: "#ff8084",
                highlightSpotColor: false,
                targetColor: "#ff8084",
                performanceColor: "#ff8084",
                boxFillColor: "#ff8084",
                medianColor: "#ff8084",
                minSpotColor: false,
                maxSpotColor: false,
                spotColor: false
            });
        });
    }
};
(function($) {
    "use strict";
    sparkline_chart.init()
})(jQuery);
