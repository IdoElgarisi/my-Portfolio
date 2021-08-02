'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({ ans: 'yes' }, onUserResponse);
$('.btn-no').click({ ans: 'no' }, onUserResponse);
$('.btn-add-guess').click(onAddGuess);

function init() {
  // console.log('Started...');
  createQuestsTree();
}

function onStartGuessing() {
  // TODO: hide the game-start section// DONE
  $('.game-start').hide()
  renderQuest();
  // TODO: show the quest section// DONE 
  $('.quest').show()
  $('.quest .btn').show()
}

function renderQuest() {
  // TODO: select the <h2> inside quest and update
  // its text by the currQuest text// DONE
  var currQuest = getCurrQuest().txt
  $('.quest h2').html(currQuest)
}

function onUserResponse(ev) {
  var res = ev.data.ans;
  // If this node has no children
  // TODO: improve UX //DONE
  // TODO: hide and show new-quest section // DONE
  if (isChildless(getCurrQuest())) {
    if (res === 'yes') {
      $('.container').show()
      $('.quest .btn').hide()
      $('.alert strong').html('Yes, I knew it!')
      $('.alert span').html('Close The Modal To Restart')
      $('.btn-close').on('click', closeModal)
    } else {
      $('.container').show()
      $('.alert strong').html('I dont know...teach me! ')
      $('.quest').hide()
      $('.new-quest').show()
      $('.btn-close').on('click', closeModal)
    }
  } else {
    // TODO: update the lastRes global var// DONE
    gLastRes = res;
    moveToNextQuest(gLastRes);
    renderQuest();
  }
}
function closeModal() {
  $('.container').hide()
  onRestartGame()
}

function onAddGuess(ev) {
  // TODO: Get the inputs' values //DONE
  ev.preventDefault();
  var newGuess = $('#newGuess').val();
  var newQuest = $('#newQuest').val();
  console.log(newGuess);
  console.log(newQuest);
  if(newQuest===''||newGuess===''){
    $('.container').show()
    $('.alert-warning').addClass('bg-primary')
    $('.alert-warning').addClass('text-light')
    $('.alert strong').html('Invalid Data Entered! ')
    $('.alert span').html('Try Again Or Close The Modal To Restart')
    $('.btn-close').on('click', closeModal)
  }else{
    addGuess(newQuest, newGuess, gLastRes)
    onRestartGame();
  }

  // TODO: Call the service addGuess //DONE
}

function onRestartGame() {
  
  $('.new-quest').hide();
  $('.game-start').show();
  $('.quest').hide()
  $('.container').hide()
  $('.alert-warning').removeClass('bg-primary')
  $('.alert-warning').removeClass('text-light')
  gLastRes = null;
  createQuestsTree()
  renderQuest()
}
