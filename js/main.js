$(document).ready(function() {
    $.ajax({
        url: 'https://swapi.co/api/people/',
        dataType: 'json',
        success: function (data) {
            var id = data.results;
            $.each(id, function (index) {
                var name = "<h2>" + this.name + "</h2>";
                var height = "<p><b>Height</b> " + this.height + "</p>";
                var mass = "<p><b>Mass</b> " + this.mass + "</p>";
                var hair_color = "<p><b>Hair color</b> " + this.hair_color + "</p>";
                var skin_color = "<p><b>Skin color</b> " + this.skin_color + "</p>";
                var gender = "<p><b>Gender</b> " + this.gender + "</p>";
                var birth_year = "<p><b>Birth year</b> " + this.birth_year + "</p>";
                var homeworld = "<p><b>Homeworld</b> " + this.homeworld + "</p>";
                var url = "<p><b>Url</b> " + this.url + "</p>";
                var starships = (this.starships.length > 0) ? "<p><b>Starships:</b> <br>" + this.starships.join(',<br/>') + "</p>" : "";
                var id_checkbox = "<input type='checkbox' id='id_" + index + "'/><span>Like</span>";
                $('.persons').append("<figure>" + name + id_checkbox + "<figcaption>" + height + mass + hair_color + skin_color + gender + birth_year + homeworld + url + starships + "</figcaption></figure>");
                // $('.persons').append("<figure>" + name + "<figcaption>" + height + mass + hair_color + skin_color + gender + birth_year + homeworld + url + starships + "</figcaption></figure>");

                var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
                    $checkboxes = $(".persons input:checkbox");

                $checkboxes.on("change", function(){
                    $checkboxes.each(function(){
                        checkboxValues[this.id] = this.checked;
                    });

                    localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
                });

// On page load
                $.each(checkboxValues, function(key, value) {
                    $("#" + key).prop('checked', value);
                });



            });
        }
    });
})

