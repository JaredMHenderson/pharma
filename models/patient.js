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
        this.setDataValue('age', moment().diff(moment(val)));
      }
    },
    prescriptions: {
      type: DataTypes.STRING,
      allowNull: true 
    },

    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  });
  return Patient;
};
