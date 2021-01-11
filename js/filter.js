$(document).ready(function(){
    $('.dropdown-item').on('click', function(){
        let btn = $(this);
        let filterTime =  btn.parent().parent().find('.filter');
        filterTime.html(btn.html());
    });

    $('.btn-down').on('click', function() {
        $('.search-header-content').css('display', 'none');
        $('.search-header-full').css('display', 'block');
    });

    $(document).on('click', '.dropdown-time .keepopen', function (e) {
        e.stopPropagation();
    });

    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();

    var timeFormnat = day + "-" + month + "-" + year;

     var calendar = $(".keepopen").flatpickr({
        mode: "range",
        dateFormat: "d-m-Y",
        defaultDate: [timeFormnat, timeFormnat],
        position: "below"
    });

    $('.keepopen').on('change', function(){
        let html = '<input type="hidden" value="' + calendar.selectedDates[0] + '" name="date-start">';
        html += '<input type="hidden" value="' + calendar.selectedDates[1] + '" name="date-end">';

        $('.box-time').html(html);
    });


    var full = document.getElementById('full');
    var wrap = document.getElementById('backgroundOverlay');
    var down = document.getElementById('btn-down');
    var searchHeaderContent = document.getElementById('search-header-content');
    document.onclick = function(e){
        if(e.target.id == 'backgroundOverlay'){
            full.style.display = 'none';
            wrap.style.display = 'none';
            searchHeaderContent.style.display = 'flex';
        }
        if(e.target === down){
         	full.style.display = 'block';
             wrap.style.display = 'block';
        }
    };

    $('.keepopen').on('shown.bs.dropdown', function () {
        $('.dropdown-item').css('display','none')
      })
});
