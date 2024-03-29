
    /**
     * 设置cookie
     * @param cname  每一个cookie的名称
     * @param cvalue  cookie的值为cvalue
     * @param exdays  cookie 的过期时间 exdays
     */
    function setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
 
    /**
     * 获取cookie
     * @param cname 通过cookie的名称获取哪一个cookie
     * @returns {string}
     */
    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
 
    /**
     * 检查cookie是否存在
     * @param cookieName cookie名称
     */
    function checkCookie(cookieName) {
        var user = getCookie(cookieName);
        if (user != "") {
            alert("存在");
        }
        else {
           // user = prompt("请输入你的名字:", "");
           alert("不存在");
            if (user != "" && user != null) {
                setCookie(cookieName, user, 30);
            }
        }
    }
 
   // checkCookie("userName");
