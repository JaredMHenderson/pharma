
var patients = {
  getPatients: function(callback){
    fetch('./api/patients')
      .then(function(response) {
    return response.json();
    })
    .then(function(userJson) {
      callback(userJson);
    });
  },
  createPatient: function(callback, newPatient) {
    fetch('./api/patients', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(newPatient), 
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(callback);
  }
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





  // function getPosts(category) {
  //   var categoryString = category || "";
  //   if (categoryString) {
  //     categoryString = "/category/" + categoryString;
  //   }
  //   $.get("/api/posts" + categoryString, function(data) {
  //     console.log("Posts", data);
  //     posts = data;
  //     if (!posts || !posts.length) {
  //       displayEmpty();
  //     }
  //     else {
  //       initializeRows();
  //     }
  //   });
  // }




