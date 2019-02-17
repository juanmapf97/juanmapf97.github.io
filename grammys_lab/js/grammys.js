let jsonData = {};

fetch('juanmapf97.github.io/grammys_lab/data/grammys.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        jsonData = data.fields;

        $.each(data.fields, function(key, val) {
            $('<option>', {
                'value': val.field_id,
                html: val.field,
             }).appendTo('#category_types');
        });
    });

function buildSectionHtml(nominee, artist, info, isWinner) {
    if (isWinner)
        return '<li><h4 class="winner">' + nominee + ' Winner!</h4><p class="description">' + artist + '</p><p class="description">' + info + '</p></li>'
    return '<li><h4>' + nominee + '</h4><p class="description">' + artist + '</p><p class="description">' + info + '</p></li>'
}

function onOptionChange(e) {
    let data = jsonData[e-1]

    $('#field_title').text(data.field);
    if (data.description === '')
        $('#field_description').text(' ');
    else
        $('#field_description').text(data.description);
    
    $('#nominees_section').empty();
        
    $.each(data.categories, function(key, cat) {
        $('<div>', {
            'class': 'sub-container',
            html: '<h3 id="category_title">' + cat.category_name + '</h3>',
            }).appendTo('#nominees_section');
        $.each(cat.nominees, function(key, val) {
            $('<ul>', {
                'class': 'sub-container',
                html: buildSectionHtml(val.nominee, val.artist, val.info, cat.winner_id === key),
                }).appendTo('#nominees_section');
        });
    });

    $('html, body').animate({
        scrollTop: $("#field_title").offset().top
    }, 1000);
}