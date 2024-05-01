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
    //post-body
    postReadTime.textContent = post_data.readTime + ' read' + '\u00A0';
    postDate.textContent = post_data.date;

    postImgSrc.setAttribute('src', post_data.imgSrc);
    postImgSrc.setAttribute('alt', post_data.imgAlt);
    postParagraphOne.textContent = post_data.paragraphOne;
    postParagraphTitle.textContent = post_data.paragraphTitle;
    postParagraphTwo.textContent = post_data.paragraphTwo;

    //post-author
    authorImgSrc.forEach((element) => {
        element.setAttribute('src', post_data.authorImgSrc);
        element.setAttribute('alt', post_data.authorName + ' photo');
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

        readTime: '10 min',
        date: 'November 10, 2023',

        imgSrc: '/coca/ipad-on-a-desk.jpg',
        imgAlt: 'ipad on a desk',
        paragraphOne:
            'Depending on the input, this can result in using a lot of processing power and time. The whole process would take approximately 5 seconds to return a result to the client. Keep in mind we’re talking about 1 item, a contact from a contact book. After a while, a new requirement is added. Solution must support companies that manage their contacts organized in files. We agreed to develop a web application that would support upload of dataset files, like .csv. The new web application should support third party integrations. Some of them are the ESP/CRM services, like Mailchimp. User does not need to see the result immediately. System can later notify the user about the result, when the process finishes. This information is the key that we need to leverage on when developing our solution. So here’s how we did it.',
        paragraphTitle: 'Initial approach',
        paragraphTwo:
            'Our initial approach went like this: The web application would read a .csv file line-by-line and submit an array of entries to the backend REST API. Processing is in real time, immediately after the user makes a request for the process to start, he expects a result. Another approach is to apply vertical scaling to AWS architecture. Meaning we used larger, more expensive instances that have more RAM and processing power. This system worked well for smaller datasets, maybe up to 5k entries, but for larger datasets multiple problems arose. This solution is prone to failure due to long request time. Also, because of some 3rd party services that aren’t optimized for large scale loads or they don’t have batch endpoints. 3rd party services also tend to protect their architecture from making a huge bill on their end. The whole process was done in real-time. The request can take a lot of time hanging in there while the backend would do all the work and return the result to the client. The request was limited to 300 seconds (at time of writing the article) before AWS would cancel it… Also I need to mention that the user has to wait a few minutes to see the results. They can’t use the app during the process, which makes for a bad user experience.',

        authorName: 'Arlyne Stefano',
        authorCredentials: 'Founder & CEO',
        authorImgSrc: '/coca/arlyne-stefano.jpg',
        authorDescription:
            'Skilled in React Native, iOS and backend, Toni has a demonstrated knowledge of the information technology and services industry, with plenty of hands-on experience to back it up.',
    },
    {
        title: 'How to ask when doing User Research',

        readTime: '10 min',
        date: 'November 10, 2023',

        imgSrc: '/coca/workspace.jpg',
        imgAlt: 'Workspace',
        paragraphOne:
            "Crafting effective questions is a fundamental aspect of conducting successful user research. When formulating questions, it's essential to be clear, concise, and purposeful. Start by defining the objectives of your research and tailor your questions to gather the specific insights you need. Avoid ambiguity and ensure that your questions are structured in a way that encourages thoughtful responses from participants.",
        paragraphTitle: 'Active Listening and Adaptation',
        paragraphTwo:
            "In addition to asking the right questions, active listening plays a crucial role in user research. Pay close attention to not only what participants say but also how they say it. Non-verbal cues and tone of voice can provide valuable context to their responses. Be prepared to adapt your questioning approach based on the feedback you receive. If a participant's response leads to unexpected insights, be flexible in exploring those areas further to uncover valuable user perspectives.",

        authorName: 'Katy Cristy',
        authorCredentials: 'Chief Technology Officer',
        authorImgSrc: '/coca/katy-cristy.jpg',
        authorDescription:
            'Proficient in cutting-edge technology solutions, team management, and strategic planning, Toni is a Chief Technology Officer who brings a wealth of experience and expertise to drive organizational growth and success.',
    },
    {
        title: 'Practice making User Flow',

        readTime: '10 min',
        date: 'November 10, 2023',

        imgSrc: '/coca/woman-working-on-a-desk.jpg',
        imgAlt: 'Woman working on a desk',
        paragraphOne:
            'Creating a user flow is essential for designing intuitive and user-friendly digital experiences. Start by mapping out the key interactions a user will have with your product or service from start to finish. Identify the main touchpoints, actions, and decision points that users will encounter along their journey. By visualizing the user flow, you can gain a better understanding of the overall user experience and identify areas for improvement or optimization.',
        paragraphTitle: 'Iterative Design and Testing',
        paragraphTwo:
            'User flows are not set in stone; they should be continuously refined through iterative design and testing. Once you have mapped out the initial user flow, gather feedback from users through usability testing or feedback sessions. Pay attention to how users navigate through the flow, where they encounter challenges, and where they experience moments of delight. Use this feedback to iterate on the user flow, making adjustments to improve usability, clarity, and overall user satisfaction. By incorporating user feedback into the design process, you can create user flows that are intuitive, efficient, and tailored to meet the needs of your target audience.',

        authorName: 'Roger Dzawin',
        authorCredentials: 'Chief Technology Officer',
        authorImgSrc: '/coca/roger-dzawin.jpg',
        authorDescription:
            'Skilled in strategic technology leadership, software development, and innovation, Toni excels as a Chief Technology Officer with a deep understanding of the industry and a proven track record of success.',
    },
    {
        title: 'Overview of the Design Principles',

        readTime: '10 min',
        date: 'November 10, 2023',

        imgSrc: '/coca/two-women-working-on-a-laptop.jpg',
        imgAlt: 'Two women working on a laptop',
        paragraphOne:
            'Design principles serve as fundamental guidelines that inform the creation of visually appealing, functional, and user-centric designs. These principles encompass concepts such as balance, contrast, alignment, proximity, and hierarchy, which collectively contribute to the overall aesthetics and usability of a design. By adhering to these principles, designers can create cohesive and engaging visual experiences that effectively communicate information and guide user interactions.',
        paragraphTitle: 'Applying Consistency and Simplicity',
        paragraphTwo:
            'Consistency and simplicity are key tenets of effective design principles. Consistent design elements, such as typography, color schemes, and layout structures, help establish a sense of unity and coherence across different parts of a design. Simplicity, on the other hand, emphasizes the importance of clarity and minimalism in design, ensuring that users can easily understand and navigate through the interface. By applying these principles, designers can create intuitive and user-friendly designs that enhance usability and foster positive user experiences.',

        authorName: 'Reene Wells',
        authorCredentials: 'Product Designer, Quotient',
        authorImgSrc: '/coca/reene-wells.jpg',
        authorDescription:
            'With expertise in user-centered design, product strategy, and creative problem-solving, Toni is a talented Product Designer at Quotient, known for delivering impactful and user-friendly design solutions.',
    },
    {
        title: 'Using Grid in website design',

        readTime: '10 min',
        date: 'November 10, 2023',

        imgSrc: '/coca/high-five.jpg',
        imgAlt: 'High five',
        paragraphOne:
            'Grid systems play a crucial role in website design by providing a structured framework for organizing content and creating visually appealing layouts. By dividing the design canvas into columns and rows, designers can align elements with precision, maintain consistency across different pages, and establish a sense of order and hierarchy. Grids help designers achieve balance, rhythm, and harmony in their designs, leading to a more cohesive and professional-looking website.',
        paragraphTitle: 'Enhancing Responsive Design',
        paragraphTwo:
            'Grid systems are particularly beneficial for responsive web design, where layouts need to adapt to various screen sizes and devices. By using responsive grids, designers can create flexible and scalable layouts that adjust seamlessly to different viewport sizes. Grid-based design allows for easy rearrangement of content elements based on screen width, ensuring that the website remains visually appealing and functional across desktops, tablets, and mobile devices. Additionally, grids help maintain alignment and spacing consistency, enhancing the overall user experience on different devices.',

        authorName: 'Arlyne Stefano',
        authorCredentials: 'Founder & CEO',
        authorImgSrc: '/coca/arlyne-stefano.jpg',
        authorDescription:
            'Skilled in React Native, iOS and backend, Toni has a demonstrated knowledge of the information technology and services industry, with plenty of hands-on experience to back it up.',
    },
    {
        title: 'What makes an authentic employee profile, and why does it matter?',

        readTime: '10 min',
        date: 'November 10, 2023',

        imgSrc: '/coca/woman-working-on-a-computer-and-writing-notes.jpg',
        imgAlt: 'Woman working on a computer and writing notes',
        paragraphOne:
            "An authentic employee profile is characterized by transparency, honesty, and a true reflection of an individual's skills, experiences, and values. It goes beyond showcasing professional achievements to provide a glimpse into the person behind the role. Authenticity in employee profiles fosters genuine connections between team members, clients, and stakeholders. When employees present themselves authentically, it builds trust, credibility, and a sense of camaraderie within the organization. Authentic profiles humanize the workplace, making it easier for others to relate to and collaborate effectively with their colleagues.",
        paragraphTitle: 'Impact on Company Culture and Engagement',
        paragraphTwo:
            'The authenticity of employee profiles directly influences company culture and employee engagement. When individuals feel empowered to express their true selves in their profiles, it creates a culture of inclusivity, respect, and acceptance. Authenticity encourages open communication, vulnerability, and mutual understanding among team members. Employees who can showcase their unique personalities and perspectives in their profiles are more likely to feel valued, respected, and engaged in their work. Authentic employee profiles contribute to a positive work environment where diversity is celebrated, creativity thrives, and collaboration flourishes.',

        authorName: 'Katy Cristy',
        authorCredentials: 'Chief Technology Officer',
        authorImgSrc: '/coca/katy-cristy.jpg',
        authorDescription:
            'Proficient in cutting-edge technology solutions, team management, and strategic planning, Toni is a Chief Technology Officer who brings a wealth of experience and expertise to drive organizational growth and success.',
    },
    {
        title: 'How to build a Kaylen relationship with a good company',

        readTime: '10 min',
        date: 'November 10, 2023',

        imgSrc: '/coca/close-up-of-male-hands-typing-on-a-laptop.jpg',
        imgAlt: 'Close up of male hands typing on a laptop',
        paragraphOne:
            "Building a key relationship with a good company involves establishing meaningful connections based on trust, mutual respect, and shared values. Begin by researching the company's mission, values, and culture to ensure alignment with your own principles. Engage with the company through networking events, informational interviews, and social media platforms to demonstrate your interest and commitment. Show genuine enthusiasm for the company's work and initiatives to build a foundation of mutual understanding and respect.",
        paragraphTitle: 'Demonstrating Value and Collaboration',
        paragraphTwo:
            'To build a key relationship with a good company, focus on demonstrating the value you can bring to the organization through your skills, expertise, and unique perspective. Seek opportunities to collaborate on projects, offer insights, and contribute to discussions that showcase your capabilities and commitment. Show initiative by proposing innovative ideas, volunteering for challenging assignments, and actively participating in company events and initiatives. By consistently demonstrating your value and willingness to collaborate, you can strengthen your relationship with the company and position yourself as a valuable asset to their team.',

        authorName: 'Reene Wells',
        authorCredentials: 'Product Designer, Quotient',
        authorImgSrc: '/coca/reene-wells.jpg',
        authorDescription:
            'With expertise in user-centered design, product strategy, and creative problem-solving, Toni is a talented Product Designer at Quotient, known for delivering impactful and user-friendly design solutions.',
    },
    {
        title: 'Layout Exploration — Simple exercise but big effect',

        readTime: '10 min',
        date: 'November 10, 2023',

        imgSrc: '/coca/meeting-discussion.jpg',
        imgAlt: 'Meeting discussion',
        paragraphOne:
            'Layout exploration is a simple yet powerful exercise that can unleash creativity and inspire innovative design solutions. By experimenting with different layouts, designers can push boundaries, challenge conventions, and discover new ways to present information and engage users. This exercise encourages designers to think outside the box, explore diverse design possibilities, and break free from traditional design constraints. Through layout exploration, designers can breathe new life into their designs, infuse fresh perspectives, and create visually compelling and impactful layouts.',
        paragraphTitle: 'Enhancing User Experience and Engagement',
        paragraphTwo:
            "The impact of layout exploration extends beyond aesthetics; it directly influences user experience and engagement. By carefully crafting layouts that are intuitive, user-friendly, and visually appealing, designers can enhance the overall usability and effectiveness of a website or application. Through thoughtful exploration of layout options, designers can optimize content hierarchy, improve navigation flow, and create seamless user journeys. A well-designed layout not only captures users' attention but also guides them through the interface, encourages interaction, and ultimately enhances the overall user experience.",

        authorName: 'Katy Cristy',
        authorCredentials: 'Chief Technology Officer',
        authorImgSrc: '/coca/katy-cristy.jpg',
        authorDescription:
            'Proficient in cutting-edge technology solutions, team management, and strategic planning, Toni is a Chief Technology Officer who brings a wealth of experience and expertise to drive organizational growth and success.',
    },
    {
        title: 'Webflow Break the Coding Barrier',

        readTime: '10 min',
        date: 'November 10, 2023',

        imgSrc: '/coca/man-doing-a-presentation.jpg',
        imgAlt: 'Man doing a presentation',
        paragraphOne:
            'Webflow is revolutionizing the web design industry by breaking the coding barrier and empowering designers to create stunning websites without writing a single line of code. This no-code platform provides a visual interface that allows designers to design, build, and launch websites with ease. By offering a range of customizable templates, elements, and interactions, Webflow enables designers to bring their creative visions to life without the need for technical coding skills. With Webflow, designers can design responsive, high-quality websites that rival custom-coded sites, all within a user-friendly and intuitive environment.',
        paragraphTitle: 'Streamlining the Design and Development Process',
        paragraphTwo:
            "By eliminating the need for coding, Webflow streamlines the design and development process, allowing designers to focus on creativity and user experience. Designers can quickly prototype ideas, iterate on designs, and collaborate with team members in real-time using Webflow's visual editor. The platform's powerful features, such as responsive design controls, animations, and CMS capabilities, enable designers to create dynamic and interactive websites that engage users effectively. With Webflow, designers can bridge the gap between design and development, resulting in faster project timelines, smoother workflows, and exceptional end products that meet both aesthetic and functional requirements.",

        authorName: 'Roger Dzawin',
        authorCredentials: 'Chief Technology Officer',
        authorImgSrc: '/coca/roger-dzawin.jpg',
        authorDescription:
            'Skilled in strategic technology leadership, software development, and innovation, Toni excels as a Chief Technology Officer with a deep understanding of the industry and a proven track record of success.',
    },
    {
        title: 'List of UX Designer Portfolio / Case Studies where you can make money',

        readTime: '10 min',
        date: 'November 10, 2023',

        imgSrc: '/coca/two-people-reviewing-a-project.jpg',
        imgAlt: 'Two people reviewing a project',
        paragraphOne:
            "In this curated list of UX designer portfolios and case studies, you'll find inspiring examples of projects that not only demonstrate exceptional design skills but also showcase the potential for monetization. These portfolios highlight how UX designers have leveraged their expertise to create user-centric solutions that drive revenue and business growth. From e-commerce platforms to subscription services, these case studies offer valuable insights into the impact of strategic UX design on profitability.",
        paragraphTitle: 'Turning User Experience into Profit',
        paragraphTwo:
            'Explore these UX designer portfolios to discover how professionals have translated user experience principles into tangible financial gains for their clients. By focusing on conversion optimization, user engagement, and seamless interactions, these designers have unlocked the revenue-generating potential of well-crafted digital experiences. Whether through A/B testing, user research, or data-driven design decisions, these case studies exemplify the transformative power of UX design in driving monetization opportunities for businesses.',

        authorName: 'Roger Dzawin',
        authorCredentials: 'Chief Technology Officer',
        authorImgSrc: '/coca/roger-dzawin.jpg',
        authorDescription:
            'Skilled in strategic technology leadership, software development, and innovation, Toni excels as a Chief Technology Officer with a deep understanding of the industry and a proven track record of success.',
    },
    {
        title: 'Skyrocketing in The Designing Career, Why Not?',

        readTime: '10 min',
        date: 'November 10, 2023',

        imgSrc: '/coca/high-five.jpg',
        imgAlt: 'High five',
        paragraphOne:
            "Embark on a journey towards skyrocketing success in the design industry with a strategic approach and unwavering determination. Explore the possibilities of advancing your design career to new heights by honing your skills, expanding your network, and seizing opportunities for growth. With a proactive mindset and a passion for creativity, there's no limit to how far you can soar in the dynamic world of design.",
        paragraphTitle: 'Embracing Innovation and Creativity',
        paragraphTwo:
            "Embrace innovation and creativity as your guiding forces in propelling your design career forward. Stay abreast of emerging trends, experiment with new techniques, and push the boundaries of conventional design practices. By fostering a culture of continuous learning and adaptation, you can position yourself as a trailblazer in the design industry and carve out a unique niche that sets you apart from the competition. With a bold vision and a relentless pursuit of excellence, the sky's the limit for your design career aspirations.",

        authorName: 'Reene Wells',
        authorCredentials: 'Product Designer, Quotient',
        authorImgSrc: '/coca/reene-wells.jpg',
        authorDescription:
            'With expertise in user-centered design, product strategy, and creative problem-solving, Toni is a talented Product Designer at Quotient, known for delivering impactful and user-friendly design solutions.',
    },
    {
        title: 'Elements that may be missed when designing the UI',

        readTime: '10 min',
        date: 'November 10, 2023',

        imgSrc: '/coca/team-reviewing-a-project.jpg',
        imgAlt: 'Team reviewing a project',
        paragraphOne:
            'User Interface (UI) design is a multifaceted discipline that requires attention to detail and a deep understanding of user behavior. Despite careful planning, there are certain elements that designers may overlook during the UI design process. These overlooked aspects can impact the overall user experience and usability of a product. By identifying and addressing these elements proactively, designers can create more intuitive, engaging, and user-friendly interfaces that resonate with their target audience.',
        paragraphTitle: 'The Importance of Accessibility and Inclusivity',
        paragraphTwo:
            'One commonly missed element in UI design is accessibility and inclusivity. Designers may unintentionally overlook the needs of users with disabilities or impairments, leading to barriers that hinder their ability to interact with the interface effectively. By incorporating accessible design principles, such as proper color contrast, keyboard navigation, and screen reader compatibility, designers can ensure that their UI is usable by all individuals, regardless of their abilities. Prioritizing accessibility not only enhances the user experience for a wider audience but also demonstrates a commitment to inclusivity and social responsibility in design.',

        authorName: 'Roger Dzawin',
        authorCredentials: 'Chief Technology Officer',
        authorImgSrc: '/coca/roger-dzawin.jpg',
        authorDescription:
            'Skilled in strategic technology leadership, software development, and innovation, Toni excels as a Chief Technology Officer with a deep understanding of the industry and a proven track record of success.',
    },
];
