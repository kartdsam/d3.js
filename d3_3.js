function d3_3()
{
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);
    var parseTime = d3.timeParse("%Y年");
    var ctrl = d3.select('body').append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform","translate(" + margin.left + "," + margin.top + ")");

    d3.csv("https://kartdsam.github.io/d3.js/翡翠水庫水質資料.csv", 
    function(data)
    {
        var ln = data.length;
        console.log(data);
        var max = d3.max(data, function(d){ return d.Cha; });
        console.log(max);
        var lines = d3.line()
            .x(function(d,i){return i*(width/ln);})
            .y(function(d){return height-d.Cha*height/max});
        ctrl.append("path").data([data])
            .attr("d", lines)
            .attr("stroke", "purple")
            .attr("fill", "none")
            .attr("stroke-width",3);
            x.d3.time.scale().domain([new Date(2013, 0, 0), new Date(2016, 9, 0)]).range([0, width]);
            y.domain([0, d3.max(data, function(d) { return d.Cha; })]);
            ctrl.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x));
            ctrl.append("g").call(d3.axisLeft(y));

    }

);
}

    
    


