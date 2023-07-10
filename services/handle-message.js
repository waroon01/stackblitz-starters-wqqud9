const config = require("../config/line");
const { sendFlexCovidInfo } = require("./send-flex-covid-info");
const { sendFlexMongoDB } = require("./send-flex-mongoDB");
const { sendFlexPromotion } = require("./send-flex-promotion");
const { sendImage } = require("./send-image");
const { sendImageMap } = require("./send-imagemap");
const { sendlocation } = require("./send-locations");
const { sendText } = require("./send-text");

exports.handleMessage = async (event) => {
  let msg;

  switch (event.message.text.toLowerCase().trim()) {
    case "image":
      msg = sendImage();
      break;
    case "location":
      msg = sendlocation();
      break;
    case "imagemap":
      msg = sendImageMap();
      break;
    case "covid":
      msg = await sendFlexCovidInfo();
      break;
    case "roompromotion":
      msg = await sendFlexPromotion();
      break;
    case "showmongo":
      msg = await sendFlexMongoDB()
      break;
    default:
      msg = sendText(event);
  }

  return config.client.replyMessage(event.replyToken, msg);
};
