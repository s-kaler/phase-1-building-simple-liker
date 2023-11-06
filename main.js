// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//console.log(document.querySelector('.hidden'));
document.addEventListener('DOMContentLoaded', () => {
  let modal = document.getElementById('modal');
  let modalMessage = document.getElementById('modal-message');
  modal.className = 'hidden';
  let likes = document.getElementsByClassName('like');

  for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener('click', (e) => {
      let glyph = e.target;
      //console.log(glyph);
      if(glyph.innerText === EMPTY_HEART){
        serverResp = mimicServerCall();
         serverResp.then((res) => {
          console.log(res);
          glyph.innerText = FULL_HEART;
          glyph.className = 'activated-heart'
        })
        .catch((error) => {
          console.log(error);
          modal.className = '';
          modalMessage.innerText = error;
          setTimeout(() =>  modal.className = 'hidden', 3000);
      });
      }
      else if (glyph.innerText === FULL_HEART){
        glyph.innerText = EMPTY_HEART;
        glyph.className = '';
      }
    });
  }
    
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
