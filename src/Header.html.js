module.exports = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <title>네이버 로그인</title>
  <script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js" charset="utf-8"></script>
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
</head>
<body>
  <div>this is header</div>
  
  <div id="naver_id_login"></div>
            
  <script type="text/javascript">
      var naver_id_login = new naver_id_login("8HkITidEmr1tQaw5jtAL", "http://localhost:3000/chat");
      var state = naver_id_login.getUniqState();
      naver_id_login.setButton("white", 2,40);
      naver_id_login.setDomain("UEoWMdGYuq");
      naver_id_login.setState(state);
      naver_id_login.setPopup();
      naver_id_login.init_naver_id_login();
  </script>
  <script src = "Header.js"></script>
  </div>
</body>
</html>`;