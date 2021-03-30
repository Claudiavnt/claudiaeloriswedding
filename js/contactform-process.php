<?php
$errorMSG = "";

$to = "claudiavnt92@gmail.com";
$subject = "Nuova conferma da claudiaeloriswedding.it";

// prepare email body text
$Body = "";
$Body .= "Nome e Cognome: ";
$Body .= $name;
$Body .= "\n";
$Body .= "numero persone confermate: ";
$Body .= $pnumber;
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Messaggio: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($to, $subject, $Body, "From:".$email);

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