ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [57.043028437225864, 34.969132118486264],
        zoom: 18
    });

    var myPlacemark = new ymaps.Placemark(
        [57.043028437225864, 34.969132118486264],

        { balloonContent:
            `
                <div class="balloon">
                    <div class="balloon__address">
                        Алгоритмека Торжок
                    </div>
                    <div class="balloon__contacts">
                        Python-Start
                    </div>
                </div>

            `
        },

        {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/Label.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40]
    });

    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('rulerControl');
    //myMap.behaviors.disable('scrollZoom');//

    myMap.geoObjects.add(myPlacemark); 
}