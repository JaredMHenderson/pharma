const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define("Patient", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      set(val){
        this.setDataValue('DOB', val);
      }
    },
    prescriptions: {
      type: DataTypes.STRING,
      allowNull: true 
    },


    comments: {
      type: DataTypes.STRING,
      allowNull: true
    }

  });
  return Patient;
};
