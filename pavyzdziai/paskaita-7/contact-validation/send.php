<?php
  $msg = '';
  if (array_key_exists('email', $_POST)) {
    require 'phpmailer/PHPMailerAutoload.php';
    $mail = new PHPMailer;

    // $mail->isSMTP();
    $mail->Host = 'localhost';
    $mail->Port = 25;

    $mail->setFrom('laurynas@kaunascoding.lt', 'Laurynas');
    $mail->addAddress('laurynas@kaunascoding.lt', 'Laurynas');

    if ($mail->addReplyTo($_POST['email'])) {
      $mail->isHTML(true);
      $mail->Subject = 'Contact form submission';
      $mail->Body = 'Email: ' . $_POST['email'];

      if (!$mail->send()) {
        $msg = '{ "error": "Sorry, something happened"}';
      } else {
        $msg = '{ "success": "Thank you for your registration"}';
      }
    } else {
    $msg = '{ "error": "Please enter email"}';
    }
    echo $msg;
  }
?>
