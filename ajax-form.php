+Thank you for your interest to our product!<br>
The developer can change this message and set up form handling in the file "ajax-form.php". <br>

<?php
	if (!empty($_POST))
	{

		/* Settings */

		// Email subject
		$subject = 'A lead from your landing '.$_SERVER["HTTP_HOST"];
		// "From" name
		$from_name = "My name";
		// "From" email
		$from_email = "info@".$_SERVER["HTTP_HOST"];
		// "To" email (set your email here)
		$to = "my@mail.com";
		
		/* Settings end */
		
		$headers = "Content-Type: text/html; charset=UTF-8\r\n";
		$headers .= "From: \"".$from_name."\" <".$from_email.">\r\n";
		$headers .= "Reply-To: \"".$from_name."\" <".$from_email.">\r\n";
		$message = $subject."<br>";

		// The message
		foreach($_POST as $key=>$value){
			$message .= '<b>'.$key.': </b>'.$value.'<br />';
		}
		
		// Send email
		$res = mail($to, $subject, $message, $headers);
		
		echo 'The message sent.';	
		
	}else{
		echo 'error';
	}
?>