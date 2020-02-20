'use strict';



function getDogImage() {
  fetch(`https://dog.ceo/api/breeds/image/random/${numberSelection()}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function numberSelection() {
  return $('#user-input').val()
}

function displayResults(responseJson) {
  console.log(responseJson);
  console.log(fourLoop(responseJson))
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    fourLoop(responseJson)
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function fourLoop(responseJson) {
    let results = []
    for (let i=0; i < responseJson.message.length; i++) {
        results.push(`<img src="${responseJson.message[i]}" class="results-img">`)
    }
    return results.join(''); 
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});