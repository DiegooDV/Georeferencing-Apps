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
      <p>Phone: ${doc.data().phone}</p>
      <p>Coordinates: ${doc.data().coordinates.latitude}, ${doc.data().coordinates.longitude}</p>`;

      
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


const getUsers = (data) => {

    if(data)
    {
        if(data.length >=1 )
        {
        
          var properties = {
            center: {lat: 21.152639, lng: -101.711598 },
            zoom: 14
        }

        var map = document.getElementById('map');
        var googleMap = new google.maps.Map(map, properties);

        data.forEach(element => {
          
          infoW = new google.maps.InfoWindow;

          var pos = {
            lat: element.data().coordinates.latitude,
            lng: element.data().coordinates.longitude
          };

          infoW.setPosition(pos);
          infoW.setContent(element.data().name);
          infoW.open(googleMap);

        });

        }
        else{
          
        }
      
    }
    else{

    }
}
