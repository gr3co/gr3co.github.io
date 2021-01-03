  window.fbAsyncInit = function() {
    FB.init({
     appId: '200706816783405',
     status: true,
     xfbml: true,
     cookies: true
   });

  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      getBirthday();
    }
    else{
      document.getElementById("title").innerHTML="Is it my birthday yet?";
      document.getElementById("bdmessage").innerHTML="Please log in with Facebook!<br> \
      How else am I going to know your birthday?!<br> \
      (you may need to turn off your popup blocker)";
      FB.login(function(r){
        location.reload();
      }, {scope:'user_birthday'});
    }});
  };
  
  (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=200706816783405";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  function getBirthday(){
    FB.api("/me",function(r){
      document.getElementById("title").innerHTML="Is it my birthday yet?";
      if (r && r.birthday && isItBirthday(r.birthday)){
        document.getElementById("audio").innerHTML="<audio autoplay loop> \
          <source src='/public/media/birthday.mp3' type='audio/mpeg'> \
          <embed height='50' width='100' src='/public/media/birthday.mp3'> \
        </audio>";
        document.getElementById("isIt").innerHTML="YES!";
        document.getElementById("bdmessage").innerHTML="HAPPY BIRTHDAY";
      }
      else{
        document.getElementById("isIt").innerHTML=pickNo();
      }
    });
  }

  function pickNo(){
    var n = ["NO"];
    return n[Math.floor(Math.random() * n.length)];
  }

  function isItBirthday(b){
    var p = b.split("/");
    var d = new Date();
    var d_t = new Date(2013,3,8);
    p[0] = parseInt(p[0]);
    p[1] = parseInt(p[1]);
    m = d.getMonth()+1;
    m_t = d_t.getMonth()+1;
    t = d.getDate();
    t_t = d_t.getDate();
    console.log("Birthday: "+p[0]+"/"+p[1]);
    console.log("Today: "+m+"/"+t);
    if (m != p[0])
      return false;
    else return (t == p[1]);
  }

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-45460118-1']);
  _gaq.push(['_setDomainName', 'sgre.co']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  !function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)){
      js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js,fjs);
    }
  }(document, 'script', 'twitter-wjs');