// Simple interaction for CTA button
document.getElementById('cta-button').addEventListener('click', () => {
    // Show a cool custom modal or friendly alert
    const ctaAlert = document.createElement('div');
    ctaAlert.textContent = "Terima kasih telah memilih HotelNawa! Tim kami akan menghubungi Anda segera.";
    ctaAlert.style.position = "fixed";
    ctaAlert.style.top = "20px";
    ctaAlert.style.left = "50%";
    ctaAlert.style.transform = "translateX(-50%)";
    ctaAlert.style.background = "rgba(111, 82, 255, 0.9)";
    ctaAlert.style.color = "#fff";
    ctaAlert.style.padding = "1rem 2rem";
    ctaAlert.style.borderRadius = "40px";
    ctaAlert.style.boxShadow = "0 0 20px #6f52ffaa";
    ctaAlert.style.fontWeight = "700";
    ctaAlert.style.zIndex = "9999";
    ctaAlert.style.fontSize = "1.125rem";
    ctaAlert.style.userSelect = "none";
    ctaAlert.style.cursor = "default";
    document.body.appendChild(ctaAlert);

    setTimeout(() => {
        ctaAlert.style.transition = "opacity 0.5s ease-out";
        ctaAlert.style.opacity = "0";
    }, 2500);

    setTimeout(() => {
        document.body.removeChild(ctaAlert);
    }, 3000);
});