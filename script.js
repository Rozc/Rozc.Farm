

// window.onload = function() {

//     document.body.style.background = "linear-gradient(" + Math.random()*360 +"deg, #68a7f7, #66CCFF, #f7f4f4)";

//     document.getElementById("mainMidCard").style.top = document.body.clientHeight / 2 - 60 + "px";
//     document.getElementById("mainMidCard").style.left = document.body.clientWidth / 2 - 150 + "px";

//     var LKSs = document.getElementsByClassName("mainLinkS"),
//         LKBs = document.getElementsByClassName("mainLinkB"),
//         IM = document.getElementById("mainLinkIM"),
//         LN = document.getElementById("mainLinkLN"),
//         CD = document.getElementById("mainMidCard"),
//         BG = document.getElementById("mainLinkBG"),
//         FR = document.getElementById("mainLinkFR");

//     for(var i=0; i<LKSs.length; i++) {
//         LKSs[i].style.position = "absolute";
//         LKSs[i].style.left = CD.style.left;
//         LKSs[i].style.top = CD.style.top;
//     }

//     for(var i=0; i<LKBs.length; i++) {
//         LKBs[i].style.position = "absolute";
//         LKBs[i].style.left = CD.style.left;
//         LKBs[i].style.top = parseInt(CD.style.top) - 120 + "px";
//         LKBs[i].style.transitionDelay = "500ms"
//     }

//     var es = [IM, LN, CD, BG, FR];
//     var flag = [0, 0, 0, 0, 0];

//     es.forEach(function (a, pos) {
//         a.onmouseenter = function() { flag[pos] = 1; };
//         a.onmouseleave = function() {
//             flag[pos] = 0;
//             setTimeout(function () {
//                 if(flag.indexOf(1) === -1) {
//                     cardOnLeave();
//                 }
//             }, 300)
//         };

//     });

// };


// function cardOnHover() {
//     var IM = document.getElementById("mainLinkIM"),
//         LN = document.getElementById("mainLinkLN"),
//         CD = document.getElementById("mainMidCard"),
//         BG = document.getElementById("mainLinkBG"),
//         FR = document.getElementById("mainLinkFR");

//     CD.style.borderRadius = 0 + "px";
//     IM.style.visibility = "visible";
//     LN.style.visibility = "visible";
//     IM.style.top = parseInt(CD.style.top) - 120 + "px";
//     LN.style.top = parseInt(CD.style.top) + 120 + "px";

//     BG.style.visibility = "visible";
//     FR.style.visibility = "visible";
//     BG.style.left = parseInt(CD.style.left) - 300 + "px";
//     FR.style.left = parseInt(CD.style.left) + 300 + "px";


//     setTimeout(function () {
//         BG.style.transitionDelay = "0ms";
//         FR.style.transitionDelay = "0ms";
//         IM.style.transitionDelay = "500ms";
//         LN.style.transitionDelay = "500ms";
//         CD.style.transitionDelay = "1000ms";
//     }, 1);

// }


// function cardOnLeave() {
//     console.log("!!");
//     var LKBs = document.getElementsByClassName("mainLinkB"),
//         LKSs = document.getElementsByClassName("mainLinkS"),
//         CD = document.getElementById("mainMidCard");

//     for(var i=0; i<LKBs.length; i++) {
//         LKBs[i].style.left = CD.style.left;
//         LKBs[i].style.visibility = "hidden";
//     }

//     for(var i=0; i<LKSs.length; i++) {
//         LKSs[i].style.top = parseInt(CD.style.top) + "px";
//         LKSs[i].style.visibility = "hidden";
//     }

//     setTimeout(function () {
//         for(var i=0; i<LKBs.length; i++) {
//             LKBs[i].style.transitionDelay = "500ms";
//         }
//         for(var i=0; i<LKSs.length; i++) {
//             LKSs[i].style.transitionDelay = "0ms";
//         }
//         setTimeout(function () {
//             CD.style.borderRadius = 15 + "px";
//             CD.style.transitionDelay = "0ms";
//         }, 500)
//     }, 500);

// }
