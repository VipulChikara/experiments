window.onload = abc();

$(window).bind('scroll', function() {
    if($(window).scrollTop() >= $('.container-fluid').offset().top + $('.container-fluid').outerHeight() - window.innerHeight) {
        abc();
    }
});

function abc() {
    var container = document.getElementById('wrapper');
    var count = 5;
    while (count > 0) {
        var mydiv = document.createElement('div');
        var height = randHeight();
        switch (Math.floor(Math.random() * 2) + 1) {
            case 1:
                var type = "<div class='row'>\
                    <div class='col-6'>"+ z(height) +
                            "</div>\
                    <div class='col-6'>\
                    <div class='row'>\
                        <div class='col-12'>"+ x(height) +
                            "</div>\
                        <div class='col-12'>"+ y(height) +
                            "</div>\
                    </div>\
                    </div>\
                </div>";
                break;
            case 2:
                var type = 
                "<div class='row'>\
                    <div class='col-6'>\
                        <div class='row'>\
                            <div class='col-12'>"+ x(height) +"</div>\
                            <div class='col-12'>"+ y(height) +"</div>\
                        </div>\
                    </div>\
                    <div class='col-6'>"+ z(height) +"</div>\
                </div>";
                break;
        }
        mydiv.innerHTML = type;
        container.appendChild(mydiv.firstChild);
        count = count - 1;
    }
}

function randHeight() {
    return Math.floor((Math.random() * 20) + 10);
}

function x(height) {
    var brlines = "";
    var xh = Math.floor(height / 2);
    while (xh > 0) {
        brlines = brlines + "<br>";
        xh = xh - 1;
    }
    return brlines;
}
function y(height) {
    var brlines = "";
    var yh = Math.ceil(height / 2);
    while (yh > 0) {
        brlines = brlines + "<br>";
        yh = yh - 1;
    }
    return brlines;
}
function z(height) {
    var brlines = "";
    var zh = Math.ceil(height);
    while (zh > 0) {
        brlines = brlines + "<br>";
        zh = zh - 1;
    }
    return brlines;
}