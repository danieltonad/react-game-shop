## The Test

-   We'd like you to create a 2 step application. You are required to write custom TypeScript / JavaScript, HTML5 and SASS to reproduce a working version of the provided designs (see the design folder). We've configured a starter framework which your custom code should be added to, installation notes have been provided below. **Please use this framework**.

-   The provided package.json file contains some additional packages. You are **not** required to use them all and can disable any you don't require. You may use additional packages but please provide references to these in your notes. Note all packages used will be reviewed and may impact on your final score if they have impacted on the overall difficulty of this test. Please avoid using any UI Libraries so that we can get a better understanding on how you approach and build your components and designs.

### Requirements

#### Step 1 - Store (see design files in /design/Store)

-   Display the products and allow users to add items to the basket.
-   Once an item has been added to the basket, it cannot be added again (the item should be disabled, see design files). It can however be removed from the basket and the user can then add it again.
-   Multiple items can be added to the basket.
-   The basket total should display the total prices of all items within the basket.
-   If the basket contains items, the continue button should be enabled and when clicked the user should be redirected to the Checkout Step. Otherwise it should be disabled and not allow you to proceed.

#### Step 2 - Checkout (see design files in /design/Checkout)

-   The basket should display all items added on the Store Step.
-   Items can be removed on this step and the changes should be reflected on the Store Step.
-   User should be able to navigate back to the Store Step using a button.

### Installation Notes

#### Setup

-   Please ensure that you have at-least Node.js version 14.18 installed.
-   To setup the project, run "npm install" from the project folder.
-   To start the application, run "npm run dev" from the project folder.
-   Replace the [NAME] placeholder inside the `<title>` tag within the index.html file with your own name.
-   You can now start coding!

#### Folder structure

-   /src - Folder where you should write your project code
-   /src/sass - Folder where you should write your style rules
-   /public/assets - Folder containing all of the required assets
-   /design - Folder containing the design files which you should replicate

#### Setup files (please avoid editing the below files)

-   /README.MD
-   /tsconfig.json
-   /tsconfig.node.json
-   /vite.config.ts
-   /src/vite-env.d.ts

### Design Notes

#### Hex Codes:

-   Green: #4ad87f
-   Font Primary: #010000
-   Font Secondary: #4a4a4a
# react-game-shop
