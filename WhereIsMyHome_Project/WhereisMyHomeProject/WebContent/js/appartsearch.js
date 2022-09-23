var xhr = new XMLHttpRequest();
var url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev'; /*URL*/
let xhr2 = new XMLHttpRequest();
let url2 = "https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000";
let curArea = "";
let curGu = "";
let curYear = "";
let curDong = "";
let curDongFilter = "";
let fOption = "";

function changelocate(mapping, target) {
  // 주소-좌표 변환 객체를 생성합니다
  var geocoder = new kakao.maps.services.Geocoder();

  // 주소로 좌표를 검색합니다
  geocoder.addressSearch(mapping, function (result, status) {
    // 정상적으로 검색이 완료됐으면 
    if (status === kakao.maps.services.Status.OK) {
      var coords = new kakao.maps.LatLng(result[0].y, result[0].x);


      // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      map.setCenter(coords);
      map.setLevel(target !== undefined ? 3 : 4);
      if (target !== undefined) {

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
          clickable: true
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="display:flex; flex-direction:column; width:200px;text-align:center;justify-content:center;padding:6px 0;">${target.innerHTML}</div>`,
          removable: iwRemoveable = true,
        });
        infowindow.open(map, marker);

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function () {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(map, marker);
        });
      }
    }
  });
}
// 아이콘 클릭 시 선택창 불러오거나 치우기
document.getElementById("select-icon").addEventListener("click", function () {
  console.log(this.dataset.check);
  if (this.dataset.check == "1") {
    document.getElementById("select-menu-click").setAttribute("style", "top:-50px");
    this.dataset.check = "0";
    return;
  }
  this.dataset.check = "1";
  document.getElementById("select-menu-click").setAttribute("style", "top:0");
})


// 도/광역시 목록 불러와서 selectBox에 넣어주기
fetch(url2)
  .then((response) => response.json())
  .then((data) => addOption(data.regcodes))
fOption = document.querySelector("#select-menu-click");

function addOption(data) {
  let InputOpt = "";
  data.forEach((data) => {
    InputOpt = `<option value="${data.code}">${data.name}</option>`;
    fOption.children[0].innerHTML += InputOpt;
  });
}

// 도/광역시가 선택되었을떄 시/군/구 목록 불러와서 selectBox에 넣어주기
fOption.children[0].onchange = function () {
  fOption.children[2].innerHTML = `<option value="" style="display:none" disabled selected>동</option>`;
  fOption.children[3].innerHTML = `<option value="" style="display:none" disabled selected>선택년도</option>`;
  fOption.children[4].innerHTML = `<option value="" style="display:none" disabled selected>선택 월</option>`;
  curArea = this.value.substr(0, 2);
  fetch(`https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=${curArea}*000000`)
    .then(response => response.json())
    .then(data => addOption2(data.regcodes));
}
function addOption2(data) {
  let InputOpt = `<option value="" style="display:none" disabled selected>시/군/구</option>`;
  data.forEach((data) => {
    let gu = data.name.split(" ")[1];
    if (gu !== undefined)
      InputOpt += `<option value="${data.code}">${gu}</option>`;
  });
  fOption.children[1].innerHTML = InputOpt;
}


// 시/군/구가 선택되었을때 읍/면/동 목록 불러와서 selectBox에 넣어주기
fOption.children[1].onchange = function () {
  fOption.children[2].innerHTML = `<option value="" style="display:none" disabled selected>읍/면/동</option>`;
  fOption.children[3].innerHTML = `<option value="" style="display:none" disabled selected>선택년도</option>`;
  fOption.children[4].innerHTML = `<option value="" style="display:none" disabled selected>선택 월</option>`;
  curGu = curArea + this.value.substr(2, 3);
  fetch(`https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=${curGu.substr(0, 4)}*&is_ignore_zero=true`)
    .then(response => response.json())
    .then(data => addOption3(data.regcodes));
}
function addOption3(data) {
  let InputOpt = `<option value="" style="display:none" disabled selected>읍/면/동</option>`;
  data.forEach((data) => {
    let dong = data.name.split(" ")[2];
    if (dong !== undefined)
      InputOpt += `<option value="${data.name},${data.code}" >${dong + " " + (data.name.split(" ")[3] !== undefined ? data.name.split(" ")[3] : "")}</option>`;
  });
  fOption.children[2].innerHTML = InputOpt;
}
// 읍/면/동 이 선택되었을때 년도(-20) 박스 불러오기
fOption.children[2].onchange = function () {
  fOption.children[4].innerHTML = `<option value="" style="display:none" disabled selected>선택 월</option>`;
  curDong = this.value.split(",")[1].substr(0, 5);
  curDongFilter = this.value.split(",")[1].substr(5, 5);
  console.log(curDongFilter);
  changelocate(this.value.split(",")[0]);
  const now = new Date();
  let year = now.getFullYear();
  let InputOpt = `<option value="" style="display:none" disabled selected>선택년도</option>`;
  for (let i = year - 20; i <= year; i++) {
    InputOpt += `<option value="${i}">${i}년</option>`;
  }
  fOption.children[3].innerHTML = InputOpt;
}


// 년도 가 선택되었을때 월별 박스 불러오기
fOption.children[3].onchange = function () {
  curYear = this.value;
  let InputOpt = `<option value="" style="display:none" disabled selected>선택 월</option>`;
  for (let i = 1; i <= 12; i++) {
    InputOpt += `<option value="${i}">${i} 월</option>`;
  }
  fOption.children[4].innerHTML = InputOpt;
}


// 년도까지 선택이 끝났다면 목록을 불러와서 리스트에 뿌려주기
fOption.children[4].onchange = function () {
  console.log(curDong);
  var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + '87fABOEIcdWtsvwjsYXjoVbKfO7Oms4Jap9J8psfwew3kVvfO5hmZo8TSM9qqBS49RD%2BV8S3rukAg3J9M%2FE%2Blg%3D%3D'; /*Service Key*/
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
  queryParams += '&' + encodeURIComponent('LAWD_CD') + '=' + encodeURIComponent(curDong); /**/
  queryParams += '&' + encodeURIComponent('DEAL_YMD') + '=' + encodeURIComponent(`${curYear + (this.value < 10 ? 0 + this.value : this.value)}`); /**/
  console.log(curYear + this.value);
  xhr.open('GET', url + queryParams);
  let target = document.getElementById("content-menu");
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      let xml = "";
      console.log(this.getAllResponseHeaders());
      //alert('Status: ' + this.status + 'nHeaders: ' + JSON.stringify(this.getAllResponseHeaders()) + 'nBody: ' + this.responseText);
      parser = new DOMParser();
      xml = parser.parseFromString(this.responseText, "text/xml");
      console.log(xml);
      let item = xml.querySelectorAll("item");
      console.log(item);
      let count = 0;
      let div_list = ""
      target.innerHTML = "";
      item.forEach(item => {
        if (item.querySelector("법정동읍면동코드").textContent === curDongFilter) {
          console.log(item);
          count++;
          let divEl = document.createElement("div");
          divEl.setAttribute("class", "content-right-list");
          let content = `<h1>${item.querySelector("아파트").textContent}</h1><br>
        <div>거래금액 : ${item.querySelector("거래금액").textContent} 만원</div>
        <div>면적 : ${item.querySelector("전용면적").textContent}</div>
        <div class="date"><i class="bi bi-calendar3"></i>&nbsp${item.querySelector("년").textContent}.
        ${item.querySelector("월").textContent}.
        ${item.querySelector("일").textContent}</div>`;
          divEl.innerHTML = content;
          target.appendChild(divEl);
          divEl.addEventListener("click", function () {
            let mapping = "";
            mapping += item.querySelector("법정동").textContent + " ";
            mapping += item.querySelector("지번").textContent;
            changelocate(mapping, this);
          });
        }
      });
      document.getElementById("content-cnt").innerText = `실거래가 목록(${count})`;
    }
  };

  xhr.send('');
}

if (localStorage.length !== 0) {
  var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + '87fABOEIcdWtsvwjsYXjoVbKfO7Oms4Jap9J8psfwew3kVvfO5hmZo8TSM9qqBS49RD%2BV8S3rukAg3J9M%2FE%2Blg%3D%3D'; /*Service Key*/
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
  queryParams += '&' + encodeURIComponent('LAWD_CD') + '=' + encodeURIComponent(localStorage.getItem("curDong")); /**/
  queryParams += '&' + encodeURIComponent('DEAL_YMD') + '=' + encodeURIComponent(`${localStorage.getItem("curYear") + (localStorage.getItem("curMonth") < 10 ? 0 + localStorage.getItem("curMonth") : localStorage.getItem("curMonth"))}`); /**/
  console.log("지금 동", localStorage.getItem("curDong"));
  console.log("지금 년", localStorage.getItem("curYear"));
  console.log("지금 월", localStorage.getItem("curMonth"));
  curDongFilter = localStorage.getItem("curDongFilter");
  localStorage.clear();
  console.log("동필터", curDongFilter);
  xhr.open('GET', url + queryParams);
  let target = document.getElementById("content-menu");
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      let xml = "";
      console.log(this.getAllResponseHeaders());
      //alert('Status: ' + this.status + 'nHeaders: ' + JSON.stringify(this.getAllResponseHeaders()) + 'nBody: ' + this.responseText);
      parser = new DOMParser();
      xml = parser.parseFromString(this.responseText, "text/xml");
      console.log(xml);
      let item = xml.querySelectorAll("item");
      console.log(item);
      let count = 0;
      let div_list = ""
      target.innerHTML = "";
      item.forEach(item => {
        if (item.querySelector("법정동읍면동코드").textContent === curDongFilter) {
          console.log(item);
          count++;
          let divEl = document.createElement("div");
          divEl.setAttribute("class", "content-right-list");
          let content = `<h1>${item.querySelector("아파트").textContent}</h1><br>
        <div>거래금액 : ${item.querySelector("거래금액").textContent} 만원</div>
        <div>면적 : ${item.querySelector("전용면적").textContent}</div>
        <div class="date"><i class="bi bi-calendar3"></i>&nbsp${item.querySelector("년").textContent}.
        ${item.querySelector("월").textContent}.
        ${item.querySelector("일").textContent}</div>`;
          divEl.innerHTML = content;
          target.appendChild(divEl);
          divEl.addEventListener("click", function () {
            let mapping = "";
            mapping += item.querySelector("법정동").textContent + " ";
            mapping += item.querySelector("지번").textContent;
            changelocate(mapping, this);
          });
        }
      });
      document.getElementById("content-cnt").innerText = `실거래가 목록(${count})`;
    }
  };

  xhr.send('');
}
