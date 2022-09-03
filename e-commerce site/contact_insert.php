<?php
    $servername = "127.0.0.1";
    $username = "root";
    $password = NULL;
    $dbname = 'mydb'; //database name

    $handler = mysqli_connect($servername, $username, $password, $dbname);
    

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $message = $_POST['user_message']; 

    $the_query = "INSERT INTO contact_us(firstname, lastname, email, user_message) VALUES ('$firstname', '$lastname', '$email', '$message')";
    

    if(mysqli_query($handler, $the_query)){
        echo 'Submitted';        
    } else{
        echo 'There was an error:'.mysqli_error();
    }
?>