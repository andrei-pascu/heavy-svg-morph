











































$(function () {
  //Grab an array of all the main SVG Elements
  var containers = $("#legend");

  //Define some vars that we will use later
  var speed = 4000;
  var animation = mina.linear();

  //Loop through all of these containers and insert the SVG's
  containers.each(function (index) {

    //Get each of our SVG tags
    var addToDiv = Snap("#legend");

    //Define our Paths
    var anim0 = "M143.8,85h-1.4H141h-1.8h-1.7h-2h-2.2h-2.1H129h-2.7h-2.9h-1.7h-2.2h-2.1h-2.1h-1.8h-2.2h-1.7"+
    	"h-2.3h-2.1h-2h-1.6h-1.3h-1.5h-2h-2h-2.1h-1.8h-2h-1.7h-2.1h-1.5H82h-1.5h-1.6h-2h-2.1h-1.8h-1.6h-1.8h-1.7h-1.8h-2.1h-1.5h-1.8"+
    	"h-1.9h-2.1h-2.3h-2.4h-2.3h-1.8H46h-2h-1.6h-2.2h-2.3h-1.8h-1.7h-1.8h-1.8h-1.6h-1.6h-1.6h-1.5h-1.6h-1.4h-1.6h-1.6h-1.1v-1.2v-1.4"+
    	"v-1.6v-2V77v-1.6v-1.8v-2v-2v-2.2v-2.2v-2.3v-2.4v-2.2v-2.6v-2.2v-2.1v-1.9v-1.9v-2.1v-1.9v-2.1v-2v-1.8v-1.9v-1.7v-1.9v-1.9v-1.9"+
    	"v-2.1v-2.1V22v-2.2v-1.8v-2.3v-2.2v-2.6V8.6v-2V4.3V2.3V0h1.8H21h2.1h1.8h1.7h2.1h1.9h1.8h1.7h1.8h2h2H42h2.3h2.3h2h1.7H52h1.5h1.8"+
    	"h1.8h2h2.2h2.1h1.9h2.2h1.7h2.3h2.1h2.1h1.6h2.1h2.2h2h1.4h1.8h1.9h1.9h1.7H94h1.8h2h1.9h1.9h2.1h1.9h2h1.4h1.8h2.1h2.2h2.1h2.4h2.5"+
    	"h2.2h1.9h1.7h1.7h2.1h1.9h1.7h1.9h1.6h1.9h1.5h1.6v1.9v1.6v1.4v1.5v2.1v1.6v1.7v1.8v1.7v1.8V19v1.8v1.9v1.9v1.8v2.2v1.9v2.2v1.9v2.6"+
    	"v2.5v2.3v1.8v2v2.2v2.3v2.4v2.1v2.1v2.1v2.2v2.1v2.2v2.1v2.2v2.3v1.7v1.7v1.8v1.8v1.3v1.5v1.4V85z";

    //Define our Hover Paths
    var anim1 ="M143.8,85h-1.4H141h-1.8h-1.7h-2h-2.2h-2.1H129h-2.7h-2.9h-1.7h-2.2h-2.1h-2.1h-1.8h-2.2h-1.7"+
    	"h-2.3h-2.1h-2h-1.6h-1.3h-1.5h-2h-2h-2.1h-1.8h-2h-1.7h-2.1h-1.5H82h-1.5h-1.6h-2h-2.1h-1.8h-1.6h-1.8h-1.7h-1.8h-2.1h-1.5h-1.8"+
    	"h-1.9h-2.1h-2.3h-2.4h-2.3h-1.8H46h-2h-3.3l-22-80.3L41.5,85h-5.4h-1.7h-1.8h-1.8h-1.6h-1.6h-1.6h-1.5h-1.6h-1.4h-1.6h-1.6h-1.1"+
    	"h-4.8H9.5l-3.3,0.3l-0.6-5.1L5,73.1l-1.3-7.6l-0.5-3.3L3,58.9l-0.3-3.4l-0.3-3.9l-0.3-3.4l-0.3-3.5l-0.6-13l3.2-0.3l1.9-0.1l2.1-0.2"+
    	"l1.5-0.2l1.3-0.2l1.1-0.2l1.2-0.1l2.1-0.2l3.9-0.3l6.9,29.6l6,24.8l2.5-0.1L33,71.7l-1.6-6.9l-2-8.2L27.9,49L26.4,43l-1.5-5.5"+
    	"l-1.3-5.3l-1.3-4.3l-1.3-4.5L20,18.8l-0.7-2.9l-1.1-4.1L17.4,9l-0.7-2.3L16.2,5l1.5-3.9l3.2,2.5l2.4,6.9l0.8,3.1l0.7,2l1.2,3.6"+
    	"l2.6,8.3l2.4,7l3.9,11.5l1.2,4l9.8,34.5L56,84.5l7.7-5.6l2.4-9.4L66,63.6L65.3,58l-11.5-0.8l2.7-9l5.1-12.6l7.2,0.2l0-2.4l-7.1,0.2"+
    	"l-0.1-3.9l0.9-4.3l1.7-4.3l1.5-4l1.9-2.1l1.2-0.7l1.5-0.8l2.2-1.1l1.8-0.7l2.3-0.9l1.8-0.6l2-0.2l2.1,0.1l2.4,0.5l2.9,1.1l1.7,0.8"+
    	"l1.8,1l1.2,1l1.1,0.9l1.4,1.2l0.8,1l1.6,1.3l1.8,1.5l2.1,2.5l1.2,3.6l-1.5,8.4l-1.1,10.8l-1,11.1l22.5,7.6l-9-39.9l-1.3,0.8"+
    	"l-6.3-8.3l-2.6-2.5l-1.7-3.3l0.3-3.8l1.9-1.9l3.3-1l3.6,1L112,7l1.6,1.9l0.8,2.5l1.5,2.4l1.7,3.1l1.5,1.7l-0.8,2l2,3.7l1.5,3.3"+
    	"l1.5,4l1.3,3.3l1.4,3l1.3,2.7l1.4,2.1l1.3,1.9l2.5,3.4l1.4,2.1l1.4,2.4l1.5,2.3l1.3,3.1l1,2.6l1.5,3.3l0.8,3l0.3,1.2l0.1,1.5"+
    	"l-0.2,1.1l-0.4,1l-0.5,0.6l-0.8,1l-0.8,1l-0.8,1.1l-0.4,1l-0.6,1.4l-0.8,0.6l-0.9,0.5l-0.7,0.5l-1.3,0.8l-1.5,0.8l-1.2,0.6l-0.5,0.1"+
    	"l-0.8,0.1l-0.9,0.3l-1.1,0.1l-1.6,0.5l-2.4,2.2l3.3-0.1l2,0l3-0.1h2.9l3.1,0h4.1L143.8,85z" ;

    //Define our path after timeout
    var anim2 ="M154.7,32.7l-6.1,28l-1.8,8.6l-1.6,3.9l-2.2,2.9l-6.8,4l-5.3,0.8l-1.5,0.4l-1.6,0.4h-2.6"+
    	"l-3.2,0.1l-3.2-0.8l-2.5-0.9l-2.1-1.9l-2.8-2.1l-3.1-1.7l3,10.5h-1.7h-2.3h-2.1h-2h-1.6h-1.3h-1.5h-2h-2h-2.1h-1.8h-2h-1.7h-2.1"+
    	"h-1.5H82h-1.5h-1.6h-2h-2.1h-1.8h-1.6h-1.8h-1.7h-1.8h-2.1h-1.5h-1.8h-1.9h-2.1h-2.3h-2.4h-2.3h-1.8H46h-2h-2.2h-1.8h-2.7h-1.2h-1.7"+
    	"h-1.8h-1.8h-1.6h-1.6h-1.6h-1.5h-1.6h-1.4h-1.6h-1.6h-1.1h-4.8H9.5l1.6-1.3l3.2-1.1l0.9-4.9l-0.6-5.2L14,67.3l-0.9-4l-0.9-5.8"+
    	"l-1.1-12.3l-3.5-0.7l-2.9-15l1.6-0.3l2.6,7.6l1.1-3.7l2,3.4l1.7-2.9l1.6,3.4l1.6-8.5h1.4l0.2,14.7l-4.3,2.1l17.3,36.1l0.7,3l2.5-0.1"+
    	"L33,71.7l-1.6-6.9l-2-8.2L27.9,49L26.4,43l-1.5-5.5l-1.3-5.3l-1.3-4.3l-1.3-4.5L20,18.8l-0.7-2.9l-1.1-4.1L17.4,9l-0.7-2.3l-1.4-5"+
    	"l5.3-0.5l5.1,0.9L29,5.8l1.1,4.6l-2.8,5l-7.1,1.7l3.3,12.1L39.9,2.1l-0.7,12.4l-5.8-1.7l5.8,1.7l2.3,28l0.9,5.2l2.9,3.6l1.8,2"+
    	"l3.6,0.5l4.2-1.6l1.2-2.5l0.8-3.2v-3.3L56,40.4l-1.4-3.2l-2.3-1.8l-1.7-0.9l-2.1-1.7l-0.8-2.4l0.4-2.5l1.5-2.9l2.3-1.4l2.3-0.8"+
    	"l2.4,0.7l2,0.6l4.9,2.1l1.7,3.1l-2.3,1.8l-4.3-4.3L56.8,26l-2.4-0.2L53,26.3L51,28l-0.3,2l1.4,2.3l3.3,2.1l3.9,4.3l1.1,3.8l0.3,3.1"+
    	"l0.2,3.7l-2,3.5l-3.6,2.9l-7.5,0.4l-3.1-1.2l34.8,19.6l21.2,1.1l0.2-1.9l-23.6-2.6l-10.4-7.7l-2.6-6.6l0.9-5.4l2.4-6.8l3.4-6"+
    	"l4.9-4.7l5.6-3.3l5.2-1.9l5.8-1.8l3.7-0.8l2.8,0.1l3.3,0.3l3.3,0.9l-0.8,3.3l-9.5,0.1l-3.4,0.3l-3.8,1.4l-4.3,1.6L80,35.6l-2.9,2.9"+
    	"l-3.1,3l-1.4,3.4l-1.8,4.1l-1.1,4.2l0.8,4.9l4.4,5.6l2.8,2.4l2.7,1.4l3.3,0.7l5.3,0.9l8,0.2l10.8,1.6l0.8-4.3l0.2-3.3l0.5-2.5"+
    	"l0.3-3.5l1.9-5.8l1.4-5.8l1.8-6.2l1.5-8.4l8.3-0.1l-0.9,8.4l-2.3,7.6l-1.9,7.7l-2.5,7.4l-0.8,8.2l2.2,0.7l2.4,1.3l6.8-0.3l4.8-0.6"+
    	"l5.3-1.6l3.9-6.1l1.6-7.4l1.3-8l0.5-8.3l0.6-8.1L154.7,32.7z";
    var anim3 = "M99.067,99.034H1.271l3.396-2.202v-4.5L9,91.165l-0.833-7"+
    "l6.167,0.667l-2-5.167l6.167,0.5l-1.333-6l6.833-0.5l-1-7.333l9.667,0.333l-3.5-5.5l6.667,1.333l2.333-6.833L51.5,51.332l7.333-12.5"+
    "l19.334-4.667L64.833,12.998L93.5,14.332l5.567-13.094l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0"+
    "l0,0l0,0l0,0l0,0V99.034z";
    //Load up the default paths in the SVG
    var addSvg = addToDiv.path(anim0);

    addSvg.attr({
    //  fill: "#16841c"
    });

    //Let's group our paths, it doesn't seem like you can animate the whole group though :(
    var paths = addToDiv.group(addSvg);


    var click = 0;
    //Animate on Mouse Leave, return the paths to the default
    var path = document.querySelector('#legendary svg path');
    var length = path.getTotalLength();

    $('#main').click(function () {
      $('#loader').css({'transition':'0s linear','transform':'translateX(-100vw)'});
      setTimeout(function() {
      $('#loader').css({'transition':'18.3s linear','transform':'translateX(0)'});
    }, 10);
      $('#toDo').css({'background-color':'rgba(0,0,0,0)'});
      $('#toDo p').css({'opacity':'0'});
      setTimeout(function() {
        $('#legend').css({'filter':'hue-rotate(90deg)'})
        addSvg.animate({path: anim1}, speed, animation);
      }, 500);
      setTimeout(function() {
        $('#legend').css({'filter':'hue-rotate(210deg)'})
        addSvg.animate({path: anim2}, speed, animation);
      }, 7500);
      setTimeout(function() {
        $('#legend').css({'filter':'hue-rotate(360deg)'})
        addSvg.animate({path: anim0}, speed, animation);
      }, 14500);
      setTimeout(function() {
        $('#toDo').css({'background-color':'rgba(0,0,0,0.5)'});
        $('#toDo p').css({'opacity':'1'});
      }, 19000);





      // setTimeout(function() {
      //   $('#legend').css({'filter':'hue-rotate(360deg)'})
      //   addSvg.animate({path: anim0}, speed, animation);
      // }, 6350);
  });





  });
});
//  $('#legendary').css({'stroke-dasharray':'0','stroke-dashoffset':'0'});
//  $('#legendary').css({'stroke-dasharray':length,'stroke-dashoffset':length});
