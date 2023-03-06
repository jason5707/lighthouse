const lighthouse = require('../models/lighthouse');
const Lighthouse = require('../models/lighthouse');

module.exports = {
    index,
    show,
    new: newLighthouse,
    create,
    delete: deleteLighthouse,
    update
};

function index(req, res) {
    Lighthouse.find({}, function(err, lighthouses) {
       
        res.render('lighthouses/index', { title: 'Lighthouse Listings', lighthouses});
    });
}
async function show(req, res) {
    
  let lighthouse = await Lighthouse.findById(req.params.id)
    
     
        
        res.render('lighthouses/show', {title: 'Details', lighthouse });
        

    
}



function newLighthouse(req, res) {
    res.render('lighthouses/new',  { title: 'Add Lighthouse'});
}

function create(req, res) {
    
    Lighthouse.create(req.body, function(err, lighthouse) {
        
            res.redirect('/lighthouses/new');
            
            
        })
    

const lighthouse = new Lighthouse(req.body);

    };
function deleteLighthouse(req, res) {
    
        Lighthouse.deleteOne(req.params.id);
        res.redirect('/lighthouses', lighthouse);
    }
    // async function update(req, res) {
    //     let lighthouse = await Lighthouse.findOne({'lighthouse._id': req.params.id}) 
    //     console.log('++++', lighthouse)
    //             lighthouse.lighthouse = res.body.lighthouse;
    //             lighthouse.save(function(err) {
    //                 res.redirect(`/lighthouses/${req.params.lighthouseId}`);
    //             })
    //         }
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