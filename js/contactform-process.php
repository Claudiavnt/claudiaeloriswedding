<?php
$errorMSG = "";

$EmailTo = "claudiavnt92@gmail.com";
$Subject = "Nuova conferma da claudialoriswedding.it";

// prepare email body text
$Body = "";
$Body .= "Nome e Cognome: ";
$Body .= $name;
$Body .= "\n";
$Body .= "numero persone confermate: ";
$Body .= $pnumber;
$Body .= "\n";
$Body .= "Messaggio: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$name);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Qualcosa è andato storto. Riprova!";
    } else {
        echo $errorMSG;
    }
}
?>