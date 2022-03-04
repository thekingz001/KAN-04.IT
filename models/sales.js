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

    sales.hasMany(models.transac_header, {foreignKey: 'SalesNo'});

    // sales.hasOne(models.transac_header,{
    // 	foreignKey:'SalesNo'
    // });

    //   item.belongsTo(models.brand,{
    //       as:"brand",
    //       foreignKey:"brand_id"
    //   });

  };
  return sales;
};

//SalesNo, SalesName, Passwd, CompanyID, PaymentCode, SupNo, VanNo, WhsCode, OrderType, OrderFormat, OrderNo, RefundFormat, RefundNo, ReqFormat, ReqNo, CountFormat, CountNo, RewardFormat, RewardNo, PaymentFormat, PaymentNo, POrderFormat, POrderNo, BuyBottleFormat, BuyBottleNo, CaseInsuranceFormat, CaseInsuranceNo, CaseRefundFormat, CaseRefundNo, TempInvFormat, TempInvNo, TransferFormat, TransferNo, ItemDisc, GroupDisc, CustDisc, ShopTypeDisc, UseGPS, BranchCode, PrefixCode, ExchangeFormat, ExchangeNo, InvoiceTBFormat, InvoiceTBNo, InvCRTBFormat, InvCRTBNo, ReturnTBFormat, ReturnTBNo, PriceRequest, last_modified, Active, CustStockFormat, CustStockNo, SurveyFormat, SurveyNo, Exported, ExportedDate, GroupCode, GPSAutoApproved, PaymentTBFormat, PaymentTBNo, CustBillingFormat, CustBillingNo, CustBillingTBFormat, CustBillingTBNo, MinimumVisit, PromotionalPercentagePerBill