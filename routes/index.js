const express = require('express');
const router = express.Router();
var models = require('../models'); // loads index.js
// var Transac_header = models.transac_header;
var Sales = models.sales;


// Welcome Page
router.get('/',async (req, res) => {

    // Transac_header.findAll({limit: 200}).then(data => {
    //     //console.log("test :", JSON.stringify(test));
    //     console.log(JSON.stringify(data));
    //     res.render('index', { 
    //         title: 'Home Page',
    //         data: data
    //     })
    //   })
    // .catch(err => console.log(err));

    Sales.findAll({	
        include:[
            {
                model: models.transac_header,
                as:'transac_header'
            }
        ],
        limit: 50
    }).then(data => {
        //console.log("test :", JSON.stringify(test));
        
        console.log(JSON.stringify(data));
        res.render('index', { 
            title: 'Home Page',
            data: data
        })
      })
    .catch(err => console.log(err));
});

module.exports = router;
