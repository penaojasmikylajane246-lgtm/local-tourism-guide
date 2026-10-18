## Task 1 — Sector Selection

| Item | Example |
| :--- | :--- |
| **Sector** | Tourism & Cultural Innovation|
| **Local Challenge** | Tourists have difficulty finding local tourist spots, cultural attractions, and activities in the community. |
| **Target Users** | Local tourists, visitors, and tourism businesses. |
| **Proposed Project** | Local Tourism Guide |
| **Key Features** | Tourist spot directory, cultural event updates, and travel guides with directions. |

## Task 2 — Zero-Shot Prompting
**Objective: Observe what Copilot generates from a basic prompt without examples.**

**Exact Prompt:**
> Create a simple webpage for a Local Tourism Guide that helps tourists find local tourist spots, cultural attractions, and community activities in Marinduque.

**Actual Copilot Output:**
Created index.html, a responsive Marinduque tourism guide with searchable and filterable attractions, community experiences, and links to map searches. It opens directly in a browser; photos and fonts load from online sources.
Verified the filters and search in-browser, and checked the desktop and mobile layouts.

**What Worked:** Copilot generated a simple website that included information about local tourist spots and cultural attractions in Marinduque. 

**What Needs Improvement:** It did not clearly identify the target users, such as local tourists, visitors, and tourism businesses, or include all the required key features, such as cultural event updates and travel guides with directions. 

**Next Action / Verification:** Rewrite the prompt using Role, Task, Context, Constraints, Expected Output, and Acceptance Criteria (Task 3). 


## Task 3 — Improve: Anatomy of a Prompt
**Objective:** Improve output relevance using structured prompt components.

**Exact Prompt:**
> Act as a frontend web developer. Create a responsive single-page Local Tourism Guide for tourists and visitors in Marinduque. Include a tourist spot directory, cultural attraction information, community activity updates, and travel guides with directions to help users explore local destinations. Use semantic HTML, CSS, and vanilla JavaScript. Do not use external frameworks, backend services, or live tourism data. Provide the required frontend files and implement interactive features that allow users to search and filter tourist spots and access map links for directions. The interface must remain readable on mobile screens and desktop computers, with easy-to-use navigation and clearly organized information for tourists, visitors, and local tourism businesses.

**Actual Copilot Output:**
Updated index.html with three route-based travel guides and map directions, a community activity board clearly marked as non-live, and a mobile menu. The existing spot search and category filters remain in place. Verified the menu, filters, route links, mobile layout, and markup diagnostics. No frameworks, backend, or live tourism data are used.

**What Worked:** The site provides working spot filters and map links, with static community notes and responsive layouts.

**What Needs Improvement:** The site is delivered as one HTML file with CSS and JavaScript inline. Activity information is general rather than a live or date-specific calendar, as requested. Images and fonts depend on external services.

**Next Action / Verification:** Open index.html in a browser. Try a spot search and category filter, follow a map link, and check both desktop and mobile widths.

## Task 4 — Few-Shot and Role Assignment
**Objective:** Explore how examples and specialized perspectives influence AI output.

**Experiment A: Few-Shot Prompting**

**Exact Prompt:**
> Create content for my Local Tourism Guide website in Marinduque using the following format.

Example 1:
Tourist Spot: Poctoy White Beach
Category: Nature & Beaches
Description: A beach in Torrijos where visitors can enjoy the sea and scenery.

Example 2:
Tourist Spot: Boac Cathedral
Category: Heritage
Description: A historic church located in Boac, Marinduque.

Generate four additional tourist spot entries using the same format. Include the tourist spot name, category, and short description. Use simple words and organize the entries clearly for the website. Do not invent specific details that cannot be verified. Label information that needs local confirmation.

**Actual Copilot Output:**
Tourist Spot: Tres Reyes Islands
Category: Nature & Beaches
Description: A group of islands off the coast of Gasan. Boat access and sea conditions need local confirmation.

Tourist Spot: Maniwaya Island
Category: Nature & Beaches
Description: An island destination in Santa Cruz with beaches and coastal scenery. Boat transfers need local confirmation.

Tourist Spot: Mount Malindig
Category: Nature & Outdoors
Description: A mountain in southern Marinduque. Trail access and hiking conditions need local confirmation.

Tourist Spot: Bathala Caves
Category: Nature & Caves
Description: A cave attraction in Marinduque. Current access and safety requirements need local confirmation.

**What Worked:** The entries follow the requested format and flag access or safety details for local confirmation.

**What Needs Improvement:** The generated entries were provided as text, not added to the website’s directory.

**Next Action / Verification:** Before publishing, confirm each destination’s name, location, and current access arrangements with local sources. Then add the verified entries to the directory.

**Experiment B: Role Assignment**

**Exact Prompt:** 
> Act as a frontend accessibility reviewer. Examine the generated Local Tourism Guide website for Marinduque. Identify problems involving HTML semantics, keyboard access, labels, navigation, mobile layout, and visual clarity. Recommend targeted improvements without changing the project's scope.

**Actual Copilot Output:** Findings included mobile navigation potentially leaving keyboard focus in a hidden menu, no skip link to main content, a search field without a persistent visible label, very small supporting text, and map links opening new tabs without warning. The page otherwise uses appropriate semantic landmarks, headings, a labeled search input, native filter buttons, and an announced result count.

**What Worked:** The review identified specific improvements without recommending a broader redesign.

**What Needs Improvement:** The review provided recommendations only; no fixes were implemented or verified.

**Next Action / Verification:** Add a skip link, visibly label search, and improve focus handling for the mobile menu. Test keyboard navigation and text readability at phone and desktop sizes.

## Task 5 — Analyze Structured Reasoning and Refinement
**Objective:** Use AI-assisted analysis to identify and improve a specific implementation weakness.

**Exact Prompt:**
> Review my Local Tourism Guide website for Marinduque. Check whether the tourist spot search and filter features work correctly, whether the HTML uses appropriate semantic elements, and whether the interface is usable on mobile screens. Identify the two most important implementation issues based on the provided code. Recommend the smallest appropriate corrections and explain how I can test them.

**Actual Copilot Output:**
Search misses category matches. Searching “Poctoy” returns the expected spot, and the Nature filter returns three spots, but searching “nature” returns only Maniwaya Island. The search check searches each card’s data-search text and visible card text, but not its data-category value. Include the category label in the text being searched.

The desktop navigation gets cramped near the mobile breakpoint. Just above 561px, desktop links become narrow and wrap. Raise the mobile-menu breakpoint to around 640px.

Test by searching nature and Poctoy, then checking the navigation at 560px, 600px, and 641px.

**What Worked:** Browser checks confirmed that searching by a spot name works, the Nature filter returns three spots, and the page fits the tested mobile viewport.

**What Needs Improvement:** Category terms are not consistently searchable, and desktop navigation wraps near the mobile breakpoint. These fixes were recommended but not implemented.

**Next Action / Verification:** Include each spot’s category in search matching and raise the mobile-menu breakpoint. Verify that nature returns all three nature spots, Poctoy returns one, and navigation is usable at the three suggested widths.

## Task 6 — Compare and Submit
**Objective:** Evaluate how your prompting techniques influenced the final prototype.

### Final Comparison Table

| Technique | Observation |
| :--- | :--- |
| **Zero-Shot** | The AI generated a tourism website with local tourist spots and cultural attractions. However, some required features, such as cultural event updates and travel guides with directions, were not clearly included.|
| **Structured Prompt** | The website became more organized and relevant because the prompt specified the target users, required features, technologies, and design requirements. |
| **Few-Shot** | The examples helped the AI follow a consistent format for tourist spot names, categories, and descriptions. |
| **Role Assignment** | The accessibility review helped identify possible issues with HTML semantics, keyboard access, labels, navigation, mobile layout, and visual clarity. |
| **Structured Analysis** | Copilot identified a possible search issue. Testing showed that searching for “nature” displayed only Maniwaya Island instead of all three expected nature spots, while searching for “Poctoy” returned the expected result. The search issue still needs correction and retesting. |

## Final Reflection
This activity helped me understand how different prompting techniques affect AI-generated websites. Zero-shot prompting provided a basic starting point, while structured prompting produced a more organized result by specifying the requirements. Few-shot prompting helped maintain consistent content formatting, and role assignment helped identify possible accessibility problems. Structured analysis also helped me examine the search function. I learned that AI-generated code still needs to be checked, corrected, and tested before considering the project complete.

