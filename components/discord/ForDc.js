import { Client, Intents } from "discord.js";
import axios from "axios";

export default async function handler(req, res) {
  try {
    const guildId = "709331749976539136";
    const channelId = "709337746891604058";
    const token =
      "MTA3NjAxODM1NzI0NzE2MDM4MA.GvupgV.WWGHXWcy1bIuyWkZPr_y50u7fCA56-NSWNnka8";

    // Fetch the bot user
    const intents = new Intents();
    intents.add(Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS);
    const client = new Client({ intents });
    await client.login(token);

    // Fetch the channel object
    const channel = await client.channels.fetch(channelId);

    // Fetch the messages in the channel
    const messages = await channel.messages.fetch({ limit: 10 }); // Fetching the last 10 messages

    // Process and return the messages
    const announcements = messages.map((message) => ({
      author: message.author.username,
      content: message.content,
      timestamp: message.createdTimestamp,
    }));

    res.status(200).json(announcements);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    res
      .status(500)
      .json({ error: "An error occurred while fetching announcements" });
  }
}

// import { Client, Intents } from "discord.js";
// import fetch from "node-fetch";

// export async function getAnnouncements() {
//   const client = new Client({
//     intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
//   });

//   // Discord bot token for authentication
//   const token =
//     "MTA3NjAxODM1NzI0NzE2MDM4MA.GvupgV.WWGHXWcy1bIuyWkZPr_y50u7fCA56-NSWNnka8";

//   try {
//     await client.login(token);
//     const guildId = "709331749976539136";
//     const channelId = "709337746891604058";

//     // Fetching the announcements channel
//     const guild = client.guilds.cache.get(guildId);
//     const channel = guild.channels.cache.get(channelId);

//     // Fetching the messages in the announcements channel
//     const messages = await channel.messages.fetch({ limit: 5 });

//     // Extracting relevant information from the messages
//     const announcements = messages.map((message) => {
//       return {
//         author: message.author.username,
//         content: message.content,
//         timestamp: message.createdTimestamp,
//       };
//     });

//     return announcements;
//   } catch (error) {
//     console.error("Failed to fetch Discord announcements:", error);
//     return [];
//   } finally {
//     client.destroy();
//   }
// }

// // import { Client } from "discord.js";
// // import express from "express";

// // const app = express();
// // const port = 3001;

// // app.get("./ForDc.js", async (req, res) => {
// //   try {
// //     const client = new Client();
// //     await client.login(
// //       "MTA3NjAxODM1NzI0NzE2MDM4MA.GvupgV.WWGHXWcy1bIuyWkZPr_y50u7fCA56-NSWNnka8"
// //     );

// //     const guildId = "709331749976539136";
// //     const channelId = "709337746891604058";

// //     const guild = await client.guilds.fetch(guildId);
// //     const channel = await guild.channels.cache.get(channelId);

// //     const messages = await channel.messages.fetch({ limit: 5 }); // Adjust the limit as needed

// //     const announcements = messages.map((message) => ({
// //       id: message.id,
// //       content: message.content,
// //       author: {
// //         id: message.author.id,
// //         name: message.author.username,
// //       },
// //       timestamp: message.createdAt,
// //     }));

// //     res.status(200).json({ announcements });
// //   } catch (error) {
// //     console.error("Error retrieving announcements:", error);
// //     res
// //       .status(500)
// //       .json({ error: "An error occurred while retrieving announcements" });
// //   }
// // });

// // app.listen(port, () => {
// //   console.log(`Server listening on port ${port}`);
// // });
