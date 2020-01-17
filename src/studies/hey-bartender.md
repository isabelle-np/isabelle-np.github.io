---
id: 1
title: "Hey Bartender"
subtitle: "Location-based happy hour finder across the United States"
type: "Web Application"
image: ../images/case-icons/reloc8.png
---

##Project Overview

While interning at Cogo Labs, a startup incubator, I served as the design lead and React engineer alongside two engineers and two analysts. We were tasked to build and grow an internet business based on the general theme of "events" and to maximize 10 Key Performance Indicators (KPIs) regarding user interaction and revenue. Utilizing an Agile (Kanban) development approach, Hey Bartender grew from an idea to a live application with a 12,000+ active user base across all 50 states–all in 10 weeks.

###Technology Stack
    -React + Redux
    -Styled Components
    -Django Rest Framework
    -Amazon S3

###Timeframe
10 Weeks

###Key Performance Indicators
    -Total Visits
    -Total Organic Visits
    -Total Time on Site
    -Bounce Rate
    -Page Views per Visit
    -Returning Visitors
    -Peak Arrivals in a Day
    -Lowest Cost Per Click on an Ad (CPC)
    -Profit Margin
    -VPA (Revenue/Visits)

##Define
###The Prompt
Within the category of "events", we hypothesized potential high-growth sectors and tested them against the data by querying Cogo's internal databases. We discovered a large market within the category of Food and Drinks during our preliminary research. Wanting to narrow our efforts into a more niche yet sizable market, we drilled down the data to find two leads: happy hours and New York City.

###The Problem
What solidified our decision to enter this market was our competitors. I found the websites of our competitors, both direct and indirect, to be difficult to navigate and poorly designed. When I conducted preliminary user interviews, mutiple pain points were repeatedly vocalized regarding the user experience of our competitors' products. One aspect in particular was the overwhelming choice paralysis users faced. After a tedious form, users are presented an endless list of restaurants and bars without any accompanying details about the specials, the price range, nor any images. They would then rely on Yelp or Google Reviews for the next step in the decision process. Overall, users were not given enough information from a single source in order to make a decision on where to go for happy hour. We knew that we could provide users a more personalised, efficient, and enjoyable way to find happy hours near them.

###The Users
While we had defined a problem we could address within a profitable market, we were unable to clearly define our target demographic through Cogo's databases. After researching into how bars and restaurants market their happy hours and to what demographic, I developed initial personas to guide our process. I then iterated on these personas after running a series of Facebook advertising campaigns and collecting analytics on what demographics responded well to our targeted ads. The data sourced from Facebook allowed me to clearly define our target users and to develop guiding personas like Cara and Jonathan.

INSERT PERSONAS

###Success
While we were given 10 KPIs, we prioritize certain metrics to reflect our definition of success for Hey Bartender. Based on the user's ideal experience with our website, we wanted to focus on the following KPIs:

Total Visits
Bounce Rate
Page Views per Visit
Returning Visitors
Peak Arrivals in a Day
Lowest Cost Per Click on an Ad (CPC)
By prioritizing these metrics, we were able to strategize our design, development, and marketing processes.

##Ideate
###Wireframes
Having established our technology stack, I wireframed our web application, starting with our Most Viable Product (MVP). We wanted an interactive experience that wouldn't require a complicated onboarding process, so we emulated Tinder's focus of one profile at a time to help users with choice paralysis. We also wanted a very simplified version of our end product and decided on a random happy hour generator for the city of New York. In order to meet our deadlines for the launch of our MVP, features such as the date selector were not included in our live MVP.

###Mockup and Style Guide
During the wireframe hand-off process, the product side of our team had difficulty with naming conventions and making our code as clear and concise as could be. To solve this issue, I led a meeting with all members of our team to establish a common vocabulary in naming UI components on our site, as well as event trackers to analyze our users and their behaviours. By building a common vocabulary, we were able to work more efficiently and could all partake in conversations regarding our website. I also established scalable design patterns and code practices which allowed us to quickly grow our product beyond the MVP stage.
I also created a style and branding guide to assist the engineers with the development of our site. Prior to the launch of our MVP, and subsequent update releases, I did a front-end style pass through the website to ensure consistancy across all devices.

IMAGE OF STYLE GUIDE AND LINK

##Iterate
###Ad Strategy
After our MVP went live, we launched a series of Facebook advertisements in order to drive traffic to our website and to gather feedback on user interaction. We were instructed to use Facebook and Instagram ads as our only sources of paid traffic, with a budget of $7500 for 10 weeks. Working with the analysts, we designed various advertisements and A/B tests in order to improve our link conversions and the CPC of our ads. After running A/B tests, we found that the best ads featured images of women, had minimal text, and ran on Facebook only, rather than both Instagram and Facebook.

###User Testing
Prior to wireframing and designing the next feature, I conducted user testing with a sample hand-off 7 participants both in and out of our target demographic. Since our data reflected that most of our users were accessing our website on a mobile device, I tested it with both Android and iOS devices. I compiled my findings in a user testing report which included bugs, usability issues, content issues, interface issues, and interesting findings. Our most notable takeaways included confusion around our Yelp integration, the copy on the homepage, and the user flow past Hey Bartender.

USER TESTING REPORT

###Next Iteration
Our next iteration was to expand to other cities across the US and to fix notable concerns that were brought to our attention during testing. This included optimizing advertisement space and enhancing the mobile experience. Simply by fixing the unecessary scrolling for mobile users, we were able to decrease our bounce rate from 70% to 55%.

When we asked users "After you found a special you liked on our site, what would you do next?", they responded by going to Yelp to view the rating, reviews, and to look at the restaurant's website. In order to improve our time on site KPI and to improve the user experience, our next feature utilized the Yelp API to show users the restaurant rating, the number of reviews on Yelp, telephone number, and a link to the website. While we initially designed for information such as parking, dress code, and ambiance, we had to reassess based on time constrainsts and API data restrictions.

##Final Iteration
At the end of the 10 week internship, Hey Bartender was in over 120 cities across the US, had 497 likes and 520 follows on Facebook, and 109 Instagram followers.

###Final KPIs

###Next Steps
This project is being taken over by a team at Cogo Labs, thus changes to Hey Bartender's style and functionality may be changed. I did, however, design what I hoped Hey Bartender could one day become, an interactive map where users can explore areas near them.

##Lessons Learned
###Compliance
Especially since we were working with APIs, reaching out to users online, and scraping data, I learned a lot about compliance in regards to technology in order to make sure that we were within good standing. By making compliance a priority from the beginning, we were able to prevent unexpected pivots during the design and development stages.

###The Development Cycle
While the designer interns were not obligated to participate in the development of the project, I wanted to jump in the front-end. By learning from full time designers and engineers at Cogo Labs, I was able to learn React and Redux, as well as some back-end skills during my time there. I also had first hand experience on the hand-off process and learned ways to make the process more efficient and easier for the engineers.

###Facebook Ads
Based on Facebook's algorithm, advertisements work best with high relevance scores and long running lifetimes. If we were to redo this project, we would focus on few ads and run them for the duration of the 10 weeks.

###Data and Design
The most important lesson for me was how powerful data can be when applied in the design process. Including quantitativev data into the design process allowed me to not have to make assumptions about the user. The qualitative feedback from user testing was also much more informative because I looked to the data from A/B tests first, and asked users to explain the same qualitatively.