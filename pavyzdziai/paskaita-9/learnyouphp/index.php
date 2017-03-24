<?php
    $name = ["Laurynas", "Petras"];
    $surname = "Antanavicius";

    function sum($a, $b)
    {
        return $a+$b;
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Hello <?php echo $name ?></title>
    </head>
    <body>
        <pre><?php var_dump($name[0]) ?></pre>
        <h1>Hello <?php echo sum(4, 5); ?></h1>
    </body>
</html>
