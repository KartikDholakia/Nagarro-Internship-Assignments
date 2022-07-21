let check = false;

$(document).ready(function(){
    $('.clicked').on('click', function(){
        if(check == false){
            check = true;
            $('#box').addClass('show');
			// $('#hide-button').removeClass('show');
			console.log("button clicked!!");
        }
        else{
            check = false;
            $('#box').removeClass('show');
			// $('#hide-button').addClass('show');
        }
    });
    
    $('.submission').on('click', function(){
        $('#box').removeClass('show')
    })
})