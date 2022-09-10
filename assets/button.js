document.getElementById('subscribeBtn').addEventListener('click', 
function(e){
  const email = document.getElementById('emailcta').value;
   if (!email){
    alert("Please enter your email address");
   }
   else{
    document.getElementById("subsForm").reset();
    alert("COOL \n ¡Thanks for subscribing! ---");
    
   }
  e.preventDefault();
});