export const changePrice = () => {
    const switcher = document.querySelector('[data-price="switcher"]');

    const starterPrice = document.querySelector('[data-price="starter"]');
    const popularPrice = document.querySelector('[data-price="popular"]');
    const enterprisePrice = document.querySelector('[data-price="enterprise"]');

    const priceList = {
        starter: {
            monthly: 120,
            annual: 100,
        },
        popular: {
            monthly: 1680,
            annual: 1400,
        },
        enterprise: {
            monthly: 2520,
            annual: 2100,
        },
    };

    const setMonthlyPrice = () => {
        starterPrice.textContent = priceList.starter.monthly;
        popularPrice.textContent = priceList.popular.monthly;
        enterprisePrice.textContent = priceList.enterprise.monthly;
    };
    const setAnnualPrice = () => {
        starterPrice.textContent = priceList.starter.annual;
        popularPrice.textContent = priceList.popular.annual;
        enterprisePrice.textContent = priceList.enterprise.annual;
    };

    switcher.checked = true;
    setAnnualPrice();

    switcher.addEventListener('click', () => {
        if (switcher.checked === true) {
            setAnnualPrice();
        } else {
            setMonthlyPrice();
        }
    });
};
