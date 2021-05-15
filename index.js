// Home Page

function position(i) {

  var diploma = ".diploma" + i;
  var addClass = ".addClassIcon" + i;
  var hide = ".hide" + i;

  $(diploma).css("margin-bottom", "3rem");
  $(hide).css("display", "none");

  $(diploma)
    .hover(function() {
      $(addClass).toggleClass("iconHover");
      $(this).css("font-size", "1.75rem").css("cursor", "pointer");
    })
    .click(function() {
      $(hide).toggle("slow");
    });

};

for (i = 1; i <= 4; i++) {
  position(i)
};



// Table in Home Page
$(".tableSkills td").hover(function() {
  $(this).toggleClass("rowColor");
});

// Hover Bold in email and address
$(".hoverB, .hoverB2")
  .on("mouseenter", function() {
    $(this).css("font-weight", "bold");
  })
  .on("mouseleave", function() {
    $(this).css("font-weight", "normal");
  });


// Publications Page

function position2(i) {

  var click = ".click" + i;
  j = 4 + i;
  var hideP = ".hide" + j;

  $(hideP).css("display", "none");
  $(click).click(function() {
    $(hideP).toggle("slow");
  });

};

for (i = 1; i <= 2; i++) {
  position2(i)
};



// Work Page

function position3(i) {

  var work = ".work" + i;
  var addClass = ".addClassIcon" + i;
  k = 6 + i;
  var hide = ".hide" + k;

  $(hide).css("display", "none");

  $(work).css("margin-bottom", "3rem");

  $(work)
    .hover(function() {
      $(addClass).toggleClass("iconHover");
      $(this).css("font-size", "1.75rem").css("cursor", "pointer");
    })
    .click(function() {
      $(hide).toggle("slow");
    });

};

for (i = 1; i <= 6; i++) {
  position3(i)
};

// Media query


function myFunction(){
  if (window.matchMedia("(max-width: 1100px)").matches){
    $(".aboutMe, .education, .skills, .languages, .workHistory, .patent, .papers-j, .papers-c").css("padding-left", 10).css("padding-right", 10);
    $(".links").removeClass("col-2").addClass("col-3");
    $(".works").removeClass("col-6").addClass("col-7");
  }
}

 myFunction()
