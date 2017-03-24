<?php

    if (array_key_exists("email", $_POST)) {
        require 'vendor/autoload.php';

        $mail = new PHPMailer;

        // // Nustatom siuntimo konfiguracija
        $mail->isSMTP();
        $mail->Host = 'smtp.mailgun.org';
        $mail->SMTPAuth = true;
        $mail->Username = 'postmaster@sandbox7432763c3017461983b4cd64f0de9b80.mailgun.org';
        $mail->Password = 'da0a47255fe73f2adf49dc1fee5f85fb';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $fullname = $_POST["fname"] . ' ' . $_POST["lname"];
        // Paruosiam laisko headeri
        $mail->setFrom('laurynas.ant@gmail.com', 'Laurynas');
        $mail->addAddress('laurynas.ant@gmail.com', 'Laurynas Admin');
        $mail->addReplyTo($_POST["email"], $fullname);

        // Pasiruosiam laisko turini
        $mail->isHTML(true);

        $mail->Subject = 'Contact form submission';
        $mail->Body = 'Firstname: ' . $_POST["fname"] . '<br>Lastname: ' . $_POST["lname"] . '<br>Email: '.$_POST["email"];

        if (!$mail->send()) {
          $error = 'Failed to send email';
        } else {
          $success = 'Successfully sent message';
        }
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <title>Paskaita 2</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="main.css">
    </head>
    <body>
        <div class="main-container">
            <?php if ($success) {
                echo '<div class="alert alert-success">' . $success .'</div>';
            }
            ?>
            <?php if ($error) {
                echo '<div class="alert alert-danger">' . $error .'</div>';
            }
            ?>
            <p class="alert "></p>
            <a class="logo" href="/"></a>
            <div class="inner-container">
                <h1>A New World of Tailored Shirts for Women</h1>
                <h2>Arriving 2016</h2>
                <div class="form-container">
                    <p>Sign up for reinvented wardrobe classics, made for movement.</p>
                    <form method="POST">
                        <input class="half-width" type="text" name="fname" placeholder="First name">
                        <input class="half-width" type="text" name="lname" placeholder="Last name">
                        <input type="email" name="email" placeholder="Your email address">
                        <input class="button" type="submit" value="Sign up">
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
