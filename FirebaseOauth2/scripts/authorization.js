//look if there is a user logged in by email

auth.onAuthStateChanged(user => {
    if(user)
    {
      console.log(user);
        db.collection("Menu").onSnapshot(snapshot => {
         getMenu(snapshot.docs);
        });
        configureNavbar(user);
    }
    else{
        getMenu(null);
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
      console.log(credentials);
      $("#modalLogin").modal("hide");
      formLogin.reset();
      //add session storage 
      sessionStorage.setItem("loggedByEmail", true);
      loggedByEmail = true;
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
        //clear session storage
        sessionStorage.clear();
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

    auth.createUserWithEmailAndPassword(email, password).then( (credentials) => {
        
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
        
        $("#modalLogin").modal("hide");
        formLogin.reset();
        Swal.fire("Welcome home");
    }).catch((err) => {
        Swal.fire("Error", err.message, "error");
      });
 
}
