<?php

require_once  'image.php';

if(isset($_FILES["img"])){


    $file = $_FILES["img"];
    $path = "uploads/";

    if(!is_dir($path)){
        mkdir($path);
    }else{
        //echo json_encode($path);
    }

    $ruta = array("ruta" => $path.$file["name"]);

    $upload = move_uploaded_file($file["tmp_name"], $path.$file["name"]);

    echo json_encode($ruta);


    // PARA PODER ENVIAR UN ARRAY DE IMAGENES

    /*$path = "uploads/";

    $count = count($_FILES["img"]["name"]);
    $arrImage = array();

    if(!is_dir($path)){
        mkdir($path);
    }else{
        echo json_encode($path);
    }

    for ( $i = 0; $i < $count; $i++ ){
        $file = $_FILES["img"]["tmp_name"][$i];

        $upload = move_uploaded_file($file, $path.$_FILES["img"]["name"][$i]);
        $arrImage[] = $path.$path.$_FILES["img"]["name"][$i];
    }

    echo json_encode(var_dump($arrImage));*/
}