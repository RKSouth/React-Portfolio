# Deploying to GitHub, with a react application
When you are ready to deploy to your website (whatever build stage you are in there is a specific way to do it to make sure it goes right. Below is a list of instructions to guide you along the way:
1. Navigate to your VS-Code Integrated Terminal (Always check to see if you are in the right file before proceeding to the next step). 
2. Double check to see if you have committed your most recent changes (do this before deploying) by typing in git add . ENTER git commit -deploying to gh pages" and then ENTER git push origin main.
3. Follow this by entering npm install gh-pages - save-dev int your terminal and hitting enter.
4. Open your package.json file, and find : "scripts": { after the curly bracket you are going to want to insert "predeploy": "npm run build", "deploy": "gh-pages -d build", 

So that you have something like this:
"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
5.  Next, inside the very top curly bracket (on the same page) input the page you want to be deployed like this:
"homepage": "https://GuthubUsername.guthub/io/myportfoliosname
6. navigate to your github page for your project.
7. Select settings, scroll down until you get to the GitHub Pages section and look for the header that says source. There should be 3 little boxes underneath that sat branch root and save
8. Select the box to the right for the branches, and change it to main - make sure the middle one says root and then select save
9. Navigate back to your terminal and input npm run deploy then refresh your package json and confirm that it has a new section at the bottom that says "devDependencies": {
    "gh-pages": "^3.1.0"
  }
  10. Go back to where you were on your github account (with the page you wanted to be deployed) and change your branches again (I know) look for the branch called gh-pages, select that and then save again.
  11. When you are finished double check to make sure your deployment worked (it will take a minute).