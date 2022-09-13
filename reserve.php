<?php
	if(!$_GET){
		ob_start();
		$new_url = 'no.html';
		header('Location: '.$new_url);
		ob_end_flush();
	} else{
        $file = fopen("reserved.txt","a");
        $choose = explode(";", $_GET["choose"]);
        $message = '';
        $headers  = "Content-type: text/html; charset=windows-1251 \r\n";
        $headers .= "From: От кого письмо <ileahtml@gmail.com>\r\n";
        foreach ($choose as $item) {
            $message .= $item."\n";
        }
        mail('ilyahtml@gmail.com', 'RESERVE', wordwrap($message, 70), $headers);
        fclose($file);
	}

