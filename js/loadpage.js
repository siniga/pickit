
// JavaScript Document
//bind click events from orderpage
$(document).ready(function(e) {
	 var height = 500;
	 $("#orderBtn").click(function(){
		 $(".cut-main-cont").load("order.html");
	    $(".wrapperInner").css("height",height);
	 })
	
	
    
    
});
//bind addmore buttton from order page
 $(document).on("click","#addMoreBtn",function(){
		
        $("#appendAddons").append('<div class="col-xs-6">'
		                         +'<input type="text" class="form-control input-sm" placeholder="Food name"/></div>'
                                 +'<div class="col-xs-6"><input type="text" class="form-control input-sm" placeholder="Quantity"/>                                  </div>');
								
		 return false;
		 
 })
 
$(document).on('click', '#clicki',function(){
			       
     $(".wrapperInner").load("kuku.html");
				
	return false;
 
});
function loadPages(){
	var btnClikced;
	if(btnClikced){}
}