'use strict';
module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    SalesNo:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },    
    SalesName: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName:"sales"
  });
  sales.associate = function(models) {

    sales.hasOne(models.transac_header,{
    	foreignKey:'SalesNo'
    });
    //   item.belongsTo(models.brand,{
    //       as:"brand",
    //       foreignKey:"brand_id"
    //   });
  };
  return sales;
};