
$(function () {
    // Get the context of the canvas element we want to select
    var option = {
        responsive: true,
        scaleShowLabels: true,
        scaleLabel: "<%=value%>",
        showTooltips: true

    };

    var data = [
        {
            value: 20,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 40,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
         {
            value: 30,
            color: "#bc42f4",
            highlight: "#FFC870",
            label: "Yellow"
        },
         {
            value: 10,
            color: "#4286f4",
            highlight: "#FFC870",
            label: "Yellow"
        }
    ];

    var ctx = document.getElementById("asset-allocation").getContext('2d');
    var ctx2 = document.getElementById("asset-allocation2").getContext('2d');
    var myPieChart = new Chart(ctx).Pie(data,option);
    var myPieChart2 = new Chart(ctx2).Pie(data,option);


});