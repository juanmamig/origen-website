const mongoose = require('mongoose');

const uri = "mongodb+srv://juanmamig:mnPfYtqOX2NYMRkM@cluster0.xt2ut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});