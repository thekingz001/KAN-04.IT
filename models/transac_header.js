'use strict';
module.exports = (sequelize, DataTypes) => {
  const transac_header = sequelize.define('transac_header', {
    DocNo:{
      type:DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true
    },
    TransacType: DataTypes.INTEGER,   
    DocDate: DataTypes.DATE,
    DocTime: DataTypes.DATE,
    ShipDate: DataTypes.DATE,       
    SalesNo: DataTypes.STRING,
    VanNo: DataTypes.STRING,
    CustNo: DataTypes.STRING,
    NetTotal: DataTypes.DOUBLE,
  }, {
    timestamps: false,
    tableName:"transac_header"
  });
  transac_header.associate = function(models) {

    transac_header.belongsTo(models.sales, {foreignKey: 'SalesNo', as: 'sales'});
    transac_header.belongsTo(models.customer, {foreignKey: 'CustNo', as: 'customer'});
    transac_header.belongsToMany(models.amphur, {through: 'customer', foreignKey: 'SalesNo', as: 'sales'});

    // transac_header.belongsToMany(models.amphur, {
    //   through: "customer",
    //   as: "@amphur",
    //   foreignKey: "AmphurCode",
    // });

    //   item.belongsTo(models.brand,{
    //       as:"brand",
    //       foreignKey:"brand_id"
    //   });

  };
  return transac_header;
};

//DocNo, TransacType, TransacNo, DocDate, DocTime, ShipDate, SalesNo, VanNo, CustNo, RefNo, RefDate, PriceListNo, VatType, VisitDate, TotalBeforeDisc, CustDisc, ShopTypeDisc, DiscPer, DiscPerAmt, DiscBaht, TotalAfterDisc, VatTotal, NetTotal, DocStatus, Note, OverCredit, CreditLimit, CreditBalance, SumNetTotal, OverCreditAmt, Latitude, Longtitude, SatelliteTime, ShipAddr, OrderType, TotalPoint, UpdateStk, Date1, Date2, OneDay, DirectShip, BranchNo, TotalRequisVolume, TotalCurrentStockVolume, TotalVolume, Export, EndPeriod, TotalRequisWeight, TotalCurrentStockWeight, GrandTotalWeight, TotalCoupon, CompanyID, BranchCode, Approved, FromVanNo, EndDaily, TotalUseDisc, SlipNo, SlipDate, AccountNo, TransferAmt, PriceRequest, last_modified, CreatedDate, ModifiedDate, ApprovedDate, UpdateStkDate, CanceledDate, Document_Modified, EndPeriodDate, ImportedDate, ExportedDate, UniversalDateTime, TimeZone, Flag1, RefInvNo, RefInvDate, TotalBeforeDiscOfTax, TotalAfterDiscOfTax, NetTotalOfTax, DiscComboSet, IsTemporary, VanReceiveDate, s3url1, s3key1, s3url2, s3key2, ReturnType