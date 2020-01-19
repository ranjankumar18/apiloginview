var manageMemberTable;
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
	
	manageMemberTable = $("#manageMemberTable").DataTable({
		"ajax": "http://localhost/restful/auth/getUser",
		"order": []
	});
	
	
    $.backstretch("assets/img/backgrounds/1.jpg");
    
    /*
        Login form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
		var error=false;
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
				error=true;
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
		var form = $(this);
		if(error==false){
			$.ajax({
					url : 'http://localhost/restful/auth/login',
					type : form.attr('method'),
					data : form.serialize(),
					dataType : 'json',
					success:function(response) {
						console.log(response);
						if(response.status == 200) {
							$(".edit-messages").html('<div class="alert alert-success alert-dismissible" role="alert">'+
									  '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
									  '<strong> <span class="glyphicon glyphicon-ok-sign"></span> </strong>'+response.message+
									'</div>');
							
                            window.setTimeout(function() {
                            window.location.href = 'dashboard.html';
                            }, 20000);
						} else {
							
							$(".edit-messages").html('<div class="alert alert-warning alert-dismissible" role="alert">'+
									  '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
									  '<strong> <span class="glyphicon glyphicon-exclamation-sign"></span> </strong>'+response.message+
									'</div>')
							
						}  // /else
					} // success  
				});
		}
    	
    });
    
    /*
        Registration form validation
    */
    $('.registration-form input[type="text"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.registration-form').on('submit', function(e) {
    	var error=false;
    	$(this).find('input[type="text"], textarea').each(function(){
    		if( $(this).val() == "" ) {
				error = true;
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
		var form = $(this);
		if(error==false){
			
			$.ajax({
					url : 'http://localhost/restful/auth/signup',
					type : form.attr('method'),
					data : form.serialize(),
					dataType : 'json',
					success:function(response) {
						console.log(response);
						if(response.status == 200) {
							$(".edit-messages").html('<div class="alert alert-success alert-dismissible" role="alert">'+
									  '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
									  '<strong> <span class="glyphicon glyphicon-ok-sign"></span> </strong>'+response.message+
									'</div>');
							
                            window.setTimeout(function() {
                            window.location.href = 'index.html';
                            }, 20000);
						} else {
							
							$(".edit-messages").html('<div class="alert alert-warning alert-dismissible" role="alert">'+
									  '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
									  '<strong> <span class="glyphicon glyphicon-exclamation-sign"></span> </strong>'+response.message+
									'</div>')
							
						}  // /else
					} // success  
				});
		
		}
    	
    });
	
	
	$(function() {
        var txt = $("input#input_calc");
        var func = function() {
            txt.val(txt.val().replace(/\s/g, ''));
        }
        txt.keyup(func).blur(func);
    });
	  $('.calculator-form').on('submit', function(e) {
    	var error=false;
    	$(this).find('input[type="text"]').each(function(){
    		if( $(this).val() == "" ) {
				error = true;
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
		var form = $(this);
		if(error==false){
			
			$.ajax({
					url : 'http://localhost/restful/auth/getLCM',
					type : form.attr('method'),
					data : form.serialize(),
					dataType : 'json',
					success:function(response) {
						console.log(response);
						if(response.status == 200) {
							$(".result").html('<label for="form-email">Total: ' + response.total + '</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label for="form-email">Time: ' + response.time + '</label>');
							$(".edit-messages").html('<div class="alert alert-success alert-dismissible" role="alert">'+
									  '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
									  '<strong> <span class="glyphicon glyphicon-ok-sign"></span> </strong>Success Got Result</div>');
							
                            
						} else {
							
							$(".edit-messages").html('<div class="alert alert-warning alert-dismissible" role="alert">'+
									  '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
									  '<strong> <span class="glyphicon glyphicon-exclamation-sign"></span> </strong>'+response.message+
									'</div>')
							
						}  // /else
					} // success  
				});
		
		}
    	
    });
    
    
});
