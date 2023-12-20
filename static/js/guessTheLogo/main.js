var submit_btn = document.querySelector(".submit-btn"),
  answer_input = document.querySelector(".answer"),
  alert_box = document.querySelector(".alert-box"),
  images = document.getElementById("image");
nextButton = document.getElementById(".next");
var slider_img = document.querySelector(".slider-img");
  title_data = "";
var score = 0;

const history = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
function _0x1dff(_0x35838e,_0x1197af){var _0x3591ac=_0x3591();return _0x1dff=function(_0x1dffa2,_0x1e3fba){_0x1dffa2=_0x1dffa2-0x16b;var _0x19b7e0=_0x3591ac[_0x1dffa2];if(_0x1dff['spDUkj']===undefined){var _0x1ae7df=function(_0x56d1bf){var _0x3d8194='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1d6403='',_0x126d37='';for(var _0x510e2a=0x0,_0x513dca,_0x17544b,_0x467454=0x0;_0x17544b=_0x56d1bf['charAt'](_0x467454++);~_0x17544b&&(_0x513dca=_0x510e2a%0x4?_0x513dca*0x40+_0x17544b:_0x17544b,_0x510e2a++%0x4)?_0x1d6403+=String['fromCharCode'](0xff&_0x513dca>>(-0x2*_0x510e2a&0x6)):0x0){_0x17544b=_0x3d8194['indexOf'](_0x17544b);}for(var _0x1d8bf2=0x0,_0x541c62=_0x1d6403['length'];_0x1d8bf2<_0x541c62;_0x1d8bf2++){_0x126d37+='%'+('00'+_0x1d6403['charCodeAt'](_0x1d8bf2)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x126d37);};_0x1dff['uDtvPV']=_0x1ae7df,_0x35838e=arguments,_0x1dff['spDUkj']=!![];}var _0x1bb7dd=_0x3591ac[0x0],_0x511847=_0x1dffa2+_0x1bb7dd,_0x13f6a9=_0x35838e[_0x511847];return!_0x13f6a9?(_0x19b7e0=_0x1dff['uDtvPV'](_0x19b7e0),_0x35838e[_0x511847]=_0x19b7e0):_0x19b7e0=_0x13f6a9,_0x19b7e0;},_0x1dff(_0x35838e,_0x1197af);}function _0x3591(){var _0x10c60e=['Es5QCgC','yweUANbN','zs5WBMC','DMvYC2fJzq','ywiUANbN','ota1nZmWn1jeBwnHDq','ywmUANbN','BMjJ','Dw5PBgv2zxi','Cc53zwjW','CI5QCgC','Bc5WBMC','nZCYmdm2mLzUEw9Isa','CgvYBa','DNvL','Ds53zwjW','Bw9YCMLZigDHCMfNzxm','y2LZy28','yY5WBMC','Dg95B3rH','zw1WB3jPBYbHCM1HBMK','BY5QCgC','zgLVCG','As5WBMC','B3bLBa','mtKZmdG0mhnMC2vUrq','zc5WBMC','Ac5WBMC','BI5WBMC','y2fWz2vTAw5P','mty2mdi4s1ruBgDs','Bs5WBMC','Ac5QCgC','zwXT','Bs5QCgC','CNvZDa','CMvKigj1BgW','BgLZCa','ywqUANbN','zgfYDa','yMXHy2TIzxjYEq','y2HLDNjVBG','ywnJzw50DxjL','zY5WBMC','ChvYzxnJCMLWDa','yw5NDwXHCG','mZnVvejHtLm','nhDNvMjoyW','AI5WBMC','BI5QCgC','Ec5QCgC','Cc5WBMC','ntfZwLrWt2W','mJy2ndi2BKzns0PV','yxvKAq','DgfYz2v0','yxrSyxnZAwfU','zI5WBMC','nty0mJeZmgj1ELnpAa','ys5WBMC','AY5QCgC','ohDrDfrAtq','BY5WBMC','odq1ndi4nuDQuerxCW','D2vICgfJAW','B2XHEq','D2LWCM8','yI5WBMC','CMvKDxG','EI5QCgC','Dw5LC2nV'];_0x3591=function(){return _0x10c60e;};return _0x3591();}var _0xfd4c0f=_0x1dff;(function(_0x3cfd2d,_0x45b9a6){var _0x255c65=_0x1dff,_0x5f3150=_0x3cfd2d();while(!![]){try{var _0x402024=-parseInt(_0x255c65(0x16f))/0x1*(-parseInt(_0x255c65(0x175))/0x2)+parseInt(_0x255c65(0x174))/0x3*(-parseInt(_0x255c65(0x1a5))/0x4)+-parseInt(_0x255c65(0x17a))/0x5+parseInt(_0x255c65(0x193))/0x6+parseInt(_0x255c65(0x18c))/0x7*(parseInt(_0x255c65(0x17d))/0x8)+-parseInt(_0x255c65(0x17f))/0x9+parseInt(_0x255c65(0x1a0))/0xa*(parseInt(_0x255c65(0x16e))/0xb);if(_0x402024===_0x45b9a6)break;else _0x5f3150['push'](_0x5f3150['shift']());}catch(_0x5d4676){_0x5f3150['push'](_0x5f3150['shift']());}}}(_0x3591,0xe071a));var images=[_0xfd4c0f(0x17b),_0xfd4c0f(0x183),_0xfd4c0f(0x199),_0xfd4c0f(0x1a1),_0xfd4c0f(0x189),_0xfd4c0f(0x179),_0xfd4c0f(0x16b),_0xfd4c0f(0x1a2),_0xfd4c0f(0x19e),_0xfd4c0f(0x170),_0xfd4c0f(0x192),_0xfd4c0f(0x1a6),_0xfd4c0f(0x1a3),_0xfd4c0f(0x17e),_0xfd4c0f(0x173),_0xfd4c0f(0x188),_0xfd4c0f(0x1a7),_0xfd4c0f(0x17c),_0xfd4c0f(0x1a9),_0xfd4c0f(0x171),_0xfd4c0f(0x19c),_0xfd4c0f(0x191),_0xfd4c0f(0x172),_0xfd4c0f(0x187),_0xfd4c0f(0x185),_0xfd4c0f(0x190),_0xfd4c0f(0x196),_0xfd4c0f(0x18b),_0xfd4c0f(0x18d),_0xfd4c0f(0x1ad)],answer=[_0xfd4c0f(0x16d),_0xfd4c0f(0x19f),_0xfd4c0f(0x1af),_0xfd4c0f(0x195),_0xfd4c0f(0x180),_0xfd4c0f(0x184),_0xfd4c0f(0x16c),_0xfd4c0f(0x1aa),_0xfd4c0f(0x1ae),_0xfd4c0f(0x1a8),_0xfd4c0f(0x1ac),_0xfd4c0f(0x197),_0xfd4c0f(0x1a4),_0xfd4c0f(0x182),_0xfd4c0f(0x198),_0xfd4c0f(0x194),_0xfd4c0f(0x18e),_0xfd4c0f(0x178),_0xfd4c0f(0x18f),_0xfd4c0f(0x19a),_0xfd4c0f(0x176),_0xfd4c0f(0x1ab),_0xfd4c0f(0x19b),_0xfd4c0f(0x177),_0xfd4c0f(0x181),_0xfd4c0f(0x19d),_0xfd4c0f(0x1b1),_0xfd4c0f(0x1b0),_0xfd4c0f(0x18a),_0xfd4c0f(0x186)];
var distance;// Set the date we're counting down to
var countDownDate = new Date().getTime() + 15 * 60 * 1000;
// var countDownDate = new Date().getTime() + 10 * 1000;

// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
  distance = countDownDate - now;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =  "<b>Timer-</b> " + minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Time's up";
    next();
  }
}, 1000);

window.addEventListener('load', () => {
  next();
});

var i = 0;

function next() {

  // if(i >= images.length-1) i = -1;
  // i++;
  if (history.length == 0 || distance < 0) {
    alert("Game Over!")

    
    fetch("/logos-scores", {
      method: "POST",
      body: JSON.stringify({
        email: sessionStorage.getItem("email"),
        score: score
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        location.href = "/";
        alert(data.msg);
      });
  }
  const sel = Math.floor(Math.random() * history.length);
  console.log(sel);
  console.log(history);
  i = history[sel];
  history.splice(sel, 1);
  return setImg();
}

function setImg() {
  return slider_img.setAttribute('src', "images/guessTheLogo/" + images[i]);
}


submit_btn.addEventListener("click", () => {
  var set_answer = answer_input.value;
  var final_answer = set_answer.toLowerCase();
  if (answer[i] == final_answer) {
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    answer_input.value = "";
    next();
  }

  else {
    //alert("Wrong");
    answer_input.value = "";
    next();
  }

});


function getQuestion() {
  for (var i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
    [answer[i], answer[j]] = [answer[j], answer[i]];

  }
  answer_input.value = "";

}


function show_alert(alert_title, bg_color) {
  alert_box.style = "display: block; background:" + bg_color;
  alert_box.innerHTML = alert_title;
}