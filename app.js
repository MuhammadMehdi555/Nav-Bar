let offOn = true;
    const mode = document.getElementById('mode');
    const status = document.getElementById('status');
    const main = document.getElementById('main1');
    const mmenu = document.getElementById('mmenu');
    const logo1 = document.getElementById('logo1');
    const md = document.getElementById('md');
    const s = document.getElementById('s');
    const a = document.getElementById('a');
    const c = document.getElementById('c');

    function mod() {
        if (offOn) {
            mode.style.marginLeft = "29px";
            mode.style.backgroundColor = "#1a1c2c";
            status.textContent = "OFF";
            status.style.color = "#1a1c2c";
            status.style.marginLeft = "-45px";
            document.body.style.backgroundColor = "rgb(216, 216, 34)";
            main.style.backgroundColor = "rgb(244, 244, 67)";
            mmenu.style.borderColor = "#1a1c2c";
            mmenu.style.boxShadow = "0 0 5px #1a1c2c";
            logo1.style.color = "#1a1c2c";
            md.style.borderColor = "#1a1c2c";
            md.style.boxShadow = "0 0 5px #1a1c2c";
            [s, a, c].forEach(el => el.style.color = "rgb(244, 244, 67)");
            [s,a,c].forEach(sacb=> sacb.style.backgroundColor="#1a1c2c")
            
        } else {
            mode.style.marginLeft = "0px";
            status.textContent = "ON";
            status.style.marginLeft = "4px";
            document.body.style.backgroundColor = "#0f111a";
            main.style.backgroundColor = "#1a1c2c";
            mode.style.backgroundColor = "white";
            status.style.color = "white";
            mmenu.style.borderColor = "white";
            mmenu.style.boxShadow = "0 0 5px white";
            logo1.style.color = "white";
            md.style.borderColor = "white";
            md.style.boxShadow = "0 0 5px white";
            [s, a, c].forEach(el => el.style.color = "#1a1c2c");
            [s,a,c].forEach(sacb=> sacb.style.backgroundColor="rgb(244, 244, 67)")
            
        }
        offOn = !offOn;
    }
function abc() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.style.display === "none") {
            link.style.display = "block";
            logo1.style.display="none"
            link.style.width="50px"
            link.style.display="flex"
            link.style.textAlign="center"
            link.style.fontSize="10px"
            link.style.alignItems="center"
        } else {
            link.style.display = "none";
            logo1.style.display="block"
        }
    });
}
