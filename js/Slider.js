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
	}
});
$("#Sponsers .swiper-full").mouseenter(function () {
	swiperFull.autoplay.stop();
});
$("#Sponsers .swiper-full").mouseleave(function () {
	swiperFull.autoplay.start();
});

// For Partners
const PartnerSwiperFull = new Swiper("#Partners .swiper-full", {
	autoplay: {
		delay: 2000
	},
	slidesPerView: 5,
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
	}
});
$("#Partners .swiper-full").mouseenter(function () {
	PartnerSwiperFull.autoplay.stop();
});
$("#Partners .swiper-full").mouseleave(function () {
	PartnerSwiperFull.autoplay.start();
});


// For Testimonials
const TestimonialsSwiperFull = new Swiper("#Testimonials .swiper-full", {
	autoplay: {
		delay: 2000
	},
	slidesPerView: 3,
	centeredSlides: true,
	spaceBetween: 32,
	loop: true,
	pagination: {
		el: "#Testimonials .swiper-pagination",
		// dynamicBullets: true,
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		}
	},
	navigation: {
		nextEl: "#Testimonials .swiper-button-next",
		prevEl: "#Testimonials .swiper-button-prev"
	}
});
$("#Testimonials .swiper-full").mouseenter(function () {
	TestimonialsSwiperFull.autoplay.stop();
});
$("#Testimonials .swiper-full").mouseleave(function () {
	TestimonialsSwiperFull.autoplay.start();
});
