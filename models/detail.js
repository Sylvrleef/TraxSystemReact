var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Detail = sequelize.define("Detail", {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    quant: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    unit: {
      type: DataTypes.STRING,
      allowNull: false
    },

    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },

  }, {
      freezeTableName: true,
      underscored: true
    }
  );

  Detail.associate = function (models) {
    Detail.belongsTo(models.Pr, {
      foreignKey: "request_id"
    });
  };

  Detail.associate = function (models) {
    Detail.hasMany(models.item, {
      foreignKey: "item_id"
    });
  };
    
  return Detail;
  
};
