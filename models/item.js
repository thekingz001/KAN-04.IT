'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    ItemCode:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },    
    ItemDesc: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName:"item"
  });
  item.associate = function(models) {

    // sales.hasOne(models.transac_header,{
    // 	foreignKey:'SalesNo'
    // });

    //   item.belongsTo(models.brand,{
    //       as:"brand",
    //       foreignKey:"brand_id"
    //   });

  };
  return item;
};

//ItemCode, ItemDesc, Cost, Price, PackSize, ClassCode, CategoryCode, IsCancel, MinStock, MaxStock, VatStatus, UnitName, DiscSeq, Target, Weight, TaxCode, Factor1, Factor2, Factor3, Factor4, Factor5, Factor6, Factor7, Factor8, Factor9, Factor10, Mix, IsCase, NoDisc, Approved, last_modified, Exported, ExportedDate, SuperSKU, BrandCode, SAPItemCode, SAPApprove