$(document).ready(function () {
    $('.image-input').change(function (e) {
        $('#filename').text(e.target.value.split('\\').pop());
    });
});

