var Firstnamev=False
const formValid = document.getElementById('myButton');
formValid.addEventListener('click', valider);

// VERIFICATION DU PRENOM
function verifFirstname() {

    var Firstname = document.getElementById('Votre Nom').value;
    var FirstnameValide=/^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
   
    if(Firstname.length===0){
        Firstnamev=false;
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Veuillez saisir votre Nom !',
        })
         return;
    }
    if (Firstname.length <2 ) {
        Firstnamev = false;
         Swal.fire({
             type: 'error',
             title: 'Oops...',
             text: 'Votre nom  doit contenir au moins 3 caractères !',
         })

      return ;
     }
     if (FirstnameValide.test(Firstname) == false){
           Firstnamev= false;
           Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Votre nom est invalide : !',
        })
     return ;
     }
     Firstnamev = true;
     return ;
}

//VERFICATION DU NOM 

function verifLastname() {

    var Firstname = document.getElementById('Votre Prenom').value;
    var FirstnameValide=/^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
   
    if(Firstname.length===0){
        Firstnamev=false;
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Veuillez saisir votre Prenom !',
        })
         return;
    }
    if (Firstname.length <2 ) {
        Firstnamev = false;
         Swal.fire({
             type: 'error',
             title: 'Oops...',
             text: 'Votre Prenom doit contenir au moins 3 caractères !',
         })

      return ;
     }
     if (FirstnameValide.test(Firstname) == false){
           Firstnamev= false;
           Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Votre Prenom est invalide : !',
        })
     return ;
     }
     Firstnamev = true;
     return ;
}

        
 
 
 