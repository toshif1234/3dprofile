// data/portfolioData.js
export const portfolioData = {
  personal: {
    name: "TOSHIF HUSEN PATIL",
    title: "Associate Consultant | B2B SaaS, PaaS, AI Developer",
    email: "toshifpatil401@gmail.com",
    phone: "+91 9172479257",
    linkedin: "Toshif Husen Patil",
    github: "Toshif1234",
    description: "I'm a Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills.",
    about: "I am Toshif Husen Patil, a Computer Science and Engineering graduate from Alvas Institute of Engineering and Technology, Mijar. Currently, I work as an Associate Consultant at Stellium Inc., where I contribute to technology-driven solutions in the SAP and Non SAP ecosystem. My strengths lie in development, leadership, and efficient time management."
  },
  skills: {
    languages: ["Python", "SQL", "PHP", "HTML", "CSS", "JavaScript", "C", "C++", "XML"],
    frameworks: ["Node", "React", "Bootstrap", "Flutter", "UIS", "FastAPI"],
    tools: ["MySQL", "Xampp", "Vs Code", "Eclipse", "Excel", "Figma", "Canva", "SAP BAS"],
    softSkills: ["Problem solving", "Critical Thinking", "People Management"]
  },
  experience: [
    {
      title: "Intern Developer",
      company: "Stellium Inc",
      period: "Oct 2023 - Mar 2024",
      skills: ["PLC", "MFS", "S/4 Integration", "PyQT5", "Python Desktop Application"]
    },
    {
      title: "Associate Consultant",
      company: "Stellium Inc",
      period: "August 2024 - Present",
      skills: ["SAP Joule", "Fiori Development", "S/4 Integration", "SAP BTP", "UIS", "SAP Digital Manufacturing Cloud", "FastAPI", "React", "AI Agents", "MCP Servers"]
    }
  ],
  projects: {
    external: [
      {
        name: "AI-Daajan (UAE): Middle East DMC Project",
        description: "Developed a custom POD (Production Operator Dashboard) using UIS and BTP, integrated with SAP S/4HANA and DMC."
      },
      {
        name: "Royal Enfield (India): Vendor Portal POC",
        description: "Built a Vendor Portal with an approval mechanism on BTP, integrated with SAP S/4HANA to automatically create Business Partners."
      },
      {
        name: "Best Seller: SAP EWM",
        description: "Served as a support developer for custom Fiori development."
      },
      {
        name: "Textron (UK): SAP EWM and Factory",
        description: "Developed a custom packing solution with image verification, deployed on an on-premise S/4HANA system."
      },
      {
        name: "KBL (India): Paperless picking",
        description: "Developed custom Fiori screens for Warehouse picking, HU Merging, HU Closing."
      }
    ],
    internal: [
      {
        name: "StockSnap",
        description: "A stock count app that generates PI data in an SAP EWM-uploadable format.",
        tech: ["React", "Node.js", "HANA DB", "Flutter"]
      },
      {
        name: "SmartSlot",
        description: "An optimized slotting tool for efficient warehouse operations.",
        tech: ["UIS", "Python", "HANA DB"]
      },
      {
        name: "4Kast.ai",
        description: "A demand forecasting app leveraging past business data and real-time inputs using machine learning algorithms.",
        tech: ["React", "Python FastAPI", "HANA DB"]
      },
      {
        name: "ChainBrain",
        description: "A SAP Generative AI-powered agent that processes natural language inputs to perform actions within SAP ERP.",
        tech: ["SAP Generative AI Hub", "Python", "SAP ERP"]
      },
      {
        name: "InsightDraw",
        description: "AI Powered Data analysis and data visualization platform where anyone can create high quality visuals like Power BI without any technical knowledge."
      }
    ],
    personal: [
      {
        name: "Student academic welfare (SAW-ERP)",
        description: "Student academic database management system which is in use.",
        tech: ["HTML", "CSS", "Bootstrap", "PHP", "Python", "SQL"]
      },
      {
        name: "Aptitude conducting site",
        description: "Frameworks used are Angular and Django.",
        tech: ["Angular", "Django", "Figma"]
      },
      {
        name: "ICDAL'22",
        description: "2nd International Conference - Website Design and Conference Schedule."
      },
      {
        name: "PLC Emulator",
        description: "TCP/IP data Transfer using socket programming in Python.",
        tech: ["Python", "PyQt5", "Excel"]
      }
    ]
  },
  certificates: [{
    name: "Modern PHP Web Development (Jun 2022)",
    image: "/php.jpg",
    link: "https://www.udemy.com/certificate/UC-f945cca6-1aa3-43e7-af06-d7c55a813974/"
  },
  {
    name: "Ethical hacking and cyber security (Jul 2022)",
    image: "/cyber.jpg",
    link: "https://drive.google.com/file/d/1c6rDvoXaS3-ly-ebGYuXwmDa96xkorN_/view?ts=62ecb33f&pli=1"
  },
  {
    name: "Discovering SAP Business Technology Platform (Jun 2024)",
    image: "/btp.png",
    link: "https://www.credly.com/badges/858b0239-0439-4165-baf8-d6e104110181/public_url"
  },
  {
    name: "Creating Applications and Extensions using SAP Build Code (Jun 2024)",
    image: "/Build.png",
    link: "https://www.credly.com/badges/aed1e5a8-56df-433f-b4f9-6535d7968ef9/public_url"
  },
  {
    name: "Exploring the SAP Business AI Portfolio (Aug 2024)",
    image: "/businessAI.png",
    link: "https://www.credly.com/badges/0a78dea0-d4c7-4eb9-9fe0-c0efc79c92ab/public_url"
  },
  {
    name: "Navigating Large Language Models Fundamentals and Techniques for Your Use Case (Oct 2024)",
    image: "/sapllm.png",
    link: "https://www.credly.com/badges/46885208-4668-4148-b10e-82005df0d0a2/public_url"
  },
  {
    name: "Managing Clean Core for SAP S/4HANA Cloud (May 2025)",
    image: "/s4hana.png",
    link: "https://www.credly.com/badges/62dce3b5-8f36-4cf0-b85b-1559a66fba92/public_url"
  },
  {
    name: "Provisioning and Implementing Joule (Jul 2025)",
    image: "/joule.png",
    link:"https://www.credly.com/badges/20b63cb2-5435-44b6-807c-8119f452ec89/public_url"
  },
  {
    name: "Administering SAP Sustainability Control Tower (Sep 2025)",
    image: "/SCT.png",
    link: "https://www.credly.com/badges/589a7551-42dc-424e-bed9-920d96e9fcde/public_url"
  }
  ]
}