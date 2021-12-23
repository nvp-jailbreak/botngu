module.exports.config = {
	name: "memevn",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh chế nhưng của Việt Nam :))",
	commandCategory: "hình ảnh",
	usages: "memevn",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://api.leanhtruong.net/api/LEANHTRUONG=410LCv58sUoyY2aSA5khT7BRj6iwndvXTPtJmfnUlYAczawTaZ=APIKEY=PLANFREE/memevn.png-author:lat').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/memevn.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/memevn.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/memevn.${ext}`)).on("close", callback);
			})
}