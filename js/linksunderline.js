// JavaScript Document

$(document).ready(function(){
  $(".freshFoodLnk").click(function(){
        $(".activeLeft").removeClass("active");
	    $(".activeRight").addClass("active");
  });
  
   $(".cookedFoodLnk").click(function(){
        $(".activeRight").removeClass("active");
	    $(".activeLeft").addClass("active");
  });
});