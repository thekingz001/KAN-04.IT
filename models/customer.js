'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    CustNo:{
      type:DataTypes.STRING,
      primaryKey: true
    },    
    CustName: DataTypes.STRING,
    GroupCode: DataTypes.STRING,
    ShopTypeCode: DataTypes.STRING,
    Tumbol: DataTypes.STRING,
    AmphurCode: DataTypes.INTEGER,
    ProvCode: DataTypes.INTEGER,
    Phone: DataTypes.STRING,
    Latitude: DataTypes.STRING,
    Longtitude: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName:"customer"
  });
  customer.associate = function(models) {
    // customer.belongsTo(models.province, {foreignKey: 'ProvCode', as: 'province'});

    // customer.hasOne(models.transac_header,{
    // 	foreignKey:'SalesNo'
    // });
    //   item.belongsTo(models.brand,{
    //       as:"brand",
    //       foreignKey:"brand_id"
    //   });

  };
  return customer;
};

//CustNo, CustName, GroupCode, ShopTypeCode, Contact1, Contact2, Addr1, Addr2, Postcode, Tumbol, AmphurCode, ProvCode, Phone, Status, PayType, Term, Limit, Balance, AvgSale, AvgItem, OneTime, Email, Latitude, Longtitude, OnhandPoint, TotalSalesAmt, BusinessType, Value1, Value2, Value3, AreaCode, RegionCode, TemporaryBill, CompanyID, BranchCode, last_modified, TaxID, TaxBranchID, Exported, ExportedDate, IsImage, SAPCustNo, SalesNo, s3url1, s3key1, s3url2, s3key2, s3url3, s3key3, ttcode