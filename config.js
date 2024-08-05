const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_08_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgODIsXG4gICAgICAgIDI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDc5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NixcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEyLFxuICAgICAgICA0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg5LFxuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDU3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicnMweWxMZzAwYkNNMUFXVi8ycDQwbkxRamp4dnVBNDI5NmtuTFp4RDVjMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZWE1VWI0bDZRYW1fTHE2WksyMzhPZ1wiLFxuICBcInBob25lSWRcIjogXCI0NTkyNzczNi05NDNjLTRiZTctYTdmYy1kYmQ3NzVhNzdmODBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgMTI1LFxuICAgICAgMTI0LFxuICAgICAgNjgsXG4gICAgICA2MyxcbiAgICAgIDExMyxcbiAgICAgIDExOSxcbiAgICAgIDI0NSxcbiAgICAgIDgsXG4gICAgICAxMTYsXG4gICAgICAxNzUsXG4gICAgICAxNTYsXG4gICAgICAxMDQsXG4gICAgICA4MSxcbiAgICAgIDI4LFxuICAgICAgMjM4LFxuICAgICAgMTcyLFxuICAgICAgMjUyLFxuICAgICAgMjgsXG4gICAgICAxMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTQsXG4gICAgICAxNSxcbiAgICAgIDY3LFxuICAgICAgMTU5LFxuICAgICAgMTQxLFxuICAgICAgNyxcbiAgICAgIDM1LFxuICAgICAgMjEyLFxuICAgICAgNTYsXG4gICAgICA3MSxcbiAgICAgIDUyLFxuICAgICAgMTQxLFxuICAgICAgMTUwLFxuICAgICAgMTc0LFxuICAgICAgMTMxLFxuICAgICAgMjM3LFxuICAgICAgMTI5LFxuICAgICAgMTA5LFxuICAgICAgMzksXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUzJRSlNYNEtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMTkyMDc1NTU2NjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjgxOTEzMjE5NzI5NTU6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYXBuL1lHRVBQeHc3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9SSG5icThQaTNlbE1tdVpVR1RPQmV6TmFHUHg4UGJHczlVNU4wcFNjRDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNGZRS3FBRU1QeUs4a3ZQdVFSY2UydlB5aGhWUThMVEh5eGIxYWRTRHBlbGhTVU1PekxGVzVsQlBrb1dacTVuU1F0dkpWUmJSdGhQRlk2eUJMdDl1QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRWt6b3lPbmZ1NDZ4QWVwVSs0Um5CakdTcU8wQ0pDNFJ4NC81V09JaS81L0o3dnp1UWpwSWVpSGRZaytBQTk2anI3QmNxaUZGL1VHTGpwMjc0ajIxQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjExOTIwNzU1NTY2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI4NzQxMDNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
