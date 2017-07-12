/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
$(function() {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});



function addInput(divName) {
    var newdiv = document.createElement('div');
    newdiv.innerHTML =  '<input name="ticker[]" type="text" maxlength="10" id="tickerName"/><input name="percent[]" type="text" maxlength="10" id="percentage"/>';
    document.getElementById(divName).appendChild(newdiv);
}

function readValues() {
    var ticks = [];
    var percents = [];
    var descendants = document.getElementById("allocations").getElementsByTagName('*');
    var ctr=0;
    var i;
    for(i=1; i<descendants.length; i+=3) {
        ticks.push(descendants[i].value);
    }
    for(i=2; i<descendants.length; i+=3) {
        percents.push(parseFloat(descendants[i].value));

    }
    return [ticks, percents];
}

function normalizePercents(percents) {
    var sum = percents.reduce(function(a, b) { return a + b; }, 0);
    return percents.map(function(e) { return e/sum; });

}

color = ["#f20909", "#fc8e07", "#f9f104", "#08ef04"];
highlight = ["#f23232", "#f2a241", "#f9f340", "#4def4a"];

function formatData(value, color, highlight, labels) {
    var data = [];
    for(var i=0; i<value.length; i++) {
        curr = { value: value[i], color: color[i], highlight: highlight[i], label: labels[i] };
        data.push(curr);
    }
    return data;

}

function myFunction() {
    var res = readValues();
    var ticks = res[0];
    var percents = res[1];
    var pcts = normalizePercents(percents);
    document.getElementById("stockinfo").innerHTML=pcts;
    var myCanvas = document.getElementById("piechart");
    var ctx = myCanvas.getContext('2d');
    var data = formatData(pcts, color, highlight, ticks);
    console.log(data);
    var option = {
        responsive: true,
        scaleShowLabels: true,
        scaleLabel: "<%=value%>",
        showTooltips: true
    };
    var myPieChart = new Chart(ctx).Pie(data, option);

}
