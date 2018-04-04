# Band Website
Setup (Using Ubuntu Mate VM)
1. Download all files from the main directory and scripts subdirectory.
2. Start a command line window where you downloaded the files.
3. Type: dpd create bandwebsite-backend
4. In bandwebsite-backend/resources, add a folder called reviews.
5. Download bandwebsite-backend/config.json to the reviews folder.
6. Type: cd bandwebsite-backend
7. Type: dpd
8. Open a second command line window at the root of the downloaded files. (same folder as step 2)
9. Type: browser-sync start --server --files "*.html, stylesheets/*.css, scripts/*.js"
10. The webpage should be viewable at http://localhost:3000

Instructions for Using the Site
1. The Home Page allows for the individual band to sign up/log in to the site. It also displays the most recent events added for feedback as well as buttons for going to that band's band page as well as a review button to redirect to the review form. Signing up allows for the band to create their own page with a description. Logging in redirects the user to their band page.

2. Clicking "More Info" will lead to the band page for that particular band. It will display the band's name, description, and their list of events. Each event will have a review button, where it will redirect to the review form.

3. Once an event is added (with the date and location), then it will appear on their band page. It will be open for attendees of their events to click and submit their review.

4. Upon clicking the review button, it will redirect the user to the review form. It requires the name, rating, and description of the review for submission. Once submitted, the user will be redirected to the Band's review page, where it will show all the reviews.



