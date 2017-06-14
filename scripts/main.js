/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

function handValue(hand) {
  var handToValues = [];
  var aceCount = 0;
  for (let i = 0; i < hand.length; i++) {
    var cardValue;
    switch (hand[i]) {
      case "J":
      case "Q":
      case "K":
        cardValue = 10;
        handToValues.push(cardValue);
        break;
      case "A":
        aceCount++;
        break;
      default:
        cardValue = parseInt(hand[i]);
        handToValues.push(cardValue);
        break;
    }
  }
  // "As" pushed to the end, easier to assign hand value
  var aceValues = [1, 11];
  while (aceCount > 0) {
    handToValues.push(aceValues);
    aceCount--;
  }
  console.log(handToValues);

  var value = 0;
  for (let i = 0; i < handToValues.length; i++) {
    if (typeof handToValues[i] != "number") {
      if (value + handToValues[i][1] > 21) {
        value += handToValues[i][0];
      } else {
        value += handToValues[i][1];
      }
    } else {
      value += handToValues[i];
    }
  }

  return value;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
