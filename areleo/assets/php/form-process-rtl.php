<?php

$errorMSG = "";

// FIRST NAME
if (empty($_POST["firstname"])) {
    $errorMSG = "الرجاء ادخال الإسم";
} else {
    $firstname = $_POST["firstname"];
}

// LAST NAME
if (empty($_POST["lastname"])) {
    $errorMSG .= "الرجاء ادخال اللقب";
} else {
    $lastname = $_POST["lastname"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "الرجاء ادخال البريد الالكتروني";
} else {
    $email = $_POST["email"];
}

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "الرجاء كتابة الرسالة";
} else {
    $message = $_POST["message"];
}


$EmailTo = "hamdislim2@gmail.com";
$Subject = "رسالة جديدة";

// prepare email body text
$Body = "";
$Body .= " الإسم ";
$Body .= $firstname;
$Body .= "\n";
$Body .= " اللقب ";
$Body .= $lastname;
$Body .= "\n";
$Body .= "البريد الإلكتروني ";
$Body .= $email;
$Body .= "\n";
$Body .= "الرسالة";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "الرجاء التثبت من المعلومات :(";
    } else {
        echo $errorMSG;
    }
}

?>