const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelector('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header .container');

hamburger.addEventListener('click',()=>{
	hamburger.classList.toggle('active') 
	mobile_menu.classList.toggle('active') 
});

document.addEventListener('scroll',()=>{
	var scroll_position = window.scrollY;
	 if(scroll_position>250){
		header.style.backgroundcolor = '#29323c';
	} else{
		header.style.backgroundcolor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active')
		mobile_menu.classList.toggle('active')
	});
});











  /*
             * - Define variables
             * - Calculate the document height and set the offset to a quarter of that value
             * - Add the event listeners for scroll and click
             */
            var btt = document.getElementById('back-to-top'),
                body = document.body,
                docElem = document.documentElement,
                offset = 100,
                isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
                scrollPos, docHeight;

            // Calculate the document height
            docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
            if (docHeight != 'undefined') {
                offset = docHeight / 4;
            }

            // Add scroll event listener
            window.addEventListener('scroll', function(event) {
                scrollPos = body.scrollTop || docElem.scrollTop;

                btt.className = (scrollPos > offset) ? 'visible' : '';
            });

            // Add click event listener
            btt.addEventListener('click', function(event) {
                event.preventDefault();

                if (isFirefox) {
                    docElem.scrollTop = 0;
                } else {
                    body.scrollTop = 0;
                }
            });