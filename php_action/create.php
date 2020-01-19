<?php 

require_once 'db_connect.php';

//if form is submitted
if($_POST) {	

	$validator = array('success' => false, 'messages' => array());

	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$dob = $_POST['dob'];
	$sex = $_POST['sex'];
	$createdDate = date('Y-m-d H:i:s');

	$sql = "INSERT INTO users (name, email, phone, dob, sex, createdDate) VALUES ('$name', '$email', '$phone', '$dob', '$sex', '$createdDate')";
	$query = $connect->query($sql);

	if($query === TRUE) {			
		$validator['success'] = true;
		$validator['messages'] = "Successfully Added";		
	} else {		
		$validator['success'] = false;
		$validator['messages'] = "Error while adding the member information";
	}

	// close the database connection
	$connect->close();

	echo json_encode($validator);

}