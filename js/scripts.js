$(document).ready(function() {
    
    var nr_c = "";

    $('.bt-calc').click(function() {
    
        if (nr_c.length < 25) {
            var nr = $(this).text();

            nr_c = nr_c.concat(nr);

            $('#txt_display').text(nr_c);
        }
    });

    var nr_up = "";

    $('#bt-plus').click(function(){

        nr_up = nr_c
        nr_c = ""
        $('#txt_display').text("0");
        $('#txt_operadores').text(nr_up);
        
        })


    $('#bt-equal').click(function() {
        var result = nr_up + nr_c
        result = result.replace("=", "")
        result = eval(result)
        

    })
});




    