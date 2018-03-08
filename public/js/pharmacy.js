
var patients = {
  getPatients: function(callback){
    fetch('/api/patients')
      .then(function(response) {
    return response.json();
    })
    .then(function(patientJson) {
      console.log(patientJson);
      callback(patientJson);
    });
  },

  createPatient: function(callback, newPatient) {
    fetch('/api/patients', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(newPatient),
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(callback);
  },

  deletePatient: function(callback, patientId){
    fetch('/api/patients/' + patientId, {
      method: 'DELETE',
    }).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(callback);
  },

  getOnePatient: function(callback, patientId) {
    fetch('/api/patients' + patientId)
      .then(function(response) {
    return response.json();
    })
    .then(function(patientJson) {
      console.log(patientJson);
      callback(patientJson);
    });
  },

   updatePatient: function(callback, patientId, updatedPatient) {
    fetch('/api/patients/' + patientId, {
  method:'PUT',
  body: JSON.stringify(updatedPatient),
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(callback);
  },
};



var prescriptions = {
  createPrescription: function(callback, newPrescription) {
    fetch('./api/prescriptions', {
      method: 'POST',
      body: JSON.stringify(newPrescription),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).catch(res => console.error('Error:', error))
    .then(callback);
  }
};








