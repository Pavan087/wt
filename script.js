function updateBio() {
    // Collect user data
    let name = prompt("What is your name?");
    let date of birth = prompt("what is your date of birth");
    let profession = prompt("What is your profession?");
    let photoUrl = prompt("Please enter the URL of your profile photo:");

    // Validation: Ensure name is not empty
    if (name === "" ||date of birth == ""|| profession === "" || photoUrl === "") {
        alert("Please make sure all fields are filled out correctly.");
        return;
    }

    // Display the information using alert and console.log
    alert("Bio Information Collected!\n" + "Name: " + name + "\n"+ "date of birth:" + date of birth +"\n" +"Profession: " + profession+");
    console.log("Name: " + name);
    console.log("date of birth:"+date of birth);
    console.log("Profession: " + profession);
    console.log("Profile Photo URL: " + photoUrl);

    // Update HTML content dynamically
    document.getElementById("user-name").textContent = "Name: " + name;
    document.getElementById("user-date of birth").textContent = "date of birth: " + date of birth;
    document.getElementById("user-profession").textContent = "Profession: " + profession;
    document.getElementById("user-photo").innerHTML = "<img src='" + photoUrl + "' alt='Profile Picture'>";

    // Optional: Allow the user to update their bio again
    alert("Your bio has been updated successfully.");
}
