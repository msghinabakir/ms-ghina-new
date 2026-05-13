// ربط زر home
document.addEventListener("DOMContentLoaded", function () {
  let homeBtn = document.getElementById("homeBtn");

 if(homeBtn) {
  homeBtn.addEventListener("click", function (e) {
    e.preventDefault(); // 🔥 هادي أهم سطر

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
 }
});

/* ================= SIGN IN ================= */

const signBtn = document.getElementById("signBtn");
const signModal = document.getElementById("signModall");
const closeSign = document.getElementById("closeSign_button");

if (signBtn) {
  signBtn.addEventListener("click", (e) => {
    e.preventDefault();

    signModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
}

if (closeSign) {
  closeSign.addEventListener("click", () => {
    signModal.style.display = "none";
    document.body.style.overflow = "auto";
  });
}

/* ===== اظهار كلمة السر ===== */

const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

if (toggle && password) {
  toggle.addEventListener("click", () => {

    if (password.type === "password") {
      password.type = "text";
      toggle.textContent = "🙈";
    } else {
      password.type = "password";
      toggle.textContent = "👁️";
    }

  });
}

/* ===== login ===== */
const loginForm = document.getElementById("loginForm");

if (loginForm) {

  loginForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const passwordValue = document.getElementById("password").value.trim();

    console.log("Email:", email);
    console.log("Password:", passwordValue);

    if (!email || !passwordValue) {
      alert("Please fill all fields");
      return;
    }

    alert("Login successful ✅");

  });

}
/* ================= CONTACT2 ================= */
const openBtn = document.getElementById("openContact");
const modal = document.querySelector(".contact-modal");
const closeBtn = document.querySelector(".close-btn");
if (openBtn && modal) {
  openBtn.onclick = function() {
    modal.style.display = "flex";
  }
}
if (closeBtn && modal) {
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }
}
window.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
/*=====================    عروضات     ===========================*/

const offersBtn = document.getElementById("offersBtn");
if (offersBtn) {
  offersBtn.addEventListener("click", function () {
    document.getElementById("shopSection").scrollIntoView({
      behavior: "smooth"
    });
  });
}
/*=====================    اكسسورات     ===========================*/
const hardwareBtn = document.getElementById("hardwareBtn");
if (hardwareBtn) {
  hardwareBtn.addEventListener("click", function () {
    document.getElementById("hardware").scrollIntoView({
      behavior: "smooth"
    });
  });
}
/*=====================    دورات برمجة     ===========================*/
const learningBtn = document.getElementById("learningBtn");

if (learningBtn) {
  learningBtn.addEventListener("click", function (e) {

    e.preventDefault();

    document.getElementById("learning").scrollIntoView({
      behavior: "smooth"
    });

  });
}
/*=====================    modal     ===========================*/
function openFullModal(el) {

  document.getElementById("fullModal").style.display = "flex";
document.body.classList.add("modal-open");
  const data = JSON.parse(el.dataset.product);

  const mainImage = document.getElementById("mainImage");
  const thumbsContainer = document.getElementById("thumbs");

  thumbsContainer.innerHTML = "";

  data.forEach((item, index) => {

    const img = document.createElement("img");
    img.src = item.img;

    img.onclick = () => {

      mainImage.src = item.img;

      document.getElementById("productTitle").innerHTML =
        item.title + "<br><span class='sub-title'>" + (item.subtitle || "") + "</span>";

      document.getElementById("productDesc").innerHTML = item.desc;

      document.getElementById("productPrice").innerText = item.price;

      document.getElementById("whatsappBtn").href =
        "https://wa.me/96181390018?text=مرحبا بدي استفسر عن " + item.title;
    };

    thumbsContainer.appendChild(img);

    if (index === 0) {

      mainImage.src = item.img;

      document.getElementById("productTitle").innerHTML =
        item.title + "<br><span class='sub-title'>" + (item.subtitle || "") + "</span>";

      document.getElementById("productDesc").innerHTML = item.desc;

      document.getElementById("productPrice").innerText = item.price;

      document.getElementById("whatsappBtn").href =
        "https://wa.me/96181390018?text=مرحبا بدي استفسر عن " + item.title;
    }
  });
}
function closeFullModal() {
  document.getElementById("fullModal").style.display = "none";
  document.body.classList.remove("modal-open");
}
/*===================== view all ===========================*/

const viewBtn = document.getElementById("viewAllBtn");
const cardsContainer = document.querySelector(".salse-cards");

if (viewBtn && cardsContainer) {

  viewBtn.addEventListener("click", () => {

    cardsContainer.classList.toggle("show-all");

    if(cardsContainer.classList.contains("show-all")){

      viewBtn.textContent = "إغلاق";

    } else {

      viewBtn.textContent = "المزيد";
    }

  });

}
/*=====================    خدماتنا    ===========================*/

const servicesBtn = document.getElementById("servicesBtn");
const servicesModal = document.getElementById("servicesModal");

if (servicesBtn && servicesModal) {
  servicesBtn.addEventListener("click", () => {
    servicesModal.style.display = "block";
    document.body.classList.add("modal-open");

  });

}

function closeServicesModal() {
  servicesModal.style.display = "none";
document.body.classList.remove("modal-open");
}

function goToSection(id) {
  document.getElementById("servicesModal").style.display = "none";
  document.body.classList.remove("modal-open");

  setTimeout(() => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  }, 200);
}


/*=====================    Course Modal    ===========================*/
function openCourseModal(el) {
  const data = JSON.parse(el.getAttribute("data-course"));

  const modal = document.getElementById("courseModal");
  const list = document.getElementById("courseList");

  modal.style.display = "flex";
  list.innerHTML = "";

  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "course-item";

    div.innerHTML = `
      <img src="${item.img}">
      <div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `;

    div.onclick = () => {
      window.open(item.video, "_blank");
    };

    list.appendChild(div);
  });
}

function closeCourseModal() {
  document.getElementById("courseModal").style.display = "none";
}

/*=================== sections-modal=================================*/
const galleryModal = document.getElementById("galleryModal");

const openGallery = document.getElementById("openGallery");

const closeGallery = document.querySelector(".gallery-close");

/* فتح */
if (openGallery && galleryModal) {

  openGallery.addEventListener("click", () => {

    galleryModal.style.display = "block";

    document.body.classList.add("modal-open");

  });

}

/* إغلاق */
if (closeGallery && galleryModal) {

  closeGallery.addEventListener("click", () => {

    galleryModal.style.display = "none";

    document.body.classList.remove("modal-open");

  });

}

/* إغلاق عند الضغط برا */
window.addEventListener("click", (e) => {

  if(e.target === galleryModal){

    galleryModal.style.display = "none";

    document.body.classList.remove("modal-open");
  }
});
/* ============================================== slides =============================================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function showSlide(index){

  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {

  current++;

  if(current >= slides.length){
    current = 0;
  }

  showSlide(current);

});

prevBtn.addEventListener("click", () => {

  current--;

  if(current < 0){
    current = slides.length - 1;
  }

  showSlide(current);

});

/* autoplay */

setInterval(() => {

  current++;

  if(current >= slides.length){
    current = 0;
  }

  showSlide(current);

}, 3000);

/* =================  رأس صفحة للتلفون ================= */
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
 menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("show");
  document.body.classList.toggle("modal-open");

});
}
/* يسكر إذا كبس برا المنيو */
if (menuToggle && mobileMenu) {

  document.addEventListener("click", (e) => {

    if (
      !mobileMenu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
    mobileMenu.classList.remove("show");
document.body.classList.remove("modal-open");
    }
  });
}
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    document.body.classList.remove("modal-open");
  });
});
const menuLinks = document.querySelectorAll(".header-links a, .header-links button");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    document.body.classList.remove("modal-open");
  });
});
