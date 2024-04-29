export const initPost = () => {
    const postTitle = document.querySelector('[post-title]');
    const postImgSrc = document.querySelector('[post-img]');
    const postParagraphOne = document.querySelector('[post-paragraph-one]');
    const postParagraphTitle = document.querySelector('[post-paragraph-title]');
    const postParagraphTwo = document.querySelector('[post-paragraph-two]');

    const postReadTime = document.querySelector('[post-read-time]');
    const postDate = document.querySelector('[post-date]');

    const authorImgSrc = document.querySelectorAll('[author-img]');
    const authorName = document.querySelectorAll('[author-name]');
    const authorCredentials = document.querySelectorAll('[author-credentials]');
    const authorDescription = document.querySelector('[author-description]');

    const post_data = postArray.find(
        (post) => post.title === postTitle.textContent,
    );
    postImgSrc.setAttribute('src', post_data.imgSrc);
    postParagraphOne.textContent = post_data.paragraphOne;
    postParagraphTitle.textContent = post_data.paragraphTitle;
    postParagraphTwo.textContent = post_data.paragraphTwo;

    postReadTime.textContent = post_data.readTime + ' read' + '\u00A0';
    postDate.textContent = post_data.date;

    authorImgSrc.forEach((element) => {
        element.setAttribute('src', post_data.authorImgSrc);
        element.setAttribute('alt', post_data.authorName);
    });
    authorName.forEach((element) => {
        element.textContent = post_data.authorName;
    });
    authorCredentials.forEach((element) => {
        element.textContent = post_data.authorCredentials;
    });
    authorDescription.textContent = post_data.authorDescription;
};

const postArray = [
    {
        title: 'How we perform long-running tasks using AWS services',
        imgSrc: '/coca/assets/images/dashboard/1.jpg',
        paragraphOne:
            'Depending on the input, this can result in using a lot of processing power and time. The whole process would take approximately 5 seconds to return a result to the client. Keep in mind we’re talking about 1 item, a contact from a contact book. After a while, a new requirement is added. Solution must support companies that manage their contacts organized in files. We agreed to develop a web application that would support upload of dataset files, like .csv. The new web application should support third party integrations. Some of them are the ESP/CRM services, like Mailchimp. User does not need to see the result immediately. System can later notify the user about the result, when the process finishes. This information is the key that we need to leverage on when developing our solution. So here’s how we did it.',
        paragraphTitle: 'Initial approach',
        paragraphTwo:
            'Our initial approach went like this: The web application would read a .csv file line-by-line and submit an array of entries to the backend REST API. Processing is in real time, immediately after the user makes a request for the process to start, he expects a result. Another approach is to apply vertical scaling to AWS architecture. Meaning we used larger, more expensive instances that have more RAM and processing power. This system worked well for smaller datasets, maybe up to 5k entries, but for larger datasets multiple problems arose. This solution is prone to failure due to long request time. Also, because of some 3rd party services that aren’t optimized for large scale loads or they don’t have batch endpoints. 3rd party services also tend to protect their architecture from making a huge bill on their end. The whole process was done in real-time. The request can take a lot of time hanging in there while the backend would do all the work and return the result to the client. The request was limited to 300 seconds (at time of writing the article) before AWS would cancel it… Also I need to mention that the user has to wait a few minutes to see the results. They can’t use the app during the process, which makes for a bad user experience.',

        readTime: '10 min',
        date: 'November 10, 2023',

        authorName: 'Arlyne Stefano',
        authorCredentials: 'Founder & CEO',
        authorImgSrc: '/coca/assets/images/team/arlyne-stefano.jpg',
        authorDescription:
            'Skilled in React Native, iOS and backend, Toni has a demonstrated knowledge of the information technology and services industry, with plenty of hands-on experience to back it up.',
    },
    {
        title: 'How to ask when doing User Research',
        imgSrc: '/coca/assets/images/dashboard/2.jpg',
        paragraphOne:
            'Depending on the input, this can result in using a lot of processing power and time. The whole process would take approximately 5 seconds to return a result to the client. Keep in mind we’re talking about 1 item, a contact from a contact book. After a while, a new requirement is added. Solution must support companies that manage their contacts organized in files. We agreed to develop a web application that would support upload of dataset files, like .csv. The new web application should support third party integrations. Some of them are the ESP/CRM services, like Mailchimp. User does not need to see the result immediately. System can later notify the user about the result, when the process finishes. This information is the key that we need to leverage on when developing our solution. So here’s how we did it.',
        paragraphTitle: 'Initial approach',
        paragraphTwo:
            'Our initial approach went like this: The web application would read a .csv file line-by-line and submit an array of entries to the backend REST API. Processing is in real time, immediately after the user makes a request for the process to start, he expects a result. Another approach is to apply vertical scaling to AWS architecture. Meaning we used larger, more expensive instances that have more RAM and processing power. This system worked well for smaller datasets, maybe up to 5k entries, but for larger datasets multiple problems arose. This solution is prone to failure due to long request time. Also, because of some 3rd party services that aren’t optimized for large scale loads or they don’t have batch endpoints. 3rd party services also tend to protect their architecture from making a huge bill on their end. The whole process was done in real-time. The request can take a lot of time hanging in there while the backend would do all the work and return the result to the client. The request was limited to 300 seconds (at time of writing the article) before AWS would cancel it… Also I need to mention that the user has to wait a few minutes to see the results. They can’t use the app during the process, which makes for a bad user experience.',

        readTime: '10 min',
        date: 'November 10, 2023',

        authorName: 'Katy-Cristy',
        authorCredentials: 'Chief Technology Officer',
        authorImgSrc: '/coca/assets/images/team/katy-cristy.jpg',
        authorDescription:
            'Skilled in React Native, iOS and backend, Toni has a demonstrated knowledge of the information technology and services industry, with plenty of hands-on experience to back it up.',
    },
];
