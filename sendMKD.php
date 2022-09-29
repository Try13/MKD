<?php
$userName = $_POST["user-name"];
$userNamber = $_POST["user-namber"];

mail('s.demchak77@mail.ru', 'Письмо с сайта', "$userName", "$userNamber");
