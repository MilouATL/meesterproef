// =========================== //
// show and hide content       // 
// =========================== //
// function showElementToggle() {
//     var textElement = document.getElementById("showElement");
    
//     if (textElement.style.display === "none") {
//         textElement.style.display = "block";
//     } else {
//         textElement.style.display = "none";
//     }
//   }

function showElementToggleOne() {
    var textElementOne = document.getElementById("showElementOne");
    if (textElementOne.style.display === "none") {
        textElementOne.style.display = "block";
    } else {
        textElementOne.style.display = "none";
    }
  }


  function showElementToggleTwo() {
    var textElementTwo = document.getElementById("showElementTwo");
  
    if (textElementTwo.style.display === "none") {
        textElementTwo.style.display = "block";
    } else {
        textElementTwo.style.display = "none";
    }
  }

  function showElementToggleThree() {
    var textElementThree = document.getElementById("showElementThree");
  
    if (textElementThree.style.display === "none") {
        textElementThree.style.display = "block";
    } else {
        textElementThree.style.display = "none";
    }
  }

  function showElementToggleFour() {
    var textElementFour = document.getElementById("showElementFour");
  
    if (textElementFour.style.display === "none") {
        textElementFour.style.display = "block";
    } else {
        textElementFour.style.display = "none";
    }
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
