var mdpv=false;
var mdp1v=false;
function verifmdp() {

   var mdp1 = document.getElementById('Nouveau mot de passe').value;
  
   if(mdp1.length==0){
        mdp1v=false;
        return;
   }

   if (mdp1.length < 7) {
        mdp1v = false;
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'le mot de passe doit contenir au moins 7 caractères !',
        })
     return ;
    }
        mdp1v = true;
        return ;


}
function verifmdpMatch() {
 
    var mdp1 = document.getElementById('Nouveau mot de passe ').value;
    var mdp2 = document.getElementById('Répeter le Nouveau mot de passe').value;
    if (mdp1 != mdp2) {
        mdpv = false;
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'les mots de passe saisis ne sont pas identiques !',
        })
        return;
    }
        mdpv = true;
    
    return;
}

function validateForm() {
    // alert(mdp+" "+date+" "+nom+" "+prenom);
    if (mdp1v && mdpv) {
        return true;
    }
    else {

        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'veuillez vérifier votre saisie'
        });
        return false;

    }

}
