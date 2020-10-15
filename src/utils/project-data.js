const projects = [
    {   
        code: "community",
        title: "CommUnity",
        subtitle: "CommUnity - a community platform that makes it easier for neighbors to help each other out during the pandemic.",
        description: ["CommUnity is a platform that enables the sharing of services and resources to ensure no one is left stranded during the Coronavirus outbreak. Users can specify a location and neighborhood radius in which they can find posts from other users offering or requesting a range of services, then communicate the details in a private chat.", " I created the app with simplicity and ease of use in mind and tried to make it aesthetically and functionally as straightforward as possible. In order to let users find other posts within their location radius, I used PostGIS which provides spatial objects for the PostgreSQL, allowing storage and query of information about location and mapping. I used the Google Maps API for my map component and an external Google map search library for geocoding and location searching. I also had a really fun time figuring out how web sockets work and using Socket.io to build the live chat feature."],
        images: ["community-main.png", "community-chat.png", "community-post.png"],
        techstack: ["ReactJS", "Node.js", "Express.js", "PostgreSQL", "JWT","Socket.io", "Google Maps API"],
        links: {
            "Github Frontend": "https://github.com/zoeferencova/community-frontent",
            "Github Backend": "https://github.com/zoeferencova/community-api",
            "Website": "https://comm-unity.now.sh/",
        }
    },
    {
        code: "coordinator",
        title: "Coordinator Tool",
        subtitle: "Coordinator Tool - a productivity app that automates most of the boring part of my job as a client service coordinator.",
        description: ["I’m currently working as a client service coordinator while I navigate my career change into web development. After a few months in the coordinator biz, I started to realize that parts of my workflow weren’t particularly efficient. I would write the same email to different people about 100 times per day and keep track of all of my correspondence in a notebook where I had to rewrite my task list on a daily basis.", "My first course of action when I learned how to build web apps was to create the coordinator tool to address these pain points and automate as much of the job as possible (which in turn gave me more time to code, yay!). The coordinator tool allows users to track correspondence with contacts, automate emails based on saved templates, and keep track of KPI’s and other interesting stats using the dashboard’s interactive graphs. This was my first time trying my hand at data visualization and I went with D3 which I am now a huge fan of. Me and a couple of other coordinators at my company have been using this app for about half a year now and not to brag but it makes life a looot easier."],        
        images: ["coordinator-dashboard.png", "coordinator-main.png", "coordinator-templates.png", "coordinator-account.png"],
        techstack: ["ReactJS", "D3.js", "Node.js", "Express.js", "PostgreSQL", "JWT"],
        links: {
            "Github Frontend": "https://github.com/zoeferencova/coordinator-tool",
            "Github Backend": "https://github.com/zoeferencova/coordinator-tool-api",
            "Website": "https://coordinator-tool.zoeferencova.now.sh/",
        }
    },
    {   
        code: "kocolabs",
        title: "Kocolabs",
        subtitle: "Kocolabs - an online marketplace for Korean cosmetics, beauty supplements, and skincare devices.",
        description: ["Kocolabs is an e-commerce company that sells Korean skincare products with a mission of making skincare and self-care accessible, affordable, and inclusive for all demographics. I have been working with the founders of the company from the beginning to build their store on Shopify and help create their brand identity. I have integrated external Shopify apps for reviews, product filters, live chat, and a loyalty program which has noticeably driven customer engagement and boosted sales. I am also currently handling all of the email and social media marketing responsibilities.", "Through this experience, I have learned Shopify’s Liquid template language mainly through trial and error, and I think that it has been really good practice in working with a codebase that isn’t mine to begin with and trying to apply my JavaScript knowledge to the Ruby syntax that Liquid uses. While I plan to continue to work with Kocolabs in my free time, I am not pursuing a full-time job as a Shopify developer as I want to continue to grow as a full stack and React developer at this time."],
        images: ["kocolabs-main.png", "kocolabs-collection.png", "kocolabs-product.png"],
        techstack: ["Liqiud", "JavaScript", "CSS", "Adobe Illustrator"],
        links: {
            "Website": "https://kocolabs.com/",
            "Instagram": "https://www.instagram.com/kocolabs/"
        }
    },
    {
        code: "travelbuddy",
        title: "TravelBuddy",
        subtitle: "TravelBuddy - a travel recommendation and information app (like if Yelp and WIkipedia had a baby).",
        description: ["For my first bootcamp capstone project, I built a travel recommendation and information site using various APIs. Using the Foursquare API, the app allows the user to input any location and category and view a list of recommended establishments along with some useful information about each place. The user is also shown a map of each place from the Google Maps API and some background information from the Wikipedia API. I had a lot of fun designing the graphics for this project and I particularly enjoyed creating this user interface as I personally love to travel and learn about new places.", "It probably shows, but this was the first full app that I built and I like to think that I’ve come a long way since TravelBuddy. One of my favorite things about software development is being able to constantly learn and I think that a good measure of growth is being able to look back at code you wrote a couple of months ago and cringe a little :)"],
        images: ["travelbuddy-main.png", "travelbuddy-info.png"],
        techstack: ["HTML", "CSS", "JavaScript", "jQuery"],
        links: {
            "Github": "https://github.com/zoeferencova/travelbuddy",
            "Website": "https://zoeferencova.github.io/travelbuddy/"
        }
    },
];

export default projects;