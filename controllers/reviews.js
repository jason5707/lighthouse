const Lighthouse = require('../models/lighthouse');

module.exports = {
    create,
    delete: deleteReview,
    show,
    update
};
async function deleteReview(req, res) {
  let lighthouse =  await Lighthouse.findOne({'reviews._id': req.params.id}) 
  console.log('++++++++', lighthouse)
          if (!lighthouse) {
            return res.redirect('/lighthouses');
        }
        lighthouse.reviews.pull(req.params.id);
        await lighthouse.save()
            res.redirect(`/lighthouses/show/${lighthouse._id}`);
    }

async function create(req, res) {
 let lighthouse = await   Lighthouse.findById(req.params.id) 

        req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

        lighthouse.reviews.push(req.body);
        await lighthouse.save()
            console.log('+++++', lighthouse)
            res.redirect(`/lighthouses/show/${lighthouse._id}`);
        
   
}

  function show(req, res) {
    let id = req.params.id;
    let reviewId = req.params.review_id;
    Lighthouse.findById(id, function(err, lighthouse) {
        const reviewUpdate = lighthouse.reviews.find(review => review._id ==
            reviewId);
        res.render('lighthouse/update', { title: 'Update Review', lighthouse, reviewUpdate});
    })
}
function update(req, res) {
    let id = req.params.id;
    let reviewId = req.params.review_id;
    let content = req.body.content;
    lighthouse.findById(id, function(err, lighthouse) {
        const reviewUpdate = lighthouse.reviews.find(review => review._id == reviewId);
        reviewUpdate.content = req.body.content;
        lighthouse.save(function(err) {
            if (err) return res.redirect('/lighthouses');
            return res.redirect(`/lighthouses/${req.params.id}`);
        })
    })
}