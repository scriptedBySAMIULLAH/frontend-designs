document.addEventListener("DOMContentLoaded", function () {
  let arr;
  let msg1 = "Market Competitive salary";
  let msg2 = "on your desired domain";
  let msg3 = "gains hands-on experience";
  let i = 0;
  let message = [msg1, msg2, msg3];

  function typeWriterEffect() {
    arr = Array.from(message[i]);

    i === message.length - 1 ? (i = 0) : i++;

    let targetElement = document.getElementById("typewriter");

    // Clear previous text
    targetElement.textContent = "";

    // Typing Effect
    arr.forEach((ele, index) => {
      setTimeout(() => {
        targetElement.textContent += ele;
        if (index === arr.length - 1) {
          // After typing finishes
          setTimeout(() => {
            deleteText();
          }, 1000); // Wait before deleting
        }
      }, index * 80);
    });

    function deleteText() {
      arr.reverse().forEach((ele, index) => {
        setTimeout(() => {
          targetElement.textContent = targetElement.textContent.slice(0, -1);
          if (index === arr.length - 1) {
            setTimeout(() => {
              arr.reverse();
              typeWriterEffect();
            }, 500);
          }
        }, index * 80);
      });
    }
  }

  typeWriterEffect(); // Start the effect
});
