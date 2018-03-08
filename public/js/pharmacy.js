
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
    console.log("LOOOOOOOKKKKK!!!", newPatient);
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

<<<<<<< HEAD
// function getPatients() 
// {

// 	$.get("/api/users", function(data) 

// 	{
// 		console.log("Patients: ", data);
// 		patients = data;
// 		 $(".patients").empty();

//     	let patientToAdd = [];

//     	for (var i = 0; i < patients.length; i++) 
//     	{
//     	 	patientToAdd.push(patients[i]);
//       		$(".patients").append(patientToAdd);
//     	}
//   	}
		
// }

// getPatients();
=======
   updatePatient: function(callback, patientId, updatedPatient) {
    fetch('./api/patients/' + patientId, {
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

>>>>>>> 2a56a39c1e9b63503b00b99d5001ddc34849b7cc


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








