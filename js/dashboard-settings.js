(function () {
    var root = document.documentElement;

    function applyDirection(direction) {
        var safeDirection = direction === "ltr" ? "ltr" : "rtl";
        root.setAttribute("dir", safeDirection);
        document.querySelectorAll("[data-dashboard-direction] span").forEach(function (label) {
            label.textContent = safeDirection.toUpperCase();
        });
        document.querySelectorAll("[data-dashboard-direction] i").forEach(function (icon) {
            icon.className = safeDirection === "rtl" ? "fas fa-align-right" : "fas fa-align-left";
        });
    }

    function applyTheme(theme) {
        var safeTheme = theme === "light" ? "light" : "dark";
        root.setAttribute("data-theme", safeTheme);
        document.querySelectorAll("[data-dashboard-theme] span").forEach(function (label) {
            label.textContent = safeTheme === "dark" ? "Dark" : "Light";
        });
        document.querySelectorAll("[data-dashboard-theme] i").forEach(function (icon) {
            icon.className = safeTheme === "dark" ? "fas fa-moon" : "fas fa-sun";
        });
    }

    applyDirection(localStorage.getItem("siteDirection") || root.getAttribute("dir") || "rtl");
    applyTheme(localStorage.getItem("siteTheme") || root.getAttribute("data-theme") || "dark");

    document.querySelectorAll("[data-dashboard-direction]").forEach(function (button) {
        button.addEventListener("click", function () {
            var next = root.getAttribute("dir") === "rtl" ? "ltr" : "rtl";
            localStorage.setItem("siteDirection", next);
            applyDirection(next);
        });
    });

    document.querySelectorAll("[data-dashboard-theme]").forEach(function (button) {
        button.addEventListener("click", function () {
            var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
            localStorage.setItem("siteTheme", next);
            applyTheme(next);
        });
    });

    var logoutLinks = document.querySelectorAll(".logout-link");
    if (logoutLinks.length) {
        document.body.insertAdjacentHTML("beforeend",
            "<div class=\"logout-modal\" data-logout-modal hidden>" +
            "<div class=\"logout-dialog\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"logout-title\">" +
            "<i class=\"fas fa-sign-out-alt\"></i>" +
            "<h2 id=\"logout-title\">Confirm Logout</h2>" +
            "<p>Are you sure you want to logout?</p>" +
            "<div class=\"logout-actions\">" +
            "<a class=\"logout-yes\" data-logout-confirm href=\"index.html\">Yes</a>" +
            "<button class=\"logout-no\" type=\"button\" data-logout-cancel>No</button>" +
            "</div></div></div>");

        var modal = document.querySelector("[data-logout-modal]");
        var confirmLink = modal.querySelector("[data-logout-confirm]");
        var cancelButton = modal.querySelector("[data-logout-cancel]");
        var activeLogoutLink;

        function closeLogout() {
            modal.hidden = true;
            document.body.classList.remove("logout-open");
            if (activeLogoutLink) {
                activeLogoutLink.focus();
            }
        }

        logoutLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                activeLogoutLink = link;
                confirmLink.setAttribute("href", link.getAttribute("href") || "index.html");
                modal.hidden = false;
                document.body.classList.add("logout-open");
                cancelButton.focus();
            });
        });

        cancelButton.addEventListener("click", closeLogout);
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeLogout();
            }
        });
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && !modal.hidden) {
                closeLogout();
            }
        });
    }
}());
