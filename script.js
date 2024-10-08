var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "160px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

 window.onscroll = function() {
    updateProgressBar();
  };
  
  
  function updateProgressBar() {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrollPercent = (scrollTop / scrollHeight) * 100;
  
      document.getElementById("progressBar").style.width = scrollPercent + "%";
  }
  