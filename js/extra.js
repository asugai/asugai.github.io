var kkeys = [];
var konami = [
	["38,38,40,40,37,39,37,39,66,65,66,65", "photo.jpg"],
	["38,38,40,40,37,39,37,39,65,66,65,66", "photo2.jpg"],
	["80,79,76,73,65,75,79,86", "poliakov.jpg"]
];

$(document).ready(function() {
	$(".wrap").fadeTo("slow", 1.0);
	
	// $(".backgrounder").hover(function() {
	// 	$("html").attr("style", "background: url(/images/backgrounds/"+$(this).attr("data-image")+") center center fixed no-repeat;");
	// });
	
	$(this).keydown(function(e) {
		kkeys.push(e.keyCode);
		
		for (k in konami) {
			if (kkeys.toString().indexOf( konami[k][0] ) >= 0) {
				givePresent(konami[k][1]);
			}
		}
	});
});

function givePresent(present)
{
	$(".slide1").slideUp("slow", function() {
        $(".slide2").slideUp("slow", function() {
            $(".slide3").slideUp("slow", function() {
                $(".slide4").slideUp("slow", function() {
                    $(".slide5").slideUp("slow", function() {
                        $(".wrap").append("<div style='width: 604px; margin: 100px auto;'><img class='surprise' style='display: none' src='images/"+present+"' /></div>")
                        $(".surprise").fadeTo(1500, 1.0)
                    })
                })
            })
        })
    })
}