function validarForm(event){

    event.preventDefault();

    const nombre= document.getElementById("nombreUsuario").value.trim();
    const correo= document.getElementById("exampleInputEmail1").value.trim();
    const banda= document.getElementById("banda").value.trim();
    const album= document.getElementById("album").value.trim();
    const cancion1= document.getElementById("cancion1").value.trim();
    const cancion2= document.getElementById("cancion2").value.trim();
    const cancion3= document.getElementById("cancion3").value.trim();

    const mensaje= document.getElementById("mensajeForm");

    if(nombre=== ""){
        mensaje.textContent= "Ingrese su Nombre";
        mensaje.style.color= "red";
        return;
    }else if(correo== ""){
        mensaje.textContent= "Ingrese su Correo Electrónico";
        mensaje.style.color= "red";
        return;
    }else if(banda== ""){
        mensaje.textContent= "Ingrese su Banda o Artista Sugerido";
        mensaje.style.color= "red";
        return;
    }else if(album== ""){
        mensaje.textContent= "Ingrese su Álbum Sugerido";
        mensaje.style.color= "red";
        return;
    }else if(cancion1== ""){
        mensaje.textContent= "Ingrese su Cancion Destacada";
        mensaje.style.color= "red";
        return;
    }else if(cancion2== ""){
        mensaje.textContent= "Ingrese su Cancion Destacada";
        mensaje.style.color= "red";
        return;
    }else if(cancion3== ""){
        mensaje.textContent= "Ingrese su Cancion Destacada";
        mensaje.style.color= "red";
        return;
    }else{
        mensaje.textContent= "Muchas Gracias "+nombre+" Tu sugerencia fue enviada con exito.";
        mensaje.style.color= "lightgreen";
    }
}