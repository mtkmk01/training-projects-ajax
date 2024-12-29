$(document).on('click', '.get-btn', function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            var htmlPool = '';
            data.forEach(function (value, key) {
                var p = '<p class="title">' + value.title + '</p>'
                htmlPool += p;
            })
            $('.list-area').html(htmlPool)
            alert('successful!')
        },
        error: function (error) {
            console.log(error);
        }
    })
})