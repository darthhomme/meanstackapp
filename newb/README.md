I'm attempting to get the compute to randomly generate numbers, which simulates a card game.

Blackjack involves a full deck of 52 cards. Randomy shuffled cards

I want to player to draw two randomly generated cards. Cards 2 through 10 are worth their value in points. Face cards are worth 10 points. Aces can be worth 1 or 10 points.

you draw two cards at a time and if they equal 21 points, you get blackjack. If you get over 21 points, it's not good. If you get under 21 points, you're in the clear?

First player gets to draw the first cards. Second player draws the next cards. Whomever has the score closest to 21 wins.

deck fixed. 52, 4 suits,

var deck = [11, 2 ,3 ,4 ,5 ,6, 7, 8 , 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2 ,3 ,4 ,5 ,6, 7, 8 , 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]


<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

cards should flip as you draw them, revealing their numbers.
<div id="card-front"></div>
<div id="card-back"></div>

Dealer's first card should remain undisclosed.

The card deck is shuffled. It's a shuffled array. Pop method should push out the last number. This simulates a card drawn from the top of a pile.
