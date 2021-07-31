# Full-stack Developer Role Take-Home Problem
​
## Setup
- RSpace is a tool used by research labs and academics for managing experimental data. As part of that, they must maintain an inventory of biological samples. Our new Inventory Management module (currently in alpha) aims to provide this functionality integrated with our existing notebook toolset.
- We have a public API that you can access by simply creating an account on our demos site, with the living documentation of those endpoints similarly available. See links in the footer of this document and the "Getting Started" section below.
- To demonstrate your skills and experience, we'd like you to prototype a simplest Java/Spring application that a lab technician could theoretically run in some way to get a report on their samples.
- If anything isn't clear or if you have any question please do feel free to ask.
​
## Tasks
​
### Required
- Utilise the API to print basic data about samples belonging to the user.
  - the app could be web-based, or command line, or it could be just a code run by the unit test. THE ONLY REQUIREMENT is that it's based either on Spring or Spring Boot.
- We suggest using RestTemplate from Spring, but if some other technology suits you better that's fine.

### Optional
- Display other data that may be useful to lab technicians, such as where they would find the samples (i.e. the container they are in), or with highlighting things like the close-to-expired samples.
- Error handling: don't feel that you need to deal with everything that could possibly go wrong, but failing gracefully and displaying/logging details of the error would be nice.
​
## Expectations
- We estimate no more than a few hours work; more time spent is definitely not a key metric.​ 
- We’re looking for code that is clean, readable, testable and maintainable.
- We don't expect a full user interface; whether you design a very simple web app, a command line tool, or just an output printed by the unit test is fine. 
  - saying that, if you decide to add a user interface it should be either web or command line interface, don't use standalone desktop technologies like Swing.
- We expect it won't get you longer than a week to get back to us, but if for some reason you need more time let us know.

## Getting Started
- Sign up at the demos link at the bottom of this document
  - You'll need the Signup code of "inventory2020"
- Get an API key and check it works
  1. Go to 'My RSpace page' (link in top right), then click on 'My Profile' icon
  2. Scroll to the bottom of the page ("Manage API key" section) and press "Regenerate Key", then enter your password
  3. An API Key is now displayed which you should be able to use when accessing the API
  4. This can be tested by playing around with the Swagger docs (link below)
  5. If you have any trouble with these steps then let us know!
- Next, we suggest using the API, as well as the Web interface, to create some test data
  - You'll see a link to the new Inventory system highlighted in the nav bar (next to 'Account' you used before)
  - You can create a sample from the "Create" menu in the top-left, which will open a form on the right. Only a name is required.
  - A couple of samples with expiry dates soon and far in the future should be sufficient for testing.
- Now, write some code!
​
## Submission
- Please email
  - An accessible link to your code.
    - we suggest GitHub, but any code repository we can access is fine.
  - A README, could be just a paragraph or so of text, explaining any design decisions, instructions to run the code, and other relevant notes.

## Next Steps
- If your code runs and makes sense, we will look to schedule an interview.
   
Thanks for taking part, and we're looking forward to seeing what you have to show!
​
​
​## Links
- [demos.researchspace.com Signup](https://demos.researchspace.com/signup)
- [Swagger Docs](https://demos.researchspace.com/public/apiDocs)
