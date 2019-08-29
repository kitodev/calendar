var date = new Date();

function renderDate() {

    date.setDate(1);
    var day = date.getDay();

    var endDate = new Date(date.getFullYear(),
    date.getMonth() + 1,
    0).getDate();

    var prevDate = new Date(date.getFullYear(),
    date.getMonth(),
    0).getDate();

    var today = new Date();


    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    document.getElementById("dat_str").innerHTML = date.toDateString();
    document.getElementById("month").innerHTML = months[date.getMonth()];

    var cells = "";

    for(x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }

    for(i = 1; i <= endDate; i++) {
        if(i == today.getDate() && date.getMonth() == date.getMonth()) {
            cells += "<div class='today'>" + i + "</div>";
        } else {
            cells += "<div>" + i + "</div>";
        }
    }

    document.getElementsByClassName("days")[0].innerHTML = cells;
}

function moveDate(para) {
    if(para == 'prev') {
        date.setMonth(date.getMonth() - 1);
    } else if(para == 'next') {
        date.setMonth(date.getMonth() + 1);
    }
    renderDate();
}

renderDate();