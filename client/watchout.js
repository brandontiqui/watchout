// start slingin' some d3 here.
var gameOptions = {
  height: 450,
  width: 700,
  nEnemies: 30, // testing
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
  .attr('r', 5)
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
  .style('fill', 'black');
  // .call(drag);
  

  enemies.exit().remove(); 

}; 

render(createEnemies());


setInterval(function() {
  postRender(createEnemies());
}, 2000); 

var x = 100; 
var y = 20;
var circle = gameBoard.selectAll('circle.player')
  // .attr('cx', x)
  // .attr('cy', y)
  .data([ {'x': x, 'y': y} ])
  .enter()
  .append('svg:circle') // try
  .attr('transform', 'translate(' + x + ',' + y + ')')
  .attr('r', 20)
  .style('fill', 'blue')
  .call(drag);
