const loggedInElements = document.querySelectorAll(".logged-in");
const loggedOutElements = document.querySelectorAll(".logged-out");
var map;
var markers = [];
var userD;
var coordinates = {
  lat: 0,
  lng: 0,
};
var properties = {
  center: coordinates,
  zoom: 3,
  maxZoom: 8,
  minZoom: 3,
};
$("#btnStart").click(function () {
  movePosition();
});

function mapStart() {
  map = new google.maps.Map(document.getElementById("map"), properties);
}

function movePosition() {
  if (navigator.geolocation) {
    var icon = {
      url: "./IMG/userMarker.png",
      scaledSize: new google.maps.Size(30, 30),
    };

    navigator.geolocation.getCurrentPosition((position) => {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      var marker = new google.maps.Marker({
        position: { lat: pos.lat, lng: pos.lng },
        icon: icon,
        map: map,
        clickable: false
      });
      map.panTo(new google.maps.LatLng(pos.lat, pos.lng));
      db.collection("Users")
        .doc(userD.uid)
        .update({
          coordinates: { latitude: pos.lat, longitude: pos.lng },
        });
    });
  } else {
    Swal.fire("No location provided", "", "info");
  }
}

function showElements(user) {
  if (user) {
    mapStart();
    loggedInElements.forEach((item) => {
      item.style.display = "block";
    });
    loggedOutElements.forEach((item) => {
      item.style.display = "none";
    });
  } else {
    loggedInElements.forEach((item) => {
      item.style.display = "none";
    });
    loggedOutElements.forEach((item) => {
      item.style.display = "block";
    });
  }
}


function loadPeople(data) {
  markers = [];
  let friends = [];
  
  db.collection("Users")
  .doc(userD.uid).get().then((doc)=> {
    if(doc.data().friends === undefined)
    {
        db.collection("Users").doc(doc.id).update({
            friends: []
        });
    }
    else{
        friends = doc.data().friends;
    }
     
    data.forEach(document => {
        
        var icon = {
            url: "./IMG/noFriendMarker.png",
            scaledSize: new google.maps.Size(50, 50),
          };
          var contentString = `<h4>${document.data().name}</h4> 
          <button class="btn btn-outline-warning btn-block" onclick="addFriend('${document.id}')">Add friend</button>`;

          friends.forEach(friend => {
            if(friend == document.id)
            {
                icon = {
                    url: "./IMG/friendMarker.png",
                    scaledSize: new google.maps.Size(50, 50),
                  };
                  contentString = `<h4>${document.data().name}</h4> 
                      <button class="btn btn-outline-danger btn-block" onclick="removeFriend('${document.id}')">Remove friend</button>`;
            } 
          });

          var infowindow = new google.maps.InfoWindow({
            content: contentString,
          });

          var marker = new google.maps.Marker({
            position: {
              lat: document.data().coordinates.latitude,
              lng: document.data().coordinates.longitude,
            },
            icon: icon,
            map: map,
          });

          markers.push(marker);
          marker.addListener("click", function () {
            infowindow.open(map, marker);
          });
    });
  });
}

function addFriend(uid) {
  db.collection("Users")
    .doc(userD.uid)
    .update({
      friends: firebase.firestore.FieldValue.arrayUnion(uid),
    });
    clearOverlays();
}

function removeFriend(uid) {
  
    db.collection("Users")
      .doc(userD.uid)
      .update({
        friends: firebase.firestore.FieldValue.arrayRemove(uid)
      });
      clearOverlays();

  }

  function clearOverlays() {

    for (var i = 0; i < markers.length; i++ ) {
      markers[i].setMap(null);
    }
    markers.length = 0;
  }

function loadFriends(snapshot)
{
    let friends = [];
    if(snapshot.data().friends === undefined)
    {
        db.collection("Users").doc(userD.uid).update({
            friends: []
        });
    }
    else{
         friends = snapshot.data().friends;
    }
    let friendsHtml = document.getElementById("friendsList");
    let html = '';
    if(friends.length == 0)
    {
        html = `<h2 class="col-12 text-light">No friends added :(</h2>`;
    }
    else{
        friends.forEach(friendUID => {
            db.collection("Users")
            .doc(friendUID)
            .get()
            .then((doc) => {
                html += `<div class="col-12 col-md-4">
                <div class="jumbotron pt-3 pb-0 pl-0 pr-0">
                  <h4 class="text-dark">${doc.data().name}</h4>
                  <button class="btn btn-danger btn-block" onclick="removeFriend('${friendUID}')">Remove Friend</button>
                </div>
              </div>`;      
              friendsHtml.innerHTML = html;
            });
        });
    }
    friendsHtml.innerHTML = html;

}
