$(function () {
    // const swiper = new Swiper('.myswiper', {
    //     parallax: true,
    //     pagination: {
    //         el: '.swiper-pagination',
    //     },

    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     autoplay: {
    //         delay: 2000, // Set the delay between slides in milliseconds
    //         disableOnInteraction: false, // Allow autoplay to continue even when user interacts with the slider
    //     },
    //     speed: 2000,
    //     loop: true,
    //     loopAdditionalSlides: 1,
    //     slidesPerView: 1, // Set slidesPerView to 1
    //     spaceBetween: 0,
    //     effect: 'fade', // Set the effect to 'fade'
    //     fadeEffect: {
    //         crossFade: true, // Enable cross-fade effect
    //     },
    // });
    // var swiperContainer = document.querySelector('.myswiper');

    // swiperContainer.addEventListener('mouseenter', function () {
    //     swiper.autoplay.stop();
    // });

    // swiperContainer.addEventListener('mouseleave', function () {
    //     swiper.autoplay.start();
    // });
    // projectswiper

    /* ===========================
             wow 
       =========================== */
    function wowActivator() {
        wow = new WOW({
            offset: 0
        });
        wow.init();
    }
    wowActivator();
    $('.show-search').click(function () {
        $('.control-search').toggle(500);

    });
    $('.my-special-link').click(function () {
        $('.special-dropdown ').toggle(500)
    })
    $("#open-menu").click(function () {
        var isExpanded = $(this).attr('aria-expanded');
        $(this).find('.fa-bars, .fa-bars').toggleClass('all');
        if (isExpanded === 'false') {
            $(this)
                .find('[data-fa-i2svg]')
                .toggleClass('fa-xmark')
                .toggleClass('fa-bars');
            $('body').css('position', 'static');
        } else {
            $(this)
                .find('[data-fa-i2svg]')
                .toggleClass('fa-bars')
                .toggleClass('fa-xmark');
            $('body').css({
                'position': 'fixed',
                'width': '100%',
                'height': '100%'
            });
        }
    })
    // Get the dropdown items
    const dropdownItems = document.querySelectorAll('.language-drop .dropdown-menu .dropdown-item');

    // Add click event listener to each dropdown item
    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            // Get the selected item's text
            const selectedItemText = this.textContent.trim();

            // Update the dropdown toggle text
            const dropdownToggle = document.querySelector('.language-drop .dropdown-toggle span');
            dropdownToggle.textContent = selectedItemText;
        });
    });
    const navLinks = document.querySelectorAll('nav a.nav-link');

    // Function to handle link click
    function handleLinkClick(e) {
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to clicked link
        e.target.classList.add('active');
    }

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // Optional: Set initial active link based on current URL
    const currentURL = window.location.href;
    navLinks.forEach(link => {
        if (link.href === currentURL) {
            link.classList.add('active');
        }
    });

})
// Get the dropdown button element
// const dropdownButton = document.querySelector('.dropdown-toggle span');

// // Get the dropdown menu items
// const dropdownItems = document.querySelectorAll('.dropdown-item');

// // Function to handle language selection
// function handleLanguageSelection(selectedLanguage) {
//   // Update the text inside the dropdown button
//   dropdownButton.textContent = selectedLanguage;

//   // Check the selected language and switch the CSS stylesheet accordingly
//   if (selectedLanguage === 'English') {
//     document.querySelector('link[href="css/styleAr.css"]').disabled = true;
//     document.querySelector('link[href="css/style.css"]').disabled = false;
//   } else if (selectedLanguage === 'العربية') {
//     document.querySelector('link[href="css/style.css"]').disabled = true;
//     document.querySelector('link[href="css/styleAr.css"]').disabled = false;
//   }

//   // Save the selected language to localStorage
//   localStorage.setItem('selectedLanguage', selectedLanguage);
// }

// // Add event listeners to each dropdown item
// dropdownItems.forEach(function(item) {
//   item.addEventListener('click', function() {
//     // Get the text content of the clicked dropdown item
//     const selectedLanguage = this.textContent;

//     // Call the function to handle language selection
//     handleLanguageSelection(selectedLanguage);
//   });
// });

// // Get the saved language from localStorage
// const savedLanguage = localStorage.getItem('selectedLanguage');

// // Check if a language is saved and update the UI accordingly
// if (savedLanguage) {
//   handleLanguageSelection(savedLanguage);
// } else {
//   // If no language is saved, set the default to English
//   handleLanguageSelection('English');
// }
