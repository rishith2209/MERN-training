function addstudent(){
    // get values
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if (name==="" || age==="" || course==="") {
        alert("Please fill all the fields");
    }

}