# SSD Assignment - 2 : SERC 

## Software Engineering Research Center

---
---

>### Deployment Details

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7, whose **built artifacts** has been provided in a folder named **docs**.

- Two ways to checkout the webpages, as follows:

    1. To make it run on local environemnt follow the below steps:
        * Make sure to have _**http-server**_ package from npm.
            * To check, execute the below snippet.

                    `http-server --version`

            * If not present, install http-server using below code snippet.

                    `npm i http-server`

                **Disclaimer** : Node.js is required to execute **_npm_** commands.
            
        * After having **http-server** installed, execute the below snippets, to run the code.

                `http-server <path>/docs`
            
            **Discaimer** : _\<path\>_ is the directory where the folder named - **docs**, that has built artifacts, present.

            `Example : /home/user/Documents/docs`
            Here path is _/home/user/Documents_ which has **docs** folder.

    2. You can also check out the running code, by clicking on the below link.

        [SERC by Ashish Rai](https://ashishrai96.github.io/SERC)

        **PS** : In case the site is down, kindly go for the setting up the local environment, or you may reach out to me.



> ### Assumptions

* The static contents such as images are dependent on the exisiting [IIIT-H SERC website](https://serc.iiit.ac.in/).
* This site doesn't have any Authentication & Authorization functionalities as of now, any user can modify the data. Thus, this site comes with by default Admin mode switched on.
* The modifications made on this web, are non-persistent, a page reload will revert all the changes.
* The publication details are being fetched from **dblp** website only.
* There is **NO** Backend support to this application, for now.
* The publication details for individual professor has not been updated yet.


---
***
### Thank you
***
---
