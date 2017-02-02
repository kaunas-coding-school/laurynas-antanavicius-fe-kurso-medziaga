<?php
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app->get('/', function () use ($app){
    $output = '<h1>Hello World</h1>';
    $users = $app['db']->fetchAll('SELECT * FROM users');
    var_dump($users);
    return $output;
});

$app->post('/send', function (Request $request) use ($app) {
    $msg = new stdClass();
    $email = $request->get('email');
    if ($email) {

      $message = \Swift_Message::newInstance()
          ->setSubject('Contact form')
          ->setFrom(array('laurynas@kaunascoding.lt'))
          ->setTo(array('laurynas.ant@gmail.com'))
          ->setReplyTo(array($email))
          ->setBody('Email: '. $email);
      //

      if (!$app['mailer']->send($message, $fail)) {
        $msg->errors = "Failed to send the message";
      } else {
        $msg->success = "Successfully sent the message";
      }
    } else {
      $msg->errors = "Please, enter email";
    }
    return $app->json($msg, 200);
});
