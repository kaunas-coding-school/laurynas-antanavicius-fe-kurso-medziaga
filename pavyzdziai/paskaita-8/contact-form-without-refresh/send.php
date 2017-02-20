<?php
  $msg = '';
  // if (array_key_exists('email', $_POST)) {
    require 'phpmailer/PHPMailerAutoload.php';
    $mail = new PHPMailer;
    // $mail->isSMTP();
    // $mail->Host = 'localhost';
    // $mail->Port = 25;

    // Naudojant Gmail prisijungima, reikia ijungti "Less secure apps connection" savo Google Account'e
    $mail->IsSMTP();
    $mail->SMTPAuth   = true;
    $mail->SMTPSecure = "tls";
    $mail->Host       = "smtp.gmail.com";
    $mail->Port       = 587;
    $mail->Username   = "laurynas.ant@gmail.com";
    $mail->Password   = "";

    // Email header
    $mail->setFrom('laurynas.ant@gmail.com', 'Laurynas Antanavicius');
    $mail->addAddress('laurynas.ant@gmail.com', 'Laurynas Antanavicius');

    // Email message
    if ($mail->addReplyTo($_POST['email'])) {
      $mail->isHTML(true);
      $mail->Subject = 'Contact Form Submission';
      $mail->Body = 'Email: ' . $_POST['email'];

      if (!$mail->send()) {
        $msg = '{ "error": "Sorry, something went wrong. Please try again later."}';
      } else {
        $msg = '{ "success": "Message sent! Thanks for contacting us."}';
      }
    } else {
      $msg = '{ "error": "Invalid email address, message ignored."}';
    }
    echo $msg;
  // }
?>
