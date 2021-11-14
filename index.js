const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const chalk = require('chalk')

rl.question(`${chalk.blue.bold.italic.underline('Please choose a user to view their application!')}    `, function(user) {
    const app = require('./applications.json')
    console.log(`${chalk.blue.bold.italic.underline(`Now viewing ${user}\'s application`)}`)
    console.log(`   `)
    console.log(`${chalk.blueBright('Q1: ' + app.user)}`)
});

THE JSON:

{
    "Iron_Kevin": {
        "Q1": "Moderator",
        "Q2": "Because this server does actually have some effort. Unlike the other bedrockboxes on the CubedCraft network which are literally trash. It sounds like an interesting server to be staff on. I am sometimes just bored so I can spend that time on helping people instead of being lazy and staying AFK on InfiniteSky or other servers. And I would like to being part of the staff team of the best bedbox server on Cubed.",
        "Q3": "Because I am a nice guy I guess. I am actively playing CubedCraft for multiple hours per day so I can easily join the server to moderate. I do also like to moderate and I have the motivation to moderate. And I am a good Mod I think, because I can detect people hacking.",
        "Q4": "GMT+1",
        "Q5": "Iron_Kevin",
        "Q6": "Nice_Pro_Clicker",
        "Q7": "Yes",
        "Q8": "Yes",
        "Q9": "Yes",
        "Q10": "Would depends on what rule. I would atleast take evidence and I would punish the player depending on what rule the broke, and what the punishment guide says."
    }
}
