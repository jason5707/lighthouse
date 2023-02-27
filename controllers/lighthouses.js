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
        console.log(lighthouses)
        res.render('lighthouses/index', { title: 'All Lighthouses', lighthouses});
    });
}
function show(req, res) {
    Lighthouse.findById(req.params.id)
    .populate('All Lighthouses')
    .exec(function(err, lighthouse) {
        res.render('lighthouses/show', {title: 'Lighthouse Details', lighthouse });
    })
}



function newLighthouse(req, res) {
    res.render('lighthouses/new', { title: 'Add Lighthouse'});
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