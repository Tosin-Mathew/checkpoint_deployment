module.exports = {
  port: process.env.PORT || 5000,
  mongodb: {
    uri: process.env.MONGODB_URI || 'your-mongodb-atlas-connection-string'
  },
  frontendUrl: process.env.FRONTEND_URL || 'https://yourapp.azurewebsites.net',
  corsOptions: {
    origin: process.env.FRONTEND_URL || 'https://yourapp.azurewebsites.net',
    credentials: true
  }
};
