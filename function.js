$(document).on('click', '#form_button', function() {
    console.log('Entro');
    sendMail();
});


function sendMail() {
    var nombre = $('#name_input').val();
    var email = $('#email_input').val();
    var observaciones = $('#message_input').val();

    console.log(nombre + '' + email);
    window.open('mailto:libreriapegaso03@gmail.com ?subject=' + nombre + '&body=' + observaciones);
}