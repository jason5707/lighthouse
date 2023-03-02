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
        //  console.log(lighthouses)
        res.render('lighthouses/index', { title: 'Lighthouse Listing', lighthouses});
    });
}
async function show(req, res) {
    console.log('+++++++++++}{')
  let lighthouse = await Lighthouse.findById(req.params.id)
    
     
        console.log(lighthouse);
        res.render('lighthouses/show', {title: 'Details', lighthouse });
        
        console.log("lighthouse found", lighthouse )
    
}



function newLighthouse(req, res) {
    res.render('lighthouses/new',  { title: 'Add Lighthouse'});
}

function create(req, res) {
    console.log('req.body', req.body);
    Lighthouse.create(req.body, function(err, lighthouse) {
        
            res.redirect('/lighthouses/new');
            console.log('new lighthouse created:', lighthouse);
            
        })
    

const lighthouse = new Lighthouse(req.body);

    };
function deleteLighthouse(req, res) {
    
        Lighthouse.deleteOne(req.params.id);
        res.redirect('/lighthouses');
    }