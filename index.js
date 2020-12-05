const projectNames = {
  1: {
    name: "What are ADUs?",
    description: "An ADU is a secondary housing unit that is located on a single-family residential lot, with no more than one ADU and a possible JR A allowed per lot. This affordable type of housing opens up the possibility for a wide range of different options that can both enhance the living space for the homeowner and offer additional monthly income for them depending on how the ADU is used. ADUs cannot be sold independent from the main residence, though they can be rented. This characteristic creates many opportunities for ADU benefits."
  },
  2: {
    name: "What are common ADU characteristics?",
    description: "ADUs come in a variety of forms, as they can be stand-alone structures, attached to the main residence, or located in a converted garage or basement. ADUs are located adjacent to the primary housing unit and are significantly smaller. ADU benefits include providing an affordable form of housing, as codes mandate that they are equipped with an appropriate kitchen, bathroom, and living space. These specific characteristics help distinguish ADUs as a distinct form of housing. Many people choose to undergo a garage conversion or ADU project due to the vast amount of benefits it brings to the property owner. "
  },
  3: {
    name: "How common are ADUs?",
    description: "ADUs are very popular forms of housing in populated areas that many tourists gravitate towards, making ADUs very popular in The San Francisco Bay Area. Currently, there are more than 13 million ADUs registered in the world, making this form of housing extremely popular and beneficial. Many people choose to work with existing space, such as garage conversion projects, while others construct a new stand-alone structure to have a fully permitted ADU. As living needs have changed over the decades, many people are now seeking more flexible, affordable, and environmentally-friendly forms of living, with ADUs satisfying all three needs. "
  },
  4: {
    name: "Economic Benefits",
    description: "ADUs are an extremely advantageous form of living because they offer affordable living options in centrally located neighborhoods. Rather than expand infrastructure, ADUs utilize the existing areas to accommodate housing without over-developing the areas. Since ADUs can be rented out, they offer the opportunity for different socio-economic classes to afford housing in central areas, diversifying neighborhoods, and creating new opportunities while curbing over-development. As more and more homes in America become too large for small families and independent living, many prefer the compact and cost-effective space that ADUs offer."
  },
  5: {
    name: "Financial Benefits",
    description: "Many choose to undertake garage conversion and similar projects to open the possibility for passive income. Listing ADUs as residences, or putting them online for short-term stays, allows for flexibility when deciding what to do with your space. Homeowners can use their ADU as needed and rent it out as they feel necessary, using the money to pay off the cost of the initial project. The great news is that not only can renting out an ADU cover the project cost, but the inclusion of an ADU increases the value of the home. When properly permitted, ADUs offer a rise in property value, making them a trusted investment."
  },
  6: {
    name: "ADU Possibilities",
    description: "While ADU benefits include the possibility of receiving monthly income through renting out space, others use their ADUs to house family members or friends. This possibility is especially important if you have a sick relative or friend who is down on their luck, as ADUs create separate but adjacent space for loved ones to reside. ADUs and converted garages can also be used for a variety of personal advantages for the homeowner. For example, ADUs can be used for home offices, family rooms, game rooms, additional bedrooms, children’s playrooms, and more. The great part about ADUs is how flexible they are, with the usage of the additional living space able to grow and transform with the homeowner’s needs and wants."
  },
}

document.addEventListener("DOMContentLoaded", () => {
  let slides = document.getElementsByClassName("mySlides");
  slides[0].style.display = "block";
  document.getElementById("current-slide-info").innerHTML = `
    <span>
      <h2>What are ADUs?</h2>
    </span>
  `;
  document.getElementById("current-slide-description").innerHTML = `
    <p>${projectNames[1].description}</p>
  `;
  document.addEventListener("keydown", (e) => {
    // left: 37, right: 39
    if (e.keyCode === 37) {
      plusSlides(-1);
    } else if (e.keyCode === 39) {
      plusSlides(1);
    }
  });
})
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}




function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  if (slides[slideIndex-1]) {
    slides[slideIndex - 1].style.display = "block";

    let inner = `<span>
      <h2>${projectNames[slideIndex].name.toUpperCase()}</h2> `;
    document.getElementById("current-slide-info").innerHTML = inner;

    document.getElementById("current-slide-description").innerHTML = `
      <p>${projectNames[slideIndex].description}</p>
    `;
  }
}