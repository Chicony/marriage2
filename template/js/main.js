window.onload = function() {
    loadMap('#mapContainer');

    let tagD = $('#bannerDate');
    let difference = (new Date("2023-04-21") - Date.now()) / 86400000;
    tagD.text(`${declOfNum(Math.ceil(difference), ['День', 'Дня', 'Дней'])}`)
};

function declOfNum(number, words){
    if (number == 0) return 'Сегодня'
    if (Math.sign(number) == -1) return 'Свадьба состоялась'
    return `${number} ${words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]]}`
}

function loadMap(mapContainerSelector) {
    let mapContainer = $(mapContainerSelector);
    setTimeout(function () {
        mapContainer.html(mapContainer.data('map'));
        mapContainer.children('.preloader').hide();
    }, 2000);
}