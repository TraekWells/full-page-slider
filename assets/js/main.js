// Store all of the information about the planets insize of an array. Trying something new and maybe this will save load time? We'll see
const planets = [
  {
    name: "The Sun",
    description:
      "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers (864,000 miles), or 109 times that of Earth, and its mass is about 330,000 times that of Earth. It accounts for about 99.86% of the total mass of the Solar System.",
    image:
      "https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede-2880x1620.jpg",
    color: "#9D2006"
  },
  {
    name: "Mercury",
    description:
      "Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 87.97 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods. Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and never exceeds 28° away from the Sun when viewed from Earth. This proximity to the Sun means the planet can only be seen near the western or eastern horizon during the early evening or early morning. At this time it may appear as a bright star-like object, but is often far more difficult to observe than Venus. The planet telescopically displays the complete range of phases, similar to Venus and the Moon, as it moves in its inner orbit relative to Earth, which reoccurs over the so-called synodic period approximately every 116 days.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg",
    color: "#4D4D4B"
  },
  {
    name: "Venus",
    description:
      "Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period (243 Earth days) of any planet in the Solar System and rotates in the opposite direction to most other planets (meaning the Sun rises in the west and sets in the east). It does not have any natural satellites. It is named after the Roman goddess of love and beauty. It is the second-brightest natural object in the night sky after the Moon, reaching an apparent magnitude of −4.6 – bright enough to cast shadows at night and, rarely, visible to the naked eye in broad daylight. Orbiting within Earth's orbit, Venus is an inferior planet and never appears to venture far from the Sun; its maximum angular distance from the Sun (elongation) is 47.8°.",
    image:
      "https://planetary.s3.amazonaws.com/assets/images/2-venus/20180113_uvi_20160517_201715_365_l2b_v10_PseudoRGB.jpg",
    color: "#968371"
  },
  {
    name: "Earth",
    description:
      "Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago. Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. Earth orbits around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times. Earth's axis of rotation is tilted with respect to its orbital plane, producing seasons on Earth. The gravitational interaction between Earth and the Moon causes tides, stabilizes Earth's orientation on its axis and gradually slows its rotation. Earth is the densest planet in the Solar System and the largest and most massive of the four terrestrial planets.",
    image:
      "https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg",
    color: "#182D73"
  },
  {
    name: "Mars",
    description:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the 'Red Planet' because the iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    color: "#745846"
  },
  {
    name: "Jupiter",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter and Saturn are gas giants; the other two giant planets, Uranus and Neptune, are ice giants. Jupiter has been known to astronomers since antiquity. It is named after the Roman god Jupiter. When viewed from Earth, Jupiter can reach an apparent magnitude of −2.94, bright enough for its reflected light to cast shadows, and making it on average the third-brightest natural object in the night sky after the Moon and Venus.",
    image: "http://cdn.sci-news.com/images/enlarge3/image_4461e-Jupiter.jpg",
    color: "#B26839"
  },
  {
    name: "Saturn",
    description:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth the average density of Earth, but with its larger volume Saturn is over 95 times more massive. Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god's sickle. Saturn's interior is probably composed of a core of iron–nickel and rock (silicon and oxygen compounds). This core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/2880px-Saturn_during_Equinox.jpg",
    color: "#878564"
  },
  {
    name: "Uranus",
    description:
      "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as 'ice giants' to distinguish them from the gas giants. Uranus' atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more 'ices' such as water, ammonia, and methane, along with traces of other hydrocarbons. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
    color: "#7A9EA4"
  },
  {
    name: "Neptune",
    description:
      "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/1920px-Neptune_Full.jpg",
    color: "#293379"
  }
];

// Select all of the DOM elements and save them as variables
const planetImage = document.querySelector(".slider__image");
const planetTitle = document.querySelector(".slider__content-title");
const planetDescription = document.querySelector(
  ".slider__content-description"
);
const previousPlanet = document.querySelector(".slider__controls-left a");
const nextPlanet = document.querySelector(".slider__controls-right a");
const previousPlanetName = document.querySelector(
  ".slider__controls-previous-planet"
);
const nextPlanetName = document.querySelector(".slider__controls-next-planet");
const planetIndicatorContainer = document.querySelector(".slider__indicators");
const sliderContent = document.querySelector(".slider__content");
let planetIndicators;
let currentSlide = 0;

// Create a function that loads the page's initial content from the planets data array
const init = function() {
  planetImage.style.backgroundImage = `url(${planets[0].image})`;
  planetTitle.textContent = planets[0].name;
  planetTitle.style.color = `${planets[0].color}`;
  planetDescription.textContent = planets[0].description;
  previousPlanet.style.display = "none";
  nextPlanetName.textContent = planets[1].name;
  planets.forEach(function(planet, index) {
    const span = document.createElement("span");
    if (index === 0) {
      span.classList.add("active");
      span.style.backgroundColor = `${planets[0].color}`;
    }
    planetIndicatorContainer.appendChild(span);
  });
  planetIndicators = Array.from(planetIndicatorContainer.children);
};

// Function to handle updating the UI when a user clicks on either the arrows or the indicators
const updateUI = function(targetSlide, direction) {
  // Update the main header and description
  planetTitle.style.animation = "none";
  planetTitle.textContent = planets[targetSlide].name;
  planetTitle.style.color = `${planets[targetSlide].color}`;
  planetImage.style.backgroundImage = `url(${planets[targetSlide].image})`;
  planetDescription.style.animation = "none";
  planetDescription.textContent = planets[targetSlide].description;

  // Add the FromRight animation if the next button is clicked
  if (direction === "next") {
    planetTitle.style.animation = "fadeInFromRight linear forwards .25s";
    planetDescription.style.animation = "fadeInFromRight linear forwards .25s";
  }

  // Add the FromLeft animation if the previous button is clicked
  if (direction === "previous") {
    planetTitle.style.animation = "fadeInFromLeft linear forwards .25s";
    planetDescription.style.animation = "fadeInFromLeft linear forwards .25s";
  }

  // Setting a timeout function to remove the animation just after the animation finishes to allow for the next slide to recieve the animation
  setTimeout(function() {
    planetTitle.style.animation = "";
    planetDescription.style.animation = "";
  }, 350);
};

// Function to handle updating the next and previous arrows
const updateControls = function(targetSlide) {
  if (targetSlide === planets.length - 1) {
    nextPlanet.style.display = "none";
  } else {
    nextPlanet.style.display = "flex";
    nextPlanetName.textContent = planets[targetSlide + 1].name;
  }
  if (targetSlide === 0) {
    previousPlanet.style.display = "none";
  } else {
    previousPlanet.style.display = "flex";
    previousPlanetName.textContent = planets[targetSlide - 1].name;
  }
};

// Function to handle updating the planet indicators with the active planet
const updateIndicators = function(targetSlide) {
  planetIndicators.forEach(function(indicator, index) {
    indicator.classList.remove("active");
    indicator.style.backgroundColor = "#D9D9D9";
    if (index === targetSlide) {
      indicator.classList.add("active");
      indicator.style.backgroundColor = `${planets[targetSlide].color}`;
    }
  });
};

// Create a function to move to the next slide
const nextSlide = function() {
  let targetSlide = currentSlide + 1;
  updateUI(targetSlide, "next");
  updateControls(targetSlide);
  updateIndicators(targetSlide);
  currentSlide = targetSlide;
};

// Create a function to move to the next slide
const previousSlide = function() {
  let targetSlide = currentSlide - 1;
  updateUI(targetSlide, "previous");
  updateControls(targetSlide);
  updateIndicators(targetSlide);
  currentSlide = targetSlide;
};

// Create a function to move to the target slide
const moveToTargetSlide = function(e) {
  const targetPlanet = e.target.closest("span");
  if (!targetPlanet) {
    return;
  }
  let targetSlide = planetIndicators.indexOf(targetPlanet);
  updateUI(targetSlide);
  updateControls(targetSlide);
  if (targetSlide > currentSlide) {
    planetTitle.style.animation = "fadeInFromRight linear forwards .25s";
    planetDescription.style.animation = "fadeInFromRight linear forwards .25s";
  } else {
    planetTitle.style.animation = "fadeInFromLeft linear forwards .25s";
    planetDescription.style.animation = "fadeInFromLeft linear forwards .25s";
  }
  updateIndicators(targetSlide);
  currentSlide = targetSlide;
};

const hammer = new Hammer(sliderContent);

hammer.on("swipeleft", nextSlide);
hammer.on("swiperight", previousSlide);

// All event listeners
window.addEventListener("DOMContentLoaded", init);
previousPlanet.addEventListener("click", previousSlide);
nextPlanet.addEventListener("click", nextSlide);
planetIndicatorContainer.addEventListener("click", moveToTargetSlide);
