const { Player } = require('discord-player');
const { Client, GatewayIntentBits} = require('discord.js');

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
   disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

client.login(client.config.app.token);

//Mina egna saker:

client.on('ready', () => {
    console.log('The bot has logged in.');
});

client.on('messageCreate', (message) => {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (message.author.bot === false) {

        if (message.content === 'hello') {
            if (message.author.id === '481446088147206146'){
                message.channel.send('Hello Master! ♡');
            }

            else{
                message.channel.send('Hello ' + message.member.nickname + '-san! ♡');
            }
            
        }

        else if (message.content.includes('furry') === true | message.content.includes('furries') === true){
            message.channel.send('https://tenor.com/view/furries-people-types-funny-gif-10326216');
        }

        else if (message.content.includes('cum') === true){
            if (message.author.id === '481446088147206146'){
                message.channel.send('*Cums on Master*');
            }
            else{
                message.channel.send('*Cums on ' + message.member.nickname + '*')
            }
            
        }

        else if (message.content.includes('femboy') === true){
            var random = Math.floor(Math.random() * 3);

            switch(random){
                case 0:
                    message.channel.send('https://tenor.com/view/femboy-monkey-monki-femboy-femboy-monki-femboy-test-gif-18862899');
                    break;

                case 1:
                    message.channel.send('https://tenor.com/view/femboys-femboys-detected-gif-21828628');
                    break;
                
                case 2:
                    message.channel.send('https://tenor.com/view/thanos-femboy-me-explaining-agff64-ohno-gif-21714835');
                    break;
                
                default:
                    console.log('error');
                    break;

            }
    
        }

        else if (message.content.includes('kina') === true | message.content.includes('china') === true |
        message.content.includes('kines') === true | message.content.includes('chinese') === true){
            var random = Math.floor(Math.random() * 5);

            switch(random){
                case 0:
                    message.channel.send('https://tenor.com/view/hao1xij-gif-21902745');
                    break;

                case 1:
                    message.channel.send('https://tenor.com/view/guy-in-blue-polo-shirt-angry-chinese-china-chinese-guy-gif-11883720');
                    break;
                
                case 2:
                    message.react('<:MinusSocialCred:919579331263610890>');
                    break;

                case 3:
                    message.react('<:PlusSocialCred:919580052566462504>');
                    break;
                
                case 4:
                    message.channel.send('https://tenor.com/view/mao-gif-25413392');
                    break;
                
                default:
                    console.log('error');
                    break;

            }
        }

        else if (message.content.includes('monke') === true | message.content.includes('apa') === true | message.content.includes('apor') === true){
            var random = Math.floor(Math.random() * 4);

            switch(random){
                case 0:
                    message.channel.send('https://tenor.com/view/monkey-lick-camera-monkey-tongue-gif-15102411');
                    break;

                case 1:
                    message.channel.send('https://tenor.com/view/spinning-gorilla-animal-gorilla-spinning-gif-17299838');
                    break;
                
                case 2:
                    message.channel.send('https://tenor.com/view/monke-khat-faded-haircut-funny-gif-21485057');
                    break;

                case 3:
                    message.channel.send('https://tenor.com/view/sugriva-whose-toes-are-those-gif-21252832');
                    break;
                
                default:
                    console.log('error');
                    break;

            }
    
        }

        else if (message.content.includes('sad') === true | message.content.includes('ledsen') | message.content.includes('sorglig')){
            var random = Math.floor(Math.random() * 4);

            switch(random){
                case 0:
                    message.channel.send('https://tenor.com/view/sad-gif-22469622');
                    break;

                case 1:
                    message.channel.send('https://tenor.com/view/sick-thats-thatssad-sad-so-gif-13238507');
                    break;
                
                case 2:
                    message.channel.send('https://tenor.com/view/best-cry-ever-cry-sad-face-sad-crying-crybaby-gif-12364585');
                    break;

                case 3:
                    message.channel.send('https://tenor.com/view/fade-away-oooooooooooo-aga-emoji-crumble-gif-20008708');
                    break;
                
                default:
                    console.log('error');
                    break;

            }
    
        }


    }

});