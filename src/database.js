//BEMwz7jU6HSgqDSs
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://anasmobeidat86:anas2002@cluster0.2vx4res.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a new MongoClient : 
const client = new MongoClient(uri);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Successfully connected to MongoDB Atlas");

// End points :
app.get('/programmers-data', async (req, res) => {

  try{
      // Connect to the MongoDB Atlas cluster: 
      await client.connect(); 
      console.log('Connected to MongoDB Atlas');
      // Create a databasenamed Programmers in general :
      const databaseProgrammers = client.db('programmers_In_General');
      // Create the collections 
      const apiCollection = databaseProgrammers.collection('API');
      const maintenance =    databaseProgrammers.collection('Maintenance');
      const uiUxDesigner =    databaseProgrammers.collection('UiUx Designers'); 
      const problemSolver =    databaseProgrammers.collection('Problem Solver');
      const webProgrammer =     databaseProgrammers.collection('Web Programmers');
      const top6Programmers =    databaseProgrammers.collection('top6 Programmers');
      const machineLarning =      databaseProgrammers.collection('Machine Larning');
      const databaseManager =      databaseProgrammers.collection('database Managers');
      const qualityAssurance =      databaseProgrammers.collection('Quality Accurance');
      const backEndProgrammer =      databaseProgrammers.collection('Backend Programmers');
      const softwareDeveloper =       databaseProgrammers.collection('Software Developers'); 
      const chatbotProgrammer =        databaseProgrammers.collection('Chatbots Programmers');
      const securitySpecialist =        databaseProgrammers.collection('Security Specialist');
      const mobileAppProgrammer =         databaseProgrammers.collection('Mobile App Programmers');
      const videoGamesProgrammer =         databaseProgrammers.collection('Video Games Programmers');
      const educationalProgrammer =         databaseProgrammers.collection('Educational Programmers');
      const appFunDeveloper =                databaseProgrammers.collection('App Functional Developers');


      const insertData = async (collection, data) => {
        for (const item of data) {
          const exists = await collection.findOne({ emailAddress: item.emailAddress });
          if (!exists) {
            await collection.insertOne(item);
            console.log(`Inserted ${item.name}`);
          } else {
            console.log(`${item.name} already exists`);
          }
        }
      };

      // Function to insert data if it doesn't already exist
    const insertIfNotExists = async (collection, data) => {
      for (const item of data) {
        const exists = await collection.findOne({ emailAddress: item.emailAddress });
        if (!exists) {
          await collection.insertOne(item);
          console.log(`Inserted ${item.name}`);
        } else {
          console.log(`${item.name} already exists`);
        }
      }
    };

      // insert data to collections :
      const apiProgrammersData = [ // 12  programmers 
        {
            name: "Emily Smith",
            email: "emilysmith@gmail.com",
            password: "Smith123",
            note: "Skilled API and integration specialist proficient in SOAP and REST APIs.",
            rate: 4.5,
            preprojects: ["Implemented API integrations for CRM and ERP systems", "Developed a secure user authentication module using OAuth2"],
            payment: 2200,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Michael Johnson",
            email: "michaeljohnson@gmail.com",
            password: "Johnson456",
            note: "Experienced in API design and development with a focus on scalability and performance.",
            rate: 3.5,
            preprojects: ["Developed custom APIs for data synchronization between cloud services","Created a real-time notification system using push notifications","Integrated machine learning models for predictive analytics"],
            payment: 2100,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Sophia Davis",
            email: "sophiadavis@gmail.com",
            password: "Davis789",
            note: "Expertise in integrating APIs with microservices architectures and containerization technologies.",
            rate: 2.5,
            preprojects: [ "Built API gateways for centralized management of microservices.","Designed an API gateway for centralized management and monitoring","Built a multi-tenant SaaS application with API support"],
            
            payment: 2300,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Matthew Brown",
            email: "matthewbrown@gmail.com",
            password: "Brown123",
            note: "Proficient in API security measures such as OAuth2 authentication and JWT tokens.",
            rate: 4.5,
            preprojects: ["Implemented API security layers for banking and financial applications.", "Developed a chatbot using natural language processing (NLP)","Conducted security audits and implemented API security best practices"],
            payment: 2000,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "Olivia Wilson",
            email: "oliviawilson@gmail.com",
            password: "Wilson456",
            note: "Skilled in integrating APIs with cloud platforms such as AWS and Azure.",
            rate: 4.5,
            preprojects: ["Developed serverless API solutions using AWS Lambda and API Gateway.","Implemented a CI/CD pipeline for automated deployment", "Integrated social media APIs for enhanced user engagement"],
            payment: 2200,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "Ethan Thompson",
            email: "ethanthompson@gmail.com",
            password: "Thompson789",
            note: "Specializes in API testing and documentation using tools like Postman and Swagger.",
            rate: 4.5,
            preprojects: ["Created comprehensive API documentation for developer portals.", "Developed a custom reporting solution with dynamic data visualization", "Automated data extraction and processing from multiple sources"],
            payment: 2100,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"

          },
        
          {
            name: "Ava Martinez",
            email: "avamartinez@gmail.com",
            password: "Martinez123",
            note: "Experience in API versioning and backward compatibility strategies.",
            rate: 4.5,
            preprojects:[ "Managed API versioning for enterprise-level applications.","Implemented automated API testing frameworks using Postman and Newman","Provided API support and troubleshooting for clients and internal teams"],
            payment: 2300,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"

          },
        
          {
            name: "Noah Taylor",
            email:  "noahtaylor@gmail.com",
            password: "Taylor456",
            note: "Expertise in building real-time APIs using WebSockets and long-polling techniques.",
            rate: 3.5,
            preprojects: "Developed real-time chat APIs for messaging applications.", //just this 
            payment: 2200,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "Isabella Clark",
            email: "isabellaclark@gmail.com",
            password: "Clark789",
            note: "Skilled in API monitoring and analytics for performance optimization.",
            rate: 4.5,
            preprojects: ["Implemented API monitoring solutions for detecting performance bottlenecks.", "Created comprehensive API documentation and user guides", "Optimized API performance and scalability for high-traffic applications"],
            payment: 2100,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "William Rodriguez",
            emai: "williamrodriguez@gmail.com",
            password: "Rodriguez123",
            note: "Experience in API governance and compliance with industry standards.",
            rate: 5.5,
            preprojects: ["Established API governance policies for regulatory compliance." ,"Migrated legacy systems to modern microservices architecture","Developed real-time data synchronization solutions using WebSockets"],
            payment: 2300,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "Chloe Baker",
            email: "chloebaker@gmail.com",
            password: "Baker456",
            note: "Skilled in API orchestration and integration with workflow automation tools.",
            rate: 4.5,
            preprojects: ["Automated business processes by orchestrating APIs with workflow tools.", "Designed and implemented a RESTful API for an e-commerce platform","Integrated third-party payment gateways for seamless transactions"],
            payment: 2200,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "James Hernandez",
            email: "jameshernandez@gmail.com",
            password: "Hernandez789",
            note: "Expertise in building GraphQL APIs for flexible and efficient data querying.",
            rate: 4.5,
            preprojects: ["Developed GraphQL APIs for modern web and mobile applications","Implemented a GraphQL API for improved query flexibility", "Developed a microservices architecture to decouple and scale API services"],
            payment: 2100,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          }
        ];

        for (const document of apiProgrammersData) {
          const existingDocument = await apiCollection.findOne({ email: document.email });
          if (!existingDocument) {
              await apiCollection.insertOne(document);
              console.log('Document inserted: ' + document.email);
          } else {
              console.log('Document already exists: ' + document.email);
          }
      }  

      const maintenanceProgrammers= [ // 12 programmer
        {
              name: "rama khalaf",
              email: "khalaf@gmail.com",
              password: "Sarah456",
              note: "Skilled maintenance manager with a focus on optimizing operational efficiency.",
              rate: 5.5,
              preprojects:[ "Streamlined maintenance processes to reduce downtime and costs.", "Implemented a preventive maintenance program to extend equipment life","Developed a computerized maintenance management system (CMMS)"],
              payment: 2400,
              certification:"programmerescertification.PDF",
              Image:"picprogrammer.jpg"
          
            
            },
        
           {  
                name: "Layla Ahmad",
                email: "layla.ahmad@example.com",
                password: "LaylaPass789",
                note: "Expert in project management with a strong background in software development.",
                rate: 4.5,
                preprojects: ["Successfully led several software development projects and enhancing team productivity.", "Coordinated with production teams to minimize maintenance-related disruptions","Conducted root cause analysis to identify and resolve recurring issues"],
                payment: 3500,
                certification: "projectmanagementcertification.PDF",
                Image: "layla.jpg"
              
            },

            {
                name: "swsan rami",
                email: "swanrami@gmail.com",
                password: "Brown789",
                note: "Experienced in managing maintenance teams and ensuring compliance with safety standards.",
                rate: 4.5,
                preprojects: ["Implemented safety training programs for maintenance staff.",  "Optimized inventory management for spare parts and tools","Trained maintenance staff on safety protocols and best practices"],
                payment: 2300,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
    
            {
                name: "Doha kareem",
                email: "Dohakareem@gmail.com",
                password: "Olivia123",
                note: "Expert maintenance manager with a track record of improving equipment reliability.",
                rate: 4.5,
                preprojects: ["Optimized preventive maintenance schedules for critical machinery.", "Managed contractor relationships for specialized maintenance tasks", "Implemented energy-saving initiatives to reduce operational costs"],
                payment: 2500,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
    
            {
                name: "sami al-titi",
                email: "samial-titi@gmail.com",
                password: "Ethan456",
                note: "Skilled in developing maintenance strategies to support production goals.",
                rate: 3.5,
                preprojects: ["Implemented predictive maintenance techniques for cost savings.", "Developed and maintained maintenance schedules and logs",  "Improved response times for emergency maintenance requests"],
                payment: 2100,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
    
            {
                name: "karam mohameed",
                email: "karammohameed@gmail.com",
                password: "Ava789",
                note: "Detail-oriented maintenance manager focused on inventory management and procurement.",
                rate: 4.5,
                preprojects: ["Optimized spare parts inventory to minimize downtime.", "Reduced maintenance costs through strategic vendor negotiations", "Conducted regular inspections and audits of equipment and facilities"],
                payment: 2300,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
    
            {
                name: "Noor fadi",
                email: "Noorfadi@gmail.com",
                password: "Noah123",
                note: "Experienced in implementing maintenance software systems for asset management.",
                rate: 4.5,
                preprojects: ["Deployed CMMS software for maintenance tracking and reporting.", "Enhanced the reliability of critical systems through predictive maintenance","Implemented condition-based monitoring using IoT sensors"],
                payment: 2200,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
    
            {
                name: "Issa rakan",
                email: "Issarakan@gmail.com",
                password: "Baker456",
                note: "Skilled in developing preventive maintenance procedures for critical infrastructure.",
                rate: 4.5,
                preprojects: ["Established maintenance protocols for HVAC systems.","Developed a comprehensive asset management plan", "Collaborated with engineering teams on facility upgrades and expansions"],
                payment: 2400,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
    
            {
                name: "Wesam Hammed",
                email: "WesamHammed@gmail.com",
                password: "William123",
                note: "Analytical maintenance manager with a focus on optimizing asset lifecycle costs.",
                rate: 5.5,
                preprojects: ["Conducted lifecycle cost analysis for equipment replacement decisions.", "Improved compliance with safety and environmental regulations","Reduced downtime through effective scheduling and planning"],
                payment: 2300,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
    
            {
                name: "kamel jorj",
                email: "kameljorj@gmail.com",
                password: "Chloe456",
                note: "Experienced in developing maintenance budgets and cost control measures.",
                rate: 4.5,
                preprojects: ["Implemented cost-saving initiatives through vendor negotiation and contract management.",     "Implemented cost-effective solutions for obsolete equipment replacement", "Enhanced equipment uptime through proactive maintenance strategies"],
                payment: 2100,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
    
            {
                name: "Jmal jalal",
                email: "jmaljalal@gmail.com",
                password: "James789",
                note: "Skilled in coordinating maintenance activities across multiple facilities.",
                rate: 4.5,
                preprojects: ["Managed regional maintenance teams to ensure timely repairs and inspections.", "Implemented a mobile maintenance management solution", "Optimized workflow processes to enhance team productivity"],
                payment: 2500,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
    
            {
                name: "Emma hammed",
                email: "emmahammed@gmail.com",
                password: "Emma123",
                note: "Detail-oriented maintenance manager with expertise in regulatory compliance.",
                rate: 4.5,
                preprojects: ["Ensured compliance with safety and environmental regulations.", "Conducted training sessions on new maintenance technologies","Developed KPIs to measure and improve maintenance performance"],
                payment: 2200,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            }
       
    
        ];

        for (const document of maintenanceProgrammers) {
          const existingDocument = await maintenance.findOne({ email: document.email });
          if (!existingDocument) {
              await maintenance.insertOne(document);
              console.log('Document inserted: ' + document.email);
          } else {
              console.log('Document already exists: ' + document.email);
          }
      }
  
      const uiUxDesigners =[ // 12 designers
          { 
            name:'Zeinab Ali', 
            major:'Computer Science', 
            preProjects:["Designing a mobile app for tracking daily habits","Creating a website for an online portfolio"], 
            payment: 3500, 
            email:'zeinaba588@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a UI/UX designer specializing in mobile app and website design. I am passionate about creating user-friendly and visually appealing interfaces.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          { 
            name:'Rouz Abdullah', 
            major:'Computer Science', 
            preProjects:["Designing a user-friendly interface for a music streaming app","Creating wireframes for an e-commerce website"], 
            payment:2500, 
            email:'rouza234@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a UI/UX designer specializing in user-friendly interfaces and wireframing. I strive to create designs that enhance user experience and achieve business goals.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          { 
            name:'Abdulaziz Khudr', 
            major:'Technical Engineer', 
            preProjects:["Designing a dashboard for data visualization","Creating a mobile app for event planning"], 
            payment:4000, 
            email:'abdulazizk123@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a UI/UX designer with a technical background, specializing in dashboard design and mobile app development. I focus on creating visually appealing and functional designs.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          { 
            name:'Nadia Ahmed', 
            major:'Computer Science', 
            preProjects:["Designing a website for a digital agency","Creating a mobile app for recipe sharing"], 
            payment:5000, 
            email:'nadiama332@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a UI/UX designer specializing in website and mobile app design. I am dedicated to creating designs that are both visually appealing and user-friendly.',
            rate: 5.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          { 
            name:'Salman Muhammad', 
            major:'Software Engineer', 
            preProjects:["Designing a user interface for a fitness tracking app","Creating wireframes for a travel booking website"], 
            payment:4500, 
            email:'salmanm234@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a UI/UX designer with a background in software engineering. I specialize in creating intuitive user interfaces and effective wireframes.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          { 
            name:'Abdulrahman Noor', 
            major:'Software Engineer', 
            preProjects:["Designing a mobile app for language learning","Creating a website for a local business"], 
            payment:3200, 
            email:'abdulrahmann445@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a UI/UX designer with a software engineering background. I focus on creating designs that are both aesthetically pleasing and functional.',
            rate: 5.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          { 
            name:'Fatima Hassan', 
            major:'Computer Science', 
            preProjects:["Designing a user interface for a news app","Creating wireframes for a fashion e-commerce website"], 
            payment:1500, 
            email:'fatimah675@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a UI/UX designer specializing in news app interfaces and e-commerce website wireframes. I am passionate about creating designs that are both attractive and functional.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          { 
            name:'Khalid Ali', 
            major:'Computer Science', 
            preProjects:["Designing a dashboard for project management","Creating a mobile app for budget tracking"], 
            payment:3500, 
            email:'khalida234@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a UI/UX designer specializing in project management dashboards and budget tracking mobile apps. I aim to create designs that are intuitive and efficient.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          { 
            name:'Yasmine Mohammed', 
            major:'Computer Science', 
            preProjects:["Designing a user-friendly interface for a social networking app","Creating wireframes for an online education platform"], 
            payment:5000, 
            email:' yasminem776@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a UI/UX designer specializing in social networking app interfaces and online education platform wireframes. I strive to create designs that engage users and enhance their experience.',
            rate: 5.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          { 
            name:'Nora Ali', 
            major:'Computer Science', 
            preProjects:["Designing a website for a charity organization","Creating a mobile app for charity donations"], 
            payment:2000, 
            email:'noraa212@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a UI/UX designer specializing in website design for charitable organizations and mobile app design for donations. I am committed to creating designs that make a positive impact.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          { 
            name:'Mahmoud Omar', 
            major:'Software Engineer', 
            preProjects:["Designing a user interface for a recipe app","Creating wireframes for a real estate website"], 
            payment:1200, 
            email:'mahmoudo455@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a UI/UX designer with a background in software engineering. I specialize in creating user interfaces for apps and wireframes for websites.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          { 
            name:'Jameela Abdullah', 
            major:'Technical Engineer', 
            preProjects:["Designing a dashboard for analytics","Creating a mobile app for travel planning"], 
            payment:4000, 
            email:'jameelaa12@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a UI/UX designer with a technical background, specializing in dashboard design and mobile app development. I am dedicated to creating designs that are both functional and visually appealing.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        ];
     
        for (const designer of uiUxDesigners) {
          const existingDesigner = await uiUxDesigner.findOne({ email: designer.email });
          if (!existingDesigner) {
            const insertResult = await uiUxDesigner.insertOne(designer);
            console.log('UI/UX Designer inserted:', insertResult.insertedId);
          } else {
            console.log('UI/UX Designer already exists:', existingDesigner._id);
          }
      }  

      const problemSolvers = [ // 12 Programmers
            {
                name: "Emily Johnson",
                password: "Emily123",
                email: "emilyjohnson@gmail.com",
                note: "Skilled problem solver with expertise in troubleshooting software and hardware issues.",
                rate: 5.5,
                preprojects:[ "Resolved critical system failures and restored functionality within tight deadlines.","Implemented root cause analysis to reduce recurring problems","Optimized workflow processes to enhance team productivity"],
                payment: 2200,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"

            },
        
            {
                name: "Michael Smith",
                email: "michaelsmith@gmail.com",
                password: "Smith456",
                note: "Experienced in analyzing complex problems and devising efficient solutions.",
                rate: 4.5,
                preprojects: ["Developed innovative problem-solving techniques for optimizing business processes.", "Designed and deployed a predictive maintenance system","Automated routine tasks to free up resources for critical problem-solving"],
                payment: 2400,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Sophia Brown",
                email: "sophiabrown@gmail.com",
                password: "Brown789",
                note: "Expert problem solver with a proven track record of resolving customer issues effectively.",
                rate: 4.5,
                preprojects: ["Implemented troubleshooting protocols to enhance product reliability.","Conducted regular team training sessions on problem-solving techniques",   "Introduced a cross-functional team approach to tackle complex issues"],
                payment: 2300,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Matthew Wilson",
                email: "matthewwilson@gmail.com",
                password: "Matt123",
                note: "Skilled in identifying root causes of problems and implementing sustainable solutions.",
                rate: 4.5,
                preprojects: ["Streamlined processes to reduce downtime and improve productivity.", "Developed a knowledge base to document common problems and solutions",  "Utilized data analytics to identify and address performance bottlenecks"],
                payment: 2500,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Olivia Garcia",
                email: "oliviagarcia@gmail.com",
                password: "Olivia456",
                note: "Experienced problem solver with a knack for finding creative solutions to complex issues.",
                rate: 4.5,
                preprojects: "Resolved technical challenges to enhance user experience and satisfaction.",
                payment: 2100,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Ethan Martinez",
                email: "ethanmartinez@gmail.com",
                password: "Ethan789",
                note: "Resourceful problem solver with strong analytical skills and attention to detail.",
                rate: 4.5,
                preprojects: ["Identified system vulnerabilities and implemented security measures for protection.","Streamlined communication channels to reduce response times", "Created a customer feedback loop to identify and address pain points"],
                payment: 2300,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Ava Thompson",
                email: "avathompson@gmail.com",
                password: "Ava123",
                note: "Innovative problem solver with a passion for finding elegant solutions to complex problems.",
                rate: 4.5,
                preprojects: ["Developed custom solutions tailored to meet specific client needs.", "Implemented a continuous improvement program across departments","Developed a risk management strategy to anticipate and mitigate issues"],
                payment: 2200,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Noah Clark",
                email: "noahclark@gmail.com",
                password: "Noah456",
                note: "Skilled in troubleshooting technical issues and implementing corrective actions.",
                rate: 4.5,
                preprojects: ["Resolved system inefficiencies to optimize performance and functionality.","Established a culture of proactive problem-solving within the team", "Leveraged machine learning to predict and prevent equipment failures"],
                payment: 2400,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Isabella Baker",
                email: "isabellabaker@gmail.com",
                password: "Baker789",
                note: "Detail-oriented problem solver with a focus on delivering practical and effective solutions.",
                rate: 4.5,
                preprojects: ["Implemented process improvements to enhance organizational efficiency.", "Facilitated workshops to brainstorm and implement innovative solutions","Collaborated with IT to develop a ticketing system for problem resolution"],
                payment: 2300,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "William Rodriguez",
                email: "williamrodriguez@gmail.com",
                password: "William123",
                note: "Analytical problem solver with strong communication skills and a customer-centric approach.",
                rate: 4.5,
                preprojects: ["Resolved complex technical issues while ensuring minimal disruption to operations.", "Redesigned the support process to improve customer satisfaction","Created a dashboard to monitor and analyze problem resolution metrics"],
                payment: 2100,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Chloe Hernandez",
                email: "chloehernandez@gmail.com",
                password: "Chloe456",
                note: "Resourceful problem solver with a talent for identifying opportunities for improvement.",
                rate: 4.5,
                preprojects: ["Implemented innovative solutions to address critical business challenges.", "Developed an escalation protocol to handle high-priority issues","Implemented a feedback system to track the effectiveness of solutions"],
                payment: 2200,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "James Baker",
                email: "jamesbaker@gmail.com",
                password: "James789",
                note: "Experienced problem solver with a proactive approach to addressing technical issues.",
                rate:4.5,
                preprojects: ["Resolved complex problems to ensure seamless operation of systems and applications.", "Standardized troubleshooting procedures to ensure consistency", "Conducted a gap analysis to identify areas for improvement"],
                payment: 2500,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
            
        ];

        for (const document of problemSolvers) {
          const existingDocument = await problemSolver.findOne({ email: document.email });
          if (!existingDocument) {
              await problemSolver.insertOne(document);
              console.log('Document inserted: ' + document.email);
          } else {
              console.log('Document already exists: ' + document.email);
          }
      }

      const webProgrammers = [ // 24 programmers
      { 
        name: 'Mohammmad Abdalaziz', 
        major: 'Computer Science', 
        programmingPath: 'Web Development', 
        preProjects: ["Todo list","Online shopping cart","Youtube page"], 
        email: 'mohammad3002@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a passionate web developer with a strong background in computer science. I have worked on several projects, including todo lists, online shopping carts, and YouTube pages. My goal is to create user-friendly and efficient web solutions.',
        rate: 5.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"  
        
      },
        
      { 
        name: 'Anas Malek', 
        major: 'Computer Science', 
        programmingPath: 'Web Development', 
        preProjects: ["Todo list","Online shopping cart"], 
        email: 'Anas123@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a dedicated web developer with a passion for creating innovative and impactful solutions. My experience includes working on todo lists and online shopping carts. I strive for excellence in every project I undertake.',
        rate: 4.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg" 
      
      },
        
      { 
        name: 'Rama Musab', 
        major: 'Computer Science', 
        programmingPath: 'Web Development', 
        preProjects: ["Website for school","Chatbot"], 
        email: 'ramamusab258@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a skilled web developer with a focus on creating dynamic and user-friendly websites. My projects have included websites for schools and chatbots. I am passionate about using technology to solve real-world problems.',
        rate: 4.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
        
      },
        
      { 
        name: 'Mai Khdairat', 
        major: 'Computer Science', 
        programmingPath: 'Web Development', 
        preProjects: ["Design some websites like fiver","Chatbot"], 
        email: 'mai.alkhdairat@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a dedicated web developer with a passion for creating innovative and impactful solutions. My experience includes working on design projects and chatbots. I strive for excellence in every project I undertake.',
        rate: 5.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
        
      { 
        name: 'Suliman Mubarak', 
        major: 'Computer Science', 
        programmingPath: 'Web Development', 
        preProjects: ["Website for market","Online calculating"], 
        email: 'sulimansharadqa@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a skilled web developer with a focus on creating dynamic and user-friendly websites. My projects have included websites for markets and online calculators. I am passionate about using technology to solve real-world problems.',
        rate: 4.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
        
      },
        
      { 
        name: 'Alaa Maabreh', 
        major: 'Computer Science', 
        programmingPath: 'Web Development', 
        preProjects: ["Todo list","Website for company"], 
        email: 'alaamaabreh414@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a dedicated web developer with a passion for creating user-friendly and efficient websites. My projects have included todo lists and websites for companies. I strive for excellence in every project I undertake.',
        rate: 4.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
        
      { 
        name: 'Dema Tabangat', 
        major: 'Computer Science', 
        programmingPath: 'Web Development', 
        preProjects: ["Online shopping cart","A branding and design app that helps users create logos and branding materials for their businesses"], 
        email: 'dimassofian2002@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a creative web developer with a focus on creating innovative and user-friendly solutions. My projects have included online shopping carts and branding apps. I am passionate about using technology to solve real-world problems.',
        rate: 4.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg" 
      },
      { 
        name: 'Osama Daraghmeh', 
        major: 'Computer Science', 
        programmingPath: 'Web Development', 
        preProjects: ["A career development app that offers resources for job seekers and professionals","A business networking website"], 
        email: 'datab3122@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a dedicated web developer with a passion for creating impactful solutions. My projects have included career development apps and business networking websites. I strive for excellence in every project I undertake.',
        rate: 5.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
      { 
        name: 'Moh Hasan', 
        major: 'Computer Science', 
        programmingPath: 'Web Development', 
        preProjects: ["Online shopping cart","An online marketplace for unique handmade crafts and artisanal goods"], 
        email: 'Md788965838@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a passionate web developer with a focus on creating user-friendly and efficient websites. My projects have included online shopping carts and online marketplaces. I strive for excellence in every project I undertake.',
        rate: 4.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
      { 
        name: 'Zainab...', 
        major: 'Computer Science', 
        programmingPath: 'Web Development', 
        preProjects: ["A cooking app that helps users discover new recipes based on their dietary preferences","A travel app that helps users plan their adventures and discover hidden gems"], 
        email: 'mera78280@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a creative web developer with a focus on creating innovative and user-friendly solutions. My projects have included cooking apps and travel apps. I am passionate about using technology to solve real-world problems.',
        rate: 5.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },

      
      { 
        name: 'Sarah heasat', 
        major: 'Computer Science', 
        programmingPath: 'Web Development', 
        preProjects: ["A gardening website","Online shopping cart"], 
        email: 'sarhalhyasat991@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a dedicated web developer with a passion for creating user-friendly and efficient websites. My projects have included gardening websites and online shopping carts. I strive for excellence in every project I undertake.',
        rate: 4.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
        
      { 
        name: 'Areen...', 
        major: 'Computer Science', 
        programmingPath: 'Web Development', 
        preProjects: ["Todo list","A tech education app that teaches users about technology and digital skills"], 
        email: 'areenjarrah2003@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a dedicated web developer with a passion for creating innovative and user-friendly solutions. My projects have included todo lists and tech education apps. I strive for excellence in every project I undertake.',
        rate: 4.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
        
      { 
        name: 'Haneen Abdalnabi', 
        major: 'Computer Science', 
        programmingPath: 'Web Development', 
        preProjects: ["Todo list","An online marketplace for artisans to sell their handmade goods and creations"], 
        email: 'haneenabdaknabi33@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a creative web developer with a focus on creating innovative and user-friendly solutions. My projects have included todo lists and online marketplaces. I am passionate about using technology to solve real-world problems.',
        rate: 5.5,
        password: 'password123',
       certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
        
      { 
        name: 'Afnan...', 
        major: 'Computer Science', 
        programmingPath: 'Web Development', 
        preProjects: ["A branding and design app that helps users create logos and branding materials for their businesses","A travel app that offers personalized travel recommendations and itineraries"], 
        email: 'afnan6547@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a creative web developer with a focus on creating innovative and user-friendly solutions. My projects have included branding apps and travel apps. I am passionate about using technology to solve real-world problems.',
        rate: 5.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
        
      { 
        name: 'Rema aljarrah', 
        major: 'Computer Engineer', 
        programmingPath: 'Web Development', 
        preProjects: ["Website to help users manage their finances","An app that helps users track their fitness progress"], 
        email: 'remaaljarrah847@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a dedicated web developer with a focus on creating user-friendly and efficient solutions. My projects have included finance management websites and fitness tracking apps. I strive for excellence in every project I undertake.',
        rate: 4.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
        
      { 
        name: 'Somaiah khawaldeh', 
        major: 'Computer Engineer', 
        programmingPath: 'Web Development', 
        preProjects: ["A platform for users to discover and share recipes from around the world.","A travel planning website"], 
        email: 'sumayaalkhawaldeh66@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a creative web developer with a focus on creating innovative and user-friendly solutions. My projects have included recipe platforms and travel planning websites. I am passionate about using technology to solve real-world problems.',
        rate: 5.5,
        password: 'password123',
       certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
        
      { 
        name: 'Alaa theab', 
        major: 'Computer Engineer', 
        programmingPath: 'Web Development', 
        preProjects: ["A health and wellness platform","An app to help users manage their tasks, set reminders, and stay organized."], 
        email: 'alaadeyab2003@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a dedicated web developer with a focus on creating user-friendly and efficient solutions. My projects have included health platforms and task management apps. I strive for excellence in every project I undertake.',
        rate: 4.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
        
      { 
        name: 'Noorhan Alazzam', 
        major: 'Computer Engineer', 
        programmingPath: 'Web Development', 
        preProjects: ["A community for pet owners to connect","An app that provides gardening tips"], 
        email: 'noorhanalazzam2@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a dedicated web developer with a passion for creating user-friendly and efficient solutions. My projects have included pet owner communities and gardening tip apps. I strive for excellence in every project I undertake.',
        rate: 4.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
       Image:"picprogrammer.jpg"
      },
        
      { 
        name: 'Motasem Bayari', 
        major: 'Computer Engineer', 
        programmingPath: 'Web Development', 
        preProjects: ["A platform for homeowners to find home improvement ideas","A website that offers career development resources","An app for meditation, mindfulness practices, and mental well-being."], 
        email: 'mo3tasembayari3@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a dedicated web developer with a focus on creating user-friendly and efficient solutions. My projects have included home improvement platforms, career development websites, and meditation apps. I strive for excellence in every project I undertake.',
        rate: 4.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
        
      { 
        name: 'Bardes Aburabie', 
        major: 'Computer Engineer', 
        programmingPath: 'Web Development', 
        preProjects: ["A platform for learning programming","A website for book lovers to discover new books","An app for gardening enthusiasts to exchange tips"], 
        email: 'bardis.kh@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a dedicated web developer with a passion for creating user-friendly and efficient solutions. My projects have included programming platforms, book discovery websites, and gardening apps. I strive for excellence in every project I undertake.',
        rate: 4.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
        
      { 
        name: 'Rama Mustarehi', 
        major: 'Computer Engineer', 
        programmingPath: 'Web Development', 
        preProjects: ["A resource for entrepreneurs and small business owners, offering advice, tools, and networking opportunities"], 
        email: 'ramazeidan45@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a dedicated web developer with a focus on creating user-friendly and efficient solutions. My projects have included resources for entrepreneurs and small business owners. I strive for excellence in every project I undertake.',
        rate: 4.4,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
        
      { 
        name: 'Mahmoud Alkateb', 
        major: 'Computer Engineer', 
        programmingPath: 'Web Development', 
        preProjects: ["An online marketplace for handmade crafts, art, and unique products","A tool for brainstorming, organizing ideas"], 
        email: 'mahmoud1792004@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a dedicated web developer with a focus on creating user-friendly and efficient solutions. My projects have included online marketplaces and organizational tools. I strive for excellence in every project I undertake.',
        rate: 5.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
        
      { 
        name: 'Naqaa Alshakoor', 
        major: 'Computer Engineer', 
        programmingPath: 'Web Development', 
        preProjects: ["A home management app for organizing household tasks","An event planning platform for organizing and managing events","A community-driven platform for nature lovers to explore outdoor activities"], 
        email: 'shkoornaqaa@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a dedicated web developer with a focus on creating user-friendly and efficient solutions. My projects have included home management apps, event planning platforms, and community-driven platforms. I strive for excellence in every project I undertake.',
        rate: 4.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
        
      { 
        name: 'Mohammad Badran', 
        major: 'Computer Engineer', 
        programmingPath: 'Web Development', 
        preProjects: ["An educational platform for learning coding and software development through interactive projects and challenges","Booking website","Hotel website"], 
        email: 'mohammedbadranm5@gmail.com',
        picture: 'picProgrammer.jpg',
        note: 'I am a dedicated web developer with a focus on creating user-friendly and efficient solutions. My projects have included educational platforms, booking websites, and hotel websites. I strive for excellence in every project I undertake.',
        rate: 5.5,
        password: 'password123',
        certification:"programmerescertification.PDF",
        Image:"picprogrammer.jpg"
      },
        ];
    

        for (const programmer of webProgrammers) {
          const existingProgrammer = await webProgrammer.findOne({ email: programmer.email });
          if (!existingProgrammer) {
          const insertResult = await webProgrammer.insertOne(programmer);
          console.log('Web Programmer inserted:', insertResult.insertedId);
          } else {
          console.log('Web Programmer already exists:', existingProgrammer._id);
          }
      }

      const top6ProgrammersInHomePage = [
        {
          "_id": "6633dcfbea8e0416ceff3d65",
          "age": 22,
          "jobTitleName": "web devloper",
          "name": "mohammed mousa",
          "phoneNumber": "0788616370",
          "emailAddress": "mohammad.38002@gmail.com",
          "note": "Studied in BAU my major is computer science and I chose to be web back-end developer and i did some projects like todo list, youtube page , website about fitness and website online shopping …. feel free to deal with me to make best project with your needs and ideas with short time Deals pay started with 500$ and it increases or decreases depending on your needs ",
          "lastKey": "Thanks for you genius"
        },
        {
          "_id": "6633dcfcea8e0416ceff3d66",
          "age": 22,
          "jobTitleName": "web devloper",
          "name": "anas obidat",
          "phoneNumber": "0796378627",
          "emailAddress": "anasmobeidat88@gmail.com",
          "note": "Studied in BAU my major is computer science and I chose to be web full stack developer",
          "lastKey": "thank for you"
        },
        {
          "_id": "6633dcfcea8e0416ceff3d67",
          "age": 22,
          "jobTitleName": "web devloper",
          "name": "haya al-saleh",
          "phoneNumber": "0791927746",
          "emailAddress": "ahaya219@gmail.com",
          "note": "I studied Computer Science at B.A.U ",
          "lastKey": "thank for you"
        },
        {
          "_id": "6633dcfcea8e0416ceff3d68",
          "age": 22,
          "jobTitleName": "web devloper",
          "name": "shaima Nawafleh",
          "phoneNumber": "0776542498",
          "emailAddress": "Shaimanawafleh26o@gmail.com",
          "note": "I studied Computer Science at B.A. University, where I executed various websites using HTML, CSS, and JavaScript, including to-do lists and user interfaces for e-commerce websites. I'm also proficient in developing interactive web applications and creating innovative user interfaces. If you're looking for a front-end developer to help you enhance the design of your amazing website, then you're in the right place. Customer satisfaction is my top priority. Delivery of work on time is guaranteed. Prices start from $440.Let's get started!",
          "lastKey": "thank for you"
        },
        {
          "_id": "6633dcfcea8e0416ceff3d69",
          "age": 20,
          "jobTitleName": "web devloper",
          "name": "rama hourani",
          "phoneNumber": "0771923062",
          "emailAddress": "alhwranymhmd12@gmail.com",
          "note": "Studied in ABU is computer science and I chose to be web full-stack(front and back end) developer,A professional website developer of experience in front-end and back-end development. Specializes in using programming languages such as HTML, CSS, JavaScript, and frameworks like MongoDB and Node.js. Experienced in designing and developing attractive user interfaces and high-performance dynamic websites.",
          "lastKey": "thank you"
        },
        {
          "_id": "6633dcfcea8e0416ceff3d6a",
          "age": 22,
          "jobTitleName": "web devloper",
          "name": "mohammed melhem",
          "phoneNumber": "07 7793 4882",
          "emailAddress": "mohammednmelhem@gmail.com",
          "note": " Studied in BAU my major is computer science I chose to be Proficiency in programming languages such as HTML, CSS, and JavaScript. Experience with frameworks such as React.js, Angular.js, and Vue.js.Solid understanding of backend technologies like Node.js and Express.js. Proficiency with solid databases including MySQL.Knowledge of design techniques and user experience (UI/UX). Ability to work with modern tools and technologies in web development. Excellent communication skills and ability to work in a team.",
          "lastKey": "thanks"
        }
      ];

        for (const document of top6ProgrammersInHomePage) {
          const existingDocument = await top6Programmers.findOne(document);
          if (!existingDocument) {
            await top6Programmers.insertOne(document);
            console.log(`Document inserted: ${document.name}`);
          } else {
            console.log(`Document already exists: ${document.name}`);
          }
      }

      const machineLearningProgrammers= [ // 12 Programmers
        {
            name: "Ryan Williams",
            email: "ryanwilliams@gmail.com",
            password: "Ryan123",
            note: "Machine learning engineer specializing in natural language processing.",
            rate: 4.5,
            preprojects: ["Developed sentiment analysis models for social media data.","Implemented a recommendation system for an e-commerce platform", "Created a natural language processing (NLP) model for sentiment analysis"],
            payment: 2200,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Sophia Lee",
            email: "sophialee@gmail.com",
            password: "Sophia456",
            note: "Experienced in building recommendation systems for e-commerce platforms.",
            rate:4.5,
            preprojects:[ "Implemented collaborative filtering algorithms for personalized product recommendations.",   "Built a computer vision system for image classification and object detection", "Developed a fraud detection system using anomaly detection techniques"],
            payment: 2400,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Monther Brown",
            email: "montherbrown@gmail.com",
            password: "Matt789",
            note: "Data scientist with expertise in predictive modeling and time series analysis.",
            rate: 4.5,
            preprojects: ["Built forecasting models for sales prediction in retail industry.",  "Designed and deployed a chatbot using deep learning frameworks", "Implemented a machine learning pipeline for automated data preprocessing"],
            payment: 2300,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Olivia Martinez",
            email: "oliviamartinez@gmail.com",
            password: "Olivia123",
            note: "Specializes in computer vision algorithms for object detection and recognition.",
            rate: 4.5,
            preprojects: ["Developed facial recognition systems for security applications.",  "Optimized hyperparameters for a neural network to improve accuracy","Developed a time series forecasting model for sales prediction"],
            payment: 2500,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Ethan Taylor",
            email: "ethantaylor@gmail.com",
            password: "Ethan456",
            note: "Expertise in building deep learning models for image classification.",
            rate: 5.5,
            preprojects: ["Trained convolutional neural networks for medical image analysis.","Built a reinforcement learning model for optimizing supply chain logistics","Created an AI-powered customer segmentation model for targeted marketing"],
            payment: 2100, 
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Ava Clark",
            email: "avaclark@gmail.com",
            password: "Ava789",
            note: "Skilled in unsupervised learning techniques such as clustering and anomaly detection.",
            rate: 4.5,
            preprojects: ["Implemented customer segmentation models for marketing campaigns.", "Implemented a facial recognition system using convolutional neural networks (CNNs)","Developed a speech recognition system using recurrent neural networks (RNNs)"],
            payment: 2300,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Noah Radi",
            email: "noahradi@gmail.com",
            password: "Noah123",
            note: "Machine learning researcher focusing on reinforcement learning algorithms.",
            rate:5.5,
            preprojects:[ "Developed autonomous agents for game playing applications.", "Designed an AI-driven recommendation engine for content personalization", "Built a machine learning model to predict customer churn"],
            payment: 2200,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Isabella Baker",
            email: "isabellabaker@gmail.com",
            password: "Baker456",
            note: "Expert in building machine learning pipelines for data preprocessing and model training.",
            rate: 4.5,
            preprojects:[ "Created automated data preprocessing workflows for large-scale datasets.",  "Developed a real-time anomaly detection system for network security", "Implemented a sentiment analysis tool for social media monitoring"],
            payment: 2400,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "kareman Hernandez",
            email: "karemanhernandez@gmail.com",
            password: "William123",
            note: "Data scientist specializing in Bayesian inference and probabilistic programming.",
            rate: 5.5,
            preprojects: ["Implemented probabilistic models for fraud detection in financial transactions.", "Created a machine learning model for credit scoring and risk assessment","Developed a predictive analytics solution for healthcare diagnostics"],
            payment: 2300,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Chloe Wilson",
            email: "chloewilson@gmail.com",
            password: "Chloe456",
            note: "Skilled in natural language understanding and text generation using deep learning.",
            rate: 4.5,
            preprojects: ["Developed chatbots with contextual understanding capabilities.","Built a machine learning model to optimize ad targeting and ROI", "Designed an AI-powered image enhancement and restoration tool"],
            payment: 2100,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "James Garcia",
            email: "jamesgarcia@gmail.com",
            password: "James789",
            note: "Machine learning engineer with experience in reinforcement learning and robotics.",
            rate: 5.5,
            preprojects:["Trained robotic agents for autonomous navigation tasks.",  "Implemented a machine learning model for predictive maintenance in manufacturing", "Created a recommendation system for personalized learning paths in education"],
            payment: 2500,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Emma Hernandez",
            email: "emmahernandez@gmail.com",
            password: "Emma123",
            note: "Data scientist specializing in time series forecasting and anomaly detection.",
            rate:4.5,
            preprojects: ["Built anomaly detection models for network security.", "Developed a machine learning model to optimize energy consumption", "Built an AI-driven diagnostic tool for early disease detection"],
            payment: 2200,
            certification:"programmerescertification.PDF",
            image:"picprogrammer.jpg"
        }
   
        ];

        for (const document of machineLearningProgrammers) {
          const existingDocument = await machineLarning.findOne({ email: document.email });
          if (!existingDocument) {
              await machineLarning.insertOne(document);
              console.log('Document inserted: ' + document.email);
          } else {
              console.log('Document already exists: ' + document.email);
          }
      }

      const databaseManagersAndProgrammers= [ // 12 Programmers
        {
            name: "Ryan Smith",
            email: "ryansmith@gmail.com",
            password: "Ryan123",
            note: "Experienced database administrator proficient in MySQL and SQL Server.",
            rate:4.5,
            preprojects:[ "Implemented database replication for disaster recovery purposes.", "Designed and implemented a scalable relational database for an e-commerce platform","Optimized database queries to improve performance and reduce latency"],
            payment: 2200,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Emma Wilson",
            email: "emmawilson@gmail.com",
            password: "EmmaPass456",
            note: "Senior database engineer specializing in MongoDB and Redis.",
            rate: 5.5,
            preprojects: ["Developed scalable database solutions for real-time analytics.",  "Developed stored procedures and triggers for automated data processing", "Implemented a backup and recovery strategy to ensure data integrity"],
            payment: 2400,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "Daniel Thompson",
            email: "danielthompson@gmail.com",
            password: "Daniel789",
            note: "Database architect with expertise in PostgreSQL and Amazon RDS.",
            rate: 4.5,
            preprojects: ["Deployed cloud-based database solutions for startups.",  "Migrated legacy databases to modern SQL and NoSQL platforms","Designed a data warehouse for business intelligence and analytics"],
            payment: 2300,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "Sophia Garcia",
            email: "sophiagarcia@gmail.com",
            password: "Sophia123",
            note: "Junior database administrator with skills in MySQL and MongoDB.",
            rate: 4.5,
            preprojects:[ "Performed database migrations for legacy systems.","Created complex SQL queries for data analysis and reporting","Automated database maintenance tasks using scripts and tools"],
            payment: 1900,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "Matthew Wilson",
            email: "matthewwilson@gmail.com",
            password: "Matt456",
            note: "Database developer specializing in SQL Server and SQLite.",
            rate: 4.5,
            preprojects: ["Created database-driven web applications for small businesses.",  "Implemented data partitioning and sharding for improved scalability","Developed a database schema for a customer relationship management (CRM) system"],
            payment: 2100,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "Olivia Brown",
            email :"oliviabrown@gmail.com",
            password: "Olivia789",
            note: "Database analyst experienced in data mining and predictive analytics.",
            rate:3.5,
            preprojects: ["Built predictive models using machine learning algorithms.","Conducted performance tuning and optimization for high-traffic databases","Implemented data encryption and security measures to protect sensitive information"],
            payment: 2200,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "Ethan Martinez",
            email: "ethanmartinez@gmail.com",
            password: "EthanPass123",
            note: "Data engineer with expertise in big data technologies like Hadoop and Spark.",
            rate: "5/5",
            preprojects: ["Implemented data pipelines for real-time data processing.","Designed an ETL process to integrate data from multiple sources","Developed a real-time data replication system for disaster recovery"],
            payment: 2300,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "Ava Taylor",
            email: "avataylor@gmail.com",
            password: "Ava456",
            note: "Database consultant specializing in performance tuning and optimization.",
            rate: 4.5,
            preprojects: ["Optimized database queries for high-volume transactional systems.", "Optimized indexing strategies to enhance query performance","Implemented database monitoring and alerting systems"],
            payment: 2500,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "Noah Clark",
            email: "noahclark@gmail.com",
            password: "NoahPass789",
            note: "Database manager with experience in MySQL, PostgreSQL, and Oracle Database.",
            rate: 4.5,
            preprojects:[ "Implemented database clustering for high availability.", "Designed a distributed database architecture for a global application","Developed a RESTful API for database access and manipulation"],
            payment: 2100,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "Isabella Baker",
            email: "isabellabaker@gmail.com",
            password: "Baker123",
            note: "Database developer proficient in SQL Server Integration Services (SSIS) and ETL processes.",
            rate: 5.5,
            preprojects:[ "Developed data integration solutions for data warehousing.","Implemented role-based access control (RBAC) to manage user permissions","Created a data archiving solution to manage large datasets"],
            payment: 2000,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "William Rodriguez",
            email: "williamrodriguez@gmail.com",
            password: "William456",
            note :"Database administrator specializing in Oracle Database performance tuning.",
            rate: 4.5,
            preprojects: ["Tuned SQL queries for improved performance and scalability.", "Developed a database audit trail to track changes and ensure compliance","Designed a data migration plan for a large-scale database upgrade"],
            payment: 2200,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          },
        
          {
            name: "Chloe Hernandez",
            email: "chloehernandez@gmail.com",
            password: "ChloePass123",
            note: "Database specialist focusing on database security and access control.",
            rate: 4.5,
            preprojects:["Implemented role-based access control for database systems.","Implemented data normalization and denormalization techniques", "Developed custom database functions to support application requirements"],
            payment: 2200,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
          }
    
        ];

        for (const document of databaseManagersAndProgrammers) {
          const existingDocument = await databaseManager.findOne({ email: document.email });
          if (!existingDocument) {
              await databaseManager.insertOne(document);
              console.log('Document inserted: ' + document.email);
          } else {
              console.log('Document already exists: ' + document.email);
          }
      }
  
      const qualityAssuranceEmployees= [ // 12 Programmers
             {
                 name: "Emily Johnson",
                 email: "emilyjohnson@gmail.com",
                 password: "Emily456",
                 note: "Quality assurance specialist with expertise in ISO standards compliance.",
                 rate: 4.5,
                 preprojects: ["Implemented quality management systems for manufacturing processes.", "Developed comprehensive test plans and test cases for web applications","Implemented automated testing frameworks using Selenium and Jenkins"],
                 payment: 2400,
                 certification:"programmerescertification.PDF",
                 Image:"picprogrammer.jpg"
             },

             {
                 name: "Michael Brown",
                 email: "michaelbrown@gmail.com",
                 password: "Brown789",
                 note: "Skilled in conducting audits and root cause analysis for quality improvement.",
                 rate:4.5,
                 preprojects: ["Led corrective action initiatives to address quality issues.",  "Conducted manual testing to identify and document software defects", "Performed regression testing to ensure stability of new releases"],
                 payment: 2200,
                 certification:"programmerescertification.PDF",
                 Image:"picprogrammer.jpg"
             },

             {
                 name: "Sophia Martinez",
                 email: "sophiamartinez@gmail.com",
                 password: "Sophia123",
                 note: "Quality control manager with a focus on product inspection and testing.",
                 rate: 4.5,
                 preprojects: ["Developed quality control procedures to ensure product reliability.",  "Designed and executed performance and load tests using JMeter", "Collaborated with development teams to improve code quality and reduce bugs"],
                 payment: 2500,
                 certification:"programmerescertification.PDF",
                 Image:"picprogrammer.jpg"
             },

             {
                 name: "Matthew Wilson",
                 email: "matthewwilson@gmail.com",
                 password: "Matthew456",
                 note: "Expertise in statistical analysis and quality performance metrics.",
                 rate: 5.5,
                 preprojects: ["Implemented statistical process control methods for quality monitoring.","Developed a continuous integration/continuous deployment (CI/CD) pipeline", "Conducted usability testing to ensure user-friendly interfaces"],
                 payment: 2300,
                 certification:"programmerescertification.PDF",
                 Image:"picprogrammer.jpg"
             },

             {
                 name: "Olivia Garcia",
                 email: "oliviagarcia@gmail.com",
                 password: "Olivia789",
                 note: "Quality engineer with experience in Six Sigma methodologies.",
                 rate: 4.5,
                 preprojects: ["Led Six Sigma projects to reduce defects and improve efficiency.", "Performed security testing to identify vulnerabilities and ensure data protection", "Created and maintained detailed bug reports and documentation"],
                 payment: 2600,
                 certification:"programmerescertification.PDF",
                 Image:"picprogrammer.jpg"
             },

             {
                 name: "Ethan Clark",
                 email: "ethanclark@gmail.com",
                 password: "Ethan123",
                 note: "Skilled in quality risk management and failure mode analysis.",
                 rate: 5.5,
                 preprojects: ["Developed risk mitigation strategies to prevent quality issues.", "Implemented test automation for API testing using Postman","Conducted cross-browser and cross-platform testing"],
                 payment: 2400,
                 certification:"programmerescertification.PDF",
                 image:"picprogrammer.jpg"
             },

             {
                 name: "Ava Taylor",
                 email: "avataylor@gmail.com",
                 password: "Ava456",
                 note: "Quality assurance engineer specializing in product validation and verification.",
                 rate: 4.5,
                 preprojects: ["Conducted validation testing to ensure product compliance with specifications.",  "Developed a test strategy for mobile applications","Performed root cause analysis on critical defects and issues"],
                 payment: 2200,
                 certification:"programmerescertification.PDF",
                 mage:"picprogrammer.jpg"
             },

             {
                 name: "Noah Hernandez",
                 email: "noahhernandez@gmail.com",
                 password: "Noah789",
                 note: "Quality management professional with a focus on continuous improvement methodologies.",
                 rate: 4.5,
                 preprojects: ["Implemented Lean manufacturing principles to optimize production processes.", "Implemented quality metrics and KPIs to track testing effectiveness", "Designed and maintained test environments and test data"],
                 payment: 2500,
                 certification:"programmerescertification.PDF",
                 Image:"picprogrammer.jpg"
             },

             {
                 name: "Isabella Baker",
                 email: "isabellabaker@gmail.com",
                 password: "Baker123",
                 note: "Skilled in quality documentation and regulatory compliance.",
                 rate: 4.6,
                 preprojects: ["Maintained quality records and ensured compliance with industry regulations.",  "Conducted training sessions for new QA team members","Developed and executed smoke tests for build verification"],
                 payment: 2300,
                 certification:"programmerescertification.PDF",
                 Image:"picprogrammer.jpg"
             },

             {
                 name: "William Rodriguez",
                 email: "williamrodriguez@gmail.com",
                 password: "William456",
                 note: "Quality analyst with expertise in process improvement and defect prevention.",
                 rate: 5.5,
                 preprojects: ["Identified root causes of defects and implemented preventive measures.", "Participated in sprint planning and retrospectives to ensure quality objectives","Implemented a defect management process to prioritize and resolve issues"],
                 payment: 2600,
                 certification:"programmerescertification.PDF",
                 Image:"picprogrammer.jpg"
             },

             {
                 name: "Chloe Wilson",
                 email: "chloewilson@gmail.com",
                 password: "Chloe789",
                 note: "Quality coordinator experienced in supplier quality management.",
                 rate: 5.5,
                 preprojects: ["Managed supplier audits and evaluated supplier performance.", "Conducted compatibility testing for various devices and operating systems","Developed scripts for automated database validation and testing"],
                 payment: 2400,
                 certification:"programmerescertification.PDF",
                 Image:"picprogrammer.jpg"
             },

             {
                 name: "James Taylor",
                 email: "jamestaylor@gmail.com",
                 password: "James123",
                 note: "Quality control inspector with a focus on product quality assurance.",
                 rate: 4.5,
                 preprojects: ["Performed inspections to ensure compliance with quality standards.", "Performed accessibility testing to ensure compliance with WCAG standards","Conducted exploratory testing to identify edge cases and unexpected behaviors"],
                 payment: 2200,
                 certification:"programmerescertification.PDF",
                 Image:"picprogrammer.jpg"
             }
                
        ];

        for (const document of qualityAssuranceEmployees) {
          const existingDocument = await qualityAssurance.findOne({ email: document.email });
          if (!existingDocument) {
              await qualityAssurance.insertOne(document);
              console.log('Document inserted: ' + document.email);
          } else {
              console.log('Document already exists: ' + document.email);
          }
      }

      const backEndProgrammers = [ // 12 Programmers
            {
                name: "Javier Martinez",
                major: "Computer Science",
                payment: 1500,
                preProjects: ["Fitness Tracking App", "Online Learning Platform"],
                email: "JavierMartinez14@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am a backend developer with a focus on creating robust and secure applications. I have experience working on fitness tracking and online learning platforms, where I implemented efficient data management solutions. I am dedicated to delivering high-quality code and solving complex problems. 5 stars",
                password: "password123",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
              
            },
        
            {
                name: "Leila Ali",
                major: "Computer Science",
                payment: 4500,
                preProjects: ["Recipe Sharing App", "Event Planning App"],
                email: "LeilaAli7@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am a passionate backend developer with a strong interest in creating innovative solutions. My experience includes working on recipe sharing and event planning apps, where I focused on performance optimization and data security. I am dedicated to delivering high-quality code and exceeding client expectations. 5 stars",
                password: "password123",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Diego Rodriguez",
                major: "Computer Science",
                payment: 5000,
                preProjects: ["Travel Guide App", "Task Management App"],
                email: "DiegoRodriguez007@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am a backend developer with a passion for creating innovative solutions. My experience includes working on travel guide and task management apps, where I focused on creating efficient and scalable solutions. I am dedicated to delivering high-quality code and exceeding client expectations. 5 stars",
                password: "password123",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
              
                name: "Amara Patel",
                major: "Computer Science",
                payment: 1400,
                preProjects: ["Budgeting App", "Music Streaming App"],
                email: "AmaraPatel11@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am a backend developer with a strong background in Computer Science. I have experience working on budgeting and music streaming apps, where I focused on creating efficient and scalable solutions. I am dedicated to delivering high-quality code and meeting project deadlines. 5 stars",
                password: "password123",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
              
            },
        
            {
                name: "Juan Ramirez",
                major: "Computer Science",
                payment: 2500,
                preProjects: ["Recipe Sharing App", "E-commerce Platform"],
                email: "JuanRamirez1778@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am a backend developer with a focus on creating user-friendly and efficient applications. My experience includes working on recipe sharing and e-commerce platforms, where I implemented innovative solutions. I am dedicated to delivering high-quality code and exceeding client expectations. 5 stars",
                password: "password123",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Fatima Khan",
                major: "Computer Science",
                payment: 2000,
                preProjects: ["Fitness Tracking App", "Social Media App"],
                email: "FatimaKhan415@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am a backend developer with a passion for creating innovative solutions. My experience includes working on fitness tracking and social media apps, where I focused on creating efficient and scalable solutions. I am dedicated to delivering high-quality code and exceeding client expectations. 5 stars",
                password: "password123",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Santiago Morales",
                major: "Software Engineering",
                payment: 4500,
                preProjects: ["Task Management App", "Event Planning App"],
                email: "SantiagoMorales111@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am a backend developer with a focus on creating scalable and efficient applications. My experience includes working on task management and event planning apps, where I implemented innovative solutions. I am dedicated to delivering high-quality code and exceeding client expectations. 5 stars",
                password: "password123",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Layla Khan",
                major: "Software Engineering",
                payment: 3500,
                preProjects: ["E-commerce Platform", "Music Streaming App"],
                email: "LaylaKhan718@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am a backend developer with a passion for creating innovative solutions. My experience includes working on e-commerce and music streaming apps, where I focused on creating efficient and scalable solutions. I am dedicated to delivering high-quality code and exceeding client expectations. 5 stars",
                password: "password123",
                rate: 4.5,
               certification:"programmerescertification.PDF",
               Image:"picprogrammer.jpg"
            },
        
            {
                name: "Mateo Fernandez",
                major: "Software Engineering",
                payment: 1500,
                preProjects: ["Online Learning Platform", "Travel Guide App"],
                email: "MateoFernandez922@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am a backend developer with a focus on creating user-friendly and efficient applications. My experience includes working on online learning platforms and travel guide apps, where I implemented innovative solutions. I am dedicated to delivering high-quality code and exceeding client expectations. 5 stars",
                password: "password123",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Zara Ali",
                major: "Software Engineering",
                payment: 1500,
                preProjects: ["Recipe Sharing App", "Fitness Tracking App"],
                email: "ZaraAl789@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am a backend developer with a passion for creating innovative solutions. My experience includes working on recipe sharing and fitness tracking apps, where I focused on creating efficient and scalable solutions. I am dedicated to delivering high-quality code and exceeding client expectations. 5 stars",
                password: "password123",
                rate: 4.5,
               certification:"programmerescertification.PDF",
               Image:"picprogrammer.jpg"
            },
        
            {
                name: "Rafael Silva",
                major: "Data Science",
                payment: 5000,
                preProjects: ["Social Media App", "E-commerce Platform"],
                email: "RafaelSilva131@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am a backend developer with a focus on creating scalable and efficient applications. My experience includes working on social media and e-commerce platforms, where I implemented innovative solutions. I am dedicated to delivering high-quality code and exceeding client expectations. 5 stars",
                password: "password123",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Selena Khan",
                major: "Data Science",
                payment: 2220,
                preProjects: ["Budgeting App", "Music Streaming App"],
                email: "SelenaKh777@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am a backend developer with a focus on creating user-friendly and efficient applications. My experience includes working on budgeting and music streaming apps, where I implemented innovative solutions. I am dedicated to delivering high-quality code and exceeding client expectations. 5 stars",
                password: "password123",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            }
        ];

        for (const programmer of backEndProgrammers) {
          const existingProgrammer = await backEndProgrammer.findOne({ email: programmer.email });
          if (!existingProgrammer) {
                  const insertResult = await backEndProgrammer.insertOne(programmer);
              console.log('Backend Programmer inserted:', insertResult.insertedId);
          } else {
              console.log('Backend Programmer already exists:', existingProgrammer._id);
          }
      }

      const softwareDevelopers = [ // 12 Programmers
        {
            name: "rama",
            email: "ramamohammed@gmail.com",
            password: "Passw0rd!",
            note: "Experienced full-stack developer with expertise in Java and React.",
            rate: 3.5,
            preprojects: ["Developed a project management tool using Django framework.", "Developed a full-stack web application using React and Node.js","Implemented RESTful APIs for a financial services platform"],
            payment: 1200,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },

        {
            name: "Ahmed Nasser",
            email: "ahmed.nasser@example.com",
            password: "SecurePass123",
            note: "Proficient full-stack developer with expertise in Python and Angular.",
            rate: 4.5,
            preprojects: ["Implemented a scalable e-commerce platform using Flask and PostgreSQL.", "Designed and built a responsive e-commerce website","Developed a mobile application using Flutter and Dart"],
            payment: 1500,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
            
        },

        
        {
            name: "Alex Turner",
            email: "alexturner@gmail.com",
            password: "SecurePass789",
            note: "Backend developer proficient in Node.js and MongoDB.",
            rate: 4.5,
            preprojects: ["Developed RESTful APIs for various web applications.", "Created a microservices architecture for a large-scale application","Optimized database queries to improve performance and reduce load times"],
            payment: 1500,
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        {
          name: "Sarah Clark",
          email: "sarahclark@gmail.com",
          password: "DevPass321",
          note: "Software engineer with expertise in Python, Django, and PostgreSQL.",
          rate: 3.5,
          preprojects: ["Implemented machine learning algorithms for data analysis projects.", "Developed a real-time chat application using WebSocket and Socket.io", "Built a custom content management system (CMS) for a news website"],
          payment: 1700,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        },
        
        {
          name: "Michael Wang",
          email: "michaelwang@gmail.com",
          password: "CodeMaster456",
          note: "Full-stack developer with skills in Java Spring Boot and React Native.",
          rate: 4.5,
          preprojects: ["Created mobile applications for iOS and Android platforms.",  "Integrated third-party APIs for payment processing and shipping","Developed unit and integration tests using Jest and Mocha"],
          payment: 1800,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        },
        
        {
          name: "Jessica Lee",
          email: "jessicalee@gmail.com",
          password: "Lee123",
          note: "Senior software developer specializing in .NET and C# development.",
          rate: "5/5",
          preprojects: ["Led the development of enterprise-level CRM systems.","Implemented a continuous integration/continuous deployment (CI/CD) pipeline using Jenkins", "Designed and developed a machine learning model for predictive analytics"],
          payment: 10000,
          certification:"programmerescertification.PDF",
          image:"picprogrammer.jpg"
        },
        
        {
          name: "David Miller",
          email: "davidmiller@gmail.com",
          password: "MillerDev789",
          note: "Frontend developer with expertise in React.js and Vue.js frameworks.",
          rate: 2.5,
          preprojects: ["Developed user-friendly interfaces for SaaS applications.", "Created a user authentication system using JWT and OAuth2","Developed a custom plugin for a WordPress website"],
          payment: 1900,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        },
        {
          name: "Emma Garcia",
          email: "emmagarcia@gamil.com",
          password: "Emma456",
          note: "Software engineer passionate about AI and machine learning.",
          rate: 4.5,
          preprojects: ["Implemented natural language processing algorithms for chatbots.",  "Built a data visualization dashboard using D3.js and Chart.js", "Implemented serverless functions using AWS Lambda"],
          payment: 1800,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        },
        
        {
          name: "Daniel Brown",
          email: "danielbrown@gamil.com",
          password: "BrownDev987",
          note: "Backend developer specializing in microservices architecture and Docker.",
          rate:4.5 ,
          preprojects: ["Built scalable APIs for cloud-based applications.","Developed a progressive web app (PWA) for offline capabilities","Optimized front-end performance using lazy loading and code splitting"],
          payment: 1900,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        },
        
        {
          name: "Olivia Wilson",
          email: "oliviawilson@gmail.com",
          password: "Wilson123",
          note: "Full-stack developer proficient in Ruby on Rails and AngularJS.",
          rate: 5.5,
          preprojects: ["Developed e-learning platforms with interactive video content.", "Implemented a role-based access control (RBAC) system","Developed a real-time data synchronization solution using Firebase"],
          payment: 10000,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        },
        {
          name: "James Martinez",
          email: "jamesmartinez@gmail.com",
          password: "JamesDev123",
          note: "Senior software engineer with expertise in Java Spring and Hibernate.",
          rate: 4.5,
          preprojects: ["Architected high-performance financial trading platforms.","Created an automated deployment script using Docker and Kubernetes","Built an event-driven architecture using Kafka"],
          payment: 1700,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        },
        {
          name: "Sophia Lopez",
          email: "sophialopez@gamil.com",
          password: "Sophia567",
          note: "Frontend developer passionate about accessibility and responsive design.",
          rate: 4.5,
          preprojects: ["Optimized website performance for mobile devices.","Implemented caching strategies using Redis and Memcached","Developed a custom report generation tool using Python and Pandas"],
          payment: 1800,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        }
        ];

        for (const document of softwareDevelopers) {
          const existingDocument = await softwareDeveloper.findOne({ email: document.email });
          if (!existingDocument) {
              await softwareDeveloper.insertOne(document);
              console.log('Document inserted: ' + document.email);
          } else {
              console.log('Document already exists: ' + document.email);
          }
      }

      const chatbotProgrammers = [ // 12 Programmers
        {
            name: "Youssef Ahmed",
            major: "Computer Science",
            payment: 5000,
            preProjects: ["AI Chatbot for Customer Support", "Natural Language Processing for Chatbots"],
            email: "YoussefAhmed32@gmail.com",
            picture: "picProgrammer.jpg",
            note: "I am a dedicated AI programmer with a passion for creating intelligent chatbots. My expertise lies in natural language processing and machine learning algorithms. I strive to develop chatbots that provide seamless and helpful interactions for users.",
            password: "password123",
            rate: 4.5,
            certification: "ProgrammersCertification.pdf",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Aisha Sharma",
            major: "Artificial Intelligence",
            payment: 4800,
            preProjects: ["AI Chatbot for Educational Purposes", "Virtual Assistant for Healthcare"],
            email: "AishaSharma45@gmail.com",
            picture: "picProgrammer.jpg",
            note: "As an AI enthusiast, I am committed to developing cutting-edge chatbots that leverage the latest advancements in artificial intelligence. My goal is to create chatbots that can effectively understand and respond to human queries, improving user experience and efficiency.",
            password: "password123",
            rate: 4.5,
            certification: "ProgrammersCertification.pdf",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Ahmed Khan",
            major: "Computer Science",
            payment: 2400,
            preProjects: ["AI Chatbot for E-commerce", "Virtual Assistant for Customer Queries"],
            email: "AhmedKhan78@gmail.com",
            picture: "picProgrammer.jpg",
            note: "I am passionate about AI and its applications in creating intelligent chatbots. I have experience in developing chatbots that can streamline customer interactions and improve overall user satisfaction.",
            password: "password123",
            rate: 4.5,
            certification: "ProgrammersCertification.pdf",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Priya Patel",
            major: "Artificial Intelligence",
            payment: 3400,
            preProjects: ["Chatbot for Mental Health Support", "AI-powered Virtual Assistant"],
            email: "PriyaPatel63@gmail.com",
            picture: "picProgrammer.jpg",
            note: "I specialize in developing AI-driven chatbots that provide support and assistance in various fields. My focus is on creating chatbots that can empathize and communicate effectively with users.",
            password: "password123",
            rate: 4.5,
            certification: "ProgrammersCertification.pdf",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Sohail Ahmed",
            major: "Computer Science",
            payment: 5000,
            preProjects: ["AI Chatbot for Business Management", "Virtual Assistant for Product Recommendations"],
            email: "SohailAhmed92@gmail.com",
            picture: "picProgrammer.jpg",
            note: "I am a skilled AI programmer with a keen interest in developing chatbots that enhance business operations. My goal is to create chatbots that can assist in decision-making and improve productivity.",
            password: "password123",
            rate: 4.5,
            certification: "ProgrammersCertification.pdf",
            Image:"picprogrammer.jpg"
          
        },
        
        {
            name: "Ritu Singh",
            major: "Artificial Intelligence",
            payment: 5000,
            preProjects: ["AI Chatbot for Educational Institutions", "Virtual Assistant for Daily Tasks"],
            email: "RituSingh84@gmail.com",
            picture: "picProgrammer.jpg",
            note: "I am dedicated to leveraging AI to create chatbots that simplify complex tasks and enhance learning experiences. My focus is on developing chatbots that can adapt to different contexts and provide personalized interactions.",
            password: "password123",
            rate: 4.5,
            certification: "ProgrammersCertification.pdf",
            Image:"picprogrammer.jpg"
          
        },
        
        {
            name: "Karan Mehta",
            major: "Computer Science",
            payment: 5000,
            preProjects: ["AI Chatbot for Travel Planning", "Virtual Assistant for Smart Homes"],
            email: "KaranMehta51@gmail.com",
            picture: "picProgrammer.jpg",
            note: "I am an AI enthusiast with a passion for creating chatbots that simplify everyday tasks. My projects focus on developing chatbots that can assist users in various aspects of their lives.",
            password: "password123",
            rate: 4.5,
            certification: "ProgrammersCertification.pdf",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Anjali Verma",
            major: "Artificial Intelligence",
            payment: 5000,
            preProjects: ["Chatbot for Customer Feedback", "AI-powered Virtual Assistant for Healthcare"],
            email: "AnjaliVerma09@gmail.com",
            picture: "picProgrammer.jpg",
            note: "I specialize in developing AI chatbots that improve customer engagement and satisfaction. My focus is on creating chatbots that can understand and respond to customer feedback in real-time.",
            password: "password123",
            rate: 4.5,
            certification: "ProgrammersCertification.pdf",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Arjun Patel",
            major: "Computer Science",
            payment: 4500,
            preProjects: ["AI Chatbot for Appointment Scheduling", "Virtual Assistant for Personal Finance"],
            email: "ArjunPatel36@gmail.com",
            picture: "picProgrammer.jpg",
            note: "I am passionate about developing AI chatbots that simplify complex tasks and improve efficiency. My projects focus on creating chatbots that can automate appointment scheduling and provide financial advice.",
            password: "password123",
            rate: 4.5,
            certification: "ProgrammersCertification.pdf",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Sara Khan",
            major: "Artificial Intelligence",
            payment: 4100,
            preProjects: ["AI Chatbot for Language Translation", "Virtual Assistant for Event Planning"],
            email: "SaraKhan71@gmail.com",
            picture: "picProgrammer.jpg",
            note: "I specialize in developing AI chatbots that facilitate communication and organization. My projects focus on creating chatbots that can translate languages and assist in event planning.",
            password: "password123",
            rate: 4.5,
            certification: "ProgrammersCertification.pdf",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Amit Sharma",
            major: "Computer Science",
            payment: 5000,
            preProjects: ["AI Chatbot for Recruitment", "Virtual Assistant for Task Management"],
            email: "AmitSharma20@gmail.com",
            picture: "picProgrammer.jpg",
            note: "I am an AI programmer with a focus on developing chatbots that improve recruitment processes and task management. My goal is to create chatbots that can streamline operations and enhance productivity.",
            password: "password123",
            rate: 4.5,
            certification: "ProgrammersCertification.pdf",
            Image:"picprogrammer.jpg"
        },
        
        {
            name: "Shreya Patel",
            major: "Artificial Intelligence",
            payment: 4400,
            preProjects: ["AI Chatbot for Mental Health Support", "Virtual Assistant for Daily Planning"],
            email: "ShreyaPatel57@gmail.com",
            picture: "picProgrammer.jpg",
            note: "I am dedicated to using AI to create chatbots that improve mental health support and daily planning. My projects focus on developing chatbots that can provide personalized assistance and guidance.",
            password: "password123",
            rate: 4.5,
            certification: "ProgrammersCertification.pdf",
            Image:"picprogrammer.jpg"
        }
        ];

        for (const programmer of chatbotProgrammers) {
          const existingProgrammer = await chatbotProgrammer.findOne({ email: programmer.email });
          if (!existingProgrammer) {
          const insertResult = await chatbotProgrammer.insertOne(programmer);
          console.log('Backend Programmer inserted:', insertResult.insertedId);
          } else {
          console.log('Backend Programmer already exists:', existingProgrammer._id);
          }
      }

      const securityProgrammers= [ // 12 Programmers
                    {
                        name: "Alice Smith",
                        email: "alicesmith@gmail.com",
                        password: "Alice123",
                        note: "Skilled security specialist with a focus on cybersecurity.",
                        rate: 4.5,
                        preprojects: ["Implemented robust security measures for web applications.","Developed an intrusion detection system (IDS) using machine learning algorithms", "Implemented multi-factor authentication (MFA) for a financial application"],
                        payment: 2200,
                        certification:"programmerescertification.PDF",
                        Image:"picprogrammer.jpg"
                    },
        
                    {
                        name: "Robert Johnson",
                        email: "robertjohnson@gmail.com",
                        password: "Robert456",
                        note: "Experienced in penetration testing and vulnerability assessment.",
                        rate: 4.5,
                        preprojects: ["Conducted security audits to identify vulnerabilities in IT systems.","Designed and deployed a secure VPN solution for remote employees", "Conducted penetration testing and vulnerability assessments on corporate networks"],
                        payment: 2400,
                        certification:"programmerescertification.PDF",
                        Image:"picprogrammer.jpg"
                    },
        
                    {
                        name: "Emma Davis",
                        email: "emmadavis@gmail.com",
                        password: "Emma789",
                        note: "Expertise in security incident response and threat detection.",
                        rate: 4.5,
                        preprojects: ["Developed incident response plans for cyber attacks.", "Developed a firewall configuration management tool","Implemented encryption protocols for data at rest and in transit"],
                        payment: 2300,
                        certification:"programmerescertification.PDF",
                        Image:"picprogrammer.jpg"
                    },
        
                    {
                        name: "Michael Wilson",
                        email: "michaelwilson@gmail.com",
                        password: "Michael123",
                        note: "Skilled in implementing security controls for cloud environments.",
                        rate:4.4,
                        preprojects: ["Deployed cloud security solutions to protect sensitive data.",  "Created a security information and event management (SIEM) system", "Developed secure coding practices and guidelines for the development team"],
                        payment: 2500,
                        certification:"programmerescertification.PDF",
                        Image:"picprogrammer.jpg"
                    },
        
                    {
                        name: "Sophia Garcia",
                        email: "sophiagarcia@gmail.com",
                        password: "Sophia456",
                        note: "Experienced in threat modeling and risk assessment.",
                        rate:5.5,
                        preprojects: ["Conducted risk assessments to identify potential security threats.",  "Implemented role-based access control (RBAC) to manage user permissions", "Conducted regular security audits and compliance checks"],
                        payment: 2100,
                        certification:"programmerescertification.PDF",
                        Image:"picprogrammer.jpg"
                    },
        
                    {
                        name: "Matthew Martinez",
                        email: "matthewmartinez@gmail.com",
                        password: "Matthew789",
                        note: "Specializes in security policy development and implementation.",
                        rate:5.5,
                        preprojects: ["Developed and implemented security policies for organizations.", "Developed a real-time threat detection and response system", "Implemented automated security testing in the CI/CD pipeline"],
                        payment: 2300,
                        certification:"programmerescertification.PDF",
                        Image:"picprogrammer.jpg"
                    },
        
                    {
                        name: "Olivia Thompson",
                        email: "oliviathompson@gmail.com",
                        password: "Olivia123",
                        note: "Expertise in network monitoring and intrusion detection systems.",
                        rate: 4.5,
                        preprojects: ["Deployed intrusion detection systems to detect cyber threats.", "Designed a secure architecture for cloud-based applications", "Developed a tool for monitoring and analyzing network traffic"],
                        payment: 2200,
                        certification:"programmerescertification.PDF",
                        Image:"picprogrammer.jpg"
                    },
        
                    {
                        name: "Ethan Clark",
                        email: "ethanclark@gmail.com",
                        password: "Ethan456",
                        note: "Skilled in implementing access control mechanisms for data protection.",
                        rate: 4.5,
                        preprojects: ["Implemented access control policies to restrict unauthorized access.", "Implemented secure API gateways to protect microservices","Conducted training sessions on cybersecurity best practices"],
                        payment: 2400,
                        certification:"programmerescertification.PDF",
                        Image:"picprogrammer.jpg"
                    },
        
                    {
                        name: "Ava Baker",
                        email: "avabaker@gmail.com",
                        password: "Ava789",
                        note: "Specializes in security compliance and regulatory standards.",
                        rate: 4.5,
                        preprojects: ["Ensured compliance with industry regulations and standards.", "Developed an application security testing framework", "Implemented data loss prevention (DLP) measures"],
                        payment: 2300,
                        certification:"programmerescertification.PDF",
                        Image:"picprogrammer.jpg"
                    },
        
                    {
                        name: "Noah Rodriguez",
                        email: "noahrodriguez@gmail.com",
                        password: "Noah123",
                        note: "Experienced in security awareness training and education programs.",
                        rate: 5.5,
                        preprojects: ["Conducted security awareness training sessions for employees.",  "Created a secure file transfer protocol (SFTP) solution","Developed a ransomware detection and mitigation tool"],
                        payment: 2100,
                        certification:"programmerescertification.PDF",
                        Image:"picprogrammer.jpg"
                    },
        
                    {
                        name: "Isabella Hernandez",
                        email: "isabellahernandez@gmail.com",
                        password: "Isabella456",
                        note: "Skilled in incident response coordination and management.",
                        rate:5.5,
                        preprojects: ["Coordinated incident response efforts during security breaches.", "Implemented a public key infrastructure (PKI) for secure communications","Developed a security dashboard for real-time monitoring of threats"],
                        payment: 2500,
                        certification:"programmerescertification.PDF",
                        Image:"picprogrammer.jpg"
                    },
        
                    {
                        name: "William Garcia",
                        email: "williamgarcia@gmail.com",
                        password: "William789",
                        note: "Expertise in security architecture design and implementation.",
                        rate: 4.5,
                        preprojects: ["Designed and implemented secure architectures for IT systems.", "Implemented secure session management in web applications","Designed and implemented a zero trust security model"],
                        payment: 2200,
                        certification:"programmerescertification.PDF",
                        Image:"picprogrammer.jpg"
                    }
        
        ];

        for (const document of securityProgrammers) {
          const existingDocument = await securitySpecialist.findOne({ email: document.email });
          if (!existingDocument) {
              await securitySpecialist.insertOne(document);
              console.log('Document inserted: ' + document.email);
          } else {
              console.log('Document already exists: ' + document.email);
          }
      }

      const mobileAppProgrammers = [ // 24 Programmers
        { 
            name: 'Harper Kumar', 
            major: 'Computer Engineer', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A fitness tracking app", "A meditation app", "A recipe app"], 
            email: 'harper159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a dedicated mobile app developer with a passion for creating innovative and user-friendly apps. My projects have included fitness tracking, meditation, and recipe apps. I strive for excellence in every project I undertake.',
            rate: 5.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Alexander Ali', 
            major: 'Computer Science', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A language learning app", "A music streaming app", "A productivity app"], 
            email: 'alexander159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a passionate mobile app developer with a focus on creating engaging and user-friendly apps. My projects have included language learning, music streaming, and productivity apps. I am dedicated to delivering high-quality solutions.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Evelyn Das', 
            major: 'Computer Engineer', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A fashion app", "A travel app", "A photography app"], 
            email: 'evelyn159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in fashion, travel, and photography apps. I am committed to creating visually appealing and user-friendly experiences for my users.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Michael Chen', 
            major: 'Computer Science', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A finance app", "A social networking app", "A gaming app"], 
            email: 'michael159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer with a strong background in finance, social networking, and gaming apps. I am dedicated to creating apps that are both fun and functional for users.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Abigail Gupta', 
            major: 'Computer Science', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A wellness app", "A recipe app", "A language learning app"], 
            email: 'abigail159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer focusing on wellness, recipe, and language learning apps. I believe in creating apps that promote health, creativity, and education.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Daniel Shah', 
            major: 'Computer Engineer', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A music app", "A productivity app", "A fitness app"], 
            email: 'daniel159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in music, productivity, and fitness apps. I strive to create apps that enhance the lives of users through music, organization, and health.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        { 
            name: 'Elizabeth Rao', 
            major: 'Computer Science', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A reading app", "A travel app", "A budgeting app"], 
            email: 'elizabeth159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in reading, travel, and budgeting apps. I am dedicated to creating apps that make life easier and more enjoyable for users.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Henry Kumar', 
            major: 'Computer Engineer', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A news app", "A productivity app", "A photography app"], 
            email: 'henry159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in news, productivity, and photography apps. I am committed to creating apps that inform, organize, and inspire users.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
           Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Lucas Kim', 
            major: 'Computer Engineer', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A meditation app", "A fitness app", "A recipe app"], 
            email: 'lucas159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer focusing on meditation, fitness, and recipe apps. I believe in creating apps that promote health, relaxation, and creativity.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Amelia Patel', 
            major: 'Computer Engineer', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A language learning app", "A music app", "A productivity app"], 
            email: 'amelia159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in language learning, music, and productivity apps. I am passionate about creating apps that help users learn, create, and organize.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Benjamin Sharma', 
            major: 'Computer Engineer', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A fitness app", "A recipe app", "A language learning app"], 
            email: 'benjamin159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer focusing on fitness, recipe, and language learning apps. I believe in creating apps that promote health, creativity, and education.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Sophia Garcia', 
            major: 'Computer Science', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A music app", "A travel app", "A productivity app"], 
            email: 'sophia159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in music, travel, and productivity apps. I strive to create apps that enhance the lives of users through music, exploration, and organization.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Oliver Kumar', 
            major: 'Computer Science', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A wellness app", "A recipe app", "A language learning app"], 
            email: 'oliver159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in wellness, recipe, and language learning apps. I am dedicated to creating apps that promote health, creativity, and education.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Mia Brown', 
            major: 'Computer Engineer', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A finance app", "A social networking app", "A gaming app"], 
            email: 'mia159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in finance, social networking, and gaming apps. I am passionate about creating engaging and user-friendly experiences for users.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'James Lee', 
            major: 'Software Engineering', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A fashion app", "A travel app", "A photography app"], 
            email: 'james159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in fashion, travel, and photography apps. I am dedicated to creating visually appealing and user-friendly experiences for users.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Ava Singh', 
            major: 'Software Engineering', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A fitness app", "A recipe app", "A language learning app"], 
            email: 'ava159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer focusing on fitness, recipe, and language learning apps. I strive to create apps that promote health, creativity, and education.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'William Gupta', 
            major: 'Computer Engineer', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A music app", "A travel app", "A productivity app"], 
            email: 'william159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in music, travel, and productivity apps. I am dedicated to creating apps that enhance the lives of users through music, exploration, and organization.',
            rate: 5.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
           
        },
        
        { 
            name: 'Emma Das', 
            major: 'Software Engineering', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A wellness app", "A recipe app", "A language learning app"], 
            email: 'emma159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in wellness, recipe, and language learning apps. I believe in creating apps that promote health, creativity, and education.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Noah Khan', 
            major: 'Computer Engineer', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A finance app", "A social networking app", "A gaming app"], 
            email: 'noah159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in finance, social networking, and gaming apps. I am dedicated to creating engaging and user-friendly experiences for users.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
            
        },
        
        { 
            name: 'Olivia Cohen', 
            major: 'Software Engineering', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A fashion app", "A travel app", "A photography app"], 
            email: 'olivia159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in fashion, travel, and photography apps. I strive to create apps that enhance the lives of users through style, exploration, and creativity.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Liam Patel', 
            major: 'Computer Engineer', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A fitness app", "A recipe app", "A language learning app"], 
            email: 'liam159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in fitness, recipe, and language learning apps. I am passionate about creating apps that promote health, creativity, and education.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Isabella Robinson', 
            major: 'Computer Engineer', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A music app", "A travel app", "A productivity app"], 
            email: 'isabella159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in music, travel, and productivity apps. I strive to create apps that enhance the lives of users through music, exploration, and organization.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Ethan Nguyen', 
            major: 'Software Engineering', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A wellness app", "A recipe app", "A language learning app"], 
            email: 'ethan159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer specializing in wellness, recipe, and language learning apps. I am dedicated to creating apps that promote health, creativity, and education.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        },
        
        { 
            name: 'Samantha Martinez', 
            major: 'Software Engineering', 
            programmingPath: 'Mobile App development', 
            preProjects: ["A language learning app", "A music streaming app", "A productivity app"], 
            email: 'samantha159@gmail.com',
            picture: 'picProgrammer.jpg',
            note: 'I am a mobile app developer focusing on language learning, music streaming, and productivity apps. I strive to create apps that promote learning, creativity, and organization.',
            rate: 4.5,
            password: 'password123',
            certification:"programmerescertification.PDF",
            Image:"picprogrammer.jpg"
        }
        ];

        for (const programmer of mobileAppProgrammers) {
          const existingProgrammer = await mobileAppProgrammer.findOne({ email: programmer.email });
          if (!existingProgrammer) {
              const insertResult = await mobileAppProgrammer.insertOne(programmer);
              console.log('Backend Programmer inserted:', insertResult.insertedId);
          } else {
              console.log('Backend Programmer already exists:', existingProgrammer._id);
          }
      }

      const videoGamesProgrammers = [ // 12 Programmers
            {
                name: "Alex Turner",
                major: "Game Development",
                payment: 5000,
                preProjects: ["First-person Shooter Game", "Open-world Adventure Game"],
                email: "AlexTurner22@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am passionate about creating immersive gaming experiences that captivate players. My goal is to push the boundaries of game design and storytelling.",
                password: "password123",
                rate: 4.7,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Sophie Parker",
                major: "Game Design",
                payment: 4500,
                preProjects: ["Puzzle Game", "Mobile Game"],
                email: "SophieParker45@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I believe that games have the power to inspire, educate, and entertain. My work focuses on creating innovative and engaging gameplay experiences.",
                password: "password456",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Maxwell Reed",
                major: "Game Programming",
                payment: 4200,
                preProjects: ["Multiplayer Game", "Racing Game"],
                email: "MaxwellReed27@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am dedicated to creating high-quality games that are both challenging and enjoyable. My projects focus on innovative mechanics and smooth gameplay.",
                password: "password789",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Eva Mitchell",
                major: "Game Development",
                payment: 4800,
                preProjects: ["Action-adventure Game", "Simulation Game"],
                email: "EvaMitchell78@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I believe that games should evoke emotions and tell compelling stories. My work combines storytelling with gameplay to create memorable experiences.",
                password: "passwordabc",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Nathan Collins",
                major: "Game Design",
                payment: 4900,
                preProjects: ["Strategy Game", "Role-playing Game"],
                email: "NathanCollins98@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am passionate about creating games that challenge the mind and inspire creativity. My projects focus on strategic depth and player choice.",
                password: "passworddef",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Luna Ramirez",
                major: "Game Programming",
                payment: 4100,
                preProjects: ["Adventure Game", "Platformer Game"],
                email: "LunaRamirez65@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I believe that games should be an art form that engages the senses and stimulates the mind. My work focuses on creating immersive and memorable experiences.",
                password: "passwordghi",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
              
            },
        
            {
                name: "Oscar Martinez",
                major: "Game Development",
                payment: 3600,
                preProjects: ["Survival Game", "Horror Game"],
                email: "OscarMartinez772@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am dedicated to creating games that evoke strong emotions and leave a lasting impact on players. My projects focus on atmosphere and storytelling.",
                password: "passwordjkl",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
              
            },
        
            {
                name: "Isabella White",
                major: "Game Design",
                payment: 4700,
                preProjects: ["Educational Game", "Casual Game"],
                email: "IsabellaWhite22@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I believe that games can be both entertaining and educational. My work focuses on creating games that are engaging and informative.",
                password: "passwordmno",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Jack Thompson",
                major: "Game Programming",
                payment: 5000,
                preProjects: ["Simulation Game", "RPG Game"],
                email: "JackThompson742@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am passionate about creating games that push the boundaries of technology and immerse players in new worlds. My projects focus on innovative gameplay mechanics.",
                password: "passwordpqr",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Mia Lewis",
                major: "Game Development",
                payment: 3400,
                preProjects: ["Adventure Game", "Mobile Game"],
                email: "MiaLewis082@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I believe that games should be a form of escapism that allows players to explore new worlds and experiences. My projects focus on creating immersive environments.",
                password: "passwordstu",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Lucas Anderson",
                major: "Game Design",
                payment: 4700,
                preProjects: ["Puzzle Game", "Strategy Game"],
                email: "LucasAnderson92@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am dedicated to creating games that challenge the mind and provide a sense of accomplishment. My projects focus on innovative puzzles and engaging gameplay.",
                password: "passwordvwx",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
            {
                name: "Sophia Baker",
                major: "Game Programming",
                payment: 3900,
                preProjects: ["Racing Game", "Shooting Game"],
                email: "SophiaBaker29@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I believe that games should be both entertaining and intellectually stimulating. My work focuses on creating games that challenge players' skills and reflexes.",
                password: "passwordyz",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            }
        ];

        for (const programmer of videoGamesProgrammers) {
          const existingProgrammer = await videoGamesProgrammer.findOne({ email: programmer.email });
          if (!existingProgrammer) {
          const insertResult = await videoGamesProgrammer.insertOne(programmer);
          console.log('Backend Programmer inserted:', insertResult.insertedId);
          } else {
          console.log('Backend Programmer already exists:', existingProgrammer._id);
          }
      }

      const educationalProgrammers = [ // 12 Programmers
            {
                name: "Alice Johnson",
                major: "Computer Science",
                payment: 5000,
                preProjects: ["Online Learning Platform", "Educational Game"],
                email: "AliceJohnson22@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am passionate about creating engaging educational software that inspires students to learn. My goal is to make learning fun and accessible for everyone.",
                password: "password123",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Bob Smith",
                major: "Software Engineering",
                payment: 4000,
                preProjects: ["Math Tutoring App", "Virtual Science Lab"],
                email: "BobSmith88@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I enjoy developing educational tools that make learning fun and interactive. My projects focus on engaging students and enhancing their learning experience.",
                password: "password456",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Ella Davis",
                major: "Computer Science",
                payment: 3200,
                preProjects: ["Language Learning App", "Educational Quiz App"],
                email: "EllaDavis02@gmail.com",
                picture: "picProgrammer.jpg",
                note: "As an educational programmer, I strive to create innovative and effective learning solutions. I believe in the power of technology to transform education.",
                password: "password789",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "John Brown",
                major: "Software Engineering",
                payment: 4800,
                preProjects: ["Physics Simulation App", "Coding Education Platform"],
                email: "JohnBrown855@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am dedicated to developing educational software that fosters creativity and critical thinking. My goal is to empower students to become lifelong learners.",
                password: "passwordabc",
                certification: "ProgrammersCertification.pdf",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                 Image:"picprogrammer.jpg"
            },
        
            {
                name: "Lily Wilson",
                major: "Computer Science",
                payment: 3300,
                preProjects: ["History Learning App", "Geography Quiz App"],
                email: "LilyWilson892@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I believe that education should be engaging and accessible to all. My work focuses on creating interactive and informative learning experiences.",
                password: "passworddef",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
              
            },
        
            {
                name: "Mark Taylor",
                major: "Software Engineering",
                payment: 4900,
                preProjects: ["Chemistry Simulation App", "Mathematics Learning Platform"],
                email: "MarkTaylor65@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am passionate about using technology to enhance education. My projects aim to make complex concepts easy to understand and fun to learn.",
                password: "passwordghi",
                certification: "ProgrammersCertification.pdf",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Sophia Clark",
                major: "Computer Science",
                payment: 2400,
                preProjects: ["Biology Learning App", "Environmental Science Quiz App"],
                email: "SophiaClark987@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I believe that education is the key to a better future. My work focuses on creating educational software that inspires curiosity and exploration.",
                password: "passwordjkl",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "David White",
                major: "Software Engineering",
                payment: 4700,
                preProjects: ["Art History App", "Music Theory Quiz App"],
                email: "DavidWhite741@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am committed to creating educational software that stimulates creativity and encourages self-expression. My goal is to make learning enjoyable and rewarding.",
                password: "passwordmno",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Emma Martinez",
                major: "Computer Science",
                payment: 5100,
                preProjects: ["Literature Learning App", "Writing Skills Quiz App"],
                email: "EmmaMartinez96@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I believe that education should inspire and empower students. My projects focus on developing skills and fostering a love for learning.",
                password: "passwordpqr",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Michael Adams",
                major: "Software Engineering",
                payment: 6100,
                preProjects: ["Psychology Learning App", "Sociology Quiz App"],
                email: "MichaelAdams8888@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am dedicated to creating educational software that promotes understanding and empathy. My projects aim to broaden perspectives and encourage dialogue.",
                password: "passwordstu",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "Olivia Hill",
                major: "Computer Science",
                payment: 5200,
                preProjects: ["Philosophy Learning App", "Ethics Quiz App"],
                email: "OliviaHill520@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I believe that education is the foundation of progress. My work focuses on creating software that challenges assumptions and encourages critical thinking.",
                password: "passwordvwx",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            },
        
            {
                name: "William Garcia",
                major: "Software Engineering",
                payment: 6000,
                preProjects: ["Engineering Concepts App", "Technology Quiz App"],
                email: "WilliamGarcia632@gmail.com",
                picture: "picProgrammer.jpg",
                note: "I am passionate about creating educational software that prepares students for the future. My projects focus on practical skills and real-world applications.",
                password: "passwordyz",
                rate: 4.5,
                certification:"programmerescertification.PDF",
                Image:"picprogrammer.jpg"
            }
            
        ];

        for (const programmer of educationalProgrammers) {
          const existingProgrammer = await educationalProgrammer.findOne({ email: programmer.email });
          if (!existingProgrammer) {
              const insertResult = await educationalProgrammer.insertOne(programmer);
              console.log('Backend Programmer inserted:', insertResult.insertedId);
          } else {
              console.log('Backend Programmer already exists:', existingProgrammer._id);
          }
      }

      const appFunDevelopers = [ // 12 Programmers
        {
          name: "Mohammad Ahmed",
          major: "Computer Science",
          payment: 3500,
          preProjects: ["Social Media App", "E-commerce Platform"],
          email: "MohammadAhmed258@gmail.com",
          picture: "picProgrammer.jpg",
          note: "I am a passionate app developer with a focus on creating user-friendly and efficient applications. My experience includes working on social media and e-commerce platforms, where I implemented innovative solutions. I am dedicated to delivering high-quality code and exceeding client expectations. 5 stars",
          password: "password123",
          rate: 4.5,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        },
        
        {
          name: "Amir Hamdan",
          major: "Computer Science",
          payment: 4560,
          preProjects: ["Recipe Sharing App", "Event Planning App"],
          email: "AmirHamdan7@gmail.com",
          picture: "picProgrammer.jpg",
          note: "I am an experienced app developer specializing in recipe sharing and event planning applications. With a solid background in Computer Science, I strive to create innovative and user-friendly solutions. I am dedicated to delivering high-quality code and exceeding client expectations. 5 stars",
          password: "password123",
          rate: 4.5,
         certification:"programmerescertification.PDF",
         Image:"picprogrammer.jpg"
        },
        
        {
          name: "Yasmin Mansour",
          major: "Computer Science",
          payment: 6980,
          preProjects: ["Travel Guide App", "Task Management App"],
          email: "YasminMansour007@gmail.com",
          picture: "picProgrammer.jpg",
          note: "I am a Computer Science graduate with a passion for app development. My previous projects include travel guide and task management apps, where I focused on creating intuitive and efficient user interfaces. I am dedicated to delivering high-quality code and meeting project deadlines. 5 stars",
          password: "password123",
          rate: 4.5,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        },
        
        {
          name: "Aliya Nassar",
          major: "Computer Science",
          payment: 1470,
          preProjects: ["Budgeting App", "Music Streaming App"],
          email: "AliyaNassar11@gmail.com",
          picture: "picProgrammer.jpg",
          note: "I am a Computer Science student with a passion for app development. My experience includes working on budgeting and music streaming apps, where I focused on creating engaging user experiences. I am committed to delivering high-quality code and exceeding client expectations. 5 stars",
          password: "password123",
          rate: 4.5,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        },
        
        {
          name: "Kareem Haddad",
          major: "Computer Science",
          payment: 2580,
          preProjects: ["Recipe Sharing App", "E-commerce Platform"],
          email: "KareemHaddad1778@gmail.com",
          picture: "picProgrammer.jpg",
          note: "I am a Computer Science graduate with a passion for app development. My previous projects include recipe sharing and e-commerce platforms, where I focused on creating intuitive and efficient user interfaces. I am dedicated to delivering high-quality code and meeting project deadlines. 5 stars",
          password: "password123",
          rate: 4.5,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        },
        
        {
          name: "Noura Adel",
          major: "Computer Science",
          payment: 5000,
          preProjects: ["Fitness Tracking App", "Social Media App"],
          email: "NouraAdel415@gmail.com",
          picture: "picProgrammer.jpg",
          note: "I am a Computer Science graduate with a passion for app development. My previous projects include fitness tracking and social media apps, where I focused on creating engaging user experiences. I am committed to delivering high-quality code and exceeding client expectations. 5 stars",
          password: "password123",
          rate: 4.5,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        },
        
        {
          name: "Fahad Mansour",
          major: "Software Engineering",
          payment: 4400,
          preProjects: ["Task Management App", "Event Planning App"],
          email: "FahadMansour111@gmail.com",
          picture: "picProgrammer.jpg",
          note: "I am a Software Engineering graduate with a passion for app development. My previous projects include task management and event planning apps, where I focused on creating efficient and user-friendly interfaces. I am dedicated to delivering high-quality code and meeting project deadlines. 5 stars",
          password: "password123",
          rate: 4.5,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
          
        },
        
        {
          name: "Leen Salam",
          major: "Software Engineering",
          payment: 3570,
          preProjects: ["E-commerce Platform", "Music Streaming App"],
          email: "LeenSalam718@gmail.com",
          picture: "picProgrammer.jpg",
          note: "I am a Software Engineering student with a passion for app development. My previous projects include e-commerce platforms and music streaming apps, where I focused on creating intuitive user interfaces. I am committed to delivering high-quality code and exceeding client expectations. 5 stars",
          password: "password123",
          certification: "ProgrammersCertification",
          rate: 4.8,
          Image:"picprogrammer.jpg"
        },
        
        {
          name: "Khalid Abboud",
          major: "Software Engineering",
          payment: 1540,
          preProjects: ["Online Learning Platform", "Travel Guide App"],
          email: "KhalidAbboud922@gmail.com",
          picture: "picProgrammer.jpg",
          note: "I am a Software Engineering graduate with a passion for app development. My previous projects include online learning platforms and travel guide apps, where I focused on creating engaging user experiences. I am dedicated to delivering high-quality code and meeting project deadlines. 5 stars",
          password: "password123",
          rate: 4.5,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        },
        
        {
          name: "Rana Khoury",
          major: "Software Engineering",
          payment: 1200,
          preProjects: ["Recipe Sharing App", "Fitness Tracking App"],
          email: "RanaKhoury789@gmail.com",
          picture: "picProgrammer.jpg",
          note: "I am a Software Engineering student with a passion for app development. My previous projects include recipe sharing and fitness tracking apps, where I focused on creating efficient user interfaces. I am committed to delivering high-quality code and exceeding client expectations. 5 stars",
          password: "password123",
          rate: 4.5,
         certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        },
        
        {
          name: "Tariq Nassar",
          major: "Data Science",
          payment: 5000,
          preProjects: ["Social Media App", "E-commerce Platform"],
          email: "TariqNassar131@gmail.com",
          picture: "picProgrammer.jpg",
          note: "I am a Data Science graduate with a passion for app development. My previous projects include social media and e-commerce platforms, where I focused on creating efficient and scalable solutions. I am dedicated to delivering high-quality code and meeting project deadlines. 5 stars",
          password: "password123",
          rate: 4.5,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
        },
        
        {
          name: "Aya Mansour",
          major: "Data Science",
          payment: 220,
          preProjects: ["Budgeting App", "Music Streaming App"],
          email: "AyaMansour777@gmail.com",
          picture: "picProgrammer.jpg",
          note: "I am a Data Science graduate with a passion for app development. My previous projects include budgeting and music streaming apps, where I focused on creating engaging user experiences. I am committed to delivering high-quality code and exceeding client expectations. 5 stars",
          password: "password123",
          rate: 4.5,
          certification:"programmerescertification.PDF",
          Image:"picprogrammer.jpg"
          
        }
        ];

        for (const programmer of appFunDevelopers) {
          const existingProgrammer = await appFunDeveloper.findOne({ email: programmer.email });
          if (!existingProgrammer) {
          const insertResult = await appFunDeveloper.insertOne(programmer);
          console.log('Backend Programmer inserted:', insertResult.insertedId);
          } else {
          console.log('Backend Programmer already exists:', existingProgrammer._id);
          }
      }
      console.log('All collections created and data inserted successfully');
      res.send('Databases, collections, and data inserted successfully');
      
    }catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    } finally {
        // Close the connection to the MongoDB Atlas cluster
        await client.close();
        console.log('Connection closed');
    }
});

// end point for API collection :
app.get('/api-programmers',async(req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const apiCollection = databaseProgrammers.collection('API');
    const apiProgrammersData = await apiCollection.find({}).toArray();
    res.json(apiProgrammersData); // call the data of api programmers 
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error'); // if the status of getting the data more than 299 and less than 200 there will be an error
  }finally{
    await client.close();
    console.log('Connection closed');
  }

});

//end point for Maintenance collection : 

app.get('/maintenance-data', async (req, res) => {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const databaseProgrammers = client.db('programmers_In_General');
    const maintenance = databaseProgrammers.collection('Maintenance');

    const maintenanceData = await maintenance.find({}).toArray();

    res.json(maintenanceData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
    console.log('Connection closed');
  }
});

// end point for uiUxDesigner collection  : 

app.get('/uiUxDesigners-data', async (req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const uiUxDesigner = databaseProgrammers.collection('UiUx Designers'); 
    const uiUxDesignerData = await uiUxDesigner.find({}).toArray();
    res.json(uiUxDesignerData);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }finally{
    await client.close();
    console.log('Connection closed');
  }

})

// end point for problemSolver collection :

app.get('/problemSolver-data', async (req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const problemSolver =databaseProgrammers.collection('Problem Solver');
    const problemSolverData = await problemSolver.find({}).toArray();
    res.json(problemSolverData);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }finally{
    await client.close();
    console.log('Connection closed');
  }
})

// end point for webProgrammer collection :

app.get('/webProgrammer-data', async(req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const webProgrammer = databaseProgrammers.collection('Web Programmers');
    const webProgrammerData = await webProgrammer.find({}).toArray();
    res.json(webProgrammerData);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }finally{
    await client.close();
    console.log('Connection closed');
  }
})

// end point for top6Programmers collection :

app.get('/top6Programmers-data', async (req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const top6Programmers = databaseProgrammers.collection('top6 Programmers');
    const top6ProgrammersData = await top6Programmers.find({}).toArray();
    res.json(top6ProgrammersData);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }finally{
    await client.close();
    console.log('Connection closed');
  }

})

// end point for machineLarning collection :

app.get('/machineLarning-data', async (req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const machineLarning = databaseProgrammers.collection('Machine Larning');
    const machineLarningsData = await machineLarning.find({}).toArray();
    res.json(machineLarningsData);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }finally{
    await client.close();
    console.log('Connection closed');
  }
})

// end point for databaseManager collection :

app.get('/dataBaseManagers-data', async (req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const databaseManager = databaseProgrammers.collection('database Managers');
    const databaseManagersData = await databaseManager.find({}).toArray();
    res.json(databaseManagersData);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }finally{
    await client.close();
    console.log('Connection closed');
  }
})

// end point for qualityAssurance collection :

app.get('/qualityAssurance-data', async (req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const qualityAssurance = databaseProgrammers.collection('Quality Accurance');
    const qualityAssuranceData = await qualityAssurance.find({}).toArray();
    res.json(qualityAssuranceData);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }finally{
    await client.close();
    console.log('Connection closed');
  }
})


// end point for backEndProgrammer collection :

app.get('/backEndProgrammer-data', async (req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const backEndProgrammer = databaseProgrammers.collection('Backend Programmers');
    const backEndProgrammerData = await backEndProgrammer.find({}).toArray();
    res.json(backEndProgrammerData);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }finally{
    await client.close();
    console.log('Connection closed');
  }
})


// end point for softwareDeveloper collection :

app.get('/softwareDeveloper-data', async (req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const softwareDeveloper = databaseProgrammers.collection('Software Developers'); 
    const softwareDeveloperData = await softwareDeveloper.find({}).toArray();
    res.json(softwareDeveloperData);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }finally{
    await client.close();
    console.log('Connection closed');
  }
})


// end point for chatbotProgrammer collection :

app.get('/chatbotProgrammer-data', async (req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const chatbotProgrammer = databaseProgrammers.collection('Chatbots Programmers');
    const chatbotProgrammerData = await chatbotProgrammer.find({}).toArray();
    res.json(chatbotProgrammerData);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }finally{
    await client.close();
    console.log('Connection closed');
  }
})


// end point for securitySpecialist collection :

app.get('/securitySpecialist-data', async (req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const securitySpecialist = databaseProgrammers.collection('Security Specialist');
    const securitySpecialistData = await securitySpecialist.find({}).toArray();
    res.json(securitySpecialistData);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }finally{
    await client.close();
    console.log('Connection closed');
  }
})


// end point for mobileAppProgrammer collection :

app.get('/mobileAppProgrammer-data', async (req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const mobileAppProgrammer = databaseProgrammers.collection('Mobile App Programmers');
    const mobileAppProgrammerData = await mobileAppProgrammer.find({}).toArray();
    res.json(mobileAppProgrammerData);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }finally{
    await client.close();
    console.log('Connection closed');
  }
})


// end point for videoGamesProgrammer collection :

app.get('/videoGamesProgrammer-data', async (req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const videoGamesProgrammer = databaseProgrammers.collection('Video Games Programmers');
    const videoGamesProgrammerData = await videoGamesProgrammer.find({}).toArray();
    res.json(videoGamesProgrammerData);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }finally{
    await client.close();
    console.log('Connection closed');
  }
})


// end point for educationalProgrammer collection :

app.get('/educationalProgrammer-data', async (req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const educationalProgrammer = databaseProgrammers.collection('Educational Programmers');
    const educationalProgrammerData = await educationalProgrammer.find({}).toArray();
    res.json(educationalProgrammerData);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }finally{
    await client.close();
    console.log('Connection closed');
  }
})



// end point for appFunDeveloper collection :

app.get('/appFunDeveloper-data', async (req,res)=>{

  try{
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const databaseProgrammers = client.db('programmers_In_General');
    const appFunDeveloper = databaseProgrammers.collection('App Functional Developers');
    const appFunDeveloperData = await appFunDeveloper.find({}).toArray();
    res.json(appFunDeveloperData);
  }catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }finally{
    await client.close();
    console.log('Connection closed');
  }
})
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

app.listen(3001,()=>{
  console.log('port listening in port 3001')
})