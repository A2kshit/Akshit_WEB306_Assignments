// Function `loadDataWithGetJSON` fetches data from 'team.json' using jQuery's getJSON method
function loadDataWithGetJSON() {
    // Sending an HTTP GET request to 'team.json'
    $.getJSON('team.json', function(data) {
        var teamHtml = '';  // Empty string for building HTML structure
        // Iterating over each item in the data object
        $.each(data, function (index, member) {
            // Concatenating member's details to the HTML structure
            teamHtml += '<h2>' + member.name + '</h2>';
            teamHtml += '<h5>' + member.position + '</h5>';
            teamHtml += '<p>' + member.bio + '</p>';
        });
        // Setting HTML content of the element with id 'team' to `teamHtml`
        $('#team').html(teamHtml);
    });
}

// Function `loadDataWithAjax` fetches data from 'team.json' using jQuery's ajax method
function loadDataWithAjax() {
    // Sending an AJAX request
    $.ajax({
        url: 'team.json',  // Request URL
        type: 'GET',  // HTTP method
        dataType: 'json',  // Expected data type
        beforeSend: function() {
            // Setting 'Loading...' message before sending the request
            $('#team').html('Loading...');
        },
        error: function() {
            // Setting error message on request failure
            $('#team').html('The content could not be retrieved.');
        },
        success: function(data) {
            var teamHtml = '';  // Empty string for building HTML structure
            // Iterating over each item in the data object
            $.each(data, function(index, member) {
                // Concatenating member's details to the HTML structure
                teamHtml += '<h2>' + member.name + '</h2>';
                teamHtml += '<h5>' + member.position + '</h5>';
                teamHtml += '<p>' + member.bio + '</p>';
            });
            // Setting HTML content of the element with id 'team' to `teamHtml`
            $('#team').html(teamHtml);
        }
    });
}

// Executing the following code only after document is ready
$(document).ready(function() {
    // Calling `loadDataWithGetJSON` function to load and display data
    loadDataWithGetJSON();
    // Uncomment below line to use `loadDataWithAjax` function instead
    // loadDataWithAjax();
});
