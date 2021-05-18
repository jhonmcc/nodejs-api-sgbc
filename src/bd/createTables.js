const modelUser = require('../modules/user/models/userModel')

modelUser
    .sync()
    .then(() => console.log('Table was created'))
    .catch(console.log)