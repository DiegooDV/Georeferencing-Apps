function renderProducts(doc)
{
 var product = new Product(doc.id, doc.data().nombre, doc.data().codigo);

  let li = document.createElement("li");
    let name = document.createElement("h3");
    let code = document.createElement("h6");
    let deleteButton = document.createElement("button");
    let updateButton = document.createElement("button");


    li.setAttribute("id", doc.id);

    li.classList.add("list-group-item");
    updateButton.classList.add("btn", "btn-sm","btn-warning", "mr-2");
    deleteButton.classList.add("btn", "btn-sm", "btn-danger");
  

    name.textContent = doc.data().nombre;
    code.textContent = doc.data().codigo;
    deleteButton.innerHTML = '<img src="https://image.flaticon.com/icons/svg/1345/1345823.svg" width="20" heigth="30"/>'
    updateButton.innerHTML = '<img src="https://image.flaticon.com/icons/svg/565/565722.svg" width="20" heigth="30"/>'
    
    name.setAttribute("id", "Name" + doc.id);
    code.setAttribute("id", "Code" + doc.id);
   
    li.appendChild(name);
    li.appendChild(code);
    li.appendChild(updateButton);
    li.appendChild(deleteButton);
    

    listProducts.appendChild(li);

    deleteButton.addEventListener("click", (e) => {

      let id = e.currentTarget.parentElement.getAttribute("id");
      product.deleteProduct(id);

    });
    

    updateButton.addEventListener("click", (e) => {
   
      let id = e.currentTarget.parentElement.getAttribute("id");
      
      //Bad method, sometimes brings back mixed content
     // let name = e.target.parentElement.parentElement.childNodes[0].textContent;
     // let code = e.target.parentElement.parentElement.childNodes[1].textContent;

    let name = document.getElementById("Name" + id);
    let code = document.getElementById("Code" + id);

      Swal.fire({
        title: '<strong>Update Product</strong>',
        icon: 'info',
        html:
          '  <input class="form-control" type="text" id="txtNameU" placeholder="Name" value="' + name.innerText + '" /> <br> ' +
          ' <input class="form-control" type="text" id="txtCodeU" placeholder="Code" value="' + code.innerText + '" /> <br> ',
        showCloseButton: false,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          'Update',
        cancelButtonText:
          'Cancel'
      }).then((result) => {
        if (result.value) {
            var name = document.getElementById("txtNameU").value.trim();
            var code = document.getElementById("txtCodeU").value.trim();

            var product = new Product(id, name, code);
            
            if(product.name.trim() != "" &&
            product.code.trim() != "")
            {
            product.updateProduct();
              Swal.fire(
                'Updated!',
                'Element updated',
                'success'
              )
            }
            else{
              Swal.fire(
                'Wrong fields',
                'Fill all the fields',
                'warning'
              )
            }
        }
      });
    
});
}