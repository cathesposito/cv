

$(".diploma1 h3").click(function(){
  $(".hide1").toggle("slow");
});

$(".diploma2 h3").click(function(){
  $(".hide2").toggle("slow");
});

$(".diploma3 h3").click(function(){
  $(".hide3").toggle("slow");
});

$(".diploma4 h3").click(function(){
  $(".hide4").toggle("slow");
});

$(".click1").click(function(){
  $(".hide5").toggle("slow");
});

$(".click2").click(function(){
  $(".hide6").toggle("slow");
});

$(".tableSkills td").hover(function(){
  $(this).fadeOut(80);
  $(this).fadeIn(50);
});

$(".hoverB, .hoverB2")
  .on("mouseenter", function(){
    $(this).css("font-weight", "bold");
  })
  .on("mouseleave", function(){
    $(this).css("font-weight", "normal");
  })
;
