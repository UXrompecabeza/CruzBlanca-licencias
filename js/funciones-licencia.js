$("#btnAdjuntarArchivos").click(function () {
    $(".document-charged").show();
    $(".box-dashed").hide();
    $(".btnEnviar").show();
});

$(".deleteDoc").click(function () {
    $(this).closest(".documentItem").remove();
});

$(".btnEnviar").click(function () {
    $(".button-attach_licencias, .msj-exito_licencias").toggleClass("hide");
});

// Funcion select personalizado

$('.selectStyle').each(function () {
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="selectDiv"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.activeb').not(this).each(function () {
            $(this).removeClass('activeb').next('ul.select-options').hide();
        });
        $(this).toggleClass('activeb').next('ul.select-options').toggle();
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('activeb');
        $this.val($(this).attr('rel'));
        $list.hide();
    });

    $(document).click(function () {
        $styledSelect.removeClass('activeb');
        $list.hide();
    });
});

//Funcionalidad calendario filtro
$(".month").click(function () {
    $(".month").removeClass("active-item-accordion");
    let month = $(this).text();
    $(this).addClass("active-item-accordion");
    $("#choosenMonth").text(month);
})
$(".btn_month").click(function () {
    $(".btn_month").removeClass("active-item-accordion");
    $(this).addClass("active-item-accordion");
})

//Funcionalidad filtro
$(".pacient").click(function () {
    $(".pacient").removeClass("active-item-accordion");
    let pacient = $(this).text();
    $(this).addClass("active-item-accordion");
    $("#choosenPacient").text(pacient);
})
$(".state").click(function () {
    $(".state").removeClass("active-item-accordion");
    let state = $(this).text();
    $(this).addClass("active-item-accordion");
    $("#choosenState").text(state);
})
$(".btn_filter-acc").click(function () {
    $(".btn_filter-all").removeClass("active-item-accordion");
    $(this).addClass("active-item-accordion");
})
$(".btn_filter-all").click(function () {
    $(".btn_filter-acc").removeClass("active-item-accordion");
    $(this).addClass("active-item-accordion");
})

//Apertura filtro
$('.btn-filter-desk').click(function () {
    $(".box-filtro_campos").toggleClass("hide");
    $(this).toggleClass("activeFilter");
});


// Ancla efecto

function scrolling(e) {
    $('html, body').animate({
        scrollTop: $( e ).offset().top - 15
    }, 700);
}

// SHOW NEXT ELEMENT
function goAnchor(e) {
    let lol = e;
    let f = $(e).parents(".sectionLicencias").find('.button-attach_licencias')
    scrolling(f);
}

//Tooltip mobile
$('.tooltipImg img').click(function () {
    if ($(window).width() < 770) {
        $('.tooltip').toggleClass('tooltipShow');
    }
});

$(function () {
    if ($('body').is('.licenciasIndex')) {
        // Carrusel usuario
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            items: 1
        })
    }
});
