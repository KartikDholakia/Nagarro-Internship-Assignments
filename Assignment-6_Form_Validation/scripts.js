$(document).ready(function(){
    $('#usernameValidation').hide();
    $('#passwordValidation').hide();
    $('confirmPasswordValidation').hide();
    $('#emailValidation').hide();

    var Error = true;
    var password_error = true;
    var confirmPassword_error = true;

    $('#username').keyup(function(){
        check_username();
    });

    function check_username(){
        var username_length = $('#username').val().length;
        if(username_length == ''){
            $('#usernameValidation').html('Username is required');
            $('#usernameValidation').show();
            $('#usernameValidation').css('color', 'red');
            Error = false;
            return false;
        }
        else{
            $('#usernameValidation').hide();
            Error = true;
        }
        if(username_length < 4 || username_length > 20){
            $('#usernameValidation').html('Username must be atleast 4 and less than or equal to 20 characters');
            $('#usernameValidation').css('color', 'red');
            $('#usernameValidation').show();
            Error = false;
            return false;

        }else{
            $('#usernameValidation').hide();
            Error = true;
        }
    }

    $('#password').keyup(function(){
        check_password();
    });

    function check_password(){
        var password_length = $('#password').val().length;
        if(password_length == ''){
            $('#passwordValidation').html('Password is required');
            $('#passwordValidation').show();
            $('#passwordValidation').css('color', 'red');
            password_error = false;
            return false;
        }
        else{
            $('#passwordValidation').hide();
            password_error = true;
        }
        if(password_length < 8 || password_length > 20){
            $('#passwordValidation').html('Password must be more than 8 and less than or equal to 20 characters');
            $('#passwordValidation').css('color', 'red');
            $('#passwordValidation').show();
            password_error = false;
            return false;

        }else{
            $('#passwordValidation').hide();
            password_error = true;
        }
    }

    $('#confirmPassword').keyup(function(){
        check_confirmPassword();
    });

    function check_confirmPassword(){
        var confirm_password = $('#confirmPassword').val();
        var password = $('#password').val();
        if(confirm_password != password){
            $('#confirmPasswordValidation').html('Password does not match');
            $('#confirmPasswordValidation').css('color', 'red');
            $('#confirmPasswordValidation').show();
            confirmPassword_error = false;
            return false;
        }
        else{
            $('#confirmPasswordValidation').hide();
            confirmPassword_error = true;
        }
    }

    $('#email').keyup(function(){
        check_email();
    });

    function check_email(){
        var email_length = $('#email').val().length;
        if(email_length == ''){
            $('#emailValidation').html('Email is required');
            $('#emailValidation').show();
            $('#emailValidation').css('color', 'red');
            Error = false;
            return false;
        }
        else{
            $('#emailValidation').hide();
            Error = true;
        }
        if(email_length < 4 || email_length > 20){
            $('#emailValidation').html('Email must be atleast 4 and less than or equal to 20 characters');
            $('#emailValidation').css('color', 'red');
            $('#emailValidation').show();
            Error = false;
            return false;

        }else{
            $('#emailValidation').hide();
            Error = true;
        }

        var email_val = $('#email').val();
        var regex = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        if(!regex.test(email_val)){
            $('#emailValidation').html('Invalid Email');
            $('#emailValidation').css('color', 'red');
            $('#emailValidation').show();
            Error = false;
            return false;
        }
    }

    $('#submitvalidation').click(function(){
        check_username();
        check_password();
        check_confirmPassword();
        if(Error == true && password_error == true && confirmPassword_error == true){
            return true;
        }
        else{
            return false;
        }
    });


});