const Botkit = require("botkit")

const controller = Botkit.slackbot({
    debug: false,
    retry: Infinity
})

let bot = controller.spawn({token: 'xoxb-xxxx'}).startRTM()

controller.hears("@here", ["ambient"], (bot, message) => {
   console.log("answering @here")   
})

controller.hears(".*", ["ambient"], (bot, message) => {
    console.log("responding to everything else")
})