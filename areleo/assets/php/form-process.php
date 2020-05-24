<?php

$errorMSG = "";

// FIRST NAME
if (empty($_POST["firstname"])) {
    $errorMSG = "Name is required ";
} else {
    $firstname = $_POST["firstname"];
}

// LAST NAME
if (empty($_POST["lastname"])) {
    $errorMSG .= "Last Name is required ";
} else {
    $lastname = $_POST["lastname"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Eail is required ";
} else {
    $email = $_POST["email"];
}

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["message"];
}


$EmailTo = "youremail@mail.com";
$Subject = "New Message Received";

// prepare email body text
$Body = "";
$Body .= "First Name: ";
$Body .= $firstname;
$Body .= "\n";
$Body .= "Last Name: ";
$Body .= $lastname;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>