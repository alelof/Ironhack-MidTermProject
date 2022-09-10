/*
Todos los campos son requeridos. Al menos 50 caracteres para el message y que el teléfono empiece con +.
Si es válido enviamos los datos al endpoint de Deta, limpiamos el formulario y mostramos un mensaje de confirmación.
Si no es válido, mostramos un mensaje de error. En ningún caso el formulario debe enviarse (no debe recargarse la página).
*/
document.getElementById('submitBtn').addEventListener('click', 
function(e){
  validateFields();
  e.preventDefault();
});


function validateFields() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  let proceed = true;

  let alertMsg = '¡ERROR!\nPlease verify the following:\n\n';
//  alert("name:"+name+"email:"+email+"phone:"+phone);
//  alert("msg: "+message);
  if (!name && !email && !phone && !message){
      proceed = false;
      alert("¡ERROR!\nPlease complete all the fields");
  }
  else {
    if(phone[0] != '+'){
      proceed = false;
      alertMsg += "- Phone number should start with +\n";
   }
    if(message.length <= 50){
      proceed = false;
      alertMsg += "- Message should be at least 50 characters long\n";
   }
   if(proceed == false){
      alert(alertMsg);
    }
  }

//  if(okPhone == true && okMsg==true){
  if(proceed==true){
    alert("Yeeeeeeeeeeeeei\n ya puedo enviarlo");
    document.getElementById("myForm").reset();
  }
   
}