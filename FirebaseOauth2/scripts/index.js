var loginInfo = localStorage.getItem('loginInfo')

const accountInfo = document.querySelector(".accountInfo");
const loggedInElements = document.querySelectorAll(".logged-in");
const loggedOutElements = document.querySelectorAll(".logged-out");

const configureNavbar = (user) => {
  if (user) {
    loggedInElements.forEach((item) => {
      item.style.display = "block";
    });
    loggedOutElements.forEach((item) => {
      item.style.display = "none";
    });


switch (loginInfo) {

  case "email":
    db.collection("Users").doc(user.uid).get().then( doc => {
      const html = 
      `<p>Name: ${doc.data().name}</p>
      <p>Email: ${user.email}</p>
      <p>Address: ${doc.data().address}</p>
      <p>Phone: ${doc.data().phone}</p>`;

      accountInfo.innerHTML = html;
  });
    break;
  case "gmail":
    let html =  `
    <p>Name: ${user.displayName}</p>
    <p>Email: ${user.email}</p> 
    <img src="${user.photoURL}" style="width:40px; height: 40px;">`;

    accountInfo.innerHTML = html;
    break;
    default: console.log("No login info");
      break;
}

  

  } else {
    loggedInElements.forEach((item) => {
      item.style.display = "none";
    });
    loggedOutElements.forEach((item) => {
      item.style.display = "block";
    });
  }
};

const menu = document.getElementById("menu");

const getMenu = (data) => {

    let html = "";
    if(data)
    {
        if(data.length >=1 )
        {
        data.forEach(doc => {
            const column =  `<div class="col-12 col-md-4 wow bounceInLeft" >
            <img class="img-fluid w-100" src="img/${doc.data().image}" />
            <h4>${doc.data().name}</h4>
            <h4>$ ${doc.data().price}</h4>
            <a href="https://paypal.com" target="_blank"><button class="btn btn-primary">Buy</button></a>
          </div>`    

          html += column;  
        });

        menu.innerHTML = html;
        }
        else{
            html = "<h3 class='mt-5'>No pizzas available, try again later</h3>"
            menu.innerHTML = html;
        }
      
    }
    else{
        html = "<h3 class='mt-5'>You need to log in to see our menu</h3>"
        menu.innerHTML = html;
    }
}
