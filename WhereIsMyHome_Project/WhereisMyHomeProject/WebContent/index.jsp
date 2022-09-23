<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>구해줘 Home</title>
    <link rel="stylesheet" href="css/common/header.css">
    <link rel="stylesheet" href="css/common/footer.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
</head>

<body>
    <div id="container">
        <!-- header 영역 시작 -->
        <header id="header">
            <!-- left header 영역 시작 -->
            <div id="left-header">
                <div class="logo">
                    <a href="index.html">
                        <i class="bi bi-house-door"></i>구해줘 Home
                    </a>
                </div>

                <nav class="gnb">
                    <ul>
                        <li class="gnb-link"><a href="${pageContext.request.contextPath}/noticeboard?act=noticelist ">공지사항</a></li>
                        <li class="gnb-link"><a href="">오늘의 뉴스</a></li>
                    </ul>
                </nav>
            </div>
            <!-- left header 영역 끝 -->
            <!-- right header 영역 시작 -->
            <div id="right-header">
                <div class="account">
                    <ul>
                        <li class="account-link">
                            <a href="login.html"><i class="bi bi-box-arrow-in-right"></i>로그인</a>
                        </li>
                        <li class="account-link">
                            <a href="signup.html"><i class="bi bi-person-plus"></i>회원가입</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- right header 영역 끝-->
        </header>
        <!-- header 영역 끝-->

        <!-- 메인 영역 시작 -->
        <main id="main">
            <!-- jumbotron 영역 시작 -->
            <section id="jumbotron">
                <div class="intro">구해줘 Home</div>
                <div id="search-home">
                    <select>
                        <option value="" style="display:none" disabled selected>도/광역시</option>
                    </select>
                    <select>
                        <option value="시/구/군">시/군/구</option>
                    </select>
                    <select>
                        <option value="동">읍/면/동</option>
                    </select>
                    <select>
                        <option value="년도">선택년도</option>
                    </select>
                    <select>
                        <option value="월">선택 월</option>
                    </select>
                </div>
            </section>
            <!-- jumbotron 영역 끝-->

            <!-- articles 영역 시작 -->
            <section class="articles">
                <!-- left article 영역 시작-->
                <article class="left-article">
                    <div class="article-img">
                        <img src="img/house2.jpg" alt="">
                    </div>
                    <div class="myhouse">
                        <h2>지혜롭게 내집 마련하기</h2>
                        <hr>
                        <ul>
                            <li>
                                <a href=""><i class="bi bi-piggy-bank"></i>가용자금 확인 및 대출 계획</a>
                            </li>
                            <li>
                                <a href=""><i class="bi bi-house"></i>집 종류 및 지역 선택</a>
                            </li>
                            <li>
                                <a href=""><i class="bi bi-graph-up-arrow"></i>정보 수집 & 시세파악</a>
                            </li>
                            <li>
                                <a href=""><i class="bi bi-search"></i>부동산 방문 & 집구경</a>
                            </li>
                            <li>
                                <a href=""><i class="bi bi-pencil"></i>계약 및 잔금 치르기</a>
                            </li>
                            <li>
                                <a href=""><i class="bi bi-file-text"></i>소유권 이전등기</a>
                            </li>
                            <li>
                                <a href=""><i class="bi bi-cone"></i>인테리어 공사</a>
                            </li>
                        </ul>
                    </div>
                </article>
                <!-- left article 영역 끝-->
                <!-- right article 영역 시작-->
                <article class="right-articles">
                    <h2>부동산 뉴스</h2>
                    <hr>
                    <h3><a href="">서울 아파트, 매매·전세 다른 양상...상승..</a> 아시아경제</h3>
                    <ul class="news-list">
                        <li class="news-link"><a href="">서울 입주 2년차 아파트 전셋값 1억400만원 올라</a> 한겨레</li>
                        <li class="news-link"><a href="">12·16發 거래한파…매수자가 사라졌다</a> 아시아경제</li>
                        <li class="news-link"><a href="">재건축 대안 뜨는 수직증축 리모델링… 추진 속..</a> 동아일보</li>
                        <li class="news-link"><a href="">고가기준 9억, 서울 아파트 중간값 됐다</a> 동아일보</li>
                    </ul>
                </article>
                <!-- right article 영역 끝-->
            </section>
            <!-- articles 영역 끝 -->
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
</body>
<script src="./js/index.js"></script>

</html>