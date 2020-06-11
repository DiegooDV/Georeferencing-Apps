const formRegister = document.getElementById("formRegister");
const formLogin = document.getElementById("formLogin");

auth.onAuthStateChanged(user => {
  mapStart();
  userD = user;
    console.log(userD);
}); 

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

formRegister.addEventListener('submit', (e) =>{
    e.preventDefault();
    let email = formRegister["txtEmailRegister"].value;
    let password = formRegister["txtPasswordRegister"].value;
    let name = formRegister["txtNameRegister"].value;

    auth.createUserWithEmailAndPassword(email, password).then( (credentials) => {
        
        return db.collection("Users").doc(credentials.user.uid).set({
            name: name,
            coordinates: {latitude: 0, longitude: 0}
        });

    }).then(() =>{
        
        $("#modalCreateAccount").modal("hide");
        formRegister.reset();
        Swal.fire("Welcome aboard");
    }).catch((err) => {
        Swal.fire("Error", err.message, "error");
    });
});

function logOut()
{
  Swal.fire({
    title: "Sign out?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.value) {

        let timerInterval;
        Swal.fire({
          title: "Signing out",
          html: "<b></b>",
          timer: 1000,
          timerProgressBar: true,
          onBeforeOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {
              const content = Swal.getContent();
              if (content) {
                const b = content.querySelector("b");
                if (b) {
                  b.textContent = Swal.getTimerLeft();
                }
              }
            }, 100);
          },
          onClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
            auth.signOut();
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire("Signed out", "", "success");
          }
        });
    }
  });
}

function googleLogin(){
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result){
        var user = result.user;
        $("#modalLogin").modal("hide");
        $("#modalCreateAccount").modal("hide");
        formLogin.reset();
        formRegister.reset();
        Swal.fire("Welcome");

        db.collection("Users").doc(credentials.user.uid).set({
          name: user.displayName,
          coordinates: {latitude: 0, longitude: 0}

      });
    }).catch((err) => {
        Swal.fire("Error", err.message, "error");
      });
 
}

function facebookLogin(){
    let  provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result){
        var user = result.user;
        $("#modalLogin").modal("hide");
        $("#modalCreateAccount").modal("hide");
        formLogin.reset();
        formRegister.reset();
        Swal.fire("Welcome");
        db.collection("Users").doc(user.uid).set({
          name: user.displayName,
          coordinates: {latitude: 0, longitude: 0}
      });
    }).catch((err) => {
        Swal.fire("Error", err.message, "error");
      });
 
}
