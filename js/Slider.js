// For Collected Waste
const CollectedSwiperFull = new Swiper("#Collected_waste .swiper-full", {
	autoplay: {
		delay: 1000
	},
	slidesPerView: 5,
	centeredSlides: true,
	spaceBetween: 32,
	loop: true,
	// pagination: {
	// 	el: "#Collected_waste .swiper-pagination",
	// 	// dynamicBullets: true,
	// 	clickable: true,
	// 	renderBullet: function (index, className) {
	// 		return '<span class="' + className + '">' + (index + 1) + "</span>";
	// 	}
	// },
	navigation: {
		nextEl: "#Collected_waste .swiper-button-next",
		prevEl: "#Collected_waste .swiper-button-prev"
	}
});
$("#Collected_waste .swiper-full").mouseenter(function () {
	CollectedSwiperFull.autoplay.stop();
});
$("#Collected_waste .swiper-full").mouseleave(function () {
	CollectedSwiperFull.autoplay.start();
});
// CollectedSwiperFull.autoplay.nextEl
if ($("#Collected_waste .swiper-slide").length > 2){
	$("#Collected_waste .swiper-button-next").click()
	// $("#Collected_waste .swiper-button-next").click()
}

// For Sponsers
const swiperFull = new Swiper("#Sponsers .swiper-full", {
	autoplay: {
		delay: 2000
	},
	slidesPerView: 3,
	centeredSlides: true,
	spaceBetween: 32,
	loop: true,
	pagination: {
		el: "#Sponsers .swiper-pagination",
		// dynamicBullets: true,
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		}
	},
	navigation: {
		nextEl: "#Sponsers .swiper-button-next",
		prevEl: "#Sponsers .swiper-button-prev"
	}, breakpoints: {
        // When window width is <= 767px (typically for mobile)
        767: {
            slidesPerView: 4, 
            centeredSlides: true, 
        },
        // When window width is <= 1130 (for tablets and small desktops)
        1130: {
            slidesPerView: 5, 
            centeredSlides: true, 
        }
    }
});
$("#Sponsers .swiper-full").mouseenter(function () {
	swiperFull.autoplay.stop();
});
$("#Sponsers .swiper-full").mouseleave(function () {
	swiperFull.autoplay.start();
});
if ($("#Sponsers .swiper-slide").length > 1){
	$("#Sponsers .swiper-button-next").click()
}

// For Partners
const PartnerSwiperFull = new Swiper("#Partners .swiper-full", {
	autoplay: {
		delay: 2000
	},
	slidesPerView: 3,
	centeredSlides: true,
	spaceBetween: 32,
	loop: true,
	pagination: {
		el: "#Partners .swiper-pagination",
		// dynamicBullets: true,
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		}
	},
	navigation: {
		nextEl: "#Partners .swiper-button-next",
		prevEl: "#Partners .swiper-button-prev"
	}, breakpoints: {
        // When window width is <= 767px (typically for mobile)
        767: {
            slidesPerView: 4, 
            centeredSlides: true, 
        },
        // When window width is <= 1130 (for tablets and small desktops)
        1130: {
            slidesPerView: 5, 
            centeredSlides: true, 
        }
    }
});
$("#Partners .swiper-full").mouseenter(function () {
	PartnerSwiperFull.autoplay.stop();
});
$("#Partners .swiper-full").mouseleave(function () {
	PartnerSwiperFull.autoplay.start();
});
if ($("#Partners .swiper-slide").length > 1){
	$("#Partners .swiper-button-next").click()
}

// For Testimonials
const TestimonialsSwiperFull = new Swiper("#Testimonials .swiper-full", {
	autoplay: {
		delay: 4000
	},
	slidesPerView: 2,
	centeredSlides: true,
	spaceBetween: 32,
	loop: true,
	pagination: {
		el: "#Testimonials .swiper-pagination",
		dynamicBullets: true,
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		}
	},
	navigation: {
		nextEl: "#Testimonials .swiper-button-next",
		prevEl: "#Testimonials .swiper-button-prev"
	}, breakpoints: {
        // When window width is <= 767px (typically for mobile)
        767: {
            slidesPerView: 2, 
            centeredSlides: true, 
        },
        // When window width is <= 1130 (for tablets and small desktops)
        1130: {
            slidesPerView: 3, 
            centeredSlides: true, 
        }
    }
});
$("#Testimonials .swiper-full").mouseenter(function () {
	TestimonialsSwiperFull.autoplay.stop();
});
$("#Testimonials .swiper-full").mouseleave(function () {
	TestimonialsSwiperFull.autoplay.start();
});
if ($("#Testimonials .swiper-slide").length > 1){
	$("#Testimonials .swiper-button-next").click()
}

// For Events
const EventsSwiperFull = new Swiper("#Events .swiper-full", {
	autoplay: {
		delay: 2000
	},
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 32,
	loop: true,
	pagination: {
		el: "#Events .swiper-pagination",
		// dynamicBullets: true,
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		}
	},
	navigation: {
		nextEl: "#Events .swiper-button-next",
		prevEl: "#Events .swiper-button-prev"
	},
    breakpoints: {
        // When window width is <= 767px (typically for mobile)
        767: {
            slidesPerView: 2, 
            centeredSlides: true,
        },
        // When window width is <= 1024px (for tablets and small desktops)
        1130: {
            slidesPerView: 2,
            centeredSlides: true, // Enable centered slides
        }
    }
});
$("#Events .swiper-full").mouseenter(function () {
	EventsSwiperFull.autoplay.stop();
});
$("#Events .swiper-full").mouseleave(function () {
	EventsSwiperFull.autoplay.start();
});
if ($("#Events .swiper-slide").length > 2){
	$("#Events .swiper-button-next").click()
}
