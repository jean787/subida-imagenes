<?php
class Images{

    public static $data = array();

    public static function addImage($ruta){
        self::$data[] = $ruta;
    }

    public static function getArray(){
        return self::$data;
    }
}
