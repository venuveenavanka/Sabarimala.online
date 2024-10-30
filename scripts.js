document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight) {
        section.classList.add("fadeIn");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("bgVideo");

  // Adjust playback rate based on the original video length and desired total playtime
  const originalDuration = 10; // Replace with actual duration of your video in seconds
  const targetDuration = 50; // Total desired playtime in seconds

  // Calculate playback rate to stretch video to target duration
  video.playbackRate = originalDuration / targetDuration;

  // Start playback (in case autoplay is restricted)
  video.play().catch((error) => {
    console.error("Autoplay failed:", error);
  });
});

function toggleMenu() {
  const menu = document.querySelector(".navbar-menu");
  menu.classList.toggle("show");
}

// Close menu when a link is clicked
document.querySelectorAll(".navbar-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".navbar-menu");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  });
});
