'use strict';



function getDogImage() {
  fetch(`https://dog.ceo/api/breed/${numberSelection()}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function numberSelection() {
  return $('#user-input').val();
  

}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results-img').empty();
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`)

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