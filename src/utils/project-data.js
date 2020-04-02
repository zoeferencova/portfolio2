const projects = [
    {
        code: "coordinator",
        logo: "coordinator-logo.png",
        title: "Coordinator Tool",
        description: "As a client service coordinator, I found that there were many aspects of my job that were repetitive and inefficient. I would write the same email dozens of times in one day and keep track of all of my correspondence in a notebook where I had to rewrite my task list every day. I created the coordinator tool to address these pain points and automate as much of the job as possible. The coordinator tool allows users to keep track of correspondence with contacts, automate emails based on saved templates, and keep track of KPI’s and other interesting stats using the dashboard’s interactive graphs built with D3. This app is an all-in-one solution that made my life as a coordinator a lot easier.",        
        images: ["coordinator-mockup.png", "coordinator-mockup2.png"],
        techstack: ["ReactJS", "D3.js", "Node.js", "Express.js", "PostgreSQL", "JWT"],
        links: {
            "Github Frontend": "https://github.com/zoeferencova/coordinator-tool",
            "Github Backend": "https://github.com/zoeferencova/coordinator-tool-api",
            "Website": "https://coordinator-tool.zoeferencova.now.sh/",
        },
        next: "/travelbuddy"
    },
    {
        code: "travelbuddy",
        logo: "TravelBuddy",
        title: "TravelBuddy",
        description: "For my first Bloc capstone project, I built a travel recommendation and information site using various APIs. Using the Foursquare API, the app allows the user to input any location and category and view a list of recommended establishments along with some useful information about each place. The user is also shown a map of each place from the Google Maps API, some background information from the Wikipedia API, and some recent news about the location from the News API. I had a lot of fun designing the graphics for this project and I particularly enjoyed creating this user interface as I personally love to travel and learn about new places.",
        images: ["travelbuddy-mockup.png", "travelbuddy-mockup2.png"],
        techstack: ["HTML", "CSS", "JavaScript", "jQuery"],
        links: {
            "Github": "https://github.com/zoeferencova/travelbuddy",
            "Website": "https://zoeferencova.github.io/travelbuddy/"
        },
        next: "/kocolabs"
    },
    {   
        code: "kocolabs",
        logo: "Kocolabs-logo.png",
        title: "Kocolabs",
        description: "Kocolabs is an e-commerce company that sells Korean skincare products with a mission of making skincare and self-care accessible, affordable, and inclusive for all demographics. I have been working with the founders of the company from the beginning to build their store on Shopify and help create their brand identity. Through this experience, I have learned Shopify’s Liquid template language. Kocolabs is set to officially launch this month (April 2020).",
        images: ["kocolabs-mockup.png", "kocolabs.png"],
        techstack: ["Liqiud", "Adobe Illustrator"],
        links: {
            "Website": "https://kocolabs.com/",
            "Instagram": "https://www.instagram.com/kocolabs/"
        },
        next: "/coordinator"
    },
];

export default projects;