$(document).ready(function(){

    $('#sl-type-order').change(function () {

        nameform=$('#sl-type-order').val();
        if (nameform=='form-instant'){
            $('#form-instant').css('display','block');
            $('#form-pending').css('display','none');
        }else if(nameform=='form-pending'){
            $('#form-pending').css('display','block');
            $('#form-instant').css('display','none');
        }

    });


});