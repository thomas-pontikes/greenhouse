
$(function () {
    // Get the context of the canvas element we want to select
    var option = {
        responsive: true,
        scaleShowLabels: true,
        scaleLabel: "<%=value%>",
        showTooltips: true

    };

    var data1 = [
        {
            value: 13.333,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Energy Absolute PCL (EA-R:SET)"
        },
        {
            value: 33.33,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "First Solar Inc (FSLR)"
        },
        {
            value: 26.67,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "GCL-Poly Energy Holdings Ltd (3800:HKG)"
        },
         {
            value: 20,
            color: "#bc42f4",
            highlight: "#FFC870",
            label: "Xinyi Solar Holdings Ltd (968:HKG) "
        },
         {
            value: 6.67,
            color: "#4286f4",
            highlight: "#FFC870",
            label: "Atlantica Yield PLC (ABY) "
        }
    ];

        var data2 = [
        {
            value: 35,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "AAPL"
        },
        {
            value: 15,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "GOOG"
        },
        {
            value: 25,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "AMZN"
        },
         {
            value: 25,
            color: "#bc42f4",
            highlight: "#FFC870",
            label: "FB"
        }
    ];
    try {
        var ctx = document.getElementById("asset-allocation").getContext('2d');
        var myPieChart = new Chart(ctx).Pie(data2,option);
    } catch(err) {

    }

    try {
        var ctx = document.getElementById("asset-allocation3").getContext('2d');
        var myPieChart = new Chart(ctx).Pie(data1,option);
    } catch(err) {
        
    }

    var ctx2 = document.getElementById("asset-allocation2").getContext('2d');
    var myPieChart2 = new Chart(ctx2).Pie(data1,option);


});



function clickCounterLike() {
    var currValue = document.getElementById("like-count").innerHTML;
    document.getElementById("like-count").innerHTML = parseInt(currValue)+1;
}

function clickCounterDislike() {
    var currValue = document.getElementById("dislike-count").innerHTML;
    
    document.getElementById("dislike-count").innerHTML = parseInt(currValue)+1;
}