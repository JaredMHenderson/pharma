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

  Prescription.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Prescription.belongsTo(models.Patient, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Prescription;
};
