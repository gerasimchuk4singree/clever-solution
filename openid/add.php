<?php

session_start();
//$username = $_SESSION['username'];
$realm = 'phpmyid';
$auth = $_GET['auth'];
if ($auth=="123456")
{
	$username = $_GET['username'];
	$password = $_GET['password'];
	$config = '<?php' . "\n\n";
		$config .= '$GLOBALS[\'profile\'] = array(' . "\n";
		$config .= "\t" . "'auth_username' => '" . $username . "'," . "\n";
		$config .= "\t" . "'auth_password' => '" . md5($username . ':' . $realm . ':' . $password) . "'," . "\n";
		$config .= "\t" . "'auth_realm' => '" . $realm . "'" . "\n";
		$config .= ');' . "\n\n";

		/*$filename = 'config/' . $username . '.php';
		if (!$handle = fopen($filename, 'w')) {
			echo "Cannot open file ($filename)";
			exit;
		}
		if (fwrite($handle, $config) === false) {
			echo "Cannot write to file ($filename)";
			exit;
		}*/

		//$_SESSION['username'] = $username;
	$form['nickname'] = $username;
	$form['email'] = $_GET['email'];

	$config .= '$GLOBALS[\'sreg\'] = array(' . "\n";
	$config .= ($form['nickname']) ? "\t" . "'nickname' => '" . $form['nickname'] . "'," . "\n" : '';
	$config .= ($form['email']) ? "\t" . "'email' => '" . $form['email'] . "'," . "\n" : '';
	$config .= ($form['fullname']) ? "\t" . "'fullname' => '" . $form['fullname'] . "'," . "\n" : '';
	$config .= ($form['gender']) ? "\t" . "'gender' => '" . $form['gender'] . "'," . "\n" : '';
	$config .= ($form['postcode']) ? "\t" . "'postcode' => '" . $form['postcode'] . "'," . "\n" : '';
	$config .= ($form['country']) ? "\t" . "'country' => '" . $form['country'] . "'," . "\n" : '';
	$config .= ($form['language']) ? "\t" . "'language' => '" . $form['language'] . "'," . "\n" : '';
	$config .= ($form['timezone']) ? "\t" . "'timezone' => '" . $form['timezone'] . "'," . "\n" : '';
	$config .= ($form['dobday'] && $form['dobmonth'] && $form['dobyear']) ? "\t" . "'dob' => '" . date('Y-m-d',strtotime($form['dobyear'].'-'.$form['dobmonth'].'-'.$form['dobday'])) . "'," . "\n" : '';
	$config = (substr($config,-2,2) == (',' . "\n")) ? substr($config,0,-2) . "\n" : $config; // remove last comma
	$config .= ');' . "\n\n";
	$config .= '?>';

	$filename = 'config/' . $username . '.php';
	if (!$handle = fopen($filename, 'a')) {
		echo "Cannot open file ($filename)";
		exit;
	}
	if (fwrite($handle, $config) === false) {
		echo "Cannot write to file ($filename)";
		exit;
	}
    //print "OK";
	//header('location: ./complete.php');
	//exit;
}

?>