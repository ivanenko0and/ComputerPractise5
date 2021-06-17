const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

var str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi provident debitis illo culpa eaque dolore quasi id, sit nesciunt molestiae.";
bot.command('start', ctx => {
    console.log(ctx.from)
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, `Start menu \n\n` + str + `\n\nChose section:`, {
        reply_markup: {
            inline_keyboard: [
                [   
                    {
                        text: "Section 1",
                        callback_data: 'sec1'
                    },
                    {
                        text: "Section 2",
                        callback_data: 'sec2'
                    },
                    {
                        text: "Section 3",
                        callback_data: 'sec3'
                    },
                    {
                        text: "Exit",
                        callback_data: 'exit'
                    }
                ],

            ]
        }
    })

})

bot.action('start', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, `Start menu \n\n` + str + `\n\nChose section:`, {
        reply_markup: {
            inline_keyboard: [
                [   
                    {
                        text: "Section 1",
                        callback_data: 'sec1'
                    },
                    {
                        text: "Section 2",
                        callback_data: 'sec2'
                    },
                    {
                        text: "Section 3",
                        callback_data: 'sec3'
                    },
                    {
                        text: "Exit",
                        callback_data: 'exit'
                    }
                ],

            ]
        }
    })

})


bot.action('exit', ctx => {
    ctx.deleteMessage();
})



bot.action('sec1', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, `Section 1.\n\n`+ str +`\n\nQuestions:`, {
        reply_markup: {
            inline_keyboard: [
                [   
                    {
                        text: "Question 1",
                        callback_data: 'q1.1'
                    },
                    {
                        text: "Question 2",
                        callback_data: 'q1.2'
                    },
                    {
                        text: "Question 3",
                        callback_data: 'q1.3'
                    },
                    {
                        text: "Return to start menu",
                        callback_data: 'start'
                    }
                ],

            ]
        }
    })
})

bot.action('sec2', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, `Section 2.\n\n`+ str +`\n\nQuestions:`, {
        reply_markup: {
            inline_keyboard: [
                [   
                    {
                        text: "Question 1",
                        callback_data: 'q2.1'
                    },
                    {
                        text: "Question 2",
                        callback_data: 'q2.2'
                    },
                    {
                        text: "Return to start menu",
                        callback_data: 'start'
                    }
                ],

            ]
        }
    })
})

bot.action('sec3', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, `Section 3.\n\n`+ str +`\n\nQuestions:`, {
        reply_markup: {
            inline_keyboard: [
                [   
                    {
                        text: "Question 1",
                        callback_data: 'q3.1'
                    },
                    {
                        text: "Question 2",
                        callback_data: 'q3.2'
                    },
                    {
                        text: "Return to start menu",
                        callback_data: 'start'
                    }
                ],

            ]
        }
    })
})


bot.action('q1.1', ctx => {
    ctx.deleteMessage();

    bot.telegram.sendMessage(ctx.chat.id, `Section 1.\nQuestion 1.\n\n`+ str, {
        reply_markup: {
            inline_keyboard: [
                [   
                    {
                        text: "Return to start menu",
                        callback_data: 'start'
                    },
                    {
                        text: "Return to section 1 questions",
                        callback_data: 'sec1'
                    }
                ],
            ]
        }
    })
})

bot.action('q1.2', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, `Section 1.\nQuestion 2.\n\n`+ str, {
        reply_markup: {
            inline_keyboard: [
                [   
                    {
                        text: "Return to start menu",
                        callback_data: 'start'
                    },
                    {
                        text: "Return to section 1 questions",
                        callback_data: 'sec1'
                    }
                ],

            ]
        }
    })
})

bot.action('q1.3', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, `Section 1.\nQuestion 3.\n\n`+ str, {
        reply_markup: {
            inline_keyboard: [
                [   
                    {
                        text: "Return to start menu",
                        callback_data: 'start'
                    },
                    {
                        text: "Return to section 1 questions",
                        callback_data: 'sec1'
                    }
                ],

            ]
        }
    })
})



bot.action('q2.1', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, `Section 2.\nQuestion 1.\n\n`+ str, {
        reply_markup: {
            inline_keyboard: [
                [   
                    {
                        text: "Return to start menu",
                        callback_data: 'start'
                    },
                    {
                        text: "Return to section 2 questions",
                        callback_data: 'sec2'
                    }
                ],

            ]
        }
    })
})

bot.action('q2.2', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, `Section 2.\nQuestion 2.\n\n`+ str, {
        reply_markup: {
            inline_keyboard: [
                [   
                    {
                        text: "Return to start menu",
                        callback_data: 'start'
                    },
                    {
                        text: "Return to section 2 questions",
                        callback_data: 'sec2'
                    }
                ],

            ]
        }
    })
})


bot.action('q3.1', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, `Section 3.\nQuestion 1.\n\n`+ str, {
        reply_markup: {
            inline_keyboard: [
                [   
                    {
                        text: "Return to start menu",
                        callback_data: 'start'
                    },
                    {
                        text: "Return to section 3 questions",
                        callback_data: 'sec3'
                    }
                ],

            ]
        }
    })
})

bot.action('q3.2', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, `Section 3.\nQuestion 2.\n\n`+ str, {
        reply_markup: {
            inline_keyboard: [
                [   
                    {
                        text: "Return to start menu",
                        callback_data: 'start'
                    },
                    {
                        text: "Return to section 3 questions",
                        callback_data: 'sec3'
                    }
                ],

            ]
        }
    })
})




bot.launch();

