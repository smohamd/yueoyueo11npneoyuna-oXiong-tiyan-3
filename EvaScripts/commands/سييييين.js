module.exports.config = {
	name: "سين",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "S H A D Y",
	description: "",
	commandCategory: "المطور",
  usages: "",
	cooldowns: 0
};

module.exports.handleEvent = async ({ api, event, args }) => {
    api.markAsReadAll(() => {});
};

module.exports.run = async function({}) {}