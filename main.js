


//  Sacekaj da se ucita DOM
$(document).ready(function() {

	// nadji sve elemente koji imaju ovu klasu
	const scrollBtn = $('.js-scroll-to-service');

	playHeroAnimation();
	playBubblesAnimation();


	// Na svakom elementu slusaj na klik
	for(var i = 0; i <scrollBtn.length; i++ ) {
		var nav = scrollBtn[i];

		// kada se desi click pozovi funkciju "scrollOnNavClick"
		$(nav).on('click', scrollOnNavClick);
	}


	function scrollOnNavClick(e) {
		// e - event, objekat koji JS prosledjuje automatski

		// Spreci default ponoasanje kada se klikne na <a href=""...>
		e.preventDefault();

		// nadji koji je bio target click
		var clickTarget = e.target;

		// procitaj iz njega na koji je section trebao da vodi (vrednost iz href-a)
		section = clickTarget.getAttribute('href');

		// nadji taj element u DOMU
		$section = $(section)

		window.scroll({
			top: $section[0].offsetTop, // iscitaj njegov polozaj; tj koliko je udaljen od pocetka stranice
			behavior: 'smooth' // stillizuj scroll
		})

		// ukoliko je section Clients ...
		if ($(section).hasClass('clients')) {

			// ... pokreni animaciju
			playBubblesAnimation()
		}
	}

	function playBubblesAnimation() {
		var str = "<p>“ Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit aenean rhoncus. ”</p><small>- Jamie Richardson, Founder of Cocoa Media</small>",
		i = 0,
		isTag,
		text;

		(function type() {
			text = str.slice(0, ++i);

			if (text === str) return;

			document.getElementById('typeWriterFirst').innerHTML = text;

		var char = text.slice(-1);
		if( char === '<' ) isTag = true;
		if( char === '>' ) isTag = false;

		if (isTag) return type();
		setTimeout(type, 80);
		}());


		var str = "<p>“ Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit aenean rhoncus. ”</p><small>- Bart Thompson, Founder of Rainel</small>",
		i = 0,
		isTag,
		text;

		(function type() {
		text = str.slice(0, ++i);
		if (text === str) return;

		document.getElementById('typeWriterSecond').innerHTML = text;

		var char = text.slice(-1);
		if( char === '<' ) isTag = true;
		if( char === '>' ) isTag = false;

		if (isTag) return type();
		setTimeout(type, 80);
		}());

	}

	function playHeroAnimation() {
		var options = {
			strings: ['that.',
					  'branding.',
					  'mobile.',
					  'UI/UX.'
					],
			typeSpeed: 222,
			backSpeed: 110,
			backDelay: 1000,
			startDelay: 1000,
			loop: true,
			showCursor: false
		}

		var typed = new Typed('.animated-label', options);
	}




	// scrollBtn.on('click', handleScollOnClick );

	// function handleScollOnClick() {

	// 	const offsetTop = serviceSection.offsetTop;

	// 	console.log('offset top', offsetTop)
	// 	window.scroll({
	// 		top: offsetTop,
	// 		behavior: 'smooth'
	// 	  })
	// }
})
