// start slingin' some d3 here.
var gameOptions = {
  height: 450,
  width: 700,
  nEnemies: 12, // testing
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

// init circle position
var x = 100; 
var y = 20; 

var drag = d3.behavior.drag()
.on('drag', function(d, i) {
  d.x += d3.event.dx;
  d.y += d3.event.dy;
  d3.select(this).attr('transform', function(d, i) {
    return 'translate(' + [ d.x, d.y ] + ')'; 
  });
});

// var drag = d3.behavior.drag();

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
  .style('fill', 'black')
  .transition().duration(2000);

  enemies.exit().remove(); 

}; 

var createEnemyPositions = function() {

  var xVal = Math.random() * 100;
  var yVal = Math.random() * 100;
};

var postRender = function(enemyData) {
  var enemies = gameBoard.selectAll('circle.enemy')
  .data(enemyData, function(d) { return d.id; }); 

  enemies
  .attr('class', 'enemy').transition().duration(2000)
  .attr('cx', function(enemy) {
    return axes.x(enemy.x);
  })
  .attr('cy', function(enemy) {
    return axes.y(enemy.y);
  })
  .attr('r', 15)
  .style('fill', 'black')
  .call(drag);
  

  enemies.exit().remove(); 

}; 

render(createEnemies());


setInterval(function() {
  postRender(createEnemies());
}, 2000); 

// var alertt = function() {
//   // console.log('in');
//   var enemies;
//   setInterval(function() {
//     // render(createEnemies());
//     // call createEnemies to get new positions
//     // enemies = createEnemies();
//     // console.log(enemies);
//     // render(enemies);
//     // call render with new positions
//   }, 3000);
// };
// alertt();

// var newEnemies = render(createEnemies()); 
// newEnemies(); 
// setInterval(newEnemies, 1000);


var svgContainer = d3.select('body').append('svg')
  .attr('width', 1000)
  .attr('height', 1000);

// //Draw the Circle

var circle = svgContainer.append('circle')
  // .attr('cx', x)
  // .attr('cy', y)
  .data([ {'x': 100, 'y': 100} ])
  .attr('transform', 'translate(' + x + ',' + y + ')')
  .attr('r', 20)
  .style('fill', 'blue')
  .call(drag);


d3.select('body')
  .selectAll('svg')
  .data(data)
  .enter()
  .append('svg')
  .text(function(d) { return d; });



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