import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export const phoneMask = () => {
    const input = document.querySelector('#phoneNumber');

    intlTelInput(input, {
        initialCountry: 'auto',
        strictMode: true,
        showSelectedDialCode: true,
        geoIpLookup: (callback) => {
            fetch('https://ipapi.co/json')
                .then((res) => res.json())
                .then((data) => callback(data.country_code))
                .catch(() => callback('us'));
        },
        utilsScript:
            'https://cdn.jsdelivr.net/npm/intl-tel-input@21.1.4/build/js/utils.js',
    });
};
