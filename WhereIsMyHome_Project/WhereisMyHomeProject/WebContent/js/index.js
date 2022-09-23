var xhr = new XMLHttpRequest();
var url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev'; /*URL*/
let xhr2 = new XMLHttpRequest();
let url2 = "https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000";
let curArea = "";
let curGu = "";
let curYear = "";
let curDong = "";
let curDongFilter = "";

// 도/광역시 목록 불러와서 selectBox에 넣어주기
fetch(url2)
    .then((response) => response.json())
    .then((data) => addOption(data.regcodes))
let fOption = document.querySelector("#search-home");

function addOption(data) {
    let InputOpt = "";
    data.forEach((data) => {
        InputOpt = `<option value="${data.code}">${data.name}</option>`;
        fOption.children[0].innerHTML += InputOpt;
    });
}

// 도/광역시가 선택되었을떄 시/군/구 목록 불러와서 selectBox에 넣어주기
fOption.children[0].onchange = function () {
    fOption.children[2].innerHTML = `<option value="" style="display:none" disabled selected>읍/면/동</option>`;
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
fOption.children[4].onchange = function () {
    localStorage.setItem("curArea", curArea);
    localStorage.setItem("curGu", curGu);
    localStorage.setItem("curYear", curYear);
    localStorage.setItem("curDong", curDong);
    localStorage.setItem("curMonth", this.value);
    localStorage.setItem("curDongFilter", curDongFilter);
    window.location.href = "appartsearch.html";
}