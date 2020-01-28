---
id: 6
title: "Powerlifting DB"
subtitle: "Relational database design for a powerlifting federation"
type: "Database Modeling"
featuredImage: openpl.png
nextPage: /hey-bartender
previousPage: /avrio
---

<style>

    .h2 {
        margin-top: 0;
    }
    
    .doubleHeader {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }

    .link {
        padding: 0;
        text-decoration: none;
        color: #ef8576;
        transition: color 0.5s ease;
    }

    .link:hover {
        color: #E74832;
    }
</style>

<h2 class="h2">Project Overview</h2>

One of my passions outside of technology is powerlifting. It's an individual sport where competitors have three attempts per exercise to lift as heavy as they can on the squat, bench, and deadlift. Originating from strength training traditions in ancient Greek and Persia, powerlifting competitors are judged against others of the same gender and weight class (and age division if applicable) to level the playing field.

Utilizing an open-source data set of powerlifters and their performance at federation-approved meets, I organized the data into a relational database for SQL Server.

![Powerlifting Database Model](dbmodel.png)

I organized the data into four distinct tables, Competitor, MeetRegistration, Meet, and MeetResult.

Originally, I had included weight as a field in the Competitor table; powerlifters often fluctuate in weight during the training season and cut (rapidly lose weight) before a competition. Powerlifters will also compete at different weight classes in a particular season or throughout their career, so I instead moved this information to the MeetResult table, of which one competitor can have multiple MeetResults. This allows for faster queries to calculate a powerlifter's Wilks Score, a coefficient that can be used to measure the strength of a powerlifter against other powerlifters despite the different weights of the lifters.

The MeetRegistration has a one-to-many relationship with the Competitor table to ensure that one competitor can register for multiple meets. Required fields include the competitor's division, age class, weight class, and equipment, represented by an enum of "WRAPS" or "RAW". Similarly, one Meet can have multiple MeetRegistrations and multiple MeetResults. If a competitor fails any lift, the resulting column will be 0. The MeetResult total is calculated by the heaviest, valid weight for each of the three lifts.

##Lessons Learned
<h3 class="doubleHeader">Practice What you Learn</h3>
After taking online courses to learn more about relational databases and data modeling, I decided to practice my own. As a kinesthetic learner, applying my knowledge in a new scenario further enforces the concepts and theories. By combining it with a seemingly unrelated field, I had to focus on what data is relevant to competitors, meet organizers, and federations.

This project uses data from <a href="https://www.openpowerlifting.org" class="link">the OpenPowerlifting project</a>. You may download a copy of the data at <a href="https://gitlab.com/openpowerlifting/opl-data" class="link">GitLab</a>.