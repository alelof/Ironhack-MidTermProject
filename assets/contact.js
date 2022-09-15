const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";

/*
Todos los campos son requeridos. Al menos 50 caracteres para el message y que el teléfono empiece con +.
Si es válido enviamos los datos al endpoint de Deta, limpiamos el formulario y mostramos un mensaje de confirmación.
Si no es válido, mostramos un mensaje de error. En ningún caso el formulario debe enviarse (no debe recargarse la página).
*/
document.getElementById('submitBtn').addEventListener('click', 
function(e){
  //validateFields();
  e.preventDefault();
  const nam = document.getElementById('name').value;
  const mai = document.getElementById('email').value;
  const pho = document.getElementById('phone').value;
  const msg = document.getElementById('message').value;
  const missingData = document.getElementById('missingData');
  const wrongPhone = document.getElementById('wrongPhone');
  const wrongMsg = document.getElementById('wrongMsg');
  const allOk = document.getElementById('allOk');
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let proceed = true;

  if (!nam || !mai || !pho || !msg){ //EmptyFields
      proceed = false;
      missingData.style.display = 'block';
      missingData.scrollIntoView();
      setTimeout(() => {
        missingData.style.display = 'none';
      }, 4000);
      //console.log("vacios:"+nam+mai+pho+msg);      
  }
  if(pho[0] != '+'){
      proceed = false;
      wrongPhone.style.display = 'block';
      wrongPhone.scrollIntoView();  
      setTimeout(() => {
        wrongPhone.style.display = 'none';
      }, 4000);
  }
  if(msg.length > 50){
    proceed = false;
    wrongMsg.style.display = 'block';
    wrongMsg.scrollIntoView();
    setTimeout(() => {
      wrongMsg.style.display = 'none';
    }, 4000);
  }
  if(!mai.match(regex)){
    proceed = false;
    wrongMail.style.display = 'block';
    wrongMail.scrollIntoView();
    setTimeout(() => {
      wrongMail.style.display = 'none';
    }, 4000);    
  }
  if(proceed==true){
    const datos = {
      name: nam,
      email: mai,
      phone: pho,
      message: msg
    };
    
    const body = {
      item: datos
    };

    const fetchParams = {
      method: 'POST',
      headers: {
        "Accept":'application/json',
        "Content-Type":'application/json',
        "X-API-Key": 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
      },
      body: JSON.stringify(body)
    };
 
    fetch(url, fetchParams)
    .then((response) => response.json())
    .then((data) => { 
      console.log(data); 
      allOk.style.display = 'block';
      allOk.scrollIntoView();
      setTimeout(() => {
        allOk.style.display = 'none';
      }, 4000);
      document.getElementById("myForm").reset();
    })
    .catch(console.error); 
  }//IF

  
});
