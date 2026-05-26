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
    var header = "<header class=\"dash-header\">" +
        "<button class=\"menu-btn\" aria-label=\"Open menu\"><i class=\"fas fa-bars\"></i></button>" +
        "<div class=\"welcome\"><h1>Welcome back, Srinivas <span>!</span></h1>" +
        "<p>Keep pushing, your better self is worth it.</p></div>" +
        "<label class=\"search\"><i class=\"fas fa-search\"></i>" +
        "<input type=\"search\" placeholder=\"Search members, classes...\"></label>" +
        "<div class=\"header-settings\" aria-label=\"Display settings\">" +
        "<button class=\"theme-toggle\" type=\"button\" data-dashboard-theme aria-label=\"Toggle dark mode\"><i class=\"fas fa-moon\"></i><span>Dark</span></button>" +
        "<button class=\"direction-toggle\" type=\"button\" data-dashboard-direction aria-label=\"Toggle RTL direction\"><span>RTL</span></button></div>" +
        "<button class=\"alert\" aria-label=\"Notifications\"><i class=\"far fa-bell\"></i><span>3</span></button>" +
        "<div class=\"profile\"><img src=\"img/team-1.jpg\" alt=\"Admin Srinivas\">" +
        "<div><strong>Srinivas</strong><small>Admin</small></div><i class=\"fas fa-chevron-down\"></i></div></header>";

    mount.outerHTML = "<aside class=\"sidebar\"><a class=\"brand\" href=\"index.html\">" +
        "<img src=\"img/logoo.png\" alt=\"Flusion Flow Fitness\"><div><strong>FLUSION FLOW</strong>" +
        "<span>FITNESS</span></div></a><nav class=\"side-nav\" aria-label=\"Dashboard menu\">" + nav +
        "<a href=\"index.html\"><i class=\"fas fa-home\"></i> Website Home</a>" +
        "<a class=\"logout-link\" href=\"index.html\"><i class=\"fas fa-sign-out-alt\"></i> Logout</a></nav>" +
        "<div class=\"upgrade\"><i class=\"fas fa-crown\"></i><h3>Upgrade to Pro</h3>" +
        "<p>Unlock member insights and smart fitness reports.</p><a href=\"#\">Upgrade Now</a></div></aside>";

    var modulePage = document.querySelector(".module-page");
    if (modulePage) {
        var content = document.createElement("section");
        content.className = "module-content";
        while (modulePage.firstChild) {
            content.appendChild(modulePage.firstChild);
        }
        modulePage.className = "main-panel module-shell";
        modulePage.insertAdjacentHTML("afterbegin", header);
        modulePage.appendChild(content);
    }
}());
