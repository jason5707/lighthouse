const lighthouse = require('../models/lighthouse');
const Lighthouse = require('../models/lighthouse');

module.exports = {
    index,
    show,
    new: newLighthouse,
    create,
    delete: deleteLighthouse
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