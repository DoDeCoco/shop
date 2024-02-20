$(document).ready(function(){
  $(".header .an").click(function(){
	$("html").toggleClass("on");
    $(this).toggleClass("n");
	$(".nav").toggleClass("on");
	$(".nav .e_j").removeClass("on");
  });
  $(".nav ul li .y_j i").click(function(){
    $(this).parent(".y_j").siblings(".e_j").addClass("on");
  });
  $(".nav ul li .s_b").click(function(){
    $(this).parents(".e_j").removeClass("on");
  });
  
  $(".header .s_ch").click(function(){
	$(".search").slideDown();
  });
  $(".search .sc_gb").click(function(){
	$(".search").slideUp();
  });
  $(".cp_xh ul li").click(function(){
    var index=$(".cp_xh ul li").index(this);
    $(this).addClass("on").siblings().removeClass("on");
    $(".cs_nr .cs_zs").eq(index).addClass("dk").siblings().removeClass("dk");
  })
  
  $(".fh_top").click(function(){
    $("html,body").animate({scrollTop:0},500);
  });
  

  
});

$(window).scroll(function(){
  var top = $(window).scrollTop();
  var th = $(".header").height();
  if(top>th){
	$(".fh_top").fadeIn();
  }else{
	$(".fh_top").fadeOut();
  }
});