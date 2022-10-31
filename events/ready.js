module.exports = async (client) => {
    console.log(`Logged to the client ${client.user.username}\n-> Ready on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users`);
    client.user.setActivity(client.config.app.gaming)
    /*client.user.setPresence({
        status: 'online',
        activity: {
            name: client.config.app.doing, 
            type: 'CUSTOM'
        }
    });
    */

    
};