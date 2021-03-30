<?php
	$name = $_POST["nome_cognome"];
	$subject = $_POST["numero_persone"];
	$content = $_POST["messaggio"];

	$toEmail = "claudiavnt92@gmail.com";
	$mailHeaders = "From: " . $name;
	if(mail($toEmail, $subject, $content, $mailHeaders)) {
	    $message = "Your contact information is received successfully.";
	    $type = "success";
	}
?>