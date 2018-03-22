// JavaScript Document
            $(".item-1").click(function(){
			$(this).parent().find(".nav-second").slideToggle(500);
			$(this).children("i").toggleClass("unfold");
		});
	       $(".item-2").click(function(){
			$(this).parent().find(".nav-three").slideToggle(500);
		    $(this).children("i").toggleClass("unfold");
		});
		   $(".item-3").click(function(){
			$(this).parent().find(".nav-four").slideToggle(500);
		    $(this).children("i").toggleClass("unfold");
		});
		 
		   

 