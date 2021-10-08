window.addEventListener("load", () => {
    let formCreat = document.querySelector("form.crear-formulario-producto");
  
    formCreat.addEventListener("submit", (e) => {
      const errores = [];
      
  
      let name = document.querySelector("#name");
      let descripcion = document.querySelector("#description");
      let image = document.querySelector("#image");
      let FileUploadPath = image.value;
  
      if (name.value == "") {
        alert("El campo nombre no debe estar vacio");
        errores.push(" ");
      } 
      if (name.value.length < 5) {
        alert("El campo nombre debe tener al menos 5 caracteres");
        errores.push(" ");
      }
      console.log(descripcion.value);
      console.log(descripcion.value.length);
      if (descripcion.value.trim() == "") {
        console.log(descripcion.value);
        alert("El campo descripcion no debe estar vacio");
        errores.push(" ");
      } 
      if (descripcion.value.length < 20) {
        alert("El campo descripcion debe tener al menos 20 caracteres");
        errores.push(" ");
        console.log(descripcion.value);
      }
  
      //ver si se cargo una imagen
      console.log(FileUploadPath);
      if (FileUploadPath == "") {
        alert("Por favor seleccionar una imagen");
        errores.push(" ");
      } else {
        var Extension = FileUploadPath.substring(
          FileUploadPath.lastIndexOf(".") + 1
        ).toLowerCase();
  
        //si se cargo de imagen
  
        if (
          Extension == "gif" ||
          Extension == "png" ||
          Extension == "jpeg" ||
          Extension == "jpg"
        ) {
          if (image.files && image.files[0]) {
            var reader = new FileReader();
  
            reader.onload = function (e) {
              $("#blah").attr("src", e.target.result);
            };
  
            reader.readAsDataURL(image.files[0]);
          }
        } else {
          //The file upload is NOT an image
          alert(
            "La imagen debe tener una de las siguientes extenciones GIF, PNG, JPG, JPEG. "
          );
          errores.push(" ");
        }
      }
  
      if (errores.length > 0) {
          e.preventDefault();
      }
    });
  });
  