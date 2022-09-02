<?php
    $servername = "127.0.0.1";
    $username = "root";
    $password = NULL;
    $dbname = "mydb"; //database name

    $handler = mysqli_connect($servername, $username, $password, $dbname);

    if(!$handler){
        die("Connection failed: ".mysqli_connect_error()."<br>");
    } else{
        echo "Connected successfully <br>";  
    }

    $the_query = "CREATE TABLE contact_us(
                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                firstname VARCHAR(30) NOT NULL,
                lastname VARCHAR(30) NOT NULL,
                email VARCHAR(50) NOT NULL,
                user_message TEXT NOT NULL)";
    
    if(mysqli_query($handler, $the_query)){
        echo 'Table created';
    }else{
        echo 'Error';
    };

?>