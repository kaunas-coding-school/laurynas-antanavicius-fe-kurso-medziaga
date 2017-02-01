<?php
  $errormsg = '';
  if (array_key_exists('email', $_POST)) {
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
    $mail->Username   = "xxx";
    $mail->Password   = "xxx";

    // Email header
    $mail->setFrom('laurynas.ant@gmail.com', 'Laurynas Antanavicius');
    $mail->addAddress('laurynas.ant@gmail.com', 'Laurynas Antanavicius');

    // Email message
    if ($mail->addReplyTo($_POST['email'])) {
      $mail->isHTML(true);
      $mail->Subject = 'Contact Form Submission';
      $mail->Body = 'Email: ' . $_POST['email'];

      if (!$mail->send()) {
        $errormsg = 'Sorry, something went wrong. Please try again later.';
      } else {
        $successmsg = 'Message sent! Thanks for contacting us.';
      }
    } else {
      $errormsg = 'Invalid email address, message ignored.';
    };
  }
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Pavyzdinis projektas</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link rel="stylesheet" href="styles/main.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  </head>
  <body>
    <div class="content">
      <img src="assets/logo.png" alt="Project Logo" title="Project Logo">
      <div class="white-background">
        <h1>A new world of tailored shirts for women</h1>
        <h2>Arriving 2016</h2>
        <div class="inner-content">
          <p id="js-info-message">Sign up for reinvented wardrobe classics, made for movement.</p>
          <?php
          if (!empty($errormsg)) {
            echo "<p class='error-message'>" . $errormsg . "</p>";
          }
          ?>
          <?php if (!empty($successmsg)) {
            echo "<p class='success-message'>" . $successmsg . "</p>";
          } ?>
          <form id="js-form" method="POST">
            <input id="js-firstname" class="half-width first-input" type="text" name="firstname" placeholder="First name">
            <input class="half-width" type="text" name="lastname" placeholder="Last name">
            <input class="full-width" type="email" name="email" placeholder="Your email address">
            <input type="submit" value="Sign up">
          </form>
        </div>
      </div>
    </div>
    <script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
    <script src="scripts/main.js" charset="utf-8"></script>
  </body>
</html>
