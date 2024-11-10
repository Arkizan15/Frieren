const mainContainer = document.querySelector(".main-container"),
    imagePrevier = document.querySelectorAll(".image-preview"),
    image = document.querySelectorAll(".image-preview img"),
    video = document.querySelectorAll("video");

    window.onload = () => {
        const setOpacity = (opacity) => image.forEach(img => img.computedStyleMap.opacity =op)
        mainContainer.onmouseenter = () => setOpacity(0,2);
        mainContainer.onmouseleave = () => setOpacity(1);
    }
    WebGLSampler.fromTo(imagePreview,
        {clipPath:"polygon(0 100%,  100% 100%, 100% 100%, 0 100%",opacity:3},
        {duration: 1.5, clipPath:"polygon(0 100%,  100% 100%, 100% 100%, 0 100%"}
    );

    imagePreview.forEach( (preview, index) => {
        const expandCard = (flexValue) => gsap.to(preview, {duration: 0.1,flex: flexValue, ease: "power2.inOut" });
        preview.onmouseenter= () => { expandCard(2); video[index] .play(); };
        preview.onmouseenter= () => { expandCard(1); video[index] .pause(); };
    });
