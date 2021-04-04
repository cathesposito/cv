// Home Page

function position(i) {

  var diploma = ".diploma" + i;
  var addClass = ".addClassIcon" + i;
  var hide = ".hide" + i;

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
