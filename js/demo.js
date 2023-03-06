/**
 * Particleground demo
 * @author EOS - Ecosystem
 */

// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/


 var letexte = 'EOS Ecosystem offers a cross-chain NFT marketplace that enables creators to reach a wider audience and collectors to discover and trade unique digital assets.';
  var montimer;
  var cmpt = 0;
  function typewriter(){
     lelien = document.getElementById('lien');
     if(cmpt < letexte.length){
        courant = lelien.innerHTML.substring(0, lelien.innerHTML.length -1);
        courant += letexte.charAt(cmpt)+" ";
        lelien.innerHTML = courant;
     }
     else{
        lelien.innerHTML = type;
     }
     cmpt++;
     setTimeout("typewriter()",100);
  }
  window.onload = function(){
     typewriter();
  }
