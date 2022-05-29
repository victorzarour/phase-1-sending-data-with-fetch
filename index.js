// Add your code here
function submitData(userName, userEmail){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": userName,
            "email": userEmail,
        })
    })
    .then (res => res.json())
    .then (object => {
        document.querySelector("body").append(object.id)
    })
    .catch(error => {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
        document.querySelector("body").append(error.message)
      });


}

submitData("victor", "vic_42@gmail.com")
