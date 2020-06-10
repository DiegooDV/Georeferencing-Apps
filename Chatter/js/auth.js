auth.onAuthStateChanged(user => {
    showElements(user);
}); 

const formLogin = document.getElementById("formLogin");
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = formLogin["txtEmailLogin"].value;
  let password = formLogin["txtPasswordLogin"].value;

auth.signInWithEmailAndPassword(email, password)
    .then((credentials) => {
      $("#modalLogin").modal("hide");
      formLogin.reset();

      Swal.fire("Welcome home");
    })
    .catch((err) => {
      Swal.fire("Error", err.message, "error");
    });
});



const formRegister = document.getElementById("formRegister");

formRegister.addEventListener('submit', (e) =>{
    e.preventDefault();
    let email = formRegister["emailRegister"].value;
    let password = formRegister["passwordRegister"].value;
    let name = formRegister["nameRegister"].value;
    let address = formRegister["addressRegister"].value;
    let phone = formRegister["phoneRegister"].value;

    auth.createUserWithEmailAndPassword(email, password).then( (credentials) => {
        
         localStorage.setItem("loginInfo", "email");
        loginInfo = "email";
        return db.collection("Users").doc(credentials.user.uid).set({
            name: name,
            phone: phone,
            address: address
        });

    }).then(() =>{

        
        $("#modalRegister").modal("hide");
        formRegister.reset();
        Swal.fire("Welcome aboard");
    }).catch((err) => {
        Swal.fire("Error", err.message, "error");
    });
});

function googleLogin(){
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result){
        var user = result.user;
        $("#modalLogin").modal("hide");
        $("#modalCreateAccount").modal("hide");
        formLogin.reset();
        formRegister.reset();
        Swal.fire("Welcome");
    }).catch((err) => {
        Swal.fire("Error", err.message, "error");
      });
 
}
