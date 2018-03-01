module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    prescriptions: {
      type: DataTypes.STRING,
      allowNull: true
    }

  });
  return User;
};
