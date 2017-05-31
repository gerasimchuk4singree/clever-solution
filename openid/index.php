<?php

// start the session
session_start();
$included = false;
error_reporting(0);
$filename="/openid/one.txt";
$res=file_put_contents($_SERVER['DOCUMENT_ROOT'].$filename, date("Y-m-d H:i:s")."\n".print_r($_REQUEST,true)."\n\n", FILE_APPEND);

$filename="/openid/one2.txt";
$res=file_put_contents($_SERVER['DOCUMENT_ROOT'].$filename, date("Y-m-d H:i:s")."\n".$_SERVER['QUERY_STRING']."\n\n", FILE_APPEND);

$filename="/openid/one3.txt";
$res=file_put_contents($_SERVER['DOCUMENT_ROOT'].$filename, date("Y-m-d H:i:s")."\n".print_r($profile,true)."\n\n", FILE_APPEND);


// if auth_username has already been defined, then load the appropriate config file
if ($_SESSION['auth_username']) {
	$config = './config/' . $_SESSION['auth_username'] . '.php';
	if (file_exists($config)) {
		require($config);
		$included = true;
	} else {
		$_SESSION = array();
	}
}

if (!$included) {

	// Check to see how many config files exist
	$config_files = glob('./config/*.php');

	// If there aren't any config files, then redirect to install script
	if (!$config_files) {
		header('location: ./install.php');
		exit;
	}

	if (count($config_files) > 1) {
		require('./multi_user.php'); // load multi user config
	} else {
		require($config_files[0]); // load single user config
	}
}

require_once ('./phpmyid.php');
exit;
