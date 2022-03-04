'use strict';
module.exports = (sequelize, DataTypes) => {
  const shoptype = sequelize.define('shoptype', {
    ShopTypeCode:{
      type:DataTypes.STRING,
      primaryKey: true
    },    
    ShopTypeName: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName:"shoptype"
  });
  shoptype.associate = function(models) {

    // customer.hasOne(models.transac_header,{
    // 	foreignKey:'SalesNo'
    // });
    //   item.belongsTo(models.brand,{
    //       as:"brand",
    //       foreignKey:"brand_id"
    //   });

  };
  return shoptype;
};

//ShopTypeCode, ShopTypeName, SAPGroupCode, SAPGroupName, SAPGroupGen, DiscSeq, DiscPromByItem1, DiscPromByItem2, DiscPromByItem3, DiscPromByGroup1, DiscPromByGroup2, DiscPromByGroup3, FreeItemPromByItem1, FreeItemPromByItem2, FreeItemPromByItem3, FreeItemPromByGroup1, FreeItemPromByGroup2, FreeItemPromByGroup3, DirectShipPromByItem1, DirectShipPromByItem2, DirectShipPromByItem3, DirectShipPromByGroup1, DirectShipPromByGroup2, DirectShipPromByGroup3, last_modified, IsActive