'use strict';
module.exports = (sequelize, DataTypes) => {
  const province = sequelize.define('province', {
    ProvCode:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },    
    ProvDesc: DataTypes.STRING,    
    ProvEngCode: DataTypes.STRING, 
    AreaCode: DataTypes.STRING,
    RegionCode: DataTypes.INTEGER,
    last_modified: DataTypes.DATE,
    CLRunning: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName:"province"
  });
  province.associate = function(models) {

    // customer.hasOne(models.transac_header,{
    // 	foreignKey:'SalesNo'
    // });
    //   item.belongsTo(models.brand,{
    //       as:"brand",
    //       foreignKey:"brand_id"
    //   });

  };
  return province;
};

//ProvCode, ProvDesc, ProvEngCode, AreaCode, RegionCode, last_modified, CLRunning