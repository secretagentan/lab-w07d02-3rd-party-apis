console.log('hello meow');

const $wordBtn = $('#word');
const $userBtn = $('#user');
const $wordDiv = $('.new-word');
const $userPar = $('.new-user');

$wordBtn.on('click', function(evt) {
  $.ajax({
    url: '/randomword',
    method: 'GET'
  }).then(function(res) {
    console.log(res);
    $wordDiv.text(res);
  })
})

$userBtn.on('click', function(evt) {
  $.ajax({
    url: '/randomuser',
    method: 'GET'
  }).then(function(res) {
const firstName = res.name.first;
const lastName = res.name.last;
    const text = JSON.stringify(res);
    console.log(text);
    console.log(`${firstName} ${lastName}`);

    $userPar.text(`${firstName} ${lastName}`);
  })
})
