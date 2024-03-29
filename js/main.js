// =========================== //
// show and hide content       // 
// =========================== //

function showElementToggleOne() {
    var textElementOne = document.getElementById("showElementOne");
    textElementOne.classList.toggle("show");
  }

  function showElementToggleTwo() {
    var textElementTwo = document.getElementById("showElementTwo");
    textElementTwo.classList.toggle("show");
  }  

  function showElementToggleThree() {
    var textElementThree = document.getElementById("showElementThree");
    textElementThree.classList.toggle("show");
  }

  function showElementToggleFour() {
    var textElementFour = document.getElementById("showElementFour");
    textElementFour.classList.toggle("show");
  }

//===============================//
//   svg animation optimization // 
//=============================//
setInterval(function calculateSvgViewbox(){
  var svg = document.getElementsByTagName("svg");
  for (i=0; i < svg.length; i++) {
      var bbox = svg[i].getBBox();
      svg[i].setAttribute("viewBox", (bbox.x)+" "+(bbox.y)+" "+(bbox.width)+" "+(bbox.height));
  }
}, 1)

// =========================== //
// logic behind content btns   // 
// =========================== //
// $("button[data-action]").click(function(e){
//     var $this = $(this);
//     var flag = true;
//     e.preventDefault();

//     $this.addClass('done');


//     $('.btn-content-wrapper').find('button.btn').each(function(){
//         if(!$(this).hasClass('done'))
//             flag = false;
//     });

//     if(flag) {
//         console.log("All Child divs have active class");
//         setTimeout(function(){ window.location.replace("index.html");
//     }, 6000);
//     }

//     else {
//         console.log("All child divs doesn't have active class");
//     }
// })
