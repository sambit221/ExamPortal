const formE1 = document.querySelector('.form');

formE1.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('username').value;
    const email = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;


    fetch('http://localhost:3000/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ name, email, phone })
    }) .then(response => response.json())
    .then(data => { console.log(data);})
    .catch(error => {console.log(error);
    });

    // const formData = new FormData(formE1);
    // const data= Object.fromEntries(formData);
    // console.log([...formData]);
    // fetch('http://localhost:3000/students',{
    //     method:'POST',
    //     headers: {'Content-Type':'application/json'
    // },
    // body: JSON.stringify(data)
    // }).then(res=>res.json())
    // .then(data=>console.log(data))
    // .catch(error =>console.log(error));
})


// // text data input
// const userNameIdElement = document.getElementById("name")
// const userMailIdElement = document.getElementById("email")
// const userPhoneNoElement = document.getElementById("PhoneNo")
// // date
// const userDobIdElement = document.getElementById("dob") 

// // Buttons
// const saveBtn= document.getElementById("saveBtn")


// saveBtn.onclick=function(){
//     const prefs={
//         name : userNameIdElement.value,
//         email : userMailIdElement.value,
//         phoneNo : userPhoneNoElement.value,
//         dob : userDobIdElement.value
//     }
//     // chrome.runtime.sendMessage({event: 'onSave', prefs})

//     console.log(prefs);
// }

// chrome.storage.local.get(["name", "mail", "dob"], (result) => {
//     const { name, mail, dob } = result;
//     if (name){
//         userNameIdElement. value = name
//     } if (mail) {
//         userMailIdElement. value = mail
//     } if (dob){
//         userDobIdElement. value = dob
//     }
// })
