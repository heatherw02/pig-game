// File Name: app.js
//
// This is the font-end part of an app for the pig dice game.
//
// Author: Heather w

const readline = require('readline-sync')
const chalk = require('chalk')
const pigGame = require('./pigGame.js')

let player1Score=0, player2Score=0, dice=0
let currentPlayer = 1, hold='N'
const winningScore = 15



while(player1Score < winningScore && player2Score < winningScore)
{
pigGame.printBoard(currentPlayer, player1Score, player2Score, dice)

    if(currentPlayer === 1)
    {
    hold = readline.question('Player 1: Do you want to hold [Y/N]   ')

        if(hold === 'Y')
        {
            currentPlayer = 2
            dice = 0
        }
        else{
            dice = pigGame.rollDice()

            if(dice === 0)
            {
                player1Score = 0
                currentPlayer = 2
                console.log(chalk.red.bold('Bad News Player 1, you lost all your points and your turn.'))
            }
            else{
                player1Score += dice
            }
        }
    }
    else
    {
        hold = readline.question('Player 2: Do you want to hold? [Y/N]  ')
        if(hold === 'Y')
        {
            currentPlayer = 1
            dice = 0
        }
        else{
            dice = pigGame.rollDice()
                if(dice === 0)
                {
                    player2Score = 0
                    currentPlayer = 1
                    console.log(chalk.red.bold('Bad News Player 2, you lost all your points and your turn.'))
                }
                else{
                    player2Score += dice
                }

        }
    }
}

pigGame.printBoard(currentPlayer, player1Score, player2Score, dice)
console.log(chalk.green.inverse('Congratulation PLayer ' + currentPlayer + ' - you won the game :D \n'))