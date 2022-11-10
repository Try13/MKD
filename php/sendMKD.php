<?php
header('Content-Type: text/html; charset=utf-8');
$userName = $_POST["user-name"];
$userNamber = $_POST["user-namber"];

mail('review@mebelcomfortdon.ru', 'Письмо с сайта', "$userName", "$userNamber");
