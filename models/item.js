var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var item = sequelize.define("items", {
  

    item_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    item_quant: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    item_unit: {
      type: DataTypes.STRING,
      allowNull: false
    },

    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },

    // request_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true
    // }
  });

  return item;
};
