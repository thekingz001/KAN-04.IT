'use strict';
module.exports = (sequelize, DataTypes) => {
  const transac_header = sequelize.define('transac_header', {
    DocNo:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },    
    DocDate: DataTypes.DATE,
    DocTime: DataTypes.DATE,
    SalesNo: DataTypes.INTEGER,
    NetTotal: DataTypes.DOUBLE,
  }, {
    timestamps: false,
    tableName:"transac_header"
  });
  transac_header.associate = function(models) {

    //   item.belongsTo(models.brand,{
    //       as:"brand",
    //       foreignKey:"brand_id"
    //   });
  };
  return transac_header;
};