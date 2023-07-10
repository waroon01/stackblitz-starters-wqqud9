exports.sendText = (event) => {
  let msg;

  let msgText = event.message.text.toLowerCase().trim(); //ข้อความที่ผู้ใช้ส่งเข้ามา

  if (msgText === "promotion") {
    msg = {
      type: "text",
      text: "มีโปรโมชั่นวัคซีน ราคา 1,500 บาท",
    };
  } else if (msgText === "555") {
    msg = {
      type: "text",
      text: "55555",
    };
  } else if (msgText === "love") {
    msg = {
      type: "sticker",
      packageId: "6136",
      stickerId: "10551378",
    };
  }
   else {
    msg = {
      type: "text",
      text: "มีอะไรให้เราช่วยครับ กรุณาพิมพ์ข้อความอีกครั้ง ขอบคุณ",
    };
  }

  return msg;
};
//จัด code ALT+Shift+F

