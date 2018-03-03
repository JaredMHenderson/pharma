$(document).ready(function() {

let patients;

function getPatients() {
	$.get("/api/users", function(data) {
		console.log("Patient", data);
		patients = data;
	})
}

getPatients();





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





});//doc ready closing