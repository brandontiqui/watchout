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

// Watch out for scaleLinear if it's up to date
var axes = {
  x: d3.scale.linear().domain([0, 100]).range([0, gameOptions.width]),
  y: d3.scale.linear().domain([0, 100]).range([0, gameOptions.height])
};

var gameBoard = d3.select('.board')
.append('svg:svg')
.attr('width', gameOptions.width)
.attr('height', gameOptions.height); 

var player = function() {
  // Fill in the path later
  this.fill = '#ff6600'; 
  this.x = 0; 
  this.y = 0; 
  this.angle = 0; 
  this.r = 5;
}; 

var createEnemies = function() {
  var results = []; 
  for (var i = 0; i < gameOptions.nEnemies; i++) {
    var enemy = {}; 
    enemy.id = i;
    enemy.x = Math.random() * 100;
    enemy.y = Math.random() * 100; 
    results.push(enemy); 
  }
  return results; 
}; 

var render = function(enemyData) {
  var enemies = gameBoard.selectAll('circle.enemy')
  .data(enemyData, function(d) { return d.id; }); 

  enemies.enter()
  .append('svg:circle')
  .attr('class', 'enemy')
  .attr('cx', function(enemy) {
    return axes.x(enemy.x);
  })
  .attr('cy', function(enemy) {
    return axes.y(enemy.y);
  })
  .attr('r', 15)
  .style('fill', 'black');

  enemies.exit().remove(); 
}; 


render(createEnemies()); 

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


// d3.select('body')
//   .selectAll('svg')
//   .data(data)
//   .enter()
//   .append('svg')
//   .text(function(d) { return d; });



// circleRadii = [90, 50, 70, 40, 20, 10, 5, 4];

// var svgContainer = d3.select('body').append('svg')
//   .attr('width', 1000)
//   .attr('height', 1000);

// var circles = svgContainer.selectAll('circle')
//   .data(circleRadii)
//   .enter()
//   .append('circle');

// var circleAttributes = circles
//   .attr('cx', 100)
//   .attr('cy', 100)
//   .attr('r', function (d) { return d; })
//   .style('fill', function(d) {
//     var returnColor;
//     if (d === 40) { 
//       returnColor = 'green'; 
//     } else if (d === 20) { 
//       returnColor = 'purple';
//     } else if (d === 10) { 
//       returnColor = 'red'; 
//     }
//     return returnColor;
//   });