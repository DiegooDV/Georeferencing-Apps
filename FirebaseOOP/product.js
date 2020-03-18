class Product {
        
    constructor(id,name,code){
        this.id = id;
        this.name = name;
        this.code = code;
    };

    deleteProduct(id){                
        db.collection("productos").doc(id).delete();
    };

    insertProduct(){
        db.collection('productos').add({
            nombre: this.name,
            codigo: this.code
        });
    }

    editar(id){    
        formularioeditar.nombreeditar.value = this.nombre;
        formularioeditar.codigoeditar.value = this.codigo;
        formularioeditar.ideditar.value = this.id;
    };

    updateProduct(){    
        db.collection('productos').doc(this.id).update({
            nombre: this.name,
            codigo: this.code
        });
    };

};