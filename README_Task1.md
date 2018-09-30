# wiredelta-challenge


The purpose of this project is to provide a Single Page Application (SAP), which in this case helps volunteers register for a specific partying community.

Import and Installation

In order to start the project, some steps need to be taken :

1) Clone / Download the repository from GitHub:
Link: https://github.com/AlajdinR/wiredelta-challenge.git
2) Move to the working directory where the project is located
3) Type npm install  on the terminal, as this will assure that all the node modules are installed as well. 
4) Lastly, type npm start or yarn start.

Explanation

The whole task has been written while using the React platform, and also the code separation has been designed in such a way. The root of all the project is the index.js file, which contains the connection to the DOM. In the same file, we have instantiated the global store, and also connected it to the reducer. 

The App.js file would be the link to the rest of the application. Here we have put base on the main Containers and  their linkage in order to make the code readable, and reusable. The routes used there are to go from one “page” to another, and only 2 of them have been populated, namely the Voluneer page is fully functional, and the Contact page has the map, and some random contact data.

There are 5 used folders in total, and they make the main division of the logic in categories. 

The hoc folder (Higher Order Component), holds files which are going to serve as utils, or tools to make the rest of the code work well and smooth.

The store folder contains both the reducer and the action definitions. Here we put all the redux logic, and from here we control how the data which is linked to redux will be fllowing throughout the application.

The assets folder doesn’t contain anything else than the images we are using in our design. On the other hand, the containers and components are very important. Containers are usually the state-full components, namely those components that hold a state, and that are defined as a class. On the other hand, the containers folder mostly contains state-less components. These components are called dumb comp. because they do not have a state and do the logic without knowing to whom they serve.

The code is carefully written so that most of the components can be reused, if the same project would continue onto higher level.


