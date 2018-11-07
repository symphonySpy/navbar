

    function mininavbar() {
        var x = document.getElementById("topnav");
        if (x.className === "navs") {
            x.className += " responsive";
        } else {
            x.className = "navs";
        }
    }

    function icon_index() {
        window.location.href = '/';
    }

