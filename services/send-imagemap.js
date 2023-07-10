exports.sendImageMap = () => {
  let msg = {
    type: "imagemap",
    baseUrl: process.env.BASE_URL + "/images/static/imagemap/1040?kk=ddd",
    altText: "imagemapจ้า",
    baseSize: {
      width: 1040,
      height: 1040,
    },
    video: {
      originalContentUrl: "https://res.cloudinary.com/gukkghu/video/upload/v1644198272/gukkghu/production_ID_4652096_qti2tu.mp4",
      previewImageUrl: process.env.BASE_URL + "/images/static/imagemap/preview.jpg?kkk=ddd",
      area: {
        x: 0,
        y: 0,
        width: 1040,
        height: 521,
      },
      externalLink: {
        linkUri: "https://projectexc.warunrat.com/",
        label: "See More",
      },
    },
    actions: [
      {
        type: "uri",
        linkUri: "https://projectexc.warunrat.com/",
        area: {
          x: 0,
          y: 521,
          width: 520,
          height: 520,
        },
      },
      {
        type: "message",
        text: "gukkghu Web Dev",
        area: {
          x: 521,
          y: 521,
          width: 520,
          height: 520,
        },
      },
    ],
  };

  return msg;
};
//จัด code ALT+Shift+F
