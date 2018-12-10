$(document).ready(function(){
    var last_opened = "#intro";
    $("#p_gallery").click(function(){
        if (last_opened != "#c_gallery") {
        $(last_opened).hide("slide", {direction: "right", easing:"easeInQuad" }, 1000);
        $("#c_gallery").show("slide", {direction: "left", easing:"easeOutQuad" }, 1000);
        last_opened = "#c_gallery";
        }
    });
    $("#p_illustration").click(function(){
        if (last_opened != "#c_illustration") {
        $(last_opened).hide("slide", {direction: "right", easing:"easeInQuad" }, 1000);
        $("#c_illustration").show("slide", {direction: "left", easing:"easeOutQuad" }, 1000);
        last_opened = "#c_illustration";
        }
    });
    $("#p_design").click(function(){
        if (last_opened != "#c_design") {
        $(last_opened).hide("slide", {direction: "right", easing:"easeInQuad" }, 1000);
        $("#c_design").show("slide", {direction: "left", easing:"easeOutQuad" }, 1000);
        last_opened = "#c_design";
        }
    });
    $("#design_portfolio").click(function(){
        if (last_opened != "#c_design_portfolio") {
        $(last_opened).hide("slide", {direction: "right", easing:"easeInQuad" }, 1000);
        $("#c_design_portfolio").show("slide", {direction: "left", easing:"easeOutQuad" }, 1000);
        last_opened = "#c_design_portfolio";
        }
    });
    $("#p_commission").click(function(){
        if (last_opened != "#c_commission") {
        $(last_opened).hide("slide", {direction: "right", easing:"easeInQuad" }, 1000);
        $("#c_commission").show("slide", {direction: "left", easing:"easeOutQuad" }, 1000);
        last_opened = "#c_commission";
        }
    });
    $("#p_resume").click(function(){
        if (last_opened != "#c_resume") {
        $(last_opened).hide("slide", {direction: "right", easing:"easeInQuad" }, 1000);
        $("#c_resume").show("slide", {direction: "left", easing:"easeOutQuad" }, 1000);
        last_opened = "#c_resume";
        }
    });
    $("#p_bio").click(function(){
        if (last_opened != "#c_bio") {
        $(last_opened).hide("slide", {direction: "right", easing:"easeInQuad" }, 1000);
        $("#c_bio").show("slide", {direction: "left", easing:"easeOutQuad" }, 1000);
        last_opened = "#c_bio";
        }
    });
    $("#p_links").click(function(){
        if (last_opened != "#c_links") {
        $(last_opened).hide("slide", {direction: "right", easing:"easeInQuad" }, 1000);
        $("#c_links").show("slide", {direction: "left", easing:"easeOutQuad" }, 1000);
        last_opened = "#c_links";
        }
    });
    $("#p_contact").click(function(){
        if (last_opened != "#c_contact") {
        $(last_opened).hide("slide", {direction: "right", easing:"easeInQuad" }, 1000);
        $("#c_welcome").hide();
        $("#c_contact").show("slide", {direction: "left", easing:"easeOutQuad" }, 1000);
        last_opened = "#c_contact";
        }
    }); 
});

/*function shuffle() {
	var rand_color = '#'+Math.floor(Math.random()*16777215).toString(16);
	$("body").css("background-color",rand_color);
 	var rand_time = Math.floor((Math.random()+1)*200);
    $("#paper1").show("slide", {direction: "left", easing:"linear" }, rand_time).delay(rand_time).hide("slide", {direction: "right", easing:"linear" }, rand_time);
    $("#paper2").show("slide", {direction: "right", easing:"linear" }, rand_time-50).delay(rand_time-50).hide("slide", {direction: "left", easing:"linear" }, rand_time+50);
    $("#paper3").show("slide", {direction: "left", easing:"linear" }, rand_time+50).delay(rand_time+50).hide("slide", {direction: "right", easing:"linear" }, rand_time-50);
}*/