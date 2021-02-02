# Task for GreeningAustralia

## Use Redux ToolKit, React Hook Forms, and React-Bootstrap

## Packages to use

- react-hook-form react-redux react-router-dom @reduxjs/toolkit react-bootstrap bootstrap

## Brief

<pre>
Create a simple form wizard with relevant navigation buttons (Next, Previous).

Under each page, show the payload json being populated on every step.

1st Page:
- Project Name
- Site Address
- User Details

2nd Page:
- Project options 1 : Show a few random options to accept checkbox inputs
- Project options 2 : Show a few random options to accept checkbox inputs
- Current Completion Status: Show a slider component to indicate percentage project completion status

3rd Page:
- Project Information text area input control
- User Comments text field input control

4th Page:
- Display a final page confirming details and showing the json payload with user added data.

- Add validations where applicable
- Add test cases where possible
</pre>

## Brief Response

- Have deployed the build version at https://jacintomendes.com/apps/greening-demo/
- End to End testing (via cypress) video output can be seen here - https://youtu.be/iDyFn1ykxUY

## Installation

- `git clone https://github.com/juhsinto/Greening_Code_Demo.git`
- Change Dir `cd Greening_Code_Demo` & Install dependencies `npm install`
- To run snapshot tests `npm run test`
- To run E2E tests `npm run e2e` - Note: You need to have the app running on localhost:3000 (`npm start`)
