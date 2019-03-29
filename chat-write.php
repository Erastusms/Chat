<?php

$text = $_GET['text'];
file_put_contents('chat.txt', "$text\n", FILE_APPEND);