const axios = require("axios").default;
const commaNumber = require("comma-number");

exports.sendFlexCovidInfo = async () => {
  const url = "https://api.chnwt.dev/thai-oil-api/latest";
  const response = await axios.get(url, {
    headers: { "Content-Type": "aplication/json" },
  });
  console.log(response.data.response.date);
  console.log(response.data.response.stations.ptt.gasoline_95);

  const dateShow = response.data.response.date;
  const oilname = response.data.response.stations.ptt.gasoline_95.name;
  const oil95sohol = response.data.response.stations.ptt.gasoline_95.price;

  let msg = {
    type: "flex",
    altText: "ราคาน้ำมัน",
    contents: {
      type: "bubble",
      hero: {
        type: "image",
        url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover",
        action: {
          type: "uri",
          uri: "http://linecorp.com/",
        },
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "" + dateShow,
            weight: "bold",
            size: "xl",
          },
          {
            type: "box",
            layout: "vertical",
            margin: "lg",
            spacing: "sm",
            contents: [
              {
                type: "box",
                layout: "baseline",
                spacing: "sm",
                contents: [
                  {
                    type: "text",
                    text: "" + oilname + " :",
                    color: "#EA4211",
                    size: "md",
                    flex: 0,
                  },
                  {
                    type: "text",
                    text: "" + commaNumber(oil95sohol) + " บาท",
                    wrap: true,
                    color: "#EA4211",
                    size: "md",
                    flex: 5,
                    align: "end",
                  },
                ],
              },
              {
                type: "box",
                layout: "baseline",
                spacing: "sm",
                contents: [
                  {
                    type: "text",
                    text: "ผู้เสียชีวิตรายใหม่:",
                    color: "#EA4211",
                    size: "md",
                    flex: 0,
                  },
                  {
                    type: "text",
                    text: "20 ราย",
                    wrap: true,
                    color: "#EA4211",
                    size: "md",
                    flex: 5,
                    align: "end",
                  },
                ],
              },
            ],
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
              type: "uri",
              label: "ดูข้อมูล",
              uri: "https://linecorp.com",
            },
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
    },
  };

  return msg;
};
//จัด code ALT+Shift+F
