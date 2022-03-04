const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
var models = require('../models'); // loads index.js
// var Transac_header = models.transac_header;
var Transac_header = models.transac_header;


// Project.Suppliers.hasMany(Project.Products, {foreignKey: 'SupplierID'});
// Project.Products.belongsTo(Project.Suppliers, {foreignKey: 'SupplierID'});

// Project.Categories.hasMany(Project.Products, {foreignKey: 'CategoryID'});
// Project.Products.belongsTo(Project.Categories, {foreignKey: 'CategoryID'});


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

    Transac_header.findAll({
        where: {CustNo: 'ub6008' },
        include:[
            {
                model: models.sales,
                as:'sales'
            },
            {
                model: models.customer,
                as:'customer'
            }
        ],
        // limit: 5
    }).then(data => {
        //console.log("test :", JSON.stringify(test));
        
        // console.log(JSON.stringify(data));
        res.render('index', { 
            title: 'Home Page',
            data: data
        })
      })
    .catch(err => console.log(err));
});

module.exports = router;
