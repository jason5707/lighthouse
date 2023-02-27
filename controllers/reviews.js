const Lighthouse = require('../models/lighthouse');

module.exports = {
    create
};

function create(req, res) {
    Lighthouse.findById(req.params.id, function(err, lighthouse) {
        lighthouse.reviews.push(req.body);
        lighthouse.save(function(err){
            res.redirect(`/lighthouses/${lighthouse._id}`);
        });
    });
}