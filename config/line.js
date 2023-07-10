const line = require('@line/bot-sdk');

// create LINE SDK config from env variables
const lineConfig = {
  channelAccessToken:
    'D7oy9/mO3B4/ZKyyiefEx4V3OLaeru/zYI4ERTzX9dPQDiBUnmXqXsS2faxRnwfmmDcj3xB4H9kGEaSPNfY//2PGPaK44Ag7vAzlYZT8WxGxAHjPiCfsV/znyaOTftT7VBm4fzi95aijIZyggisDXQdB04t89/1O/w1cDnyilFU=',
  channelSecret: '62e58a176250773eb849cfd2dcf209cb',
};

// create LINE SDK client
const client = new line.Client(lineConfig);

module.exports = {
  line,
  lineConfig,
  client,
};
