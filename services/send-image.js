exports.sendImage = () => {
  let msg = {
    type: "image",
    originalContentUrl: process.env.BASE_URL + "/images/2.png",
    previewImageUrl: process.env.BASE_URL + "/images/2.png",
  };

  return msg;
};
//จัด code ALT+Shift+F
