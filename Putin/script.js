
const weddingDate = new Date("November 28, 2025 00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".timer").innerHTML = "<h1>❤️ Today is the Day ❤️<h1>";
  }
}, 1000);

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

  const audio = document.getElementById("bg-music");

  // Define the section of the song you want to play
  const startTime = 20;   // seconds (start at 0:15)
  const endTime = 300;     // seconds (stop at 1:15)

  // Function to play only the selected part
  function playMusicSection() {
    audio.currentTime = startTime;
    audio.play();

    // Stop the audio automatically at endTime
    const stopInterval = setInterval(() => {
      if (audio.currentTime >= endTime) {
        audio.pause();
        clearInterval(stopInterval);
      }
    }, 500);
  }

  // Example: play when scroll button is clicked
  document.querySelector(".scroll-btn").addEventListener("click", playMusicSection);





