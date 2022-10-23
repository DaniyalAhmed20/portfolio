
window.onscroll = function () {
    scroll();
};
function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-60px";
    }
}


// for menubar 
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// for menubar

// about section start here 
function experience() {

    var x = document.getElementById("experi");
    var y = document.getElementById("educa");
    if (x.className === "btn-experi") {
        x.className = "btn-experi active";
        y.className = "btn-educa";
    } else {
        y.className = "btn-educa";
    }

    document.getElementById("aree-head5-first").innerHTML = "Trainee";
    document.getElementById("aree-para-second").innerHTML = "Sept/2021 - Oct/2021";
    document.getElementById("aree-head6-third").innerHTML = "Core Cut Solution";


    document.getElementById("aree-head5-fourth").innerHTML = "Internee";
    document.getElementById("aree-para-fiveth").innerHTML = "Novem/2021 - Jan/2022";
    document.getElementById("aree-head6-sixth").innerHTML = "Core Cut Solution";


    document.getElementById("aree-head5-seventh").innerHTML = "Developer";
    document.getElementById("aree-para-eight").innerHTML = "Feb/2022 - Present";
    document.getElementById("aree-head6-nineth").innerHTML = "Encoders";
}

function education() {

    var y = document.getElementById("educa");
    var x = document.getElementById("experi");
    if (y.className === "btn-educa") {
        y.className = "btn-educa active";
        x.className = "btn-experi";
    } else {
        x.className = "btn-experi";
    }


    document.getElementById("aree-head5-first").innerHTML = "Matric";
    document.getElementById("aree-para-second").innerHTML = "2016 - 2017";
    document.getElementById("aree-head6-third").innerHTML = "Ghazali Public School";


    document.getElementById("aree-head5-fourth").innerHTML = "Enter";
    document.getElementById("aree-para-fiveth").innerHTML = "2018 - 2019";
    document.getElementById("aree-head6-sixth").innerHTML = "GBDC BufferZone";


    document.getElementById("aree-head5-seventh").innerHTML = "Graduation";
    document.getElementById("aree-para-eight").innerHTML = "2020 - Present";
    document.getElementById("aree-head6-nineth").innerHTML = "SSUET";
}
// about section end here 


// skills bar script start here 
var i = 0;

if (i == 0) {
    i = 1;
    // html 
    var html = document.getElementById("html-bar");
    var width_h = 1;
    var id = setInterval(frame1, 10);
    function frame1() {
        if (width_h >= 95) {
            clearInterval(id);
            i = 0;
        } else {
            width_h++;
            html.style.width = width_h + "%";
        }
    }

    // css 
    var css = document.getElementById("css-bar");
    var width_c = 1;
    var id = setInterval(frame2, 10);
    function frame2() {
        if (width_c >= 100) {
            clearInterval(id);
            i = 0;
        } else {
            width_c++;
            css.style.width = width_c + "%";
        }
    }



    //  js 
    var js = document.getElementById("js-bar");
    var width_j = 1;
    var id = setInterval(frame3, 10);
    function frame3() {
        if (width_j >= 50) {
            clearInterval(id);
            i = 0;
        } else {
            width_j++;
            js.style.width = width_j + "%";
        }
    }


    // psd to html
    var psd = document.getElementById("psd-bar");
    var width_psd = 1;
    var id = setInterval(frame4, 10);
    function frame4() {
        if (width_psd >= 95) {
            clearInterval(id);
            i = 0;
        } else {
            width_psd++;
            psd.style.width = width_psd + "%";
        }
    }
    // wordpress
    var wordpress = document.getElementById("wordpress-bar");
    var width_wordpress = 1;
    var id = setInterval(frame7, 10);
    function frame7() {
        if (width_wordpress >= 70) {
            clearInterval(id);
            i = 0;
        } else {
            width_wordpress++;
            wordpress.style.width = width_wordpress + "%";
        }
    }

}



var i = 0;

if (i == 0) {
    i = 1;
    // pytho 
    var python = document.getElementById("python-bar");
    var width_py = 1;
    var id = setInterval(frame1, 10);
    function frame1() {
        if (width_py >= 90) {
            clearInterval(id);
            i = 0;
        } else {
            width_py++;
            python.style.width = width_py + "%";
        }
    }

    // java 
    var java = document.getElementById("java-bar");
    var width_ja = 1;
    var id = setInterval(frame2, 10);
    function frame2() {
        if (width_ja >= 80) {
            clearInterval(id);
            i = 0;
        } else {
            width_ja++;
            java.style.width = width_ja + "%";
        }
    }

    // oop
    var oop = document.getElementById("oop-bar");
    var width_oop = 1;
    var id = setInterval(frame4, 10);
    function frame4() {
        if (width_oop >= 80) {
            clearInterval(id);
            i = 0;
        } else {
            width_oop++;
            oop.style.width = width_oop + "%";
        }
    }

    // php
    var php = document.getElementById("php-bar");
    var width_php = 1;
    var id = setInterval(frame5, 10);
    function frame5() {
        if (width_php >= 60) {
            clearInterval(id);
            i = 0;
        } else {
            width_php++;
            php.style.width = width_php + "%";
        }
    }

    //  sql
    var sql = document.getElementById("sql-bar");
    var width_sql = 1;
    var id = setInterval(frame6, 10);
    function frame6() {
        if (width_sql >= 75) {
            clearInterval(id);
            i = 0;
        } else {
            width_sql++;
            sql.style.width = width_sql + "%";
        }
    }


}


// skills bar script end here 





$(document).ready(function () {
    // $('.multiple-items').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    // });


    $('.multiple-items , .certi-sect').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1900, //1024
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024, //600
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767, //480
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 650, //480
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});