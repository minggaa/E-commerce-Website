<?php   
    $servername = "127.0.0.1";
    $username = "root";
    $password = NULL;

    $handler = mysqli_connect($servername, $username, $password);

    if(!$handler){
        die("Connection failed: ".mysqli_connect_error());
    } else{
        echo "Connected successfully";  
    }

    mysqli_query($handler, 'CREATE DATABASE mydb');
    
        
?>