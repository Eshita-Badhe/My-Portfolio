
  //Sparkling stars background
    const numStars = 200;
    const container = document.querySelector('.star-container');

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.width = star.style.height = `${Math.random() * 2 + 1}px`;
        container.appendChild(star);
    }

    //Scrolling effect to navbar
    const navbar = document.getElementById('scroll-navbar');
    const profileTop = document.querySelector('.top');
    navbar.style.display = 'none';
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 200) {
        navbar.style.display = 'flex';
        profileTop.style.opacity = '0';
        profileTop.style.pointerEvents = 'none';
        } else {
        navbar.style.display = 'none';
        profileTop.style.opacity = '1';
        profileTop.style.pointerEvents = 'auto';
        }
    });

    //Scroll to top
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
        } else {
        scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.onclick = function () {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };

//Project Falsh Cards
const projects = [
  { 
    title: "📘'Just to Read' Online Book Store UI",
    desc: "'Just to Read' is a static website of a online book store developed as part of my Web Page Design (WPD) course. The site is designed with simplicity and user experience in mind, providing a seamless reading interface.",
    link: ["https://just-to-read.netlify.app/"], link_text: ["Live Demo"]
  },
  
  { 
    title: "🧩Quizee!",
    desc: "Quizee ! is a dynamic online quiz platform where users can test their knowledge across multiple categories. It is a simple, interactive web application built using HTML, CSS, and JavaScript. This project aims to provide an engaging quiz experience and can be easily customized to add more quiz categories or questions.",
    link: ["https://quizeeee.netlify.app/"] , link_text: ["Live Demo"]
  },
  { 
    title: "🎙️ Virtual News Reporter",
    desc: "Virtual News Reporter is an AI-based voice-controlled system that delivers personalized, real-time news summaries. Built with HTML, CSS, JS, Python, Gemini AI, GNewsAPI, and Google TTS/STT, it lets users select categories, listen to updates, and interact with the AI, making news more engaging and accessible.",
    link: ["https://github.com/Eshita-Badhe/Virtual-News_Reporter"] , link_text: ["GitHub Repository"]
  },
  { 
    title: "🛒 BudgetBuddy - Grocery Budget Optimizer (GBO)",
    desc: "A full-stack web application that helps users optimize their grocery list based on a given budget, using a greedy algorithm approach.",
    link: ["https://budgetbuddy-grocery-budget-optimizer.onrender.com/"] , link_text: ["Live Demo"]
  },
  { 
    title: "✌️ Sign Language Interpreter",
    desc: "Sign Language Interpreter is an AI-powered system that translates hand gestures into natural language text and speech. The app spports webcam and file upload inputs with userfriendly GUI, making sign language communication more accessible and interactive.",
    link: ["https://github.com/Eshita-Badhe/Sign-Language-Interpreter"] , link_text: ["GitHub Repository"]
  },
];

let currentIndex = 2;
const carousel = document.getElementById("carousel");

// Initial creation of all cards
projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card-header">${project.title}</div>
    <div class="card-image"></div>
    <p class="card-desc">${project.desc}</p>
    <a href="${project.link}" class="card-link">${project.link_text}</a>
  `;
  carousel.appendChild(card);
});

const cards = document.querySelectorAll(".card");

function updateCarousel() {
  cards.forEach((card, index) => {
    const diff = index - currentIndex;
    card.style.pointerEvents = 'none';
  if (window.matchMedia("(max-width: 768px)").matches) {
  // Mobile view logic here
      card.style.transform = `translateX(0) scale(1.1)`;
      card.style.zIndex = 3;
      card.style.opacity = 1;
      card.style.filter = 'none';
      card.style.pointerEvents = 'auto';
  }
  else{
    if (diff === 0) {
      card.style.transform = `translateX(0) scale(1.1)`;
      card.style.zIndex = 3;
      card.style.opacity = 1;
      card.style.filter = 'none';
      card.style.boxShadow = '0 0 25px cyan';
      card.style.pointerEvents = 'auto';
    } else if (diff > 0) {
      card.style.transform = `translateX(${120 * diff}px) scale(${1 - 0.2 * diff}) perspective(1000px) rotateY(-20deg)`;
      card.style.zIndex = -diff;
      card.style.opacity = diff > 2 ? 0 : 0.6;
      card.style.filter = 'blur(5px)';
      card.style.boxShadow = 'none';
    } else {
      const absDiff = Math.abs(diff);
      card.style.transform = `translateX(${-120 * absDiff}px) scale(${1 - 0.2 * absDiff}) perspective(1000px) rotateY(20deg)`;
      card.style.zIndex = -absDiff;
      card.style.opacity = absDiff > 2 ? 0 : 0.6;
      card.style.filter = 'blur(5px)';
      card.style.boxShadow = 'none';
    }
  }
  });
}

document.querySelector(".arrow.left").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

document.querySelector(".arrow.right").addEventListener("click", () => {
  if (currentIndex < projects.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

updateCarousel();


//Education timeline
  (() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const contentBox = document.querySelector('.content-box');
    const progressLine = document.querySelector('.timeline-line-progress');
    const dottedLine = document.querySelector('.timeline-line-dotted');

    // Content descriptions for each step
    const contentData = [
  {
    title: "School",
    description: "School: Spicer Higher Secondary School \nDuration: 2010–2023"
  },
  {
    title: "10th",
    description: "School: Spicer Higher Secondary School \nBoard Examination: ICSE - 2023 \nMarks: 95.2%"
  },
  {
    title: "Diploma",
    description: "College: Government Polytechnic, Pune \nBranch: Computer Science \nDuration: 2023–2026  \nCurrent year: Third"
  }
];


    let activeIndex = 0;

    // Calculate progress line width in percentages based on active index
    function calculateProgressWidth(index) {
      // The line extends between 3 points, segments = 2
      if (index <= 0) return 0;
      if (index >= timelineItems.length - 1) return 100;
      // We have 2 segments, each segment is 50%
      return (index) * (100 / (timelineItems.length - 1));
    }

    // Animate progress line on timeline move
    function animateProgressLine(newIndex) {
      const widthPercent = calculateProgressWidth(newIndex);
      progressLine.style.width = widthPercent + '%';
    }

    function updateTimeline(newIndex) {
      if (newIndex < 0 || newIndex >= timelineItems.length) return;
      activeIndex = newIndex;

      timelineItems.forEach((item, idx) => {
        const circle = item.querySelector('.circle');
        const textSpan = circle.querySelector('.circle-text');
        if (idx === activeIndex) {
          item.classList.add('active');
          circle.classList.add('active-ring');
          textSpan.style.color = '#2563eb';
          item.setAttribute('tabindex', '0');
          item.setAttribute('aria-current', 'step');
          item.setAttribute('aria-label', 'Timeline step ' + contentData[idx].title + ', active');
        } else {
          item.classList.remove('active');
          circle.classList.remove('active-ring');
          textSpan.style.color = 'transparent';
          item.setAttribute('tabindex', '-1');
          item.removeAttribute('aria-current');
          item.setAttribute('aria-label', 'Timeline step ' + contentData[idx].title);
        }
      });

      // Update progress line visually
      animateProgressLine(activeIndex);

      // Update content box text
      contentBox.textContent = contentData[activeIndex].description;

      // Enable/disable buttons
      prevBtn.disabled = activeIndex === 0;
      nextBtn.disabled = activeIndex === timelineItems.length -1;

      // Focus active timeline item for accessibility
      timelineItems[activeIndex].focus();
    }

    prevBtn.addEventListener('click', () => {
      updateTimeline(activeIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
      updateTimeline(activeIndex + 1);
    });

    // Keyboard navigation on timeline items (left/right arrows)
    timelineItems.forEach((item, idx) => {
      item.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          const next = idx + 1 < timelineItems.length ? idx + 1 : idx;
          updateTimeline(next);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          const prev = idx - 1 >= 0 ? idx - 1 : idx;
          updateTimeline(prev);
        }
      });
      item.addEventListener('click', () => {
        updateTimeline(idx);
      });
    });

    // Focus active timeline item for accessibility
    updateTimeline(activeIndex);
    window.scrollTo(0, 0); // Add this line
  })();

//Achievement Section
const notices = [  
  {
    img: "images/speech.jpg",
    text: "3rd Prize in Speech Competition on Temperance at School" 
  },
  {
    img: "images/Web-Wizard-3rd-prize.jpg",
    text: "3rd price \nWeb Wizard"
  },
  { 
    img: "images/president-appointment.jpg", 
    text: "Selected as President\nAssociation of Students, Computer Dept." 
  },
  { 
    img: "images/iei-paper.jpg", 
    text: "Research Paper Published in IEI Annual Technical Journal ---\n\"Virtual News Reporter: A Personalized News Companion\"" },  
  {
    img: "images/speech.jpg",
    text: "3rd Prize in Speech Competition on Temperance at School" 
  },
  {
    img: "images/Web-Wizard-3rd-prize.jpg",
    text: "3rd price \nWeb Wizard"
  },
  { 
    img: "images/president-appointment.jpg", 
    text: "Selected as President\nAssociation of Students, Computer Dept." 
  },
  { 
    img: "images/iei-paper.jpg", 
    text: "Research Paper Published in IEI Annual Technical Journal ---\n\"Virtual News Reporter: A Personalized News Companion\"" }
  
  // Add more notices as needed...
];

const board = document.getElementById("board");

notices.forEach(notice => {
  
  const note = document.createElement("div");
  note.className = "note";
  
  const pin = document.createElement("div");
  pin.innerHTML=`<i class="fa-solid fa-circle"></i>`;

  // Random slight rotation
  const angle = (Math.random() * 4 - 2).toFixed(2) + "deg";
  note.style.setProperty("--rotate", angle);

  const img = document.createElement("img");
  img.src = notice.img;

  const text = document.createElement("div");
  text.className = "note-text";
  text.textContent = notice.text;

  const content = document.createElement('div');
  content.className="note-content";

  
  note.appendChild(pin);
  note.appendChild(content);
  content.appendChild(img);
  content.appendChild(text);
  board.appendChild(note);
});


//Skill Section
const data = [
  { type: "skill", name: "<i class='fa-brands fa-python'></i> Python ", level: 80 },
  { type: "skill", name: "<i class='fa-solid fa-diagram-project'></i>  OOP", level: 90 },
  { type: "skill", name: "<i class='fa-brands fa-html5'></i> HTML", level: 90 },
  { type: "skill", name: "<i class='fa-brands fa-css3-alt'></i> CSS", level: 90 },
  { type: "skill", name: "<i class='fa-brands fa-js'></i> JS", level: 80 },
  { type: "skill", name: "<i class='fa-brands fa-react'></i> React", level: 80 },
  { type: "skill", name: "<i class='fa-solid fa-database'></i> MySQL", level: 90 },
  { type: "skill", name: "<i class='fa-solid fa-network-wired'></i> DSA", level: 40 },

  { type: "cert", name: "SQL Course", img: "images/sql.png" },
  { type: "cert", name: "Python Course", img: "images/py.jpg" },
  { type: "cert", name: "Prompt Engineering", img: "images/promptengg.jpg" }
];

function renderItems() {
  const container = document.getElementById("grid");
  container.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("skill-card");
    card.dataset.type = item.type;

    if (item.type === "skill") {
      card.classList.add("skill-box");
      card.innerHTML = `
        <h3>${item.name}</h3>
        <div class="skill-bar">
          <div class="skill-fill" style="width: ${item.level}%"></div>
        </div>
      `;
    } else {
      card.classList.add("certificate-box");
      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}" />
        <p>${item.name}</p>
      `;
      card.onclick = () => openModal(item.img);
    }

    container.appendChild(card);
  });
}

function filterItems(type) {
  const cards = document.querySelectorAll(".skill-card");
  cards.forEach(card => {
    const match = type === "all" || card.dataset.type === type;
    card.style.display = match ? "block" : "none";
  });
}

function openModal(src) {
  const modal = document.getElementById("modal");
  document.getElementById("modal-img").src = src;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

renderItems();

