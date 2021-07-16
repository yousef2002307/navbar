$(document).ready(function(){

$(".jo-toggle i").click(function(){
    $(this).parent(".jo-toggle").siblings('nav').toggleClass("active");
    if( $(this).parent(".jo-toggle").siblings('nav').hasClass("active")){
$(this).parent(".jo-toggle").siblings('nav').animate({
    left : "0px"
},1000);
    }else{
        $(this).parent(".jo-toggle").siblings('nav').animate({
            left : "-1000px"
        },1000);
    }
});
 $("ul li").click(function(){
    $(this).addClass("active");
    $(this).siblings("li").removeClass("active");
 });
 $("ul  li.sub-menu").click(function(){
    $(this).toggleClass("act");
    $(this).siblings(".sub-menu").removeClass("act");
 });
});