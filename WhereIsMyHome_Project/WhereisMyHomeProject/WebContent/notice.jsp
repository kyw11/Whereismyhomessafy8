<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>구해줘 Home</title>
    <link rel="stylesheet" href="css/common/header.css">
    <link rel="stylesheet" href="css/common/footer.css">
    <link rel="stylesheet" href="css/notice.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
</head>

<body>
    <div id="container">
        <!-- header 영역 시작 -->
        <header id="header">
            <!-- left header 영역 시작 -->
            <div id="left-header">
                <div class="logo">
                    <a href="">
                        <i class="bi bi-house-door"></i>구해줘 Home
                    </a>
                </div>

                <nav class="gnb">
                    <ul>
                        <li class="gnb-link"><a href="notice.html">공지사항</a></li>
                        <li class="gnb-link"><a href="">오늘의 뉴스</a></li>
                        <li class="gnb-link"><a href="">자유글</a></li>
                        <li class="gnb-link"><a href="">주변탐방</a></li>
                        <li class="gnb-link"><a href="like-area.html">관심지역 설정</a></li>
                        <li class="gnb-link"><a href="">관심지역 둘러보기</a></li>
                    </ul>
                </nav>
            </div>
            <!-- left header 영역 끝 -->
            <!-- right header 영역 시작 -->
            <div id="right-header">
                <div class="account">
                    <ul>
                        <li class="account-link">
                            <a href="login.html"><i class="bi bi-box-arrow-in-left"></i>로그아웃</a>
                        </li>
                        <li class="account-link">
                            <a href="user-info.html"><i class="bi bi-person-circle"></i>회원정보</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- right header 영역 끝-->
        </header>
        <!-- header 영역 끝-->

        <!-- 메인 영역 시작 -->
        <main id="main">
            <section class="notice">
                <h1>공지사항</h1>
                <table class="notice-list">
                    <thead>
                        <th>번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>작성일</th>
                        <th>조회수</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr id="3">
                            <th>3</th>
                            <td><a href="notice-detail.html">추석 이벤트 당첨자 발표</a></td>
                            <td>관리자</td>
                            <td>2022-09-11</td>
                            <td>100</td>
                            <td>
                                <p onclick="deleteNotice(3)">삭제</p>
                            </td>
                        </tr>
                        <tr id="2">
                            <th>2</th>
                            <td><a href="notice-detail.html">추석맞이 이벤트가 있습니다.</a></td>
                            <td>관리자</td>
                            <td>2022-09-03</td>
                            <td>52</td>
                            <td>
                                <p onclick="deleteNotice(2)">삭제</p>
                            </td>
                        </tr>
                        <tr id="1">
                            <th>1</th>
                            <td><a href="notice-detail.html">첫 공지입니다.</a></td>
                            <td>관리자</td>
                            <td>2022-09-01</td>
                            <td>23</td>
                            <td>
                                <p onclick="deleteNotice(1)">삭제</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="btn-area">
                    <button class="btn" onclick="location.href='notice-register.html'">등록</button>
                    <a class="btn" href="index-login.html">취소</a>
                </div>
            </section>
        </main>
        <!-- 메인 영역 끝-->

        <!-- footer 영역 시작-->
        <footer id="footer">
            <!-- top footer 시작 -->
            <div id="top-footer">
                <div class="footer-content">
                    <div class="find-us">
                        <h2>Find us</h2>
                    </div>
                    <div class="us-info">
                        <ul>
                            <li><i class="bi bi-geo-alt"></i>대전 유성구 덕명동 삼성화재 유성캠퍼스</li>
                            <li><i class="bi bi-people-fill"></i>SSAFY 8기 대전 8반 3팀 이진섭, 안효관</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- top footer 끝 -->
            <!-- bottom footer 시작 -->
            <div id="bottom-footer">
                <div class="footer-content">
                    <p>Copyright by SSAFY. All rights reserved.</p>
                </div>
            </div>
            <!-- bottom footer 끝 -->
        </footer>
        <!-- footer 영역 끝-->
    </div>

    <script>
        function deleteNotice(no) {
            alert(no + "번째 공지가 삭제되었습니다.")
            document.getElementById(no).remove();
        }
    </script>
</body>

</html>