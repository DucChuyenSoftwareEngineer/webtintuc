window.onscroll = function() {
    scroll()
};

function scroll() {
    if (document.body.scrollTop > 300 || 
            document.documentElement.scrollTop > 300)
    {
        document.getElementById("bar").style.top
                    = "30%";
    }
    else {
        document.getElementById("bar").style.top
                    = "-60px";
    }
}