import {Game} from "./game";

var game1 = new Game();

game1.showFurry();
game1.showCoin();
game1.startGame();
document.addEventListener('keydown', function(event){
    game1.turnFurry(event);
    });

