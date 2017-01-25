console.log('hello meow');

const $wordBtn = $('#word');
const $userBtn = $('#user');
const $newWord= $('.new-word');
const $userDiv = $('.new-user');

$wordBtn.on('click', function(evt) {
  $.post('/randomword', function(res) {
    // console.log(res);
    $newWord.text(res);
    // getData(res);
  })
})

// function getData(data) {
//   $newWord.text(data);
// }
