var xhr = new XMLHttpRequest();
var url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev'; /*URL*/
let xhr2 = new XMLHttpRequest();
let url2 = "https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000";
let x = "";
let y = "";

document.getElementById("exam01").onclick = function () {
    document.getElementById("select-like").setAttribute("style", "display:block");
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch("서울특별시 중구 명동", function (result, status) {
        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {
            y = result[0].y;
            x = result[0].x;
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        }
    });
};

document.getElementById("select-like").onchange = function () {
    // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(y, x), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    // 지도를 생성합니다    
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places(map);

    // 카테고리로 은행을 검색합니다
    ps.categorySearch(this.value, placesSearchCB, { useMapBounds: true });

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            for (var i = 0; i < data.length; i++) {
                displayMarker(data[i]);
            }
        }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
        // 마커를 생성하고 지도에 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x)
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function () {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
        });
    }
}