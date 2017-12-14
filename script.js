$(document).ready(startUp);


//console.log('JS');


function startUp(){
  //console.log('JQ');
  $('#button').on( 'click', blurFunction);
  $('#reset').on( 'click', reset);

  $('#hueButton').on('click', testFunc);


}//end startUp


function blurFunction(){
    console.log('inside my blur function');
  $('img').css("filter","blur(8px)");

}//end blur

function reset(){
  console.log('reset!');
  $('img').css('filter', 'blur(0px)');
}//end reset

function testFunc(){
  console.log('in rotate');
  $('img').css("filter","hue-rotate(180deg)");
}





/*
hue-rotate(120deg);

("#btnid").click(function(){
  $('body').css("filter","blur(2px)");
});



*/
