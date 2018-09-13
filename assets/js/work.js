/*global consol, if, prompt, function, smoothScroll, alert, document, window, var, $ */

$(document).ready(function () {
    
    'use strict';
    
    
    
    /*=====================================
    Start Header
    =====================================*/
    
    $(".header .navbar-nav>li").click(function () {
       
        $(".navbar-nav>li").removeClass('active');
        
        $(this).addClass('active').siblings();
        
    });
    
    /*=====================================
    End Header
    =====================================*/
    
    
    
    /*=====================================
    Start Portfolio
    =====================================*/
    
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {enabled: true}
      // other options
    });
    
    /*=====================================
    End Portfolio
    =====================================*/
    
    
    
    /*=====================================
    Start Team
    =====================================*/
    
    /*jslint devel: true */
    /*global
    */
    Vue.config.devtools = true;

    Vue.component('card', {
      template: `
        <div class="card-wrap"
          @mousemove="handleMouseMove"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
          ref="card">
          <div class="card"
            :style="cardStyle">
            <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
            <div class="card-info">
              <slot name="header"></slot>
              <slot name="content"></slot>
            </div>
          </div>
        </div>`,
      mounted() {
        this.width = this.$refs.card.offsetWidth;
        this.height = this.$refs.card.offsetHeight;
      },
      props: ['dataImage'],
      data: () => ({
        width: 0,
        height: 0,
        mouseX: 0,
        mouseY: 0,
        mouseLeaveDelay: null
      }),
      computed: {
        mousePX() {
          return this.mouseX / this.width;
        },
        mousePY() {
          return this.mouseY / this.height;
        },
        cardStyle() {
          const rX = this.mousePX * 30;
          const rY = this.mousePY * -30;
          return {
            transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
          };
        },
        cardBgTransform() {
          const tX = this.mousePX * -40;
          const tY = this.mousePY * -40;
          return {
            transform: `translateX(${tX}px) translateY(${tY}px)`
          }
        },
        cardBgImage() {
          return {
            backgroundImage: `url(${this.dataImage})`
          }
        }
      },
      methods: {
        handleMouseMove(e) {
          this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width/2;
          this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height/2;
        },
        handleMouseEnter() {
          clearTimeout(this.mouseLeaveDelay);
        },
        handleMouseLeave() {
          this.mouseLeaveDelay = setTimeout(()=>{
            this.mouseX = 0;
            this.mouseY = 0;
          }, 1000);
        }
      }
    });

    const app = new Vue({
      el: '#app'
    });
    
    /*=====================================
    End Team
    =====================================*/
    
    
    
    /*=====================================
    Start Testimonials
    =====================================*/
    
	$(".testimonials #owl-testimonials").owlCarousel({

		autoPlay: 4000, //Set AutoPlay to 3 seconds
		items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1]

	});

	/*=====================================
    End Testimonials
    =====================================*/
    
    
    
    /*=====================================
    Smooth Scroll
    =====================================*/
	smoothScroll.init({
		speed: 800,
        offset: 87
	});
    
    /*=====================================
    End Smooth Scroll
    =====================================*/
    
    
    
    /*=====================================
    Scroll top 
    =====================================*/

	var scrollTop = $("#scroll-top");

	$(window).scroll(function () {

		if ($(this).scrollTop() >= 300) {

			scrollTop.fadeIn(500);

		} else {
			scrollTop.fadeOut(500);
		}
	});

	// Click on Button To Scroll Top

	scrollTop.on('click', function () {

		$("html,body").animate({
			scrollTop: 0
		}, 900);
	});
    
    /*=====================================
    End Scroll top 
    =====================================*/
    
    /*=====================================
    Start Loading
    =====================================*/
    
    $('.loading .sk-folding-cube').fadeOut(3500, function () {

        $(this).parent().fadeOut(3000);

    // Show scrolling after loading page

        $('html, body').css('overflowY', 'auto'); 

        });
    
    /*=====================================
    End Loading
    =====================================*/
      
});
