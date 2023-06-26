// ===== Sidebar / Toggle =====
let sidebar = document.querySelector(".sidebar");

function sidebar_toggle() {
    sidebar.classList.toggle("toggle");

    let sidebarTI = document.querySelector(".sidebar-toggler-icon");

    if (sidebar.classList.contains("toggle")) sidebarTI.classList.replace("bx-menu", "bx-menu-alt-right");
    else sidebarTI.classList.replace("bx-menu-alt-right", "bx-menu");
}

// ===== Sidebar / Navlink Active =====
let section = document.querySelectorAll("section");

function navlink_active() {
    let sY = scrollY;

    section.forEach(function(item) {
        let sectionTop = item.offsetTop - 250;
        let sectionBottom = sectionTop + item.offsetHeight;
        let sectionId = item.getAttribute("id");

        if (sY > sectionTop && sY <= sectionBottom) document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.add("active");
        else document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.remove("active");
    });
}

// ===== Sidebar / Fixed =====
let link = document.querySelectorAll("a[href*='#']:not([href='#'])");

link.forEach(function(item) {
    item.addEventListener("click", function(event) {
        if (innerWidth <= 768 && item.classList.contains("nav-link")) sidebar_toggle();

        let href = item.getAttribute("href");
        let targetPos = document.querySelector(href).offsetTop;

        scroll({
            behavior: "smooth",
            top: targetPos
        });

        event.preventDefault();
    });
});

// ===== Initial Load =====
navlink_active();

// ===== Window Event =====
onscroll = function() {
    navlink_active();
}