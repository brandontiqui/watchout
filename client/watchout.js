// start slingin' some d3 here.
var gameOptions = {
  height: 450,
  width: 700,
  nEnemies: 30,
  padding: 20
};

var gameStats = {
  score: 0,
  bestScore: 0
};

var svgContainer = d3.select('body').append('svg')
  .attr('width', 200)
  .attr('height', 200);

//Draw the Circle
var circle = svgContainer.append('circle')
  .attr('cx', 30)
  .attr('cy', 30)
  .attr('r', 20)
  .style('fill', 'blue');

var data = [svgContainer, svgContainer, svgContainer]; 


d3.select('body')
  .selectAll('svg')
  .data(data)
  .enter()
  .append('svg')
  .text(function(d) { return d; });



circleRadii = [90, 50, 70, 40, 20, 10, 5, 4];

var svgContainer = d3.select('body').append('svg')
  .attr('width', 1000)
  .attr('height', 1000);

var circles = svgContainer.selectAll('circle')
  .data(circleRadii)
  .enter()
  .append('circle');

var circleAttributes = circles
  .attr('cx', 100)
  .attr('cy', 100)
  .attr('r', function (d) { return d; })
  .style('fill', function(d) {
    var returnColor;
    if (d === 40) { 
      returnColor = 'green'; 
    } else if (d === 20) { 
      returnColor = 'purple';
    } else if (d === 10) { 
      returnColor = 'red'; 
    }
    return returnColor;
  });