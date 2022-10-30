
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

image.png


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