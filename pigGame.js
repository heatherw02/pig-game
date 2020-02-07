// File Name: pigGame.js
//
// This is the back-end of a pig game app.
//
// Author: Heather w

const chalk = require('chalk')

/* This is normal 6 sided dice except the 1 is a value of 0 */
function rollDice()
{
        const dice = Math.ceil(Math.random()*6) //ceil will bump it up

        if(dice==1)
        {
            return 0
        }
        else{
            return dice
        }
}

function printBoard(current_player, p1_score, p2_score, dice_val)
{
    let ans = '\n'
        if(p1_score < 10)
        {
            p1_score = ' ' + p1_score
        }
        if(p2_score < 10)
        {
            p2_score = ' ' + p2_score
        }


        if(current_player===1)
        { 
            //ans += '\t [Player 1] \t\t Player 2\n'
            //ans += '\t Score: ' + p1_score + '\t\t Score: ' + p2_score + '\n'
            //ans += '\t  Dice:' + dice_val + '\n\n'

            ans += '     ' + chalk.green('|=====================|') + chalk.gray('|======================|\n')
            ans += '     ' + chalk.green('|      Player 1       |')  + chalk.gray('|      Player 2        |\n')
            ans += '     ' + chalk.green('|       ' + chalk.bold('Score ' + p1_score + '      |')) + chalk.grey('|       ' + chalk.bold('Score ' + p2_score) + '       |\n') 
            ans += '     ' + chalk.green('|---------------------|')  + chalk.grey('|----------------------|\n')
            ans += '     ' + chalk.green('|      Dice:   ' + dice_val + '      |') + chalk.grey('|                      |\n')
            ans += '     ' + chalk.green('|=====================|') + chalk.gray('|======================|\n')
        }
        else
        {
            //ans += '\t Player 1 \t\t [Player 2]\n'
            //ans += '\t Score: ' + p1_score + '\t\t Score: ' + p2_score + '\n'
            //ans += '\t\t\t\t  Dice:' + dice_val + '\n\n'

            ans += '     ' + chalk.gray('|=====================|') + chalk.green('|======================|\n')
            ans += '     ' + chalk.gray('|      Player 1       |')  + chalk.green('|      Player 2        |\n')
            ans += '     ' + chalk.gray('|       ' + chalk.bold('Score ' + p1_score + '      |')) + chalk.green('|       ' + chalk.bold('Score ' + p2_score) + '       |\n') 
            ans += '     ' + chalk.grey('|---------------------|')  + chalk.green('|----------------------|\n')
            ans += '     ' + chalk.gray('|      Dice:   ' + dice_val + '      |') + chalk.grey('|                      |\n')
            ans += '     ' + chalk.gray('|=====================|') + chalk.green('|======================|\n')
        }
        console.log(ans)
}

module.exports =
{
    rollDice: rollDice,
    printBoard: printBoard
}