// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*set up for the navigation bar */
const NAV_BAR_CONFIG = {
  SECTION_1: 'Section 1',
  SECTION_2: 'Section 2',
  SECTION_3: 'Section 3',
  SECTION_4: 'Section 4',
};

const NAV_BARS = [
  NAV_BAR_CONFIG.SECTION_1,
  NAV_BAR_CONFIG.SECTION_2,
  NAV_BAR_CONFIG.SECTION_3,
  NAV_BAR_CONFIG.SECTION_4,
];

document.addEventListener("DOMContentLoaded", function(_event) {
  const navbar = document.getElementById("main-header-nav-items-list");

  function generateNavbarItem(navItem, index) {
    const item = document.createElement("li");
    item.innerHTML = `<a href="#section${index + 1}">
      ${navItem}
    </a>`;
    return item;
  }

  /*set up for header bar */
  function gernerateNavbar() {  
    NAV_BARS.forEach((navItem, index) => {
      navbar.appendChild(generateNavbarItem(navItem, index)
      )
    });
  }

  function generateSectionHeader() {
    NAV_BARS.forEach((navItem, index) => {
      const header = document.getElementById(`section${index + 1}-header`);
      if (header) {
        header.innerHTML = navItem.toUpperCase();
      }
    });
  }

  gernerateNavbar();
  generateSectionHeader();
});

