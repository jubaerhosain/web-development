export default () => ({
    port: parseInt(process.env.PORT, 10) || 5000,
    database: {
        url: process.env.DATABASE_URL,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
});
