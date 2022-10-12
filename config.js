module.exports = {
    dev: {
        connectionString: 'postgresql://postgres:docker@localhost:5432/fooddb',
        port:'3150'
    },
    
    production:{
        connectionString: process.env.POSTGRES_CONNECTION_STRING + '?ssl=true',
        port: process.env.PORT
    }
}