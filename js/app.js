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

const MAIN_HEADER_NAV_CLASS_NAME = {
  ITEM_LINK: 'main-header-nav-item-link',
  ACTIVE_ITEM_LINK: 'main-header-nav-item-link--active',
}

document.addEventListener("DOMContentLoaded", function(_event) {
  const navbar = document.getElementById("main-header-nav-items-list");
  const navItemLinks = document.getElementsByClassName(MAIN_HEADER_NAV_CLASS_NAME.ITEM_LINK);

  function generateNavbarItem(navItem, index) {
    const item = document.createElement("li");
    item.innerHTML = `<a href="#section${index + 1}"
      class="${MAIN_HEADER_NAV_CLASS_NAME.ITEM_LINK}"
    >
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

  function handleNavItemClick(elem) {
    if (elem) {
      removeActiveNavItems(elem);
      elem.classList.add(MAIN_HEADER_NAV_CLASS_NAME.ACTIVE_ITEM_LINK);
    }
  }

  function removeActiveNavItems() {
    for(let elem of navItemLinks) {
      elem.classList.remove(MAIN_HEADER_NAV_CLASS_NAME.ACTIVE_ITEM_LINK)
    }
  }
  
  function bindMainNavItemLinkClick() {
    for(let elem of navItemLinks) {
      elem.addEventListener('click', () => {
        handleNavItemClick(elem);
      });
    }
  }

  gernerateNavbar();
  generateSectionHeader();
  bindMainNavItemLinkClick();
});

