const { Pool } = require("pg")

module.exports = {
    HOST:"ep-wild-salad-a44wqo1s-pooler.us-east-1.aws.neon.tech",
    USER:"neondb_owner",
    PASSWORD:"npg_WToxFd1Y9QJw",
    DB:"neondb",
    dialect:"postgresql",
    Pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }

}