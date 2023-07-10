const axios = require("axios").default;

exports.sendFlexPromotion = async () => {
  const response = await axios.get( process.env.BASE_URL + "/getpromotion", {
    headers: { "Content-Type": "aplication/json" },
  });
  console.log(response.data);

  let bubbles = [];
  let promotions = response.data;

  bubbles = promotions.map((item) => {
    return {
        "type": "bubble",
        "hero": {
          "type": "image",
          "size": "full",
          "aspectRatio": "20:13",
          "aspectMode": "cover",
          "url": ""+item.picture
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Id : "+item.id
            },
            {
              "type": "text",
              "text": ""+item.name,
              "weight": "bold",
              "size": "lg"
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "button",
              "style": "primary",
              "height": "sm",
              "action": {
                "type": "postback",
                "label": "ดูรายละเอียดเพิ่มเติม",
                "data": JSON.stringify(item),
              },
              "color": "#FF9B9B"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "margin": "sm"
            }
          ],
          "flex": 0
        }
      }
  })

  let msg = {
    type: "flex",
    altText: "โปรโมชั่นราคาห้องพัก",
    contents: {
        type: "carousel",
        contents:bubbles
    }
  };

  return msg;
};
//จัด code ALT+Shift+F
