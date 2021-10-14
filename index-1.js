const { investingcom } = require("./investing");

    //  (async () => {
        module.exports.start = async function start(url, time) {

        link="https://www.investing.com/indices/nq-100-futures-technical";
        // link="https://www.investing.com/indices/us-spx-500-technical";
        // link="https://www.investing.com/indices/investing.com-btc-usd-technical";
        time=8;
            await investingcom(link,time);
        }        
    //   } )();

