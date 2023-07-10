const axios = require("axios").default;

exports.sendFlexMongoDB = async () => {
  const response = await axios.get(process.env.BASE_URL + "/getproduct", {
    headers: { "Content-Type": "aplication/json" },
  });
  console.log(response.data);

  let bubbles = [];
  let products = response.data;

  bubbles = products.map((item) => {
    return {
      type: "bubble",
      hero: {
        type: "image",
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover",
        url: ""+process.env.BASE_URL + "/images/"+item.image,
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "Id : "+item._id,
          },
          {
            type: "text",
            text: ""+item.name+"  ราคา "+item.price,
            weight: "bold",
            size: "lg",
          },
        ],
      },
      footer: {
        type: "box",
        layout: "vertical",
        spacing: "sm",
        contents: [
          {
            type: "button",
            style: "primary",
            height: "sm",
            action: {
              type: "postback",
              label: "ดูรายละเอียดเพิ่มเติม",
              data: "JSON.stringify(item)",
            },
            color: "#FF9B9B",
          },
          {
            type: "box",
            layout: "vertical",
            contents: [],
            margin: "sm",
          },
        ],
        flex: 0,
      },
    };
  });

  let msg = {
    type: "flex",
    altText: "โปรโมชั่นราคาห้องพัก",
    contents: {
      type: "carousel",
      contents: bubbles,
    },
  };

  return msg;
};
//จัด code ALT+Shift+F
