$(document).ready(function() {
$("._ventStats").on("changed.bs.select",
        function(e, clickedIndex, newValue, oldValue) {
            var selected = clickedIndex;
                $(this).parents("#section3").find("._states").hide();
				$(this).parents("#section3").find("#_state"+selected).show();
        });
	$("#navbarNav .nav-item").click(function(){
		  $(this).parents(".navbar-nav").find(".nav-item").removeClass("active");
		  $(this).addClass("active");
	});
	
	});