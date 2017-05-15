function checkIt() {
  // Initialize scores
  var cartman = 0;
  var stan = 0;
  var kyle = 0;
  var kenny = 0;
  var randy = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'cartman') {
      cartman++;
      }
      else if (e.value == 'stan') {
        stan++;
      }
      else if (e.value == 'kyle') {
        kyle++;
      }
      else if (e.value == 'kenny') {
        kenny++;
      }
      else if (e.value == 'randy') {
        randy++;
      }
    }

  }

  // Determine result
  var counts = "Cartman: " + cartman + ", " +
               "Stan: " + stan  + ", " +
               "Kyle: " + kyle; + ", " +
               "Kenny: " + kenny; + ", " +
               "Randy: " + randy;



  // What is the highest value?
  var max = Math.max(cartman, stan, kyle, kenny, randy);

  // Form a message
  var message;

  if (max == cartman) {
    counts = "You got: " + cartman + ", Eric Cartman";
    title = "Which South Park character are you?";
    message = "Cartman: You are one of the most selfish people to ever live and are hated by almost everyone you meet. You love food and hate pretty much everything else.";
  }
  else if (max == stan) {
    counts = "You got: " + stan + ", Stan Marsh";
    title = "Which South Park character are you?";
    message = "Stan: You are the voice of reason in your friend group. You are liked by most people, your only vice is your awkwardness around girls.";
  }
  else if (max == kyle) {
    counts = "You got: " + kyle + ", Kyle Braflovski";
    title = "Which South Park character are you?";
    message = "Kyle: Your often made fun of by your friends, and where a large hat to hide your hideous hair";
  }
  else if (max == kenny) {
    counts = "You got: " + kenny + ", Kenny Mccormick";
    title = "Which South Park character are you?";
    message = "Kenny: You are virtually useless among your friends. Sometimes you will make your friends laugh, but most of the time you are a burden. Be careful of your high death rate, danger lurks around every corner";
  }
  else if (max == randy) {
    counts = "You got: " + randy + ", Randy Marsh";
    title = "Which South Park character are you?";
    message = "Randy: You used to not really matter, but as you age you grow more eccentric and gain popularity. In your mid life crisis you will do anything to stay relevant whether it is becoming a chef, being one of the world's leading popstars, or continuing your magic act from college";
  }

  // Display result
  document.getElementById('result').innerHTML = counts;
  // document.getElementById('result').innerHTML = message;
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-text').innerHTML = message;
  document.getElementById('result-image').innerHTML = img;

}
