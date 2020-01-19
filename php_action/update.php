<?php 

require_once 'db_connect.php';

//if form is submitted
if($_POST) {	

	$validator = array('success' => false, 'messages' => array());
	$id = $_POST['user_id'];
	$name = $_POST['editName'];
	$email = $_POST['editEmail'];
	$phone = $_POST['editPhone'];
	$dob = $_POST['editDOB'];
	$sex = $_POST['editSex'];
	$modifiedDate = date('Y-m-d H:i:s');
    
	$sql = "UPDATE users SET name = '$name', email = '$email' ,phone = '$phone', dob = '$dob', sex = '$sex',modifieDate = '$modifiedDate' WHERE user_id = $id";
	
	$query = $connect->query($sql);
   
	if($query === TRUE) {			
		$validator['success'] = true;
		$validator['messages'] = "Successfully Added";		
	} else {		
		$validator['success'] = false;
		$validator['messages'] = "Error while updating the member information";
	}


	// close the database connection
	$connect->close();

	echo json_encode($validator);

}