$(document).on('click', '.send-btn', function() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data.title);
            $('.title').text(data.title)
            alert('Successful!')
        },
        error: function(error) {
            console.log(error);
        }
        
    })
})