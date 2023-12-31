# _Fit-Ledger_

<div align="center">
    <!-- Project Shields -->
    <div align="center">
        <a href="https://github.com/MarcusKyung/FitLedger/graphs/contributors">
            <img src="https://img.shields.io/github/contributors/MarcusKyung/FitLedger.svg?style=plastic">
        </a>
        ¨
        <a href="https://github.com/MarcusKyung/FitLedger/stargazers">
            <img src="https://img.shields.io/github/stars/MarcusKyung/FitLedger.svg?color=yellow&style=plastic">
        </a>
        ¨
        <a href="https://github.com/MarcusKyung/FitLedger/issues">
            <img src="https://img.shields.io/github/issues/MarcusKyung/FitLedger?style=plastic">
        </a>
        ¨
        <a href="https://github.com/MarcusKyung/FitLedger/blob/main/license.txt">
            <img src="https://img.shields.io/github/license/MarcusKyung/FitLedger?color=orange&style=plastic">
        </a>
        ¨
        <a href="https://linkedin.com/in/MarcusKyung">
            <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=linkedin&colorB=2867B2">
        </a>
    </div>
</div>

#### By _**Marcus Kyung**_

#### _This health and exercise tracker aims to be a master repository for your health and wellness information._

## Contents:

- [Technologies Used](#technologies-used)
- [Description](#description)
- [Setup & installation](#setupinstallation-requirements)
- [Research and Planning Log](#research-and-planning-log)
- [Known Bugs](#known-bugs)
- [License](#license)

## Technologies Used:

- _React.js_
- _JavaScript_
- _CSS_
- _React-Bootstrap_
- _Victory_
- _Firebase/Firestore_

## Description:

Born out of a need for a single source of truth for health and exercise data, this React.js web application serves as a repository for all of your health and wellness information. Users can create an account, log in, and view their dashboard. From there, they can add data to their daily log, view a running list of their past data entries, and see a variety of metrics visualized as a various charts. 

## Setup/Installation Requirements:

1. To run this program locally download the repository by clicking the "Code" button at the top right of the GitHub page.
2. Navigate to the folder where it downloaded and open it in your code editor of choice.
3. Add a .env file to the root directory
4. Create a Firebase instance and add the following to your .env file:
    ```
    REACT_APP_FIREBASE_API_KEY = [Your Firebase API Key]
    REACT_APP_FIREBASE_AUTH_DOMAIN = [Your Firebase Auth Domain]
    REACT_APP_FIREBASE_PROJECT_ID = [Your Firebase Project ID]
    REACT_APP_FIREBASE_STORAGE_BUCKET = [Your Firebase Storage Bucket]
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID = [Your Firebase Sender ID]
    REACT_APP_FIREBASE_APP_ID = [Your Firebase App ID]
    ```
5. Run `npm install` to install the dependencies needed for this project.
6. Run `npm start` to start up the program locally.

1. To view the deployed version of this program navigate the live site at: https://fit-ledger.web.app/
2. Click "Sign In" in the top right corner of the page to create an account, log in, and view your dashboard.
## Research and Planning Log:

#### Friday, 7/7
- 8:00am - 9:00am: Creating project repository and project proposal document
- 9:00am - 10:00am: Kanban board task development and planning in Miro (https://miro.com/app/board/uXjVM3huH7k=/)
- 10:30am - 12:00pm: Researching Firebase/Firestore as a backend solution for DB (https://www.youtube.com/watch?v=jCY6DH8F4oc&ab_channel=PedroTech)
- 1:00pm - 3:00pm: Researching using React with Firebase via LHTP/YT/Firebase Docs
- 3:00pm - 5:00pm: Researching and experiment with using Tailwind CSS and Flowbite in React Apps via YT and Tailwind Docs, set up Prettier/Tailwind CSS plugins

#### Friday, 7/14
- 2:10pm-2:30pm: Researching Nivo.Rocks for data visualization components
- 2:30pm-3:30pm: Testing Victory React Charts for data visualization components

#### Sunday, 7/16
- 11:30am-12:00pm: Researching quote APIs for daily quotes
- 12:00pm-12:30pm: Researching API call techniques in React

## Known Bugs:
- DOM validation issues due to React-Bootstrap structure in data details cards.
- Responsiveness broken in navigation bar.

## Contact:
_For questions, comments, or concerns please reach out at Kyungmj@gmail.com_

## MIT License:

Copyright (c) [2023] [Marcus Kyung]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR\ A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

