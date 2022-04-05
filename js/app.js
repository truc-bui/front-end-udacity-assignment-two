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
  const sectionWrappers = document.getElementsByClassName('section-wrapper');

  function generateNavbarItem(navItem, targetId) {
    const item = document.createElement("li");
    item.innerHTML = `<a href="#${targetId}"
      class="${MAIN_HEADER_NAV_CLASS_NAME.ITEM_LINK}"
      id="main-header-nav-item-${targetId}"
    >
      ${navItem}
    </a>`;
    return item;
  }

  /*set up for header bar */
  function gernerateNavbar() {
    for (let sectionWrapper of sectionWrappers) {
      if (sectionWrapper) {
        navbar.appendChild(
          generateNavbarItem(
            sectionWrapper.firstElementChild.innerText,
            sectionWrapper.id
          )
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

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function bindSectionWrapperActive() {
    let found = false;
      let sectionWrapper;
      for(let index = 0; index < sectionWrappers.length; index += 1) {
        sectionWrapper = sectionWrappers[index];
        sectionWrapper.classList.remove('section-wrapper--active');
        if(!found && isInViewport(sectionWrapper)) {
          sectionWrapper.classList.add('section-wrapper--active');
          // bind active class to navbar item:
          handleNavItemClick(document.getElementById(`main-header-nav-item-${sectionWrapper.id}`));
          found = true;
        }
      }
  }

  function handleScrollingEvent() {
    document.addEventListener('scroll', function(_e) {
        bindSectionWrapperActive();
    });
  }
 
  gernerateNavbar();
  bindSectionWrapperActive();
  bindMainNavItemLinkClick();
  handleScrollingEvent();
});