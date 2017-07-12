
var dom = '<div class="col-lg-12"><div class="col-sm-6">Ticker: <input name="ticker[]" type="text" maxlength="10" id="tickerName" style="text-transform:uppercase"/> </div> <div class="col-sm-6">Precentage: <input name="percent[]" type="text" maxlength="10" id="percentage"/> </div> </div>'
var tickers='';


function getMarketData(symbol, callback) {

    url = 'http://marketdata.websol.barchart.com/getQuote.json?key=5cd9c10730f7b5769d7c722e76755b3a&symbols=' + symbol;
        console.log(url);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": 'http://marketdata.websol.barchart.com/getQuote.json?key=5cd9c10730f7b5769d7c722e76755b3a&symbols=' + symbol,
        "method": "GET",
        "headers": {
            "cache-control": "no-cache"
        }
    };

    $.getJSON(settings).done(function (response) {
        return callback(response.results)
    });

}

$('#create').click(function(){

    $('#asset_list').find('input[name=ticker]').each(function(){
        tickers +=this.value + ',';
    });

    getMarketData(tickers,function(data){
        console.log(data)
    })


});



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






