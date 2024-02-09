const test = require('../checkFive.js');

describe("whoWon", function(){

    it ("returns 'Player 2 wins!'",function(){
        expect(test.whoWon('rock','paper')).toBe("Player 2 wins!");
        expect(test.whoWon('scissors','scissors')).toBe("Player 2 wins!");
        expect(test.whoWon('paper','scissors')).toBe("Player 2 wins!");
    });
    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
   let output = test.whoWon('rock','paper');
   expect(output).toBe("Player 2 wins!");
});

test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
   let output = test.whoWon('paper','scissors');
   expect(output).toBe("Player 2 wins!");
});

});    
