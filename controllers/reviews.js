const Lighthouse = require('../models/lighthouse');

module.exports = {
    create,
    delete: deleteReview
    // update: updateReview
};
async function deleteReview(req, res) {
  let lighthouse =  await Lighthouse.findById({'reviews._id': req.params.id, 'reviews.user': req.user._id}).then(function(lighthouse) {
        if (!lighthouse) {
            return res.redirect('/lighthouses');
        }
        lighthouse.reviews.pull(req.params.id);
        lighthouse.save().then(function() {
            res.redirect(`/lighthouses/${lighthouse._id}`);

        }).catch(function(err) {
            return next(err);
        });
    
    });
}
async function create(req, res) {
 let lighthouse = await   Lighthouse.findById(req.params.id, function(err, lighthouse) {

        req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

        lighthouse.reviews.push(req.body);
        lighthouse.save(function(err){
            res.redirect(`/lighthouses/${lighthouse._id}`);
        });
    });
}
// function updateReview(req, res) {
//     Lighthouse.findByIdAndUpdate(
//         {'_id': req.params.lighthouse_id, 'reviews.id': req.params,review_id}
// }
