function checkIt() {
  // Initialize scores
  var dennis = 0;
  var dee = 0;
  var mac = 0;
  var frank = 0;
  var charlie = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'dennis') {
      dennis++;
      }
      else if (e.value == 'dee') {
        dee++;
      }
      else if (e.value == 'mac') {
        mac++;
      }
      else if (e.value == 'charlie') {
        charlie++;
      }
      else if (e.value == 'frank') {
        frank++;
      }
    }

  }

  // Determine result
  var counts = "Dennis: " + dennis + ", " +
               "Dee: " + dee  + ", " +
               "Mac: " + mac; + ", " +
               "Charlie: " + charlie; + ", " +
               "Frank: " + frank;



  // What is the highest value?
  var max = Math.max(dennis, dee, mac, charlie, frank);

  // Form a message
  var message;

  if (max == dennis) {
    message = "Dennis: You were once attractive and cool, but as you age you grow more narcissistic and selfish. You get what you want because of the implication";
  }
  else if (max == dee) {
    message = "Dee: Your awkward yet far too confident in your appearence and social ability. You are hated by a lot of your close friends and will probably never find love";
  }
  else if (max == mac) {
    message = "Mac: Your obsessed with sports and working out yet you have never done either";
  }
  else if (max == charlie) {
    message = "Charlie: You are in love with someone that hates you yet you keep pursuing. Your often called weird and your hobbies may include cleaning, rat control, eating cheese, and playing night crawlers";
  }
  else if (max == frank) {
    message = "Frank: You once lived the wealthy millionaire life, however you gave that up in order to be happy. A perfect living situation for you is living with your bestfriend in a small apartment. You enjoy living a wild lifestyle and do not care what others think, you also think Pondy is the coolest";
  }

  // Display result
  document.getElementById('result').innerHTML = counts;
  // document.getElementById('result').innerHTML = message;
  document.getElementById('result').innerHTML = message;

}
