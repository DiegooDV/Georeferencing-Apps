 //adding product event
 form.addEventListener("submit", (e) => {
    e.preventDefault();

    var product = new Product(null,form.productName.value,form.productCode.value);
    if(validateFields(product))
    {
        
     product.insertProduct();
        
     form.productName.value = "";
     form.productCode.value = "";
    }
    else{
      window.alert("Wrong fields");
    }
  });


  function validateFields(product)
{
  if(product.name.trim() === "" || product.code.trim() === ""  )
  {
    return false;
  }
  else {
    return true;
  }
}