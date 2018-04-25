function additionUncertainty() {
	  $(".button-addition").next(".Answer1").remove();
	  var Dx = $("input[name=Dx-add]").val();
	  var Dy = $("input[name=Dy-add]").val();
      var sum = Math.sqrt((Dx * Dx) + (Dy * Dy));
      if(sum == 0) return 0;
      $(".button-addition").after('<p class = "Answer1"> Answer: ' + sum.toFixed(4) + '</p>');
}	

$("input[name=Dx-add], input[name=Dy-add]").keyup(function(event) {
    if (event.keyCode === 13) {
        $(".button-addition").click();
    }
});

$(".button-addition").click(function() {
	additionUncertainty();
 });

// End Of Addition/Subtraction Uncertainty 

function multiplicationUncertainty() {
	$(".button-mult").next(".Answer").remove();
	var Dx = $("input[name=Dx-mult]").val();
	var Dy = $("input[name=Dy-mult]").val();
	var x = $("input[name=x-mult").val();
	var y = $("input[name=y-mult").val();
	var sum = Math.sqrt((x*x*Dy*Dy) + (y*y*Dx*Dx));
	if(sum ==0) return 0;
	$(".button-mult").after('<p class = "Answer"> Answer: ' + sum.toFixed(4) + '</p>');		
}
$("input[name=Dx-mult], input[name=Dy-mult], input[name=y-mult], input[name=x-mult]").keyup(function(event) {
    if (event.keyCode === 13) {
        $(".button-mult").click();
    }
});
$(".button-mult").click(function() {
	multiplicationUncertainty();
})

//End Of Multiplication Uncertainty

function divisionUncertainty() {
	$(".button-div").next(".Answer").remove();
	var Dx = $("input[name=Dx-div]").val();
	var Dy = $("input[name=Dy-div]").val();
	var x = $("input[name=x-div]").val();
	var y = $("input[name=y-div]").val();
	var sum = (Math.sqrt((x*x*Dy*Dy) + (y*y*Dx*Dx))) / (y*y);
	if(sum == 0 || sum !== sum)  return 0; //NaN is unequal to itself, sum !== sum is used to test this.
	$(".button-div").after('<p class = "Answer"> Answer: ' + sum.toFixed(4) + '</p>');		
}
$("input[name=Dx-div], input[name=Dy-div], input[name=y-div], input[name=x-div]").keyup(function(event) {
    if (event.keyCode === 13) {
        $(".button-div").click();
    }
});
$(".button-div").click(function() {
	divisionUncertainty();
})

//End of Division Uncertainty

function powerUncertainty() {
	$(".button-pow").next(".Answer").remove();
	var Dx = $("input[name=Dx-pow]").val();
	var x = $("input[name=x-pow]").val();
	var n = $("input[name=n-pow]").val();
	var sum = (Math.pow(x, n-1))*Dx*n;
	if(sum == 0 || sum !== sum) return 0;
	$(".button-pow").after('<p class = "Answer"> Answer: ' + sum.toFixed(4) + '</p>');	
}
$("input[name=Dx-pow], input[name=n-pow], input[name=x-div]").keyup(function(event) {
    if (event.keyCode === 13) {
        $(".button-pow").click();
    }
});
$(".button-pow").click(function() {
	powerUncertainty();
})


