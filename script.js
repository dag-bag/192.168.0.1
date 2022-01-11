const internetPage = document.querySelector(".internetSettingHomePage");
const items = document.querySelector(".items");
const container = document.querySelector(".container");
const btn = document.querySelector(".iBtn");
const statusBtn = document.querySelector(".status");

const newInternet = `
<div class="item-col">
<h1>Internet Connection Status</h1>
<div class="i-col box1">
    <div class="photo">
        <!-- <i class="fa fa-desktop fa-4x"></i> -->
        <img src="https://img.icons8.com/wired/64/000000/multiple-devices.png" />
        <div class="line">
            <span class="lines1"></span>
            <span class="lines2"></span>
        </div>
        <img
            src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-router-internet-of-things-wanicon-lineal-wanicon.png" />
        <div class="line">
            <span class="lines1"></span>
            <span class="lines2"></span>
        </div>
        <img src="https://img.icons8.com/ios/50/000000/internet--v3.png" />
    </div>
    <div class="text">
        <h3>Connection Status: </h3>
        <p>You can surf the internet.</p>
    </div>

</div>
<h1>Attached Devices and Real-time Statistics</h1>
<div class="i-col box2">
    <div class="box2-col">

        <div class="sub-box1 subbox">
            <div class="h1">
                <h1>5</h1>
            </div>
            <div class="user"><i class="fas fa-users"></i>
                <p>Attached Devices</p>
            </div>

        </div>
        <div class="sub-box2 subbox">
            <div class="h1">
                <h1>10.0<sub>MB/s</sub></h1>
            </div>
            <div class="user"><i class="fas fa-download"></i>
                <p>Download Speed</p>
            </div>
        </div>
        <div class="sub-box3 subbox">

            <div class="h1">
                <h1>0.0<sub>KB/s</sub></h1>
            </div>
            <div class="user"><i class="fas fa-upload"></i>
                <p>Upload Speed</p>
            </div>
        </div>
    </div>
</div>
<h1>System Info</h1>
<div class="i-col box3">
    <div class="ip">
        <div class="ip-text">
            <h4>COnnection Type</h4>
            <h4>COnnection Duration</h4>
            <h4>WAC MAN</h4>
            <h4>LAN IP</h4>
            <h4>Firmware Version</h4>
        </div>
        <div class="ip-info">
            <p>PPPoE</p>
            <p>8h 31m 34s</p>
            <p>04:95:E6:9C:2D:78</p>
            <p>192.168.0.1</p>
            <p>V12.01.01.45_multi</p>
        </div>
    </div>
    <div class="dns">
        <div class="ip-text">
            <h4>WAN IP</h4>
            <h4>Subnet Mask</h4>
            <h4>Default Gateway</h4>
            <h4>Preferred DNS Server</h4>
            <h4>Alternative DNS Server</h4>
        </div>
        <div class="ip-info">
            <p>172.17.38.164</p>
            <p>255.255.255.254</p>
            <p>43.239.205.2</p>
            <p>103.233.116.181</p>
            <p>8.8.8.8</p>
        </div>
    </div>
</div>
</div>`;

const content = `
<div class="internetSettingHomePage">
<div class="box">
    <div class="connection">
        <h2>Connection Type</h2>
        <ul>
            <li><input type="radio" id="a"><label for="a">PPPoE</label></li>
            <li><input type="radio" id="b"><label for="b">Dyanamic Ip</label></li>
            <li><input type="radio" id="c"><label for="c">Static Ip</label></li>
        </ul>

    </div>
</div>
</div>`;

btn.addEventListener("click", () => {
  items.innerHTML = content;
});
statusBtn.addEventListener("click", () => {
  items.innerHTML = newInternet;
});
