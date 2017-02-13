<?php
use Silex\Application;

$app = new Application();
$app->register(new Silex\Provider\SwiftmailerServiceProvider());

$app['debug'] = true;

$app['swiftmailer.options'] = array(
    'host' => 'smtp.gmail.com',
    'port' => '587',
    'username' => '',
    'password' => '',
    'encryption' => 'tls'
);

$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver'   => 'pdo_mysql',
        'host'      => 'localhost',
        'port'      => '3306',
        'dbname'    => 'mailer',
        'user'      => 'root',
        'password'  => 'root',
    ),
));

return $app;
