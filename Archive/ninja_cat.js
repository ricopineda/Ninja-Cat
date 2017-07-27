        $(document).ready(function(){

        	$('img').click(function(){
        		var temp = $(this).attr('src');
        		$(this).attr('src',$(this).attr('data-alt-src'));
        		$(this).attr('data-alt-src',temp);
        		// console.log(temp);
        	// var temp = $('img').attr('src');
        	// 	$('img').attr('src',('img').attr('data-alt-src'));
        	})
        });