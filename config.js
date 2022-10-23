module.exports = {
    dev: {
        connectionString: 'postgreslink',
        port:'3150'
    },
    
    production:{
        connectionString: process.env.POSTGRES_CONNECTION_STRING + '?ssl=true',
        port: process.env.PORT
    }
}
