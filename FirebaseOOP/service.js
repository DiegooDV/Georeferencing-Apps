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
      else if(change.type = "modified") {
        console.log(change.doc.id);
        let idRemovedValue = document.getElementById(change.doc.id);
        listProducts.removeChild(idRemovedValue);
        renderProducts(change.doc);
      }
  
    });
  
  });