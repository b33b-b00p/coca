export const initLinks = () => {
    const facebookBtn = document.querySelector('[share-post="Facebook"]');
    const twitterBtn = document.querySelector('[share-post="Twitter"]');
    const linkedInBtn = document.querySelector('[share-post="LinkedIn"]');
    const telegramBtn = document.querySelector('[share-post="Telegram"]');
    const copyToClipboardBtn = document.querySelector(
        '[share-post="Copy-clipboard"]',
    );

    const postTitle = document.querySelector('[post-title]').textContent;
    const postUrl = encodeURI(document.location.href);

    facebookBtn.setAttribute(
        'href',
        `https://www.facebook.com/sharer.php?u=${postUrl}`,
    );
    twitterBtn.setAttribute(
        'href',
        `https://twitter.com/share?url=${postUrl}&text=${postTitle}`,
    );
    linkedInBtn.setAttribute(
        'href',
        `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`,
    );
    telegramBtn.setAttribute(
        'href',
        `https://t.me/share/url?url=${postUrl}&text=${postTitle}`,
    );

    copyToClipboardBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(postUrl);
        alert(`Link was copied to clipboard!`);
    });
};
