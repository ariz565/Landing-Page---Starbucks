  // Animation for header
  gsap.from("header", { opacity: 0, duration: 1, delay: 0.5 });

  // Animation for Starbucks image
  gsap.from(".starbucks", { opacity: 0, y: 50, duration: 1, delay: 1 });

  // Animation for other elements
  gsap.from(".left-side h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.2,
  });
  gsap.from(".left-side p", { opacity: 0, y: 50, duration: 1, delay: 1.4 });
  gsap.from(".left-side a", { opacity: 0, y: 50, duration: 1, delay: 1.6 });
  gsap.from(".box img", { opacity: 0, y: 50, duration: 1, delay: 1.8 });

  // Animation for thumbnail images
  const thumbnails = gsap.utils.toArray(".thumb img");
  thumbnails.forEach((thumbnail, index) => {
    gsap.from(thumbnail, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 2 + index * 0.2,
    });
  });
  const circle = document.querySelector(".circle");
  const green = document.querySelector(".green");

  const imgSlider = (fileName) => {
    document.querySelector(".starbucks").src = fileName;
    if (fileName === "img2.png") {
      circle.style.backgroundColor = "#d89b9e";
      green.style.color = "#d89b9e";
    } else if (fileName === "img3.png") {
      circle.style.backgroundColor = "#f3bee5";
      green.style.color = "#f3bee5";
    } else {
      circle.style.backgroundColor = "#017143";
      green.style.color = "#017143";
    }
  };