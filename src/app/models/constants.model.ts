import { QueryValueType } from "@angular/compiler/src/core";

export class Constants {
    public static readonly HOME_EVENT = `<p><strong>2nd October, 2021:</strong> There is some dummy event.</p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);">7th October, 2021:</strong><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);"> There is some dummy event.</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);">22nd October, 2021:</strong><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);"> There is some dummy event.</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);">25th October, 2021:</strong><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);"> There is some dummy event.</span></p>`;
    public static readonly HOME_ABOUT = `<p>Software Engineering Research Center(SERC) has a eminent faculty with vast teaching and research experience in and outside India. Some of the key focus areas:</p><p><br></p><ol><li>Empirical Research and Process Improvement</li><li>Formal Methods in Software Engineering</li><li>Requirements Engineering and Quality Attributes</li><li>Complex System Development</li><li>Cloud Computing</li><li>Education Technologies</li><li>Usability Engineering</li></ol><p><br></p><p>SERC has close collaboration with industry providing software services to large organisations, R&amp;D labs of various organisations and other academic institutes (India and abroad). Organisations that SERC is working are diverse, stratified across banking and finance, government, equipment manufacture, ISVs building products for software industry, etc.</p>`;
    
    public static readonly RESOURCES = {
        PROJECTS: `<h1>Student Projects</h1><p><strong style="color: rgb(119, 119, 119); background-color: rgb(255, 255, 255);">Will be updated soon</strong></p><p><br></p><p><br></p><p><br></p><h1>Current Funded Projects</h1><h2><u>Design Innovation Centre</u></h2><p><br></p><p>Project title: Design Innovation Centre</p><p><br></p><p>Funding Agency: Ministry of Human Resource Development (MHRD)</p><p><br></p><p>Design-Centered innovation is a force multiplier that can help in the country move up the value chain, making Indian industry globally competitive. In this context, Ministry of Human Resource Development proposes to launch a National Initiative for Design Innovation in the Twelfth Plan. Under this initiative, 20 new design Innovation Centers (DIC), one Open Design school (ODS) and a National Design Innovation Network (NDIN), linking together all theses schools and other allied bodies such as leading institutions of Industry and academics, NGOs and government would be set up. To be part of this noble venture, The Department of Design at IIIT Hyderabad is setting itself up as one of the Design Innovation Centers. Since a ‘HUB &amp; Spoke’ model is to be adopted, The Department of Design, IIIT Hyderabad would be a Hub and it plans to partner with the following institutes of national repute which would function as its spokes.</p><p><br></p><p><br></p><ul><li>"A Service-based approach to design and Build serious games for creating community Knowledge”</li><li>Framework and tool for Accessibility and Usability testing and other NFR testing for Government Application using Crowdsourcing models.</li></ul><p><br></p><p><br></p><p><br></p><p><br></p><h2><u>Development of Security Search Engine</u></h2><p><br></p><p>Funding Agency: Interdisciplinary Cyber Physical System (ICPS) –DST, GOI.</p><p><br></p><p>Following are some of the objectives of this project proposal:</p><p><br></p><p>1) Provide relevant and current information on various topics in security based on search criteria. Rank the results in the order of relevance and based on the credibility of website containing theinformation. As an example, if search results meet query criteria – security content available in Government websites like CERT-In could be shown with higher ranking.</p><p><br></p><p>2) Build Security Search Engine using scalable and extensible Open source software.</p><p><br></p><p>3) Provide Top Vulnerabilities, Threats and Advisories based on the retrieved information. The would contain actionable information for mitigating against security related risks. BFSI sector, Government entities, Healthcare industry and all others that contain sensitive information and have a need to protect their IT infrastructure will benefit with these top trends. There may be multiple vulnerabilities across different software platforms, showing with actionable information of highly used OS would be more relevant. This relevance should also be based on the impact that the vulnerability could create such as remote vis-à-vis an unnecessary process that is consuming memory.</p><p><br></p><p>4) Provide relevant Security specific visualization based on search criteria. An example of thiswould be for a search on ‘Phishing’ - provide visualization on the “Lures – Amount” or 'Phishing –Country wise Incidents’ and others.</p><p><br></p><p>5) Contain feature for RSS Feed and Alerts based on user criteria (keyword, frequency, etc). This would help MSME and other small scale users of IT for better preparedness from security vulnerabilities.</p><p><br></p><p><br></p><p><br></p><p><br></p><h2><u>Living Labs in India with Smart Cities Project</u></h2><p><br></p><p>• Funding Agency: Ministry of Electronics and Information Technology</p><p><br></p><p>Taking on a key position in the ecosystem and enhancing the effective linkage of real time urban challenges as well as government initiatives and establishing a circular economy model by</p><p><br></p><p><br></p><ul><li>Bringing together relevant stakeholders across sectors and disciplines from both India and Europe</li><li>Identifying the demand of the lab environment as well as the urban local bodies with the local/international industries as the driving force for the Living Lab.</li><li>Establishing a well managed and transparent governance system</li></ul><p><br></p><p><br></p><p><br></p><h2><u>Smart Contracts for Opensource Software License Management</u></h2><p><br></p><p>Funding Agency: RIPPLE</p><p>a) Study smart contract development environment and work on digital asset management.</p><p>b) List the contract terms of open source software.</p><p>c) Prototype smart contract development for open source software licenses.</p><p><br></p><p><br></p><p><br></p><h2><u>Compiling Polymage Domain Specific Language for Emerging Parallel Architecture</u></h2><p><br></p><p>Funding Agency: Science and Engineering Research Board (SERB)</p><p><br></p><ul><li>Targeting Reconfigurable Architecture (FPGAs)</li><li>Motivation and plan with Preliminary Work and Investigation</li><li>Concrete Aspects and Tasks</li><li>Exploiting Customised Precision and Approximation</li><li>More Complex Benchmarks</li><li>Heterogeneous CPU-FPGA Architectures</li><li>Performance Comparison with Multi-core CPU and GPUs</li><li>New Application Domains</li></ul><p><br></p><p><br></p><p><br></p><p><br></p><h2><u>Central platform Engineering; Integration and Maintenance;Outreach</u></h2><p><br></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">Funding Agency: Ministry of Human Resource Development (MHRD)</span></p><p><br></p><p><br></p><p><br></p><h2><u>Virtual Labs Phase 3</u></h2><p><br></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">Funding Agency: Ministry of Human Resource Development (MHRD)</span></p><p><br></p><p><br></p><p><br></p><p><br></p><h1>Past Funded Projects</h1><h2><u>Design Innovation Centre</u></h2><ul><li><span style="background-color: transparent;">UMETRIX - Usability Evaluation Framework for Mobile Apps based on Static Code Analysis</span></li><li><span style="background-color: transparent;">Gamily - Gamification Platform For All</span></li></ul><p><br></p><p><br></p><p><br></p><p><br></p><h2><u>Standardisation of Mobile Interfaces</u></h2><p><br></p><p>To define the standards for mobile interfaces for the Enterprise CA Product Suite. User and Task analysis is an important component of assessing any specific products usability.If the user has to undergo a rigorous learning process to use a specific application or a product, the chances of the product succeeding in the market place will decrease.From an end user perspective, we can intuitively state that every application / product's user interface will involve different set of behaviours and therefore require some amount of learning. The difficulty lies in reducing the amount of learning. This is applicable to internal developers of CA as well as external developers.</p><p><br></p><p><br></p><p><br></p><h2><u>Big Data Analytics on the cloud</u></h2><p><br></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">The Objectives of this project is to: </span></p><p><br></p><ol><li><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">Study and build various available Big Data technology stacks like Hadoop Big data platform, Mapreduce programming models, and search softwares such as Lucene and Solr.</span></li><li><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">Provide Proof of concept on a. Real- time search on CA product log files and b. Analytics on CA Risk Minder's Device DNA data.</span></li></ol><p><br></p><p><br></p><p><br></p><h2><u>Virtual Lab Integration</u></h2><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">Deployment and Maintenance of Virtual Labs. The scope of the project includes building infrastructure to provide access to quality labs to all colleges across India, building a complete Learning management system and conduct training workshops for teacher training and skill-set augmentation</span></p><p><br></p><p><br></p><p><br></p><h2><u>Virtual lab Phase II</u></h2><p><br></p><p>Sub-projects</p><p><br></p><ol><li>SERC-VL2- Central Platform and Engineering</li><li>SERC-VL2-Intergration and Maintenance</li><li>SERC-VL2-Outreach</li></ol><p>The Virtual labs project addresses the issue of lack of good lab facilities, as well as tained teachers, by making remote and simulation based experimentation possible through world wide web. With the present day internet and computer technologies, these limitations no longer hamper students and researchers in enhancing their skills and knowledge. The Objective is to arouse the curiosity of the students and permit them to learn at their own pace.</p><p><br></p><ul><li>Access to quality labs to those engineering colleges which lack these lab facilities.</li><li>Access to quality labs as a complementary facility to those colleges that already have labs</li><li>A complete Learning management system around the labs.</li><li>Teacher-training and skill-set augmentation through workshop and on-site training.</li></ul><p><br></p><p><br></p><p><br></p><p><br></p><h2><u>Large-scale distributed model checking</u></h2><p><br></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">Implementation of Model checking on distrubuted cloud-based platforms in order to make model checking efficient and scalable. Hopefully, widen the scope of industry-based problems to which model checking can be applied.</span></p><p><br></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">﻿</span></p>`,
        TEACHING: `<h1>Software Engineering</h1><p>To develop in-depth understanding of software engineering principles, practices and ability to apply them in developing large scale software systems.</p><p><br></p><h1>Software Systems Analysis and Design</h1><p>Provides an introduction to software engineering concepts and techniques to undergraduate students. Enables the students to work in smaller teams and deliver software systems.</p><p><br></p><h1>Software Foundations</h1><p>Provides mathematical foundations of programs and software systems so as to be able to prove properties about their behaviour.</p><p><br></p><h1>Software Quality Engineering</h1><p>Imparts quality analyses of software systems. Topics include verification, software quality assurance, standards, etc. Concepts and skills necessary to design and and validation, metrics and measurements are also part of the curriculum.</p><p><br></p><h1>Internals of Application Servers</h1><p>Understand essence of middleware and distributed object technology. J2EE Technology and Architecture overview. J2EE App Server architecture. Life cycle of a J2EE application-deployment through running and deployment.</p><p><br></p><h1>Principles of Programming Languages</h1><p>This course is an introduction to the principles behind the design of programming languages, including object-oriented programming, and the use of formal methods in reasoning with programs. During the course, students build a series of interpreters, each a mini abstract or virtual machine for a specific language.</p>`,
        USEFULL_LINKS: `<ul><li><a href="http://dblp.uni-trier.de/db/journals/cacm/turing.html" rel="noopener noreferrer" target="_blank">List of ACM Turing Award Lectures</a></li><li><a href="http://www.sigsoft.org/awards/mostInfPapAwd.htm" rel="noopener noreferrer" target="_blank">ICSE's Most Influential Papers</a></li><li><a href="http://people.engr.ncsu.edu/txie/sereading.htm" rel="noopener noreferrer" target="_blank">Software Engineering Readings</a></li><li><a href="http://www.sigsoft.org/phdDissertations/" rel="noopener noreferrer" target="_blank">PhD Dissertations in the Area of Software Engineering (SIGSOFT)</a></li><li><a href="http://www.cs.illinois.edu/homes/taoxie/sereading.htm" rel="noopener noreferrer" target="_blank">Good conferences and journals listed by Tao Xie</a></li><li><a href="http://www.cs.wm.edu/semeru/index.html" rel="noopener noreferrer" target="_blank">Other Software Engineering Research Centers</a></li><li><a href="https://github.com/SIREN-DST/Crawling-Engines/blob/master/Microstack(Openstack)_Configuration.pdf" rel="noopener noreferrer" target="_blank">Microstack (Openstack) Ussuri Configuration Document</a></li></ul>`,
        DEMOS: `<h1><u>UMETRIX - Usability Evaluation Framework for Mobile Apps based on Static Code Analysis</u></h1><p><br></p><p>Usability Evaluation Framework for Mobile Apps based on Code Pattern Analysis</p><p>The increasing usage of smartphones has resulted in mo-bile applications replacing or supplementing traditional web-based applications. Given the limitations of the form factor in smartphones, Usability can be considered as one of the important attributes that determine the success of a mobile application. The measures available for assessing the usability of mobile applications tend to focus more on human aspects and less on the functional aspects of Usability. As part of this paper, we propose a usability evaluation framework called UMETRIX to identify functional usability issues specific to mobile applications. This framework uses usability guidelines associated with usability code patterns in mobile applications to improve usability. As proof of concept, we have built an end-to-end system using the framework to validate and verify usability issues in Android mobile applications and generate recommendations to enhance functional aspects of Usability.</p><p>Download Tool here -&nbsp;<a href="https://github.com/neerajmathur/UMETRIX" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(64, 120, 192);">https://github.com/neerajmathur/UMETRIX</a></p><h2>UMETRIX - Introduction Video</h2><p><a href="https://www.youtube.com/watch?v=Y_1Gq6NbFhs" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(64, 120, 192);"><img src="https://raw.githubusercontent.com/neerajmathur/UMETRIX/master/ScreenShots/UmetrixIntroduction.png" alt="IMAGE ALT TEXT HERE"></a></p><h2>UMETRIX - Working Demo Video</h2><p><a href="https://www.youtube.com/watch?v=eeo0e1ajNnM" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(64, 120, 192);"><img src="https://raw.githubusercontent.com/neerajmathur/UMETRIX/master/ScreenShots/UmetrixVedioLinkImg.png" alt="IMAGE ALT TEXT HERE"></a></p><h2>UMETRIX - Web Evaluator</h2><p><img src="https://raw.githubusercontent.com/neerajmathur/UMETRIX/master/ScreenShots/TestAndroidApp.png" alt="alt tag"></p><h2>Validation Case Designer</h2><p><img src="https://raw.githubusercontent.com/neerajmathur/UMETRIX/master/ScreenShots/DefineTestCase.png" alt="alt tag"></p><h2>Test Case Results</h2><p><img src="https://raw.githubusercontent.com/neerajmathur/UMETRIX/master/ScreenShots/TestResults.png" alt="alt tag"></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><h1><u>Gamily - Gamification Platform For All</u></h1><p><br></p><p><img src="https://serc.iiit.ac.in/static/images/gamily/internet.ico">&nbsp;<a href="https://www.gamily.in/" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(64, 120, 192);"><strong>https://www.gamily.in</strong></a></p><p><img src="https://serc.iiit.ac.in/static/images/gamily/banner.png"></p><h2><br></h2><h2>Vision (Video)</h2><p><a href="https://youtu.be/IjgOBEQMFn8" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(64, 120, 192);"><img src="https://serc.iiit.ac.in/static/images/gamily/gamily-play.png" alt="Play video"></a></p><h2>Description</h2><p>The product is built with aim to be extensible and extremely simple to integrate for end users who wish to create Gamified applications. The architecture design is Event-driven service-oriented architecture, with complete control to end users for game rules, etc. The prototype technology is based on Flask and Ember.js.</p><p><br></p><p>You can read&nbsp;<a href="http://dl.acm.org/citation.cfm?id=2856649" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(64, 120, 192);">the publication</a>&nbsp;to get more detailed idea, or can directly refer to the source code available&nbsp;<a href="https://github.com/IIITSERC/gamily_portal" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(64, 120, 192);">on GitHub</a>.</p><p><br></p><h2>Version 1</h2><p><img src="https://serc.iiit.ac.in/static/images/gamily/gamilyv1.png" alt="!"></p><p>Available on GitHub:&nbsp;<a href="https://github.com/skbly7/gamifiedSD" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(64, 120, 192);">https://github.com/skbly7/gamifiedSD</a></p><p><br></p><h2>Version 2</h2><p>Available on GitHub:&nbsp;<a href="https://github.com/skbly7/gamily" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(64, 120, 192);">https://github.com/skbly7/gamily</a></p><p><br></p><h3>Table Anything (leader board shown as example)</h3><p>Converts any list of dictionaries into tabular form.</p><p><strong>ajaxURL</strong>: URL from which data need to be fetched.</p><p><strong>getData</strong>: GET parameters as JSON.</p><p><strong>variable</strong>: Variable name in response to render (blank to complete) - expect list</p><p><br></p><h4>Usage</h4><pre class="ql-syntax" spellcheck="false">{{gamily-table ajaxURL="" variable="path.to.data" getData='get params as JSON'}}</pre><p><a href="http://gamily.okrdx.com/table.html" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(64, 120, 192);">Descriptive documentation</a></p><p><br></p><h3>Matrixify (badges shown as example)</h3><p>Converts any list of dictionaries into matrix form.</p><p><strong>ajaxURL</strong>: URL from which data need to be fetched.</p><p><strong>getData</strong>: GET parameters as JSON.</p><p><strong>variable</strong>: Variable name in response to render (blank to complete) - expect listnumColumnscolumns of matrix. 2 (default)</p><p><br></p><h4>Usage</h4><pre class="ql-syntax" spellcheck="false">{{gamily-matrix ajaxURL="" variable="path.to.data" getData='get params as JSON'}}</pre><p><a href="http://gamily.okrdx.com/matrix.html" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(64, 120, 192);">Descriptive documentation</a></p><p><br></p><h3>Listify (shown as example)</h3><p>Converts JSON list into list display.</p><p>VariableMeaningajaxURLURL from which data need to be fetchedgetDataGET parameters as JSONvariableVariable name in response to render (blank to complete) - expect list</p><h4><br></h4><h4>Usage</h4><pre class="ql-syntax" spellcheck="false">{{gamily-list ajaxURL="" variable="path.to.data" getData='get params as JSON'}}</pre><p><br></p><p><a href="http://gamily.okrdx.com/list.html" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(64, 120, 192);">Descriptive documentation</a></p><p><img src="https://serc.iiit.ac.in/static/images/gamily/gamilyv2.png" alt="!"></p><h2><br></h2><h2><strong>Version</strong> 3</h2><h3>Rule Engine - First Preview</h3><p><a href="https://youtu.be/WGgYnWPAaxo" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(64, 120, 192);"><img src="https://serc.iiit.ac.in/static/images/gamily/gamily_v3.png"></a></p><p>It is under construction. Code base will be made available online soon.</p>`,
        DATASET: `<h2><u>Under Construction</u></h2>`,
        POSTERS: `<h1>R &amp; D showcase 2021 Posters</h1><ul><li><a href="https://serc.iiit.ac.in/resources/showcase" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(64, 120, 192);">Dynamic Path Generation System for Continuous Walking in Finite Space using VR</a></li><li>Scalable and Extensible Crawlers</li><li>VREye: Towards building a Customised Head Mount Display for Virtual Reality Applications​</li><li>Identifying the cyberattacks from the Text</li><li>Impact of Covid on Virtual Lab</li><li>Methodology to Develop Domain Specific Modelling Languages</li><li>Virtual Labs Outreach</li><li>Virtual Labs Experiment Pedagogy</li><li>Smart Contracts for Opensource Software License Management</li><li>Understanding Software Quality Metrics for VR Products - A Mapping Study</li><li>A Fine Grained Approach to Develop Domain Specific Search Engine</li><li>Type safe tensor combinators</li></ul>`
    };

    public static readonly PEOPLE_DATA = {
        FACULTY: [
            { label: "Full Time", value: [
                { name: 'Raghu Reddy', img: 'https://serc.iiit.ac.in/static/images/people/6.jpg', designation: 'Associate Professor & Head', researchInterest: [ 
                    "Model Driven Development",
                    "Software Requirements and Architecture",
                    "Verification & Validation",
                    "Usability and Software engineering education"
                 ] },
                { name: 'Venkatesh Choppella', img: 'https://serc.iiit.ac.in/static/images/people/Venkatesh_Choppella.jpg', designation: 'Associate Professor', researchInterest: [ 
                    "Programming Languages",
                    "S/W Architectures",
                    "Formal Methods",
                    "CS Education"
                 ] },
                { name: 'Vasudeva Varma', img: 'https://serc.iiit.ac.in/static/images/people/DSC_0320.jpg', designation: 'Professor & Dean (Research)', researchInterest: [ 
                    "Information Retrieval",
                    "Social Media Analysis",
                    "Semantic Search",
                    "Cloud Computing and Software Engineering"
                 ] },
                { name: 'Ramesh Loganathan', img: 'https://serc.iiit.ac.in/static/images/people/Ramesh.jpg', designation: 'Professor Co-Innovation', researchInterest: [ 
                    "Innovation and Processes for Applied Research"
                 ] },
            ] },
            { label: "Distinguished/Adjunct/Visiting", value: [
                { name: 'Kesav V. Nori', img: 'https://serc.iiit.ac.in/static/images/people/nori.jpg', designation: 'Distinguished Professor', researchInterest: [ 
                    "Computer Science Education",
                    "Software Archtiecture",
                    "Compilers",
                    "Technology for Education"
                 ] },
                { name: 'Viswanath Kasturi', img: 'https://serc.iiit.ac.in/static/images/people/Viswanath_Kasturi_bGLSrXt.JPG', designation: 'Research Professor of Eminence', researchInterest: [ 
                    "Mathematical Computer Science",
                    "Pedagogical issues"
                ] }
            ] } 
        ],
        PHD_STUDENTS: [
            { label: 'Full Time PhD Scholars', value: [
                { name: 'Lalit Mohan', img: 'https://serc.iiit.ac.in/static/images/people/Lalit_Mohan.jpg' }
            ] },
            { label: 'Part Time PhD Scholars', value: [
                { name: 'Padmalata Nistala', img: 'https://serc.iiit.ac.in/static/images/people/padma_nistala.jpg' },
                { name: 'Sai Anirudh Karre', img: 'https://serc.iiit.ac.in/static/images/people/pp.jpg' },
                { name: 'Naveen N. Kulkarni', img: 'https://serc.iiit.ac.in/static/images/people/NNK1_eA6CvPl.JPG' },
                { name: 'Abhinav Gupta', img: 'https://serc.iiit.ac.in/static/images/people/WhatsApp_Image_2020-08-11_at_10.11.08_PM.jpeg' },
                { name: 'Mrityunjay Kumar', img: 'https://serc.iiit.ac.in/static/images/people/Mrutunjay.jpg' },
                { name: 'Amar Banerjee', img: 'https://serc.iiit.ac.in/static/images/people/pic.jpg' }
            ] },
            { label: 'Graduated PhD Students', value: [
                { name: 'Sridhar Chimalakonda', img: 'https://serc.iiit.ac.in/static/images/people/Shridar_Chimalakonda.jpg' },
                { name: 'Sai Gollapudi', img: 'https://serc.iiit.ac.in/static/images/people/Sai_Gollapudi.jpg' },
                { name: 'Kirti Garg', img: 'https://serc.iiit.ac.in/static/images/people/3d3a939.jpg' },
            ] },
        ],
        MS_STUDENTS: [
            { label: 'Full Time', value: [
                { name: 'M. Saraswati Soumya', img: 'https://serc.iiit.ac.in/static/images/people/Soumya.JPG' },
                { name: 'Shivang Shekhar', img: 'https://serc.iiit.ac.in/static/images/people/shiv.jpg' },
                { name: 'Raghav Mittal', img: 'https://serc.iiit.ac.in/static/images/people/Raghav.jpg' },
            ] },
            { label: 'Dual Degree (B.Tech. + M.S.)', value: [
                { name: 'Anukul Sangwan', img: 'https://serc.iiit.ac.in/static/images/people/picture.jpg' },
                { name: 'Vivek Iyer', img: 'https://serc.iiit.ac.in/static/images/people/28460437_1988389268094763_900314689_o.jpg' },
                { name: 'Mohit Kuri', img: 'https://serc.iiit.ac.in/static/images/people/22467381_349747118786733_934236823640432709_o.jpg' }
            ] },
            { label: 'Graduated', value: [
                { name: 'Akash Agrawall', img: 'https://serc.iiit.ac.in/static/images/people/15151339_1433798099982341_1388853084_n.jpg' },
                { name: 'Shivam Khandelwal', img: 'https://serc.iiit.ac.in/static/images/people/pic129b75022f0d1d46263ffa69335b80d2.jpg' },
                { name: 'Siddharth Bhatore', img: 'https://serc.iiit.ac.in/static/images/people/download.png' },
                { name: 'Sai Krishna', img: 'https://serc.iiit.ac.in/static/images/people/12439484_10209386089515160_5072700934213511288_n.jpg' },
                { name: 'Neeraj Mathur', img: 'https://serc.iiit.ac.in/static/images/people/SERC_NEERAJ_PIC.jpg' },
                { name: 'Shriyansh Agrawal', img: 'https://serc.iiit.ac.in/static/images/people/sa.jpeg' },
                { name: 'Palash Agarwal', img: 'https://serc.iiit.ac.in/static/images/people/60393158_1048126982042088_2895764356526505984_n.jpg' },
            ] },
        ],
        BTECH_STUDENTS: [
            { label: 'Graduated', value: [
                { name: 'Sourav Sarangi', img: 'https://serc.iiit.ac.in/static/images/people/IMG_20151111_160753.jpg' },
                { name: 'Soujanya Ponnapalli', img: 'https://serc.iiit.ac.in/static/images/people/serc3.jpg' },
                { name: 'Kushal Singh', img: 'https://serc.iiit.ac.in/static/images/people/11119115_920104571385718_3718824509230444694_n_u4ynqvr.jpg' },
                { name: 'Animesh Pathak', img: 'https://serc.iiit.ac.in/static/images/people/Animesh1.jpg' }
            ] },
        ],
        INTERNS: [
            { label: 'Project Interns', value: [
                { name: 'Abhay Mehtre', img: 'https://serc.iiit.ac.in/static/images/people/Abhay_I8qjezK.JPG' },
                { name: 'Dhiraj Shanmukha Mitra V', img: 'https://serc.iiit.ac.in/static/images/people/Dheeraj_HPsY4tH.jpeg' },
                { name: 'Dontineni Ganesh Sai', img: 'https://serc.iiit.ac.in/static/images/people/Ganesh_U3Rb17c.jpeg' },
                { name: 'Sai Raju Ram Chander Chikkala', img: 'https://serc.iiit.ac.in/static/images/people/Ramchander_yy4CDog.jpeg' }
            ] },
        ]
    };

    public static readonly FOCUS_AREA = [
        { label: 'Usability Engineering', value: [
            "Formal specification of User Interfaces",
            "Standardization of Mobile interfaces",
            "Augmented and Virtual Reality"
        ] },
        { label: 'Semantic Web Architectures', value: [
            "Enhancing Business via Social Media",
            "Internationalization of Webapps",
            "Web personalization & Renarration",
            "Ontology Based Educational modeling Frameworks",
            "Crowdsourcing"
        ] },
        { label: 'Distributed Systems & Cloud Computing', value: [
            "Low power approximate circuits",
            "Distributed deep learning techniques",
            "Dynamic resource allocation includes game theory",
            "Large scale distributed model checking",
            "FPGA Programming for Deep Learning"
        ] },
        { label: 'Software Quality Engineering', value: [
            "Software Quality Assessment and Detection",
            "Defect Prediction and Dependency Analysis",
            "Qaas(Quality as a Service) in Large Scale Development"
        ] },
        { label: 'Mining S/W Architectures', value: [
            "Lean Product Lines",
            "Formal Specification of Security",
            "Systematic Module Selection for Opportunistic Reuse"
        ] },
        { label: 'Compilers & Programming Languages', value: [
            "Logical formalisms for algorithm specification",
            "Mapcode formalism for algorithm specification",
            "Code generation for Domain Specific Languages targeting FPGAS"
        ] },
        { label: 'Mathematical Computer Science & Formal Methods', value: [
            "Mapcode and mathematical computer science",
            "Workflow specifications using Session Types",
            "Web security models in Alloy"
        ] },
        { label: 'Model Driven Development', value: [
            "Aspects and Model based testing",
            "Concurrent and distributed software architectures"
        ] },
        { label: 'S/W Engineering Education', value: [
            "Case Study Oriented Learning environment Design and Evaluation",
            "Programming Education",
            "Gamification"
        ] },
        { label: 'Technology for Education', value: [
            "Development and Deployment of Virtual Labs",
            "Virtual Labs for Programming Language and System Software",
            "Computer Science Pedagogy",
            "Algebraic Modeling of Educational Workflows"
        ] },
    ];
}