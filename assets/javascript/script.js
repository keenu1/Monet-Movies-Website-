var input = document.getElementById("searchId");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        $('#columnId').html('');
        $.ajax({
            url: 'https://omdbapi.com',
            type: 'get',
            dataType: 'json',
            data: {
                'apikey': 'e4363138',
                's': $('#searchId').val()
            },

            success: function (result) {

                if (result.Response == "True") {

                    let movies = result.Search;

                    $.each(movies, function (i, data) {
                        $('#columnId').append(`
                        <div class="card">
                            <div class="poster">
                                <img src="` + data.Poster + `" class="poster" alt="">
                            </div>
                        <div class="movie">
                        <div class="tittleMovie">
                            <p>` + data.Title + `</p>
                        </div>
                        <div class="descriptionMovie">
                            <p>Year : ` + data.Year + `</p>
                            <p>Tipe : ` + data.Type + `</p>
                        </div>
                    </div>
                </div>
                        `)

                    });

                    $('#searchId').val('');
                } else {
                    $('#columnId').html('<h1>' + result.Error + '</h1>')
                }
            }


        });
    }
});