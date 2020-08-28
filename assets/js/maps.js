function drawInfoWindow(property) {
    var id = 0;
    if (property.id) {
        pid = property.id
    }

    var image = '/img/logo.png';
    if (property.image) {
        image = property.image
    }

    var title = 'N/A';
    if (property.title) {
        title = property.title
    }

    var address = '';
    if (property.address) {
        address = property.address
    }

    var description = 'NULL';
    if (property.description) {
        description = property.description
    }

    var area = 1000;
    if (property.area) {
        area = property.area
    }

    var Beds = 5;
    if (property.bedroom) {
        Beds = property.bedroom
    }

    var bathroom = 5;
    if (property.bathroom) {
        bathroom = property.bathroom
    }

    var garage = 1;
    if (property.garage) {
        garage = property.garage
    }

    var price = 253.33;
    if (property.price) {
        price = property.price
    }

    var ibContent = '';
    ibContent =
        "<div class='map-properties'>" +
        "<div class='map-img'>" +
        "<img src='/uploads/projects/4/" + image + "'/>" +
        "</div>" +
        "<div class='map-content'>" +
        "<div class='map-content-top'><h4><a href='/az/openprojects/" + pid + ".html'>" + title + "</a></h4>" +
        "</div>" +
        "<div class='map-properties-btns'>" +
        "</div>";
    return ibContent;



}

function insertPropertyToArray(property, layout) {
    var image = '/img/logo.png';
    if (property.image) {
        image = property.image
    }

    var title = 'N/A';
    if (property.title) {
        title = property.title
    }

    var listing_for = 'Sale';
    if (property.listing_for) {
        listing_for = property.listing_for
    }

    var address = '';
    if (property.address) {
        address = property.address
    }

    var description = 'lorem ipsum dolor sit amet, cfeugiat congue qmper lorem ipsum dolor sit amet';
    if (property.description) {
        description = property.description
    }

    var area = 1000;
    if (property.area) {
        area = property.area
    }

    var Beds = 5;
    if (property.bedroom) {
        Beds = property.bedroom
    }

    var bathroom = 5;
    if (property.bathroom) {
        bathroom = property.bathroom
    }

    var garage = 1;
    if (property.garage) {
        garage = property.garage
    }

    var balcony = 1;
    if (property.balcony) {
        balcony = property.balcony
    }

    var lounge = 1;
    if (property.lounge) {
        lounge = property.lounge
    }

    var price = 253.33;
    if (property.price) {
        price = property.price
    }

    var is_featured = '';
    if (property.is_featured) {
        is_featured = 'Featured ';
    }

    var date = '';
    if (property.date) {
        date = property.date;
    }

    var author = '';
    if (property.author) {
        author = property.author;
    }

    var element = '';

    if(layout == 'grid_layout'){
        element += '<div class="col-lg-6 col-md-6 col-sm-6">\n' +
            '                        <div class="property-box">\n' +
            '                            <div class="property-thumbnail">\n' +
            '                                <a href="properties-details.html" class="property-img">\n' +
            '                                    <div class="tag button alt featured">'+is_featured+'</div>\n' +
            '                                    <div class="price-ratings-box">\n' +
            '                                        <p class="price">$'+price+' </p>\n' +
            '                                        <div class="ratings">\n' +
            '                                            <i class="fa fa-star"></i>\n' +
            '                                            <i class="fa fa-star"></i>\n' +
            '                                            <i class="fa fa-star"></i>\n' +
            '                                            <i class="fa fa-star"></i>\n' +
            '                                            <i class="fa fa-star-o"></i>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <img src="'+image+'" alt="property-2" class="img-fluid">\n' +
            '                                </a>' +
            '                                   <div class="property-overlay">\n' +
            '                                    <a href="properties-details.html" class="overlay-link">\n' +
            '                                        <i class="fa fa-link"></i>\n' +
            '                                    </a>\n' +
            '                                    <a class="overlay-link property-video" title="Test Title">\n' +
            '                                        <i class="fa fa-video-camera"></i>\n' +
            '                                    </a>\n' +
            '                                    <div class="property-magnify-gallery">\n' +
            '                                        <a href="http://placehold.it/750x540" class="overlay-link">\n' +
            '                                            <i class="fa fa-expand"></i>\n' +
            '                                        </a>\n' +
            '                                        <a href="http://placehold.it/750x540" class="hidden"></a>\n' +
            '                                        <a href="http://placehold.it/750x540" class="hidden"></a>\n' +
            '                                    </div>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                            <div class="detail">\n' +
            '                                <h1 class="title">\n' +
            '                                    <a href="properties-details.html">'+title+'</a>\n' +
            '                                </h1>\n' +
            '                                <div class="location">\n' +
            '                                    <a href="properties-details.html">\n' +
            '                                        <i class="fa fa-map-marker"></i>'+address+',\n' +
            '                                    </a>\n' +
            '                                </div>\n' +
            '                                <ul class="facilities-list clearfix">\n' +
            '                                    <li>\n' +
            '                                        <i class="flaticon-bed"></i> '+Beds+' Bedrooms\n' +
            '                                    </li>\n' +
            '                                    <li>\n' +
            '                                        <i class="flaticon-bath"></i> '+bathroom+' Bathrooms\n' +
            '                                    </li>\n' +
            '                                    <li>\n' +
            '                                        <i class="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq Ft:'+area+'\n' +
            '                                    </li>\n' +
            '                                    <li>\n' +
            '                                        <i class="flaticon-car-repair"></i> '+garage+' Garage\n' +
            '                                    </li>\n' +
            '                                </ul>\n' +
            '                            </div>\n' +
            '                            <div class="footer">\n' +
            '                                <a href="#">\n' +
            '                                    <i class="fa fa-user"></i> '+author+'\n' +
            '                                </a>\n' +
            '                                <span>\n' +
            '                                <i class="fa fa-calendar-o"></i> '+date+'\n' +
            '                            </span>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>';
    }
    else{
        element = '<div class="property-box-5">\n' +
            '                    <div class="row">\n' +
            '                        <div class="col-lg-5 col-md-5 col-pad">\n' +
            '                            <div class="property-thumbnail">\n' +
            '                                <a href="properties-details.html" class="property-img">\n' +
            '                                    <div class="tag button alt featured">'+is_featured+'</div>\n' +
            '                                    <div class="price-ratings-box">\n' +
            '                                        <p class="price">$'+price+'</p>\n' +
            '                                        <div class="ratings">\n' +
            '                                            <i class="fa fa-star"></i>\n' +
            '                                            <i class="fa fa-star"></i>\n' +
            '                                            <i class="fa fa-star"></i>\n' +
            '                                            <i class="fa fa-star"></i>\n' +
            '                                            <i class="fa fa-star-o"></i>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <img src="'+image+'" alt="property-1" class="img-fluid">\n' +
            '                                </a><div class="property-overlay">\n' +
            '                                    <a href="properties-details.html" class="overlay-link">\n' +
            '                                        <i class="fa fa-link"></i>\n' +
            '                                    </a>\n' +
            '                                    <a class="overlay-link property-video" title="Test Title">\n' +
            '                                        <i class="fa fa-video-camera"></i>\n' +
            '                                    </a>\n' +
            '                                    <div class="property-magnify-gallery">\n' +
            '                                        <a href="http://placehold.it/750x540" class="overlay-link">\n' +
            '                                            <i class="fa fa-expand"></i>\n' +
            '                                        </a>\n' +
            '                                        <a href="http://placehold.it/750x540" class="hidden"></a>\n' +
            '                                        <a href="http://placehold.it/750x540" class="hidden"></a>\n' +
            '                                    </div>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="col-lg-7 col-md-7 align-self-center col-pad">\n' +
            '                            <div class="detail">\n' +
            '                                <!-- title -->\n' +
            '                                <h1 class="title">\n' +
            '                                    <a href="properties-details.html">'+title+'</a>\n' +
            '                                </h1>\n' +
            '                                <!-- Location -->\n' +
            '                                <div class="location">\n' +
            '                                    <a href="properties-details.html">\n' +
            '                                        <i class="fa fa-map-marker"></i>'+address+',\n' +
            '                                    </a>\n' +
            '                                </div>\n' +
            '                                <!-- Paragraph -->\n' +
            '                                <p>'+description+'</p>\n' +
            '                                <!--  Facilities list -->\n' +
            '                                <ul class="facilities-list clearfix">\n' +
            '                                    <li>\n' +
            '                                        <i class="flaticon-bed"></i> '+ Beds +' Beds\n' +
            '                                    </li>\n' +
            '                                    <li>\n' +
            '                                        <i class="flaticon-bath"></i> '+ bathroom +' Baths\n' +
            '                                    </li>\n' +
            '                                    <li>\n' +
            '                                        <i class="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq Ft:'+area+'\n' +
            '                                    </li>\n' +
            '                                    <li>\n' +
            '                                        <i class="flaticon-car-repair"></i> '+garage+' Garage\n' +
            '                                    </li>\n' +
            '                                </ul>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>';
    }
    return element;
}

function animatedMarkers(map, propertiesMarkers, properties, layout) {
    var bounds = map.getBounds();
    var propertiesArray = [];
    $.each(propertiesMarkers, function (key, value) {
        if (bounds.contains(propertiesMarkers[key].getLatLng())) {
            propertiesArray.push(insertPropertyToArray(properties.data[key], layout));
            setTimeout(function () {
                if (propertiesMarkers[key]._icon != null) {
                    propertiesMarkers[key]._icon.className = 'leaflet-marker-icon leaflet-zoom-animated leaflet-clickable bounce-animation marker-loaded';
                }
            }, key * 50);
        }
        else {
            if (propertiesMarkers[key]._icon != null) {
                propertiesMarkers[key]._icon.className = 'leaflet-marker-icon leaflet-zoom-animated leaflet-clickable';
            }
        }
    });
    $('.fetching-properties').html(propertiesArray);
}

function generateMap(latitude, longitude, mapProvider, layout) {

    var map = L.map('map', {
        center: [40.46, 49.57],
        zoom: 7,
        scrollWheelZoom: false
    });

    L.tileLayer.provider('Esri.NatGeoWorldMap').addTo(map);
    var markers = L.markerClusterGroup({
        showCoverageOnHover: true,
        zoomToBoundsOnClick: true
    });
    var propertiesMarkers = [];

    $.each(properties.data, function (index, property) {
        var icon = '<img src="/assets/logos/logos/logo.png">';
        if (property.type_icon) {
            icon = '<img src="' + property.type_icon + '">';
        }
        var color = '';
        var markerContent =
            '<div class="map-marker ' + color + '">' +
            '<div class="icon">' +
            icon +
            '</div>' +
            '</div>';

        var _icon = L.divIcon({
            html: markerContent,
            iconSize: [36, 46],
            iconAnchor: [18, 32],
            popupAnchor: [130, -28],
            className: ''
        });

        var marker = L.marker(new L.LatLng(property.latitude, property.longitude), {
            title: property.title,
            icon: _icon
        });

        propertiesMarkers.push(marker);
        marker.bindPopup(drawInfoWindow(property));
        markers.addLayer(marker);
        marker.on('popupopen', function () {
            this._icon.className += ' marker-active';
        });
        marker.on('popupclose', function () {
            this._icon.className = 'leaflet-marker-icon leaflet-zoom-animated leaflet-clickable marker-loaded';
        });
    });

    map.addLayer(markers);
    animatedMarkers(map, propertiesMarkers, properties, layout);
    map.on('moveend', function () {
        animatedMarkers(map, propertiesMarkers, properties, layout);
    });

    $('.fetching-properties .item').hover(
        function () {
            propertiesMarkers[$(this).attr('id') - 1]._icon.className = 'leaflet-marker-icon leaflet-zoom-animated leaflet-clickable marker-loaded marker-active';
        },
        function () {
            propertiesMarkers[$(this).attr('id') - 1]._icon.className = 'leaflet-marker-icon leaflet-zoom-animated leaflet-clickable marker-loaded';
        }
    );

    $('.geolocation').on("click", function () {
        map.locate({setView: true})
    });
    $('#map').removeClass('fade-map');
}