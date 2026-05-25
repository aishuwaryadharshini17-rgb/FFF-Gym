(function () {
    var mount = document.querySelector("[data-dashboard-sidebar]");
    if (!mount) {
        return;
    }

    var module = document.body.getAttribute("data-module") || "";
    var links = [
        ["dashboard", "dashboard.html", "fas fa-th-large", "Dashboard"],
        ["members", "members.html", "fas fa-users", "Members"],
        ["trainers", "trainers.html", "fas fa-user-tie", "Trainers"],
        ["attendance", "attendance.html", "far fa-calendar-check", "Attendance"],
        ["plans", "membership-plans.html", "far fa-credit-card", "Membership Plans"],
        ["payments", "payments.html", "fas fa-wallet", "Payments"],
        ["classes", "workouts-classes.html", "fas fa-dumbbell", "Workouts &amp; Classes"],
        ["diet", "diet-plans.html", "fas fa-apple-alt", "Diet Plans"],
        ["equipment", "equipment.html", "fas fa-running", "Equipment"],
        ["reports", "reports.html", "far fa-chart-bar", "Reports"],
        ["messages", "messages.html", "far fa-comment-dots", "Messages <b>5</b>"]
    ];
    var nav = links.map(function (item) {
        var active = item[0] === module ? " class=\"active\"" : "";
        return "<a" + active + " href=\"" + item[1] + "\"><i class=\"" + item[2] + "\"></i> " + item[3] + "</a>";
    }).join("");

    mount.outerHTML = "<aside class=\"sidebar\"><a class=\"brand\" href=\"index.html\">" +
        "<img src=\"img/logoo.png\" alt=\"Flusion Flow Fitness\"><div><strong>FLUSION FLOW</strong>" +
        "<span>FITNESS</span></div></a><nav class=\"side-nav\" aria-label=\"Dashboard menu\">" + nav +
        "<a href=\"index.html\"><i class=\"fas fa-home\"></i> Website Home</a></nav>" +
        "<div class=\"upgrade\"><i class=\"fas fa-crown\"></i><h3>Upgrade to Pro</h3>" +
        "<p>Unlock member insights and smart fitness reports.</p><a href=\"#\">Upgrade Now</a></div></aside>";
}());
