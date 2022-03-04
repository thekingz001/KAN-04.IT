'use strict';
module.exports = (sequelize, DataTypes) => {
  const amphur = sequelize.define('amphur', {
    ProvCode: DataTypes.INTEGER,
    AmphurCode:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },    
    AmphurDesc: DataTypes.STRING,
    last_modified: DataTypes.DATE,
    amcode: DataTypes.INTEGER,

  }, {
    timestamps: false,
    tableName:"amphur"
  });
  amphur.associate = function(models) {

    // customer.hasOne(models.transac_header,{
    // 	foreignKey:'SalesNo'
    // });
    //   item.belongsTo(models.brand,{
    //       as:"brand",
    //       foreignKey:"brand_id"
    //   });

  };
  return amphur;
};