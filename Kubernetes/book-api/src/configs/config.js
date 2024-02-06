import dotenv from "dotenv";
dotenv.config();

export default {
    port: process.env.PORT,
    mysql: {
        database: process.env.MYSQL_DB_NAME,
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        host: process.env.MYSQL_HOST,
        dialect: "mysql",
    },
    jwt: {
        expiry: process.env.JWT_EXPIRY,
        secret: process.env.JWT_SECRET,
    },
    cookie: {
        secret: process.env.COOKIE_SECRET,
        authCookieName: process.env.AUTH_COOKIE_NAME,
    },
};
