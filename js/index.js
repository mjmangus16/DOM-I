const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const nav = document.querySelector("nav");

console.log(nav);

const aTag2 = document.createElement("a");
nav.appendChild(aTag2);
aTag2.textContent = "NavItem 2";
aTag2.href = "#";

const navItems = document.querySelectorAll("a");

const ctaText = document.querySelector(".cta-text");
const ctaImg = document.querySelector("#cta-img");
const textContents = document.querySelectorAll(".text-content");
const middleImg = document.querySelector("#middle-img");
const contact = document.querySelector(".contact");

const br = document.createElement("br");

navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];

const aTag1 = document.createElement("a");
nav.prepend(aTag1);
aTag1.textContent = "NavItem 1";
aTag1.href = "#";
aTag1.style.color = "green";

navItems.forEach(nav => (nav.style.color = "green"));

ctaText.children[0].textContent = siteContent.cta.h1;
ctaText.children[1].textContent = siteContent.cta.button;

ctaImg.src = siteContent.cta["img-src"];
middleImg.src = siteContent["main-content"]["middle-img-src"];

textContents[0].children[0].textContent =
  siteContent["main-content"]["features-h4"];

textContents[0].children[1].textContent =
  siteContent["main-content"]["features-content"];

textContents[1].children[0].textContent =
  siteContent["main-content"]["about-h4"];

textContents[1].children[1].textContent =
  siteContent["main-content"]["about-content"];

textContents[2].children[0].textContent =
  siteContent["main-content"]["services-h4"];

textContents[2].children[1].textContent =
  siteContent["main-content"]["services-content"];

textContents[3].children[0].textContent =
  siteContent["main-content"]["product-h4"];

textContents[3].children[1].textContent =
  siteContent["main-content"]["product-content"];

textContents[4].children[0].textContent =
  siteContent["main-content"]["vision-h4"];

textContents[4].children[1].textContent =
  siteContent["main-content"]["vision-content"];

contact.children[0].textContent = siteContent.contact["contact-h4"];
contact.children[1].textContent = siteContent.contact.address;
contact.children[2].textContent = siteContent.contact.phone;
contact.children[3].textContent = siteContent.contact.email;

const footer = (document.querySelector("footer").children[0].textContent =
  siteContent.footer.copyright);
