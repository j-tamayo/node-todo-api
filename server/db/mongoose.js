var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongodb://todoapp:t0d04pp@ds115085.mlab.com:15085/todoapp
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {
    useMongoClient: true
});

module.exports = {
    mongoose
};