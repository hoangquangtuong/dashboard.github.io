try {

    item_fc = document.querySelector('[data-widget=treeview]');
    item_msg = document.querySelector('#notify');
    if (isDocs == undefined) {
        tag_pengunjung = document.querySelector('span#pengunjung_length');
        tag_endpoints = document.querySelector('span#endpoint');
        tag_clock = document.querySelector('span#clock');
        tag_battery_status = document.querySelector('small#battery_status');
        tag_battery_level = document.querySelector('span#battery_level');
        tag_netinfo = document.querySelector('#informationnet');
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
    }
    for (var e of item_list) {
        coder = `<li class="nav-item">
    <a href="#" class="nav-link">
    <i class="${e.icon.trim()} nav-icon"></i>
    <p>
    ${(e.name.trim())}
    <i class="right fas fa-angle-left"></i>
    ${e.event ? `<span class="right badge badge-danger">${e.event.trim()}</span>`: ``}
    </p>
    </a>
    <ul class="nav nav-treeview">
    %item$
    </ul>
    </li>
    `;
        item_coder = "";
        for (var ee of e.item) {
            if(ee.admin) {
                item_coder += `<li class="nav-item">
                <a href="${ee.url}" target="_blank" class="nav-link" id="${ee.id}">
                <p>
                • ${(ee.name.trim())}
                ${ee.event ? `<span class="right badge badge-danger">${ee.event.trim()}</span>`: ``}
                ${ee.error ? `<span class="right badge badge-danger">ERROR</span>`: ``}
                </p>
                </a>
                </li>`
            }
            else {
                item_coder += `<li class="nav-item">
                <a class="nav-link" id="${ee.id}">
                <p>
                • ${(ee.name.trim())}
                ${ee.event ? `<span class="right badge badge-danger">${ee.event.trim()}</span>`: ``}
                ${ee.error ? `<span class="right badge badge-danger">ERROR</span>`: ``}
                </p>
                </a>
                </li>`;
            }
            
        }

        item_fc.innerHTML += coder.replace('%item$', item_coder);
    }

    if (isDocs == undefined) {
        if (localStorage.getItem('Pengunjung')) {
            setInterval(function () {
                fetch("https://api.vandien.dev/total").then(res => res.json()).then(res => {
                    tag_pengunjung.innerHTML = res.total + " <small>người</small>";
                });
            }, 2500);
        } else {
            fetch("https://api.vandien.dev/total").then(res => res.json()).then(res => {
                localStorage.setItem('Pengunjung', 'true');
                tag_pengunjung.innerHTML = res.total + " <small>người</small>";
            });
        }
    }
    setInterval(function () {
        fetch("https://api.vandien.dev/endpoints").then(res => res.json()).then(res => {
            tag_endpoints.innerHTML = (res.endpoint - res.error) + " <small>API</small>";
        });
    }, 5000);
    function time(time) {
        time2 = new Date().getTime();
        msec = time2 - Number(time);
        detik = msec / 1000;
        menit = detik / 60;
        jam = menit / 60;
        hari = jam / 24;
        minggu = hari / 7;
        jam_str = Number(String(jam).split('.')[0]);
        menit_str = Number(String(menit).split('.')[0]);
        detik_str = Number(String(detik).split('.')[0]);
        hari_str = Number(String(hari).split('.')[0]);
        minggu_str = Number(String(minggu).split('.')[0]);

        if (minggu_str > 0 && minggu_str < 7) {
            return `<small>${minggu_str} tuần trước</small>`;
        } else if (minggu > 52.1428571 && minggu_str > 7) {
            return `<small>vài năm trước</small>`;
        } else if (detik < 60 && detik_str > 0) {
            return `<small>${detik_str} giây trước</small>`;
        } else if (menit < 60 && menit_str > 0) {
            return `<small>${menit_str} phút trước</small>`;
        } else if (jam < 24 && jam_str > 0) {
            return `<small>${jam_str} giờ trước</small>`;
        } else if (hari < 7 && hari_str > 0) {
            return `<small>${hari_str} ngày trước</small>`;
        } else {
            return `<small>${hari_str} ngày trước</small>`;
        }
    }
    msg = `<span class="dropdown-item dropdown-header">$jumlah Thông báo</span><!--$item--><div class="dropdown-divider"></div>
  <a href="#" class="dropdown-item dropdown-footer">Xem tất cả thông báo</a>`;
    msg_ = ``;

    for (var e = 0; e < message_list.length; e++) {
        msg_ += `<div class="dropdown-divider"></div>
    <a href="#" class="dropdown-item">
    <i class="${message_list[e].icon.trim()} mr-2"></i> ${message_list[e].title.length > 17 ? `<small>${message_list[e].title.trim()}</small>`: `${message_list[e].title.trim()}`}
    <span class="float-right text-muted text-sm" id="time" time="${message_list[e].timing.trim()}"></span>
    </a>`;
    }
    msg = msg.replace('<!--$item-->', msg_);
    msg = msg.replace('$jumlah', message_list.length);

    item_msg.innerHTML = msg;

    document.querySelector('span#notify_length').innerHTML = message_list.length;
    timingset = document.querySelectorAll('span#time');
    timingeval = `setInterval(function() {`;

    for (var e = 0; e < timingset.length; e++) {
        timingeval += `timingset[${e}].innerHTML = time(timingset[${e}].getAttribute('time'));`;
    }
    timingeval += `},10);`;

    eval(timingeval);
    if (isDocs == undefined) {

        function duo(s) {
            return s < 10 ? "0" + s : s;
        }

        function oud(s) {
            return s < 10 ? s + "0" : s;
        }

        setInterval(function () {
                jam = duo(new Date().getHours());
                menit = duo(new Date().getMinutes());
                detik = duo(new Date().getSeconds());
                tag_clock.innerHTML = `${jam}:${menit}:${detik}`;
            },
            10);
    }
    try {
        setInterval(function () {
            navigator.getBattery().then(function (battery) {
                tag_battery_level.innerHTML = Number(oud(battery.level * 100)).toFixed(0) + "%";
            });
        }, 1000);
    }
    catch (e) {
        console.log(e);
    }
} catch (e) {
    console.log(e)
}