var constants = require('../constants');


exports.createNewPost = function(req,res){
    return res.render(constants.views.createPost);
};