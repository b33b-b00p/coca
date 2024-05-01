export const showAddress = () => {
    const addressPopUp = document.querySelector('.map__address');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    addressPopUp.style.animation =
                        'show-address 400ms ease 400ms 1 forwards';
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 1,
        },
    );
    observer.observe(document.querySelector('.map__marker-wrapper'));
};
