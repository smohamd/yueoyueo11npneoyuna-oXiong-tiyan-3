module.exports.config = {
    name: "بسيط",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Deku",
    description: "خوف صاحبك",
  commandCategory: "تاك",
    cooldowns: 0,
    usages: "/آيدي/رد على رسالة/منشن"
};
let p = __dirname+'/cache/patrick.png';
module.exports.run = async ({ api, event,args }) => {  {
    const fs = require("fs");
    const request = require("request");
   const { threadID, messageID, senderID, body } = event;
if (args.join().indexOf('@') !== -1){ var id = Object.keys(event.mentions) }
      else var id = args[0] || senderID;
      if(event.type == "message_reply") { var id = event.messageReply.senderID }
   var callback = () => api.sendMessage({attachment: fs.createReadStream(p)}, event.threadID, () => fs.unlinkSync(p),event.messageID);
   request(encodeURI(`https://free-api.ainz-sama101.repl.co/canvas/patrick?uid=${id}`)).pipe(fs.createWriteStream(p)).on('close',() => callback());     
}}