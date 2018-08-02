// Scroll Effects Javascript
// Made using ScrollMagic
//
$(document).ready(function() {

  var controller = new ScrollMagic.Controller()
  // build tween
  var tween1 = TweenMax.to("#animate1", 1, {className: "+=large"});
  var undoTween1 = TweenMax.to("#animate1", 1, {className: "-=large"});
  var tween2 = TweenMax.to("#animate2", 1, {className: "+=large"});
  var undoTween2 = TweenMax.to("#animate2", 1, {className: "-=large"});
  var tween3 = TweenMax.to("#animate3", 1, {className: "+=large"});
  var undoTween3 = TweenMax.to("#animate3", 1, {className: "-=large"});
  var tween4 = TweenMax.to("#animate4", 1, {className: "+=large"});
  var undoTween4 = TweenMax.to("#animate4", 1, {className: "-=large"});
  var tween5 = TweenMax.to("#animate5", 1, {className: "+=large"})
  // build scenes
  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: 200,
    offset: -50
  }).setTween(tween1)
  var undoScene1 = new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    duration: 200,
    offset: -50
  }).setTween(undoTween1)
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    duration: 200,
    offset: -50
  }).setTween(tween2)
  var undoScene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger3",
    duration: 200,
    offset: -50
  }).setTween(undoTween2);   
  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#trigger3",
    duration: 200,
    offset: -50
  }).setTween(tween3)
  var undoScene3 = new ScrollMagic.Scene({
    triggerElement: "#trigger4",
    duration: 200,
    offset: -50
  }).setTween(undoTween3);
  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#trigger4",
    duration: 200,
    offset: -50
  }).setTween(tween4)
  var undoScene4 = new ScrollMagic.Scene({
    triggerElement: "#trigger5",
    duration: 200,
    offset: -50
  }).setTween(undoTween4);
  var scene5 = new ScrollMagic.Scene({
    triggerElement: "#trigger5",
    duration: 200,
    offset: -50
  }).setTween(tween5);
           
  
  controller.addScene([
    scene1,
    undoScene1,
    scene2,
    undoScene2,
    scene3,
    undoScene3,
    scene4,
    undoScene4,
    scene5
   ]);

});
