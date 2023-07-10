const config = require('../config/line');
const service = require('./handle-message');

// event handler
exports.handleEvent = (event) => {
    switch (event.type) {
        case "message":
            switch (event.message.type) {
                case "text":
                    service.handleMessage(event);
                    break;
                case "sticker":
                    console.log("sticker message")
                    break;
                default : 
                throw new Error("unkonwn event"+ JSON.stringify(event.message.type));
            }
            break;
        case "postback":
            console.log("Room Pro ID: "+ event.postback.data )
            break;
        default : 
            throw new Error("unkonwn event"+ JSON.stringify(event));
    }

}


