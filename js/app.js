// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//set up for the active class when clicking the selected section 
const MAIN_HEADER_NAV_CLASS_NAME = {
  ITEM_LINK: 'main-header-nav-item-link',
  ACTIVE_ITEM_LINK: 'main-header-nav-item-link--active',
}

//even handling
document.addEventListener("DOMContentLoaded", function (_event) {
  const navbar = document.getElementById('main-header-nav-items-list');
  const navItemLinks = document.getElementsByClassName(MAIN_HEADER_NAV_CLASS_NAME.ITEM_LINK);
  const sectionHeaders = document.getElementsByClassName('section-header');

  function generateNavbarItem(navItem, targetId) {
    const item = document.createElement("li");
    item.innerHTML = `<a href="#${targetId}"
      class="${MAIN_HEADER_NAV_CLASS_NAME.ITEM_LINK}"
    >
      ${navItem}
    </a>`;
    return item;
  }

  /*set up for header bar */
  function gernerateNavbar() {
    for (let sectionHeader of sectionHeaders) {
      if (sectionHeader) {
        navbar.appendChild(
          generateNavbarItem(sectionHeader.innerText, sectionHeader.id)
        );
      }
    }
  }

  //event to remove exist active class before adding other active class into the current class
  function handleNavItemClick(elem) {
    if (elem) {
      removeActiveNavItems(elem);
      elem.classList.add(MAIN_HEADER_NAV_CLASS_NAME.ACTIVE_ITEM_LINK);
    }
  }
  //remove active class (use before moving to other active class)
  function removeActiveNavItems() {
    for (let elem of navItemLinks) {
      elem.classList.remove(MAIN_HEADER_NAV_CLASS_NAME.ACTIVE_ITEM_LINK)
    }
  }
  //when click into the navbar
  function bindMainNavItemLinkClick() {
    for (let elem of navItemLinks) {
      elem.addEventListener('click', () => {
        handleNavItemClick(elem);
      });
    }
  }

  gernerateNavbar();
  bindMainNavItemLinkClick();
});