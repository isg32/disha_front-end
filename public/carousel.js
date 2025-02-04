document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const dots = document.querySelectorAll('.dot');
    
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let currentIndex = 0;
    let animationID = 0;
    let dragStartTime = 0;

    // Prevent default behavior on images
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        img.addEventListener('dragstart', (e) => e.preventDefault());
    });

    // Touch events
    track.addEventListener('touchstart', touchStart);
    track.addEventListener('touchmove', touchMove);
    track.addEventListener('touchend', touchEnd);

    // Mouse events
    track.addEventListener('mousedown', touchStart);
    track.addEventListener('mousemove', touchMove);
    track.addEventListener('mouseup', touchEnd);
    track.addEventListener('mouseleave', touchEnd);

    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const targetIndex = parseInt(e.target.getAttribute('data-index'));
            goToSlide(targetIndex);
        });
    });

    function touchStart(event) {
        isDragging = true;
        dragStartTime = Date.now();
        startPos = getPositionX(event);
        animationID = requestAnimationFrame(animation);
        track.style.cursor = 'grabbing';
    }

    function touchMove(event) {
        if (!isDragging) return;
        
        const currentPosition = getPositionX(event);
        const diff = currentPosition - startPos;
        currentTranslate = prevTranslate + diff;
    }

    function touchEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        track.style.cursor = 'grab';

        const dragDuration = Date.now() - dragStartTime;
        const slideWidth = slides[0].offsetWidth;
        const moveBy = currentTranslate - prevTranslate;

        // Quick swipe detection
        if (dragDuration < 300 && Math.abs(moveBy) > slideWidth * 0.25) {
            if (moveBy < 0 && currentIndex < slides.length - 1) currentIndex++;
            if (moveBy > 0 && currentIndex > 0) currentIndex--;
        } else {
            // Snap to closest slide
            const threshold = slideWidth / 2;
            if (Math.abs(moveBy) > threshold) {
                if (moveBy < 0 && currentIndex < slides.length - 1) currentIndex++;
                if (moveBy > 0 && currentIndex > 0) currentIndex--;
            }
        }

        goToSlide(currentIndex);
    }

    function animation() {
        setSlidePosition();
        if (isDragging) requestAnimationFrame(animation);
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    function setSlidePosition() {
        const slideWidth = slides[0].offsetWidth;
        const maxTranslate = -(slideWidth * (slides.length - 1));
        
        // Limit translation to prevent dragging beyond first and last slides
        if (currentTranslate > 0) {
            currentTranslate = 0;
        } else if (currentTranslate < maxTranslate) {
            currentTranslate = maxTranslate;
        }
        
        track.style.transform = `translateX(${currentTranslate}px)`;
    }

    function goToSlide(index) {
        currentIndex = index;
        const slideWidth = slides[0].offsetWidth;
        currentTranslate = prevTranslate = -slideWidth * currentIndex;
        
        track.style.transform = `translateX(${currentTranslate}px)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            goToSlide(currentIndex);
        }, 250);
    });
});