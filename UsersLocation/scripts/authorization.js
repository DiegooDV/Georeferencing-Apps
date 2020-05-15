


auth.onAuthStateChanged(user => {
    if(user)
    {

      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position => {

          db.collection('Users').doc(user.uid).update({
            coordinates : {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          });
        });
      }
  
      db.collection('Users').onSnapshot(snapshot =>{
        getUsers(snapshot.docs);
        configureNavbar(user);
           }, err => {
        console.log(err.message);
    });
    }
    else{
        getUsers(null);
        configureNavbar(user);
    }
}); 

const formLogin = document.getElementById("formLogin");
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = formLogin["email"].value;
  let password = formLogin["password"].value;

auth.signInWithEmailAndPassword(email, password)
    .then((credentials) => {
      $("#modalLogin").modal("hide");
      formLogin.reset();
      //add local storage 
      localStorage.setItem("loginInfo", "email");
      loginInfo = "email";
      Swal.fire("Welcome home");
    })
    .catch((err) => {
      Swal.fire("Error", err.message, "error");
    });
});

const salir = document.getElementById("signOut");
salir.addEventListener("click", (e) => {
  e.preventDefault();

  Swal.fire({
    title: "Sign out?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.value) {
      auth.signOut().then(() => {
        //clear local storage
        localStorage.clear();
        loginInfo = null;
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
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire("Signed out", "", "success");
          }
        });
      });
    }
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

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition( position => {

        auth.createUserWithEmailAndPassword(email, password).then( (credentials) => {
        
          localStorage.setItem("loginInfo", "email");
         loginInfo = "email";
         return db.collection("Users").doc(credentials.user.uid).set({
             name: name,
             phone: phone,
             address: address,
             coordinates:{latitude: position.coords.latitude, longitude: position.coords.longitude}
             });
 
     }).then(() =>{
 
         
         $("#modalRegister").modal("hide");
         formRegister.reset();
         Swal.fire("Welcome aboard");
     }).catch((err) => {
         Swal.fire("Error", err.message, "error");
     });
      })
    }
    else {
      Swal.fire('You need to permit location');
    }


   
});

googleLogin = () => {
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result){

        var token = result.credential.accessToken;

        var user = result.user;

        let html =  `
        <p>Name: ${user.displayName}</p>
        <p>Email: ${user.email}</p> 
        <img src="${user.photoURL}" style="width:40px; height: 40px;">`;

        accountInfo.innerHTML = html;
        localStorage.setItem("loginInfo", "gmail");
         loginInfo = "gmail";
        
        $("#modalLogin").modal("hide");
        formLogin.reset();
        Swal.fire("Welcome home");
    }).catch((err) => {
        Swal.fire("Error", err.message, "error");
      });
 
}
