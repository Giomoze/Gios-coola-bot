require("dotenv").config();

module.exports = {
    app: {
        token: process.env.token,
        playing: 'by Zerio ❤️',
        doing: 'At your service! ❤️',
        gaming: 'Hentai CatMaid',
        global: false,
        guild: process.env.guildID
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: false,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
