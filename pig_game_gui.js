/* File Name: pig_game_gui.js

This is the back-end part of an app for the pig dice game

*/

let player1_score = 0, player2_score = 0, dice = 0, current_player=1
const winning_score = 50

function roll(){
    console.log('Player ' + current_player + 'is rolling the dice...')
    let dice = Math.ceil(Math.random() * 6)

    document.getElementById('dice-img').src = 'imgs/dice' + dice + '.png'
    document.getElementById('dice-img').alt = 'Dice laned on ' + dice

    if(dice > 1) {
            if(current_player === 1) {
                player1_score += dice
                document.getElementById('player1-score').innerHTML = 'Score: ' + player1_score
            }
            else {
                player2_score += dice
                document.getElementById('player2-score').innerHTML = 'Score: ' + player2_score
            }

            if(player1_score >= winning_score || player2_score >= winning_score)
                game_won()
                                      
                }
            else {
                lose_turn()
            }

}

function hold(){
    console.log('Player ' + current_player + ' just held')


    if(current_player === 2){

        document.getElementById('player1-background').style.backgroundColor = '#90EE90'
        document.getElementById('player1-background').style.color = '#000000'
        document.getElementById('player1-text').innerHTML = 'It is YOUR Turn'
    
        document.getElementById('player2-background').style.backgroundColor = '#DCDCDC'
        document.getElementById('player2-background').style.color = '#A9A9A9'
        document.getElementById('player2-text').innerHTML = 'It is NOT your Turn'

        current_player = 1
    }
    else{
        document.getElementById('player2-background').style.backgroundColor = '#90EE90'
        document.getElementById('player2-background').style.color = '#000000'
        document.getElementById('player2-text').innerHTML = 'It is YOUR Turn'
    
        document.getElementById('player1-background').style.backgroundColor = '#DCDCDC'
        document.getElementById('player1-background').style.color = '#A9A9A9'
        document.getElementById('player1-text').innerHTML = 'It is Not Your turn'

       current_player = 2
    }
 
    
}

function lose_turn() {
    console.log('Player ' + current_player + ' just lost his turn')
    confirm('Player' + current_player + ' just lost their turn and had their school reset to zero!')

    if(current_player === 1) {
        player1_score = 0
        document.getElementById('player1-score').innerHTML = 'Score: 0'
    }
    else {
        player2_score = 0
        document.getElementById('player2-score').innerHTML = 'Score: 0'
    }
    hold()

}

function game_won(){
    console.log(current_player + ' just WON! ')
    confirm('Congratulation Player' + current_player + 
    ' you won!!! Reload the page to play again.' )
}