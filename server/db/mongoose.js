var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://todoapp:t0d04pp@ds115085.mlab.com:15085/todoapp', {
    useMongoClient: true
});

module.exports = {
    mongoose
};