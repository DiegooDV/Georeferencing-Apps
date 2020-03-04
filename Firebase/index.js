
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCNe-mjWzhEUSwDH7BvgJWtMxZUZmmFI2U",
    authDomain: "sistemasgeoreferenciados7.firebaseapp.com",
    databaseURL: "https://sistemasgeoreferenciados7.firebaseio.com",
    projectId: "sistemasgeoreferenciados7",
    storageBucket: "sistemasgeoreferenciados7.appspot.com",
    messagingSenderId: "1014446376039",
    appId: "1:1014446376039:web:122b5334323097c01ac0c2",
    measurementId: "G-E1YYVDCCBC"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db =  firebase.firestore();

//declare elements from html
const listProducts = document.querySelector('#list');
const form = document.querySelector('#formProduct');

//add function to listen events
events();

//get changes when database change
db.collection("productos").onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {

    //verify type of change and then do an action
    if(change.type == "added")
    {
      renderProducts(change.doc)

    } else if(change.type == "removed")
    {
      console.log(change.doc.id);
      let idRemovedValue = document.getElementById(change.doc.id);
      listProducts.removeChild(idRemovedValue);
    }

  });

});

//Load products on list
function renderProducts(doc)
{
  let li = document.createElement("li");
    let name = document.createElement("span");
    let code = document.createElement("span");
    let deleteButton = document.createElement("button");

    li.setAttribute("id", doc.id);

    li.classList.add("list-group-item");
    deleteButton.classList.add("btn", "btn-danger", "mr-5");
    name.classList.add("mr-5");

    name.textContent = doc.data().nombre;
    code.textContent = doc.data().codigo;
    deleteButton.textContent = "Delete";

    li.appendChild(deleteButton);
    li.appendChild(name);
    li.appendChild(code);

    listProducts.appendChild(li);

    deleteButton.addEventListener("click", (e) => {

      let id = e.target.parentElement.getAttribute("id");
      db.collection("productos").doc(id).delete();

    });
}

function events()
{
  //adding product event
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(validateFields())
    {
    db.collection("productos").add(
      {
        //database variable names
        nombre : form.productName.value,
        codigo : form.productCode.value
      }
    );
  
     form.productName.value = "";
     form.productCode.value = "";
    }
    else{
      window.alert("Wrong fields");
    }
  });
}

//validate text inputs are filled
function validateFields()
{
  if(form.productName.value.trim() === "" || form.productCode.value.trim() === ""  )
  {
    return false;
  }
  else {
    return true;
  }
}