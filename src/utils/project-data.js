const projects = [
    {
        code: "coordinator",
        title: "Coordinator Tool",
        description: "As a client service coordinator, I found that there were many aspects of my job that were repetitive and inefficient. I would write the same email dozens of times in one day and keep track of all of my correspondence in a notebook where I had to rewrite my task list every day. I created the coordinator tool to address these pain points and automate as much of the job as possible. The coordinator tool makes tracking reach-outs and organizing tasks extremely easy. The main list tab and completed tab can be used to track, change and revert the status of items. Users can also link the project or contact to external sites (such as a project page or contact page from an external CRM system) for easy navigation. Users are able to create email templates for emails that are commonly sent which then template in values from the item list so that emails can be composed and populated with values for each list item in one click. The dashboard page keeps track of some key statistics that allow the user to keep track of request volume trends as well as other insightful stats and KPI's.",
        images: ['coordinator-mockup.png'],
        techstack: ["ReactJS", "D3.js", "Node.js", "Express.js", "PostgreSQL", "JWT Authentication"],
        next: "/travelbuddy"
    },
    {
        code: "travelbuddy",
        title: "TravelBuddy",
        description: "For my first Bloc capstone project, I built a travel recommendation and information site using various APIs. Using the Foursquare API, the app allows the user to input any location and category and view a list of recommended establishments along with some useful information about each place. The user is also shown a map of each place from the Google Maps API, some background information from the Wikipedia API, and some recent news about the location from the News API. I had a lot of fun designing the graphics for this project and I particularly enjoyed creating this user interface as I personally love to travel and learn about new places.",
        images: ["travelbuddy-mockup.png"],
        techstack: ["HTML", "CSS", "JavaScript", "jQuery"],
        next: "/kocolabs"
    },
    {   
        code: "kocolabs",
        title: "Kocolabs",
        description: "Kocolabs description",
        images: [],
        techstack: ["Liqiud (Shopify template language)", "Adobe Illustrator"],
        next: "/coordinator"
    },
];

export default projects;