
var $check = $(".check"),
	$btn = $(".btn"),
	$circleBtn = $(".circleBtn"),
	$body = $("body")
	;



$check.on("click", onOff) ;

function onOff(){

	if($check.prop('checked')){

		$btn.addClass("btnOn") ;
		$circleBtn.addClass("circleBtnOn") ;
		$body.css("background-color","yellow");
	
	}
	else{

		$btn.removeClass("btnOn") ;
		$circleBtn.removeClass("circleBtnOn") ;
		$body.css("background-color","#111");
	
	}

}

