const Discord = require("../src/exports.js");

// Client constructor
const client = new Discord.Client({
    // Bot config (Defaults shown)
    api: "9", // API version
    wsurl: "wss://gateway.discord.gg/?encoding=json&v=9", // Discord WebSocket URL
    url: "https://discord.com", // Discord HTTPS URL
    typinginterval: 1000, // How often to send the typing request
    proxy: undefined, // Proxy to operate the client with. Should look like "http://123.123.123:123"
    headless: false, // Makes the client not connect to discord (This still allows for request sending)
});

// Logs in with a token (required for even for headless clients)
client.login(
    "Token goes here." // Authentication token
);

// Closes an active connection gracefully
client.close();

// Terminates an active connection by shutting down the connection immediately
client.terminate();

// Tests if this account is restricted
client.is_restricted();

// Fetches messages from Discord
client.fetch_messages(
    100, // Amount of messages to get (Limit is 100)
    "794326789480120374", // Channel ID to fetch from
    "914533507890565221" // An offset when getting messages (Optional)
);

// Fetches all the info about the guild given
client.get_guild(
    "794326789480120374" // The guild ID to fetch
);

// WARN: May disable your account if used too often
// Joins the guild the invite code is pointing to
client.join_guild(
    "https://discord.gg/57XkDazjFP" // The Discord invite
);

// Gets info about an invite link
client.get_invite_info(
    "https://discord.gg/57XkDazjFP" // The Discord invite
);

// Leaves a server
client.leave_guild(
    "794326789480120374" // The guild ID to leave from
);

// Deletes a guild if you're owner
client.delete_guild(
    "794326789480120374" // The guild to delete
);

// Sends a message
/**
 * client.send("794326789480120374", {
 *    content: "Hello Discord-user-bots!",
 * });
 */
client.send(
    "794326789480120374", // Channel to send in
    {
        content: "Hello Discord-user-bots!", // Content of the message to send (Optional when sending stickers) (Default null)
        reply: "914533507890565221", // Reply to the message ID given with this message (Optional) (Default null)
        tts: false, // Use text to speech when sending (Only works if you have the permissions to do so) (Optional) (Default false)
        embeds: [], // Embeds to send with your message (Not optional, must be an array, can be unset for default) (Default empty array)
        allowed_mentions: {
            // Allow mentions settings (Not optional, but can be unset for default) (Default all true mentions object)
            allowUsers: true, // Allow message to ping user (Default true)
            allowRoles: true, // Allow message to ping roles (Default true)
            allowEveryone: true, // Allow message to ping @everyone and @here (Default true)
            allowRepliedUser: true, // If the message is a reply, ping the user you are replying to (Default true)
        },
        components: [], // Message components (Not optional, must be an array, can be unset for default) (Default empty array)
        stickers: [], // Stickers to go with your message (Not optional, must be an array, can be unset for default) (Default empty array)
        attachments: [
            // Message attachments (optional, must be an array)
            "path/to/file", // Attachment item can be string (absolute path to the file)

            // Or can be an object for attachment detail
            {
                path: "path/to/file", // File location (Not optional, must be string)
                name: "custom-file-name.jpg", // File name (optional, must be string) (Default is base name of file)
                description: "File description", // Attachment description (optional, must be string) (Default is empty)
            },
        ],
    }
);

// Edits a message
client.edit(
    "794339629553156116", // Message to edit
    "794329000897806387", // Channel the message is in
    "Edited!" // The content to change to
);

// Deletes a message
client.delete_message(
    "794339629553156116", // The message to delete
    "794329000897806387" // The channel the message is in
);

// IF YOU WANT TO TYPE IN A CHANNEL PLEASE USE `.type` AND `.stop_type` INSTEAD
// Sends a typing notification to discord
client.send_single_type_notification(
    "794326789480120374" // The channel ID to type in
);

// Types in the channel given
client.type(
    "794326789480120374" // The channel ID to type in
);

// Stops typing
client.stop_type();

// Creates or retrieves existing channel with given recipients
client.group(
    //  The IDs fo the people to be in the group when it's made
    ["person-id", "you can have up to 10", "(Including you)"]
);

// Leaves a group
client.leave_group(
    "785986028955500596" // The group ID to leave
);

// Removes someone from a group
client.remove_person_from_group(
    "person-id", // Person ID to be removed
    "785986028955500596" // Group ID to have someone removed from
);

// Renames a group
client.rename_group(
    "Discord-user-bot's group", // The name
    "785986028955500596" // The group ID to be renamed
);

// Creates a server
client.create_server(
    "Discord-user-bot's server", // Name of the server
    "2TffvPucqHkN" // The template of the server (Optional) (Default "2TffvPucqHkN")
);

// Creates a thread off of a message
client.create_thread_from_message(
    "811442648677875722", // The target message ID
    "753267478943105024", // The target channel ID
    "Discord-user-bot's thread from a message", // The name of the thread
    1440 // How long util the thread auto archives (Optional) (Default 1440)
);

// Creates a thread in a channel
client.create_thread(
    "888825512510779414", // Channel to create the thread in
    "Discord-user-bot's thread from a channel", // The name of the thread
    1440 // How long util the thread auto archives (Optional) (Default 1440)
);

// Deletes a thread
client.delete_thread(
    "888825512510779414" // The ID of the thread to delete
);

// Joins a thread
client.join_thread(
    "888825512510779414" // The ID of the thread to join
);

// Adds a reaction to a message
client.add_reaction(
    "914533528245506068", // The message to add a reaction to
    "753267478943105028", // The channel the message is in
    "🤖" // Emoji to react with (Cannot be ":robot:" has to be an actual emoji like "🤖")
);

// Remove a reaction to a message
client.remove_reaction(
    "914533528245506068", // The message to remove a reaction to
    "753267478943105028", // The channel the message is in
    "🤖" // Emoji to react with (Cannot be ":robot:" has to be an actual emoji like "🤖")
);

// Changes your visibility
client.change_status(
    "online" // Status to change to (Must be "online", "idle", "dnd", or "invisible")
);

// Sets a custom status
client.set_custom_status({
    text: "This status was set by Discord-user-bots!", // Status text (Optional) (Default null)
    emoji: "🤖", // Status emoji (Optional) (Default null)
    expireAt: "2021-12-13T05:57:58.828Z", // The time until resets (Optional) (Default null, meaning never resetting)
});

// Create a custom invite
/**
 * client.create_invite("753267478943105028");
 */
client.create_invite(
    "753267478943105028", // Channel you want to make the invite on
    {
        // Invite options (Default seen here)
        validate: null, // Validate an already active invite
        max_age: 0, // Max age in seconds (0 means never ending)
        max_uses: 0, // Make uses (0 means no limit)
        target_user_id: null, // Target user ID
        target_type: null, // Target type
        temporary: false, // Kick the person invited once they log off if they don't have a role
    }
);

// WARN: May disable your account if used too often
// Sends a friend request
client.send_friend_request(
    ".sopur" // Account username
);
// client.send_friend_request(
//     "Sopur", // Account username
//     "3550" // Account discriminator
// ); // For accounts that still use discriminators

// Accepts a friend request
client.accept_friend_request(
    "753236796799975554" // ID of the user you're accepting
);

// Sets settings in your profile
client.set_profile({
    // Profile options (Default seen here)
    bio: null, // Profile bio
    bannerColor: null, // Profile banner
    ignoreNulls: true, // Set to false to remove your bio or banner color by setting it to null
});

// Sets your HypeSquad house
client.set_HypeSquad(
    "Balance" // HypeSquad house
);

// Sets your profile picture (avatar)
client.set_avatar(
    "path/to/avatar" // Path to an image containing your avatar
);

// Requests Discord to send a verification email to verify your Discord account by email
client.request_verify_email(
    "youremail@email.com", // Email you want to verify with
    "account.password" // Your Discord account password
);

// USE `request_verify_email` BEFORE USING THIS FUNCTION TO REQUEST DISCORD TO SEND A VERIFICATION EMAIL
// Verifies your Discord account with the email token that was sent to your email by `request_verify_email`
client.verify_email(
    "base64 token" // Email token sent by Discord
);

// Requests Discord to send a verification sms message to verify your Discord account by phone
client.request_verify_phone("+1234567890", async (captchaInfo) => {
    let token = "";
    // Use a captcha solver to set `token`...
    return token;
});

// USE `request_verify_phone` BEFORE USING THIS FUNCTION TO REQUEST DISCORD TO SEND A VERIFICATION TEXT
// Verifies your Discord account with the sms code that was sent to your phone by `request_verify_phone`
client.verify_phone(
    "+1234567890", // Phone number you want to verify with (should be in format +123456789)
    "12345678", // SMS code
    "account.password" // Your Discord account password
);

// Sets the config with your wanted settings
// (Everything shown is the default config)
client.set_config({
    api: "v9", // API version
    wsurl: "wss://gateway.discord.gg/?encoding=json&v=9", // Discord WebSocket URL
    os: "linux", // Operating system
    bd: "holy", // BD
    language: "en-US", // Language
    typinginterval: 1000, // How often to send the typing request
    proxy: undefined, // Proxy to operate the client with. Should look like "http://123.123.123:123"
    autoReconnect: true, // Discord disconnects all idle WebSockets after 45 minutes. This boolean decides if the client should auto-reconnect.
});

// Parses a discord invite link wether it be a https link or straight code
client.parse_invite_link(
    "https://discord.gg/57XkDazjFP" // Invite to parse
);

// Make a custom API request that isn't provided by Discord-user-bots
// If discord returns information, the function will return it. Otherwise, it will return the status code of the request.
client.fetch_request(
    `guilds/794326789480120374`, // URL to make a request with
    // Fetch options
    {
        method: "DELETE", // Method
        body: null, // Body
    }
);
client.fetch_request(
    `guilds/templates/2TffvPucqHkN`, // URL to make a request with
    // Fetch options
    {
        method: "POST", // Method
        // Body
        body: {
            name: "Discord-user-bot's server",
            icon: null,
            guild_template_code: guild_template_code,
        },
    }
);
