function checkEnv() {
    if(!process.env.DB_URL) console.log("DB_URL is required");
    if(!process.env.ImageServerURL) console.log("ImageServerURL is requied");
    if(!process.env.KEY) console.log("KEY is required");
}

module.exports = checkEnv;