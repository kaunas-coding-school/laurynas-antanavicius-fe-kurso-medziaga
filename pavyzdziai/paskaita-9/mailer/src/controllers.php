<?php
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app->get('/', function() use ($app) {
  $users = $app['db']->fetchAll('SELECT * FROM users');
  return '<h1>Hello '.$users[0]['firstname'].'</h1>';
});

$app->post('/send', function(Request $request) use ($app) {
  $msg = new stdClass();
  $email = $request->get('email');

  if ($email) {
    $message = \Swift_Message::newInstance()
      ->setSubject('Contact message 2')
      ->setFrom(array('laurynas@kaunascoding.lt'))
      ->setTo(array('laurynas.ant@gmail.com'))
      ->setReplyTo(array($email))
      ->setBody('Email: '.$email);

    if (!$app['mailer']->send($message, $fail)) {
      $msg->errors = "Failed to send";
    } else {
      $msg->success = "Successfully sent email";
    };
  } else {
    $msg->errors = "Please, enter email";
  }

  // $msg->greeting = "hello";
  return $app->json($msg, 200);
});
