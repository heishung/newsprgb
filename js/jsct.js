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

    $('#btn-click-whow').click(function () {
       $('#show-menu').addClass('show');
    });
    $('.lang-close-button').click(function () {
       $('#show-menu').removeClass('show');
    });

    $('.register-real-account').click(function () {

       $('#box-login-form').css('display','none')
        $('#register-form').css('display','block')
        $('body').addClass('body-img-1')
        $('body').removeClass('body-img-2')
    });
    $('.login-real-account').click(function () {
        $('#box-login-form').css('display','block')
        $('#register-form').css('display','none')
        $('body').addClass('body-img-2')
        $('body').removeClass('body-img-1')


    });
});