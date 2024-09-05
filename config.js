//#ENJ
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349024953323";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0pzc2F3L1ZSZmlicy85TFI5NW95RWlmZWZaakxXZTdMSWp6WFVsNWRsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnFpbWJyMHRzS3lGOVZiLzNpclQzS3l2SngwZEgxenFPVjFxSUIxVmZSMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SzY4cDl0R3FRMkdYaC9hUEFDd0dhUGovREpMV3AvUkR1cWZvcFM1ejFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySnNQUUdtcVBKL0NmK3IycU1Oelgzclp5N0FuVytTMjc3YnNVT1I3UkZZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktKWjZ2K3d0SE9ibW5LN2Q4QjZuMmx5Qk1wbG1OMys0aDQ5dUVkWVloVzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNtMW1aMFF6TlFKY0dnV1g1NXRTQm1UbFVrMTJPaURORkJURnRMMUY1ZzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUg1dnd2cmJzOFBqMTgzbVdZR09nelQxUms3VlFPOU0xbmQ0TXNRS1ptZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkNDd05zSjdpdHBxWll5eDBXMDQ3endXNnpKOU9SMmRiRU9OQ1ZDbGZodz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlQbTNmRHNOdGt5dnZNOWFSS0hyU1dzeW00UU5QNVQzZThySWRWZkY5NFN6YzloZWhQU0J3Q01VN1hhY1hVRCtBdzBuWjdEc3NJMmxlTDk5M0pXcURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6IlFyWE91S2pQVllLUFNLMmNyN1dLOWlIUWwzcmpPV3JoWlNKMnlNYnlSM0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTAyNDk1MzMyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4QjRBMDRBOTQ4QzYxNzI4RTM0M0NEQjE0NDdGRTU3RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NTQwNjk2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWWkJfWFpwMlNtYVFUMTFIMWJlNlJBIiwicGhvbmVJZCI6Ijc1MDM1NTdhLTY4NGUtNDc0Yy1hOTBmLWJiODBlNTQ5ZWRiMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSktBSkJYV1FYTTgzUWZRQXBhMExaRnBQZnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMG45ZUlJZFZlUWl3NDBWYWhnTFZWMEMxUFFNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpFVjdEUkJEIiwibWUiOnsiaWQiOiIyMzQ5MDI0OTUzMzIzOjE0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im1pZ2h0eWp0diJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmVGdkpRR0VNZlM1cllHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieVVYSHBRMm1BMVRLR2c4MkNYNnhKaGxyeTNHMFFHeE1mUnQ1c2ZIQngzTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSkEvUTNqWmpjSEdXeDlubGxubEdKL3o1QmQ0UnZtK0xLb2hxTG1PMEhGUzg0VGxiV3ZOVGp6MXJHM2x4QTdmV0x1aTRtMU5JbFlzcGlocEJQYXVtQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IkhQSGo0WGduaEFTV0dZeUI0OEMybjNhUG1kRGI1eHRRazFSSkkvZEw0S2Zkb3NiUTZMcUdBQXRaWUhBT3ZYU2w4dU50OHFrTkZjdWI2eXpjN2dnY0NBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAyNDk1MzMyMzoxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjbEZ4NlVOcGdOVXlob1BOZ2wrc1NZWmE4dHh0RUJzVEgwYmViSHh3Y2R6In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NTQwNjkzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJvayJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
