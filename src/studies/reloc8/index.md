---
id: 3
title: "Reloc8"
subtitle: Salary calculator based on location and lifestyle
type: Web Application
featuredImage: logo.png
nextPage: /terrier-card
previousPage: /jpmorgan-chase
---

<style>

    .h2 {
        margin-top: 0;
    }
    
    .doubleHeader {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }

    .afterImg {
        margin-top: 3rem
    }

</style>

<img src="./home.png">
<h2 class="h2 afterImg">Project Overview</h2>
<p class="body">Reloc8 compares salaries in different cities by calculating disposable income after tax and essential expenses such as rent and groceries. Reloc8's uniqueness lies in its consideration of federal and state taxes and lifestyle choices, all in a simple, modern UI. It was awarded Best Financial Hack from Capital One and Best Business Plan from Cornell University.
</p>

##Define
<h3 class="doubleHeader">The Problem</h3>
<p class="body">I competed in the Big Red Hacks hackathon hosted by Cornell University as the only student from Boston University. My team and I decided to focus on the areas of financial literacy and fintech. As a then-senior in college, I reflected on my own experiences: I was about to move to a new city in a new state for my first job. A major source of anxiety was the uncertainty of what my cost of living would be, beyond broad comparisons to my current location. I hypothesized that college graduates and young professionals often move to new cities and relocate for work early on in their careers. This is also a time where they cannot be financially flexible. With numerous factors to consider, young professionals struggle to conceptualize the impact that taxes and lifestyle choices have on their financial situations.</p>

<img src="/salary.png">

<h3 class="afterImg">The idea</h3>
<p class="body">After sharing my idea, the team was hesitant as to whether or not it was innovative enough and if young adults even faced this issue. I asked my team members to continue challenging my concept to refine my reasons for choosing one idea over the other. Divided between two different concepts, I recommended we break into pairs and interview users for ten minutes. I conducted multiple rounds of concept testing with college students during which I found my initial assumptions to be confirmed: the majority of interviewees were moving or planning to move to another city for work. I also discovered that young professionals spend a copious amount of time researching and comparing employment offers in different cities with varying salaries. My teammate and I brought back our findings and presented the case for taking on this project based on the response from users, its feasibility, and our range of skills. We decided as a team to develop this idea further to ensure young professionals have a better understanding of how their expenses will pan out in a new city before moving.

</p>

<img src="/housing.png">


<h3 class="afterImg">The Solution</h3>
<p class="body">We iterated on my original concept into a product that factors in a user's income and select behavior indicators to estimate how much money would be left after essential and lifestyle expenses are paid. We also took into consideration the user's current lifestyle and how much it would cost to sustain it. Factors such as roommates, type of housing, mode of transportation, and the number of meals eaten out personalize the algorithm to calculate a realistic estimation.</p>

<img src="/lifestyle.png">


<h3 class="afterImg">The Business Plan</h3>
<p class="body">To make this product profitable, Reloc8 capitalizes on the numerous costs involved with moving. Reloc8 would serve as a platform to host external partners and vendors by providing meaningful resources for our users. This includes negotiated packages and direct links to moving companies, truck rentals, real estate agencies, property listings, and home owner's insurance providers. By the end of the hackathon, we integrated the Zillow and Realtor.com APIs to display rentals and homes available in both cities.
</p>
<img src="/market.png">

<h2 class="afterImg">Build</h2>

<h3 class="doubleHeader">Wireframes</h3>
<p class="body">As the only team member with UI development and design experience, I took the lead by shaping our product's front-end. With only 36 hours to complete the product, I quickly wireframed a simple flow and structure for the website. Despite this general framework, I made many design decisions on the fly while I was developing the front-end.</p>

<img src="/wireframe.png">

<h3 class="afterImg">Front-End</h3>
<p class="body">Despite my confidence that I could finish the application within 36 hours, I knew compromises had to be made. For example, I focused on developing a desktop version of the product, sacrificing a mobile-first approach and responsiveness. In retrospect, utilizing a preprocessor such as Sass would have increased my productivity with styling. Though, given that I was both the designer and the front-end engineer, I prioritized a cohesive look and feel across the product.
</p> 
<img src="/result.png">

<h3 class="afterImg">The Calculations</h3>
<p class="body">To calculate the costs of living, our algorithm was based on data from the U.S. Bureau of Labor Statistics and the Census Consumer Expenditure Surveys. We developed price baskets representative of different States and used them as a baseline for comparison, paired with the user's inputs on lifestyle. We also utilized the Taxee API to calculate how much we had to deduct due to federal and state taxes.</p>

###Back-end Blockers
<p class="body">Unfortunately, we were unable to get the back-end APIs working. Six hours before the deadline, I pivoted and hardcoded the data to mock the interactions on our product. Being the only front-end engineer on the team, I developed the entire working prototype before presenting it to the judges.
</p>

<img src="twoshort.png">

<h2 class="afterImg">Lessons Learned</h2>
<h3 class="doubleHeader">Disagree (Productively), Decide, and Commit</h3>
<p class="body">As a team with strong personalities, we disagreed at the beginning during the ideation phase. We all had different experiences and different thoughts on what would be the best idea to pursue. I soon noticed that while we were challenging each other with valid points, we weren't doing anything. Therefore, I recommend we take action and start interviewing our users. At the end of the hackathon, we all agreed that challenging each other was a significant factor in our success. We had to look at our solutions objectively. But more importantly, we took these ideas to our users and tested our assumptions. After we decided on our plan of action, everyone was committed to building the best product possible.</p>

<img src="/twocities.png">
