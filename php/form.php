<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$response = ["status" => "error", "message" => ""];

if (isset($_POST["message"])) {
	$subject = "jaurysmaigret.fr - Rubrique contact";
	$message = "Ce message vous a été envoyé depuis le formulaire de contact du site jaurysmaigret.fr\n\n" .
		"Nom : " . $_POST["name"] . "\n" .
		"Email : " . $_POST["email"] . "\n" .
		"Objet : " . $_POST["object"] . "\n" .
		"Message : " . $_POST["message"];

	if (!empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["object"]) && !empty($_POST["message"])) {
		$to = "nc.cohen@yahoo.com";
		$headers = "From: no-reply@jaurysmaigret.fr\r\n" .
			"Reply-To: " . $_POST["email"];

		if (mail($to, $subject, $message, $headers)) {
			$response["status"] = "success";
			$response["message"] = "Message envoyé avec succès.";
		} else {
			$response["status"] = "error";
			$response["message"] = "Échec de l'envoi de l'email.";
		}
	} 

	echo json_encode($response);
	exit;
}
?>
