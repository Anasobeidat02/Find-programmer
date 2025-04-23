// main server

const express = require("express");

const path = require("path"); // for handling file paths
const WebSocket = require("ws");
const multer = require("multer");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const cors = require("cors");
const mongodb = require("mongodb");
const { MongoClient, ObjectId } = require("mongodb");

const collection = require("./config");
const { log } = require("console");
const app = express();
require('dotenv').config(); // تحميل المتغيرات من .env

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views")); // بالعودة خطوة للخلف للوصول إلى "views" بجانب "src"

app.use(express.static(path.join(__dirname, "../public"))); // تحديد المجلد "public" لتقديم ملفات الاستاتيك
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// تأكد من أن سلسلة الاتصال (connection string) محددة
const url = process.env.MONGODB_URI;

// إنشاء `MongoClient` باستخدام سلسلة الاتصال
const client = new MongoClient(url, {
  ssl: true,
  tlsAllowInvalidCertificates: true, // استخدم هذا الخيار فقط في بيئة التطوير إذا لزم الأمر
});

// الاتصال بقاعدة بيانات MongoDB باستخدام Mongoose
mongoose
  .connect(url, {
    ssl: true,
    tlsAllowInvalidCertificates: true, // استخدم هذا الخيار فقط في بيئة التطوير إذا لزم الأمر
    serverSelectionTimeoutMS: 5000, // ضبط مهلة الاتصال
  })
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((error) => {
    console.error("Error with connecting with DB", error);
  });
// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "profilePicture") {
      cb(null, "../uploads/profilePictures");
    } else if (file.fieldname === "certifications") {
      cb(null, "../uploads/certifications");
    }
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Create a databasenamed Programmers in general :
const databaseProgrammers = client.db("programmers_In_General");
// Create the collections
const apiCollection = databaseProgrammers.collection("API");
const maintenance = databaseProgrammers.collection("Maintenance");
const uiUxDesigner = databaseProgrammers.collection("UiUx Designers");
const problemSolver = databaseProgrammers.collection("Problem Solver");
const webProgrammer = databaseProgrammers.collection("Web Programmers");
const top6Programmers = databaseProgrammers.collection("top6 Programmers");
const machineLarning = databaseProgrammers.collection("Machine Larning");
const databaseManager = databaseProgrammers.collection("database Managers");
const qualityAssurance = databaseProgrammers.collection("Quality Accurance");
const backEndProgrammer = databaseProgrammers.collection("Backend Programmers");
const softwareDeveloper = databaseProgrammers.collection("Software Developers");
const chatbotProgrammer = databaseProgrammers.collection(
  "Chatbots Programmers"
);
const securitySpecialist = databaseProgrammers.collection(
  "Security Specialist"
);
const mobileAppProgrammer = databaseProgrammers.collection(
  "Mobile App Programmers"
);
const videoGamesProgrammer = databaseProgrammers.collection(
  "Video Games Programmers"
);
const educationalProgrammer = databaseProgrammers.collection(
  "Educational Programmers"
);
const appFunDeveloper = databaseProgrammers.collection(
  "App Functional Developers"
);

const databasepayment = client.db("payment");
const payment = databasepayment.collection("allPayment");

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  companyEmail: { type: String, required: true },
  password: { type: String, required: true },
});

const Company = mongoose.model("Company", companySchema);

const programmerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  programmerType: { type: String, required: true },
  profilePicture: String,
  certifications: String,
  note: String,
});

const Programmer = mongoose.model("Programmer", programmerSchema);

// Define the route to serve the HTML file
app.get("/", (req, res) => {
  const htmlFilePath = path.join(__dirname, "../views", "major.html");
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/User", (req, res) => {
  const htmlFilePath = path.join(__dirname, "../views", "User_joined.html");
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/programmer", (req, res) => {
  const htmlFilePath = path.join(
    __dirname,
    "../views",
    "programmer_joined.html"
  );
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/company", (req, res) => {
  const htmlFilePath = path.join(__dirname, "../views", "companyJoind.html");
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/WebsiteDevelopment", (req, res) => {
  const htmlFilePath = path.join(
    __dirname,
    "../views",
    "Website development.html"
  );
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/VideoGameDevelopment", (req, res) => {
  const htmlFilePath = path.join(
    __dirname,
    "../views",
    "Video game development.html"
  );
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/EducationalTools", (req, res) => {
  const htmlFilePath = path.join(
    __dirname,
    "../views",
    "/Educational tools.html"
  );
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/ChatBots", (req, res) => {
  const htmlFilePath = path.join(__dirname, "../views", "ChatBots.html");
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/CommunityProject", (req, res) => {
  const htmlFilePath = path.join(
    __dirname,
    "../views",
    "Community Project.html"
  );
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/MobileAppDevelopment", (req, res) => {
  const htmlFilePath = path.join(
    __dirname,
    "../views",
    "Mobile App Development.html"
  );
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/AutomationProjects", (req, res) => {
  const htmlFilePath = path.join(
    __dirname,
    "../views",
    "Automation Projects.html"
  );
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/seniorFrontend", (req, res) => {
  const htmlFilePath = path.join(__dirname, "../views", "senior frontend.html");
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/Backend_Engineer", (req, res) => {
  const htmlFilePath = path.join(
    __dirname,
    "../views",
    "Backend_Engineer.html"
  );
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/fullStack", (req, res) => {
  const htmlFilePath = path.join(__dirname, "../views", "full_stack.html");
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/MobileAppDeveloper", (req, res) => {
  const htmlFilePath = path.join(
    __dirname,
    "../views",
    "Mobile App Developer.html"
  );
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/payment", (req, res) => {
  const htmlFilePath = path.join(__dirname, "../views", "payment.html");
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/PayNow", (req, res) => {
  const htmlFilePath = path.join(__dirname, "../views", "Pay Now.html");
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});

// نقطة النهاية POST لاستقبال وتخزين بيانات الدفع
app.post("/payment", (req, res) => {
  const paymentData = {
    cardNumber: req.body.cardNumber,
    cardName: req.body.cardName,
    cardMonth: req.body.cardMonth,
    cardYear: req.body.cardYear,
    cardCvv: req.body.cardCvv,
  };

  // التحقق من صحة البيانات
  if (
    !paymentData.cardNumber ||
    !paymentData.cardName ||
    !paymentData.cardMonth ||
    !paymentData.cardYear ||
    !paymentData.cardCvv
  ) {
    return res.status(400).send("All fields are required");
  }

  // تخزين البيانات في قاعدة البيانات
  db.collection("allPayment").insertOne(paymentData, (err, result) => {
    if (err) {
      return res
        .status(500)
        .send("An error occurred while saving the payment data");
    }
    res.status(200).send("Payment data saved successfully");
  });
});

app.get("/WhatFP", (req, res) => {
  const htmlFilePath = path.join(__dirname, "../views", "What FP.html");
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/About", (req, res) => {
  const htmlFilePath = path.join(__dirname, "../views", "about.html");
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/TermsOfServices", (req, res) => {
  const htmlFilePath = path.join(__dirname, "../views", "service.html");
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});
app.get("/PrivacyPolicy", (req, res) => {
  const htmlFilePath = path.join(__dirname, "../views", "PrivacyPolicy.html");
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      res.status(500).send("An error occurred while sending the HTML file");
    }
  });
});

app.get("/signUp", (req, res) => {
  res.render("signup");
});

app.get("/signUp/clientIndividual", (req, res) => {
  res.render("clientIndividual");
});
app.post(
  "/signUp/clientIndividual",
  [
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("age")
      .isInt({ min: 0 })
      .withMessage("Age must be a non-negative integer"),
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[0-9]/)
      .withMessage("Password must contain at least one number")
      .matches(/[\W]/)
      .withMessage("Password must contain at least one special character"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, age, email, password } = req.body;

    try {
      const existingUser = await collection.findOne({ email: email });
      if (existingUser) {
        return res
          .status(409)
          .send({ message: "User already exists, go to log in" });
      }

      const saltRounds = 8;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        password: hashedPassword,
      };

      const result = await collection.insertOne(newUser);
      res
        .status(201)
        .send({ message: "User registered successfully", user: result });
      console.log(result);
    } catch (err) {
      res.status(500).send({ message: "Server error", error: err });
    }
  }
);

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const collections = ["Company", "Programmer", "users"];
    let userFound = null;
    let redirectUrl = "http://localhost:3001/User"; // Default redirect URL

    for (const collection of collections) {
      const model = mongoose.model(collection);

      // Adjust the query based on the collection
      let user = null;
      if (collection === "Company") {
        user = await model.findOne({ companyEmail: email });
        if (user) redirectUrl = "http://localhost:3001/company";
      } else if (collection === "Programmer") {
        user = await model.findOne({ email: email });
        if (user) redirectUrl = "http://localhost:3001/programmer";
      } else {
        user = await model.findOne({ email: email });
      }

      if (user) {
        userFound = user;
        break;
      }
    }

    if (!userFound) {
      return res
        .status(404)
        .send("Cannot find the user with the provided email");
    }

    const isPasswordMatch = await bcrypt.compare(password, userFound.password);
    if (isPasswordMatch) {
      res.json({
        message: userFound.firstName || userFound.companyName,
        redirectUrl: redirectUrl,
        firstName: userFound.firstName || userFound.companyName, // Add this line
      });
    } else {
      res.status(401).send("Wrong password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while logging in");
  }
});

// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const collections = ['Company', 'Programmer', 'users'];
//     let userFound = null;
//     let redirectUrl = 'http://localhost:3001/User'; // Default redirect URL

//     for (const collection of collections) {
//       const model = mongoose.model(collection);

//       // Adjust the query based on the collection
//       let user = null;
//       if (collection === 'Company') {
//         user = await model.findOne({ companyEmail: email });
//         if (user) redirectUrl = 'http://localhost:3001/company';
//       } else {
//         user = await model.findOne({ email: email });
//       }

//       if (user) {
//         userFound = user;
//         break;
//       }
//     }

//     if (!userFound) {
//       return res.status(404).send('Cannot find the user with the provided email');
//     }

//     const isPasswordMatch = await bcrypt.compare(password, userFound.password);
//     if (isPasswordMatch) {
//       res.json({
//         message: userFound.firstName || userFound.companyName,
//         redirectUrl: redirectUrl
//       });
//       //  res.send(`Welcome ${userFound.firstName || userFound.companyName}`);
//     } else {
//       res.status(401).send('Wrong password');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('An error occurred while logging in');
//   }
// });

// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const collections = ['Company', 'Programmer', 'users'];
//     let userFound = null;

//     for (const collection of collections) {
//       const model = mongoose.model(collection);

//       const user = await model.findOne({ email: email });
//       if (user) {
//         userFound = user;
//         break;
//       }
//     }

//     if (!userFound) {
//       return res.status(404).send('Cannot find the user with the provided email');
//     }

//     const isPasswordMatch = await bcrypt.compare(password, userFound.password);
//     if (isPasswordMatch) {
//       res.send(`Welcome ${userFound.firstName || userFound.companyName}`);
//     } else {
//       res.status(401).send('Wrong password');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('An error occurred while logging in');
//   }
// });
// -------------------------------------------------------------------------------------------

app.get("/signUp/company", (req, res) => {
  res.render("company");
});

app.post(
  "/signUp/company",
  [
    body("name").notEmpty().withMessage("Company name is required"),
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[0-9]/)
      .withMessage("Password must contain at least one number")
      .matches(/[\W]/)
      .withMessage("Password must contain at least one special character"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      const existingCompany = await Company.findOne({ companyEmail: email });
      if (existingCompany) {
        return res.status(400).json({
          errors: [{ msg: "Company with this email already exists" }],
        });
      }

      const saltRounds = 8;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newCompany = new Company({
        companyName: name,
        companyEmail: email,
        password: hashedPassword,
      });
      const result = await newCompany.save();
      res.status(201).send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

// app.post('/signUp/company', [
//   body('name').notEmpty().withMessage('Company name is required'),
//   body('email').isEmail().withMessage('Invalid email format'),
//   body('password')
//     .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
//     .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
//     .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
//     .matches(/[0-9]/).withMessage('Password must contain at least one number')
//     .matches(/[\W]/).withMessage('Password must contain at least one special character')
// ], async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { name, email, password } = req.body;

//   try {
//     const existingCompany = await Company.findOne({ companyEmail: email });
//     if (existingCompany) {
//       return res.status(400).json({ errors: [{ msg: 'Company with this email already exists' }] });
//     }

//     const newCompany = new Company({
//       companyName: name,
//       companyEmail: email,
//       password: password
//     });
//     const result = await newCompany.save();
//     res.status(201).send(result);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// -----------------------------------------------------------------------------------------------------
// const programmerSchema = new mongoose.Schema({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     programmerType: { type: String, required: true }
//   });

//   const Programmer = mongoose.model('Programmer', programmerSchema);

app.get("/signUp/programmer", (req, res) => {
  res.render("programmer");
});
// Endpoint
app.post(
  "/signUp/programmer",
  upload.fields([{ name: "profilePicture" }, { name: "certifications" }]),
  [
    body("name").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[0-9]/)
      .withMessage("Password must contain at least one number")
      .matches(/[\W]/)
      .withMessage("Password must contain at least one special character"),
    body("programmerType")
      .notEmpty()
      .withMessage("Programmer type is required"),
    body("note").notEmpty().withMessage("Note is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, lastName, email, password, programmerType, note } = req.body;
    const profilePicture = req.files.profilePicture
      ? path.join(
          "../uploads/profilePictures",
          req.files.profilePicture[0].filename
        )
      : null;
    const certifications = req.files.certifications
      ? path.join(
          "../uploads/certifications",
          req.files.certifications[0].filename
        )
      : null;

    try {
      const existingProgrammer = await Programmer.findOne({ email: email });
      if (existingProgrammer) {
        return res.status(400).json({
          errors: [{ msg: "Programmer with this email already exists" }],
        });
      }

      const saltRounds = 8;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newProgrammer = new Programmer({
        firstName: name,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        programmerType: programmerType,
        profilePicture: profilePicture,
        certifications: certifications,
        note: note,
      });

      const result = await newProgrammer.save();

      switch (programmerType) {
        case "api":
          await insertIfNotExists(apiCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        case "maintenance":
          await insertIfNotExists(maintenanceCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        case "uiux":
          await insertIfNotExists(uiUxDesignerCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        case "backend":
          await insertIfNotExists(backendCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        case "chatbots":
          await insertIfNotExists(chatbotsCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        case "educational":
          await insertIfNotExists(educationalCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        case "mobile":
          await insertIfNotExists(mobileCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        case "videoGames":
          await insertIfNotExists(videoGamesCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        case "web":
          await insertIfNotExists(webCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        case "problemSolver":
          await insertIfNotExists(problemSolverCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        case "machineLearning":
          await insertIfNotExists(machineLearningCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        case "databaseManagers":
          await insertIfNotExists(databaseManagersCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        case "qualityAssurance":
          await insertIfNotExists(qualityAssuranceCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        case "softwareDevelopers":
          await insertIfNotExists(softwareDevelopersCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        case "securitySpecialist":
          await insertIfNotExists(securitySpecialistCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        case "appFunctionalDevelopers":
          await insertIfNotExists(appFunctionalDevelopersCollection, {
            firstName: name,
            lastName: lastName,
            email: email,
            profilePicture: profilePicture,
            certifications: certifications,
            note: note,
          });
          break;
        default:
          console.log("Unknown programmer type");
      }

      res.status(201).send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

// Helper function to handle the endpoint logic
async function handleCollectionRequest(req, res, collectionName, templateName) {
  try {
    const databaseProgrammers = client.db("programmers_In_General");
    const collection = databaseProgrammers.collection(collectionName);
    const data = await collection.find({}).toArray();
    res.render(templateName, {
      users: data,
      collectionName: collectionName.replace(/ /g, "-").toLowerCase(),
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

// Define routes
const collections = [
  "API",
  "Maintenance",
  "UiUx Designers",
  "Problem Solver",
  "Web Programmers",
  "top6 Programmers",
  "Machine Larning",
  "database Managers",
  "Quality Accurance",
  "Backend Programmers",
  "Software Developers",
  "Chatbots Programmers",
  "Security Specialist",
  "Mobile App Programmers",
  "Video Games Programmers",
  "Educational Programmers",
  "App Functional Developers",
];

collections.forEach((collection) => {
  app.get(
    `/${collection.replace(/ /g, "-").toLowerCase()}-data`,
    async (req, res) => {
      await handleCollectionRequest(req, res, collection, "index");
    }
  );

  app.get(
    `/${collection.replace(/ /g, "-").toLowerCase()}/:id`,
    async (req, res) => {
      try {
        const databaseProgrammers = client.db("programmers_In_General");
        const collectionInstance = databaseProgrammers.collection(collection);
        const userId = new ObjectId(req.params.id);
        const user = await collectionInstance.findOne({ _id: userId });
        res.render("profile", { user: user }); // Render the user's profile using EJS
      } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
    }
  );
});

const insertIfNotExists = async (collection, data) => {
  const exists = await collection.findOne({ email: data.email });
  if (!exists) {
    await collection.insertOne(data);
    console.log(`Inserted ${data.firstName}`);
  } else {
    console.log(`${data.name} already exists`);
  }
};

app.listen(3001, () => {
  console.log("server listen on port :3001");
});
