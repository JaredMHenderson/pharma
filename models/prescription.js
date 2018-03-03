module.exports = function(sequelize, DataTypes) {
  var Prescription = sequelize.define("Prescription", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  });
  return Prescription;
};
