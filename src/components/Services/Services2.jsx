"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const cardData = [
  {
    image: "/images/services2/design.webp",
    title: "Design UI UX",
    sub_title: "Crafting Beautiful & User-Centric Digital Experiences",
    slug: "design-ui-ux",
    short_description:
      "We design intuitive, modern, and user-focused interfaces backed by research and usability principles.",
    long_description:
      "Our UI/UX design service blends creativity and strategy to craft seamless digital experiences. We follow a structured, research-driven approach to understand users deeply, create intuitive flows, and build visually appealing interfaces. From wireframes to prototypes, we ensure every touchpoint aligns with your business objectives and user needs.",
    description:
      "Our UI/UX design services focus on crafting intuitive, engaging, and visually stunning digital experiences. We combine user research, wireframing, prototyping, and modern design trends to build interfaces that ensure seamless interaction and user satisfaction.",

    industry_we_serve: {
      title: "Industries We Serve",
      serve_details: [
        { icon: "FaHeartbeat", title: "Healthcare & Telemedicine" },
        { icon: "FaShoppingCart", title: "E-commerce & Retail" },
        { icon: "FaUniversity", title: "FinTech & Banking" },
        { icon: "FaBookReader", title: "Education & E-Learning" },
        { icon: "FaBuilding", title: "Real Estate & Property Management" },
        { icon: "FaPlaneDeparture", title: "Travel & Hospitality" },
        { icon: "FaTools", title: "Enterprise SaaS Solutions" },
        { icon: "FaRocket", title: "Startups & MVP Development" },
      ],
    },

    our_process: {
      title: "Our Design Process",
      process: [
        {
          step: "Discovery",
          icon: "FaSearch",
          description:
            "Understanding your business goals, users, and product requirements.",
        },
        {
          step: "User Research",
          icon: "FaUsers",
          description:
            "Analyzing user behavior, creating personas, and gathering insights.",
        },
        {
          step: "Information Architecture",
          icon: "FaSitemap",
          description:
            "Structuring the flow, creating sitemaps and defining navigation.",
        },
        {
          step: "Wireframing",
          icon: "FaDraftingCompass",
          description:
            "Preparing low-fidelity wireframes that outline layout and flow.",
        },
        {
          step: "UI Design",
          icon: "FaPalette",
          description:
            "Crafting visually appealing, modern, and brand-consistent designs.",
        },
        {
          step: "Prototyping",
          icon: "FaProjectDiagram",
          description:
            "Creating interactive prototypes to simulate user interactions.",
        },
        {
          step: "Usability Testing",
          icon: "FaClipboardCheck",
          description: "Testing designs with users and making improvements.",
        },
        {
          step: "Design Handoff",
          icon: "FaCode",
          description:
            "Delivering design systems, assets, and supporting developers.",
        },
      ],
    },
  },
  {
    image: "/images/services2/development.webp",
    title: "Web & Mobile App Development",
    slug: "web-mobile-app-development",
    sub_title:"Seamless Web and Hybrid Mobile Apps for Engaging Digital Experiences",
    short_description:
      "Creating high-performance web apps (PWA) and mobile apps for Android and iOS, delivering seamless user experiences across all platforms.",

    long_description:
      "Our team develops robust Progressive Web Apps (PWA) and native/cross-platform mobile applications tailored to your business needs. We focus on fast performance, intuitive UI/UX, and scalability. Whether you need a responsive web app accessible on all devices or native Android/iOS apps, we ensure smooth functionality, integration with APIs, and optimized code for maintainability and growth.",

    description:
      "From PWA to mobile apps, we offer end-to-end development services, including frontend, backend, and cloud integration. Our solutions are optimized for speed, security, and cross-platform compatibility, delivering engaging experiences and scalable architectures for businesses of all sizes.",

    /* INDUSTRIES WE SERVE */
    industry_we_serve: {
      title: "Industries We Serve",
      serve_details: [
        { icon: "FaShoppingCart", title: "E-Commerce & Retail" },
        { icon: "FaHeartbeat", title: "Healthcare & Telemedicine" },
        { icon: "FaUniversity", title: "Education & E-Learning" },
        { icon: "FaCar", title: "Automotive & Mobility" },
        { icon: "FaBuilding", title: "Real Estate & Property" },
        { icon: "FaPlaneDeparture", title: "Travel & Hospitality" },
        { icon: "FaTools", title: "Enterprise & SaaS" },
        { icon: "FaRocket", title: "Startups & MVPs" },
      ],
    },

    /* DEVELOPMENT PROCESS */
    our_process: {
      title: "Our Web & Mobile App Development Process",
      process: [
        {
          step: "Discovery & Requirement Analysis",
          icon: "FaSearch",
          description:
            "Understanding business goals, target audience, and app requirements.",
        },
        {
          step: "Wireframing & Prototyping",
          icon: "FaDraftingCompass",
          description:
            "Creating low-fidelity wireframes and interactive prototypes for validation.",
        },
        {
          step: "UI/UX Design",
          icon: "FaPalette",
          description:
            "Designing visually appealing and user-centric interfaces for web and mobile.",
        },
        {
          step: "Frontend Development (Web & PWA)",
          icon: "FaLaptopCode",
          description:
            "Building responsive Progressive Web Apps accessible on all devices.",
        },
        {
          step: "Mobile App Development (Android & iOS)",
          icon: "FaMobileAlt",
          description:
            "Developing native or cross-platform apps with optimized performance.",
        },
        {
          step: "Backend & API Integration",
          icon: "FaCode",
          description:
            "Implementing secure APIs, databases, and backend logic for full functionality.",
        },
        {
          step: "Quality Assurance & Testing",
          icon: "FaBug",
          description:
            "Conducting functional, performance, and security tests to ensure flawless apps.",
        },
        {
          step: "Deployment & Launch",
          icon: "FaCloudUploadAlt",
          description:
            "Publishing web apps, PWAs, and mobile apps on stores or enterprise platforms.",
        },
        {
          step: "Maintenance & Updates",
          icon: "FaTools",
          description:
            "Providing ongoing support, updates, and optimization for long-term success.",
        },
      ],
    },
  },
  {
    image: "/images/services2/devops.webp",
    title: "DevOps",
    slug: "devops",
    sub_title:"Streamlining Development, Deployment, and Collaboration for Faster, Reliable Software Delivery",
    short_description:
      "Automating workflows, accelerating deployments, and enabling seamless collaboration between development and operations teams.",

    long_description:
      "Our DevOps services help organizations streamline development, automate delivery pipelines, and build scalable cloud infrastructures. We ensure faster releases, reliable systems, and improved team collaboration through modern DevOps practices.",

    description:
      "Our DevOps solutions streamline development and operations, automating workflows and improving deployment speed. We implement CI/CD pipelines, cloud infrastructure, and monitoring tools to boost efficiency, reduce downtime, and enhance collaboration across teams.",

    detailed_description: {
      section_1: {
        image: "/images/services2/devops_pipeline.webp",
        title: "CI/CD Automation",
        description:
          "Continuous Integration and Continuous Deployment (CI/CD) lie at the heart of modern software delivery. We implement automated pipelines that build, test, and deploy your code in a consistent and reliable manner. This approach eliminates manual errors, speeds up delivery cycles, and ensures that every update is thoroughly tested before reaching production. Our CI/CD setup includes version control integration, automated unit and integration tests, staging environments, and rollback mechanisms to maintain stability. As a result, your team can ship new features faster and more confidently, reducing time-to-market and keeping your software competitive.",
      },
      section_2: {
        image: "/images/services2/devops_monitoring.webp",
        title: "Infrastructure & Monitoring",
        description:
          "We set up scalable and secure infrastructure on leading cloud platforms such as AWS, Azure, or GCP, tailored to your application’s needs. Our experts configure auto-scaling, load balancing, and disaster recovery strategies to ensure maximum uptime and performance. In addition, we implement real-time monitoring and logging solutions that track application health, resource usage, and potential bottlenecks. This proactive approach helps identify and resolve issues before they impact end-users, reducing downtime and improving reliability. With our DevOps services, you gain a robust, self-healing infrastructure that grows with your business and delivers consistent performance.",
      },
    },

    /* INDUSTRIES WE SERVE */
    industry_we_serve: {
      title: "Industries We Serve",
      serve_details: [
        { icon: "FaServer", title: "Cloud Platforms & Hosting" },
        { icon: "FaHeartbeat", title: "Healthcare & Telemedicine" },
        { icon: "FaShoppingCart", title: "E-Commerce & Retail" },
        { icon: "FaUniversity", title: "FinTech & Banking" },
        { icon: "FaTools", title: "Enterprise SaaS Automation" },
        { icon: "FaCogs", title: "Manufacturing & IoT Systems" },
        { icon: "FaShieldAlt", title: "Cybersecurity & Compliance" },
        { icon: "FaRocket", title: "Startups & Rapid Deployment" },
      ],
    },

    /* DEVOPS PROCESS */
    our_process: {
      title: "Our DevOps Process",
      process: [
        {
          step: "Assessment & Planning",
          icon: "FaSearch",
          description:
            "Understanding current workflows, identifying gaps, and creating a DevOps transformation strategy.",
        },
        {
          step: "CI/CD Pipeline Setup",
          icon: "FaCodeBranch",
          description:
            "Implementing automated build, test, and deployment pipelines for rapid and reliable releases.",
        },
        {
          step: "Infrastructure as Code (IaC)",
          icon: "FaServer",
          description:
            "Automating infrastructure provisioning using Terraform, CloudFormation, or similar tools.",
        },
        {
          step: "Containerization & Orchestration",
          icon: "FaDocker",
          description:
            "Building containerized environments using Docker and Kubernetes for scalable deployments.",
        },
        {
          step: "Monitoring & Logging",
          icon: "FaChartLine",
          description:
            "Implementing real-time logging and monitoring to track system performance and stability.",
        },
        {
          step: "Security & Compliance",
          icon: "FaShieldAlt",
          description:
            "Integrating DevSecOps practices for vulnerability scanning, audits, and secure delivery.",
        },
        {
          step: "Optimization & Automation",
          icon: "FaCogs",
          description:
            "Automating repetitive tasks and optimizing development-to-deployment workflows.",
        },
        {
          step: "Maintenance & Support",
          icon: "FaTools",
          description:
            "Providing ongoing monitoring, updates, and operational support for all environments.",
        },
      ],
    },
  },
  {
    image: "/images/services2/digital_market.webp",
    title: "SEO & Digital Marketing",
    slug: "seo-digital-marketing",
    sub_title:"Boosting Online Visibility, Driving Traffic, and Converting Leads with Data-Driven Strategies",
    short_description:
      "Boost your online presence, drive targeted traffic, and convert visitors into customers with data-driven SEO and result-focused digital marketing strategies.",

    long_description:
      "Our SEO and Digital Marketing services help businesses build a strong online presence, improve search visibility, and attract high-intent audiences. Through keyword research, on-page optimization, content marketing, paid advertising, analytics, and ongoing performance refinement, we create strategies that deliver measurable growth. Whether you aim to rank higher on Google, expand brand awareness, or generate qualified leads, our tailored marketing solutions ensure consistent and sustainable results.",

    description:
      "Our SEO and digital marketing services are designed to boost your online visibility, drive organic traffic, and generate quality leads through data-driven campaigns and optimization strategies.",

    /* DETAILED DESCRIPTION */
    detailed_description: {
      section_1: {
        image: "/images/services2/seo_analytics.webp",
        title: "SEO Strategy & Optimization",
        description:
          "We build SEO strategies that strengthen your website's authority and search ranking. From in-depth keyword research and competition analysis to technical SEO, on-page optimization, and content planning—we ensure that your website is discoverable and aligned with user intent. Our continuous monitoring and performance tracking help maintain healthy rankings and sustainable organic growth.",
      },
      section_2: {
        image: "/images/services2/digital_ads.webp",
        title: "Performance Marketing & Analytics",
        description:
          "We create and manage high-converting digital marketing campaigns across platforms like Google Ads, Meta Ads, and LinkedIn. Our data-driven approach focuses on improving ROI through precise audience targeting, A/B testing, funnel optimization, and continuous performance analysis. You get transparent reporting, measurable results, and campaigns designed to scale.",
      },
    },

    /* INDUSTRIES WE SERVE */
    industry_we_serve: {
      title: "Industries We Serve",
      serve_details: [
        { icon: "FaShoppingCart", title: "E-Commerce & Retail" },
        { icon: "FaHeartbeat", title: "Healthcare & Wellness" },
        { icon: "FaGraduationCap", title: "Education & E-Learning" },
        { icon: "FaBuilding", title: "Real Estate & Construction" },
        { icon: "FaLaptopCode", title: "SaaS & Tech Products" },
        { icon: "FaBriefcase", title: "Professional Services" },
        { icon: "FaHotel", title: "Travel & Hospitality" },
        { icon: "FaBullhorn", title: "Media, Marketing & Agencies" },
      ],
    },

    /* PROCESS */
    our_process: {
      title: "Our SEO & Digital Marketing Process",
      process: [
        {
          step: "Market Research & Audit",
          icon: "FaSearch",
          description:
            "We analyze your website, competitors, and industry to identify opportunities and define a winning strategy.",
        },
        {
          step: "Keyword Planning & SEO Setup",
          icon: "FaListAlt",
          description:
            "We identify high-intent keywords and optimize website structure, metadata, and on-page content.",
        },
        {
          step: "Content Strategy & Optimization",
          icon: "FaPenFancy",
          description:
            "We create SEO-focused content, blogs, and landing pages that improve ranking and user engagement.",
        },
        {
          step: "Paid Ads & Campaign Setup",
          icon: "FaBullhorn",
          description:
            "We launch targeted ad campaigns on Google, Meta, and LinkedIn to maximize conversions and ROI.",
        },
        {
          step: "Social Media Marketing",
          icon: "FaShareAlt",
          description:
            "We build brand presence with content creation, audience engagement, and performance-driven social strategies.",
        },
        {
          step: "Monitoring & Analytics",
          icon: "FaChartLine",
          description:
            "We track user behavior, measure campaign performance, and optimize strategies based on real-time analytics.",
        },
        {
          step: "Conversion Optimization",
          icon: "FaSync",
          description:
            "We fine-tune funnels, improve landing pages, and enhance user experience to increase conversion rates.",
        },
        {
          step: "Reporting & Growth Scaling",
          icon: "FaChartBar",
          description:
            "You receive transparent reports, insights, and recommendations to scale your marketing for long-term growth.",
        },
      ],
    },
  },
  {
    image: "/images/services2/data_analysis.webp",
    title: "Data Analytics",
    slug: "data-analytics",
    sub_title:"Turning Data into Actionable Insights for Smarter Business Decisions",
    short_description:
      "Transform raw data into actionable insights to drive smarter decisions, optimize operations, and uncover growth opportunities.",

    long_description:
      "Our Data Analytics services empower organizations to leverage data effectively. We provide end-to-end solutions including data collection, cleaning, visualization, predictive modeling, and business intelligence. By turning complex datasets into meaningful insights, we help businesses enhance performance, forecast trends, and make informed strategic decisions.",

    description:
      "We provide comprehensive data analytics solutions to help organizations extract actionable insights from data. Our services include data visualization, predictive analytics, BI dashboards, and performance optimization, enabling businesses to make data-driven decisions that drive growth.",

    /* INDUSTRIES WE SERVE */
    industry_we_serve: {
      title: "Industries We Serve",
      serve_details: [
        { icon: "FaChartLine", title: "Finance & Banking" },
        { icon: "FaHeartbeat", title: "Healthcare & Life Sciences" },
        { icon: "FaShoppingCart", title: "Retail & E-Commerce" },
        { icon: "FaUniversity", title: "Education & EdTech" },
        { icon: "FaBuilding", title: "Real Estate & Infrastructure" },
        { icon: "FaPlaneDeparture", title: "Travel & Logistics" },
        { icon: "FaCogs", title: "Manufacturing & Supply Chain" },
        { icon: "FaRocket", title: "Startups & Technology" },
      ],
    },

    /* DATA ANALYTICS PROCESS */
    our_process: {
      title: "Our Data Analytics Process",
      process: [
        {
          step: "Data Collection & Integration",
          icon: "FaDatabase",
          description:
            "Gathering data from multiple sources and ensuring it is clean, accurate, and consistent.",
        },
        {
          step: "Data Cleaning & Preprocessing",
          icon: "FaBroom",
          description:
            "Removing inconsistencies, duplicates, and errors to prepare data for analysis.",
        },
        {
          step: "Data Analysis & Modeling",
          icon: "FaProjectDiagram",
          description:
            "Using statistical methods and machine learning models to extract patterns and insights.",
        },
        {
          step: "Data Visualization & Reporting",
          icon: "FaChartPie",
          description:
            "Creating interactive dashboards, graphs, and charts to present actionable insights.",
        },
        {
          step: "Predictive Analytics",
          icon: "FaChartLine",
          description:
            "Forecasting trends, customer behavior, and business outcomes using predictive models.",
        },
        {
          step: "Decision Support",
          icon: "FaLightbulb",
          description:
            "Providing recommendations and insights that guide strategic business decisions.",
        },
        {
          step: "Monitoring & Optimization",
          icon: "FaCogs",
          description:
            "Continuously tracking KPIs and refining models to improve accuracy and relevance.",
        },
        {
          step: "Reporting & Stakeholder Communication",
          icon: "FaFileAlt",
          description:
            "Delivering regular, clear, and actionable reports to stakeholders for informed decision-making.",
        },
      ],
    },
  },
  {
    image: "/images/services2/cyber_security.webp",
    title: "Cybersecurity Solutions",
    slug: "cybersecurity-solutions",
    sub_title:"Protecting Your Digital Assets with Advanced Security Solutions",
    short_description:
      "Protecting your digital assets with advanced security solutions, threat detection, and risk mitigation strategies.",

    long_description:
      "Our cybersecurity services provide end-to-end protection for businesses against evolving digital threats. We specialize in network security, application security, cloud security, and compliance management. Our team ensures proactive threat detection, incident response, and continuous monitoring to safeguard sensitive data and maintain business continuity.",

    description:
      "We deliver comprehensive cybersecurity solutions tailored to your organization’s needs. From vulnerability assessments and penetration testing to managed security services and compliance audits, our approach ensures robust protection against cyber threats while enabling secure business operations.",

    detailed_description: {
      section_1: {
        image: "/images/services2/cyber_network_security.webp",
        title: "Network & Infrastructure Security",
        description:
          "Implementing firewalls, intrusion detection systems, and secure network architectures to prevent unauthorized access and protect critical infrastructure.",
      },
      section_2: {
        image: "/images/services2/cyber_application_security.webp",
        title: "Application & Data Security",
        description:
          "Securing applications and databases against vulnerabilities through penetration testing, code audits, encryption, and secure coding practices.",
      },
      section_3: {
        image: "/images/services2/cyber_cloud_security.webp",
        title: "Cloud & Endpoint Security",
        description:
          "Protecting cloud environments, endpoints, and remote work systems with advanced monitoring, threat detection, and compliance solutions.",
      },
      section_4: {
        image: "/images/services2/cyber_compliance.webp",
        title: "Compliance & Risk Management",
        description:
          "Ensuring adherence to regulatory standards such as GDPR, HIPAA, ISO 27001, and implementing risk management frameworks to reduce exposure to threats.",
      },
    },

    /* INDUSTRIES WE SERVE */
    industry_we_serve: {
      title: "Industries We Serve",
      serve_details: [
        { icon: "FaUniversity", title: "Education & E-Learning" },
        { icon: "FaHeartbeat", title: "Healthcare & Hospitals" },
        { icon: "FaShoppingCart", title: "E-Commerce & Retail" },
        { icon: "FaBuilding", title: "Finance & Banking" },
        { icon: "FaPlaneDeparture", title: "Travel & Hospitality" },
        { icon: "FaCar", title: "Automotive & Mobility" },
        { icon: "FaTools", title: "Enterprise & SaaS" },
        { icon: "FaRocket", title: "Startups & Emerging Businesses" },
      ],
    },

    /* CYBERSECURITY PROCESS */
    our_process: {
      title: "Our Cybersecurity Process",
      process: [
        {
          step: "Risk Assessment & Analysis",
          icon: "FaSearch",
          description:
            "Identify vulnerabilities, assess potential threats, and prioritize security risks.",
        },
        {
          step: "Network & Infrastructure Hardening",
          icon: "FaNetworkWired",
          description:
            "Implement firewalls, segmentation, and intrusion detection to protect IT infrastructure.",
        },
        {
          step: "Application Security & Testing",
          icon: "FaBug",
          description:
            "Conduct penetration testing, vulnerability scanning, and secure code reviews.",
        },
        {
          step: "Cloud & Endpoint Protection",
          icon: "FaCloud",
          description:
            "Secure cloud environments, remote work systems, and endpoint devices.",
        },
        {
          step: "Threat Monitoring & Detection",
          icon: "FaEye",
          description:
            "Continuous monitoring for potential threats and anomalies using SIEM and advanced analytics.",
        },
        {
          step: "Incident Response & Recovery",
          icon: "FaShieldAlt",
          description:
            "Rapid response to security incidents with containment, mitigation, and recovery plans.",
        },
        {
          step: "Compliance & Governance",
          icon: "FaClipboardCheck",
          description:
            "Ensure adherence to regulatory standards and internal security policies.",
        },
        {
          step: "Continuous Improvement & Training",
          icon: "FaChalkboardTeacher",
          description:
            "Regular updates, audits, and employee training to strengthen cybersecurity posture.",
        },
      ],
    },
  },
  {
    image: "/images/services2/ai.webp",
    title: "AI & Machine Learning",
    slug: "ai-ml-ar",
    sub_title:"Transforming Data into Intelligent Insights with AI, ML, and Immersive AR/VR Experiences",
    short_description:
      "Leveraging Artificial Intelligence, Machine Learning, and Augmented Reality to deliver intelligent, predictive, and immersive solutions.",

    long_description:
      "Our AI & ML services help businesses harness data to drive smarter decisions, automate processes, and provide personalized experiences. We develop predictive models, recommendation engines, and intelligent systems, and integrate Augmented Reality (AR) to create immersive user experiences across industries.",

    description:
      "We specialize in AI, Machine Learning, and AR solutions that transform business operations and customer experiences. From predictive analytics to intelligent automation, our team builds scalable, data-driven systems. By integrating AR, we also enable interactive and immersive applications for retail, healthcare, education, and more.",

    /* INDUSTRIES WE SERVE */
    industry_we_serve: {
      title: "Industries We Serve",
      serve_details: [
        { icon: "FaRobot", title: "AI & Robotics" },
        { icon: "FaHeartbeat", title: "Healthcare & Medical AI" },
        { icon: "FaShoppingCart", title: "Retail & E-Commerce" },
        { icon: "FaUniversity", title: "Education & eLearning" },
        { icon: "FaCar", title: "Automotive & Autonomous Vehicles" },
        { icon: "FaPlaneDeparture", title: "Travel & AR Experiences" },
        { icon: "FaIndustry", title: "Industrial Automation" },
        { icon: "FaRocket", title: "Startups & Emerging Tech" },
      ],
    },

    /* AI & ML PROCESS */
    our_process: {
      title: "Our AI & ML Development Process",
      process: [
        {
          step: "Data Collection & Preparation",
          icon: "FaDatabase",
          description:
            "Gathering, cleaning, and preparing structured and unstructured data for analysis.",
        },
        {
          step: "Exploratory Data Analysis",
          icon: "FaChartBar",
          description:
            "Analyzing data patterns, correlations, and feature selection for model training.",
        },
        {
          step: "Model Development & Training",
          icon: "FaBrain",
          description:
            "Building AI/ML models using supervised, unsupervised, and reinforcement learning techniques.",
        },
        {
          step: "Integration of AR/VR",
          icon: "FaVrCardboard",
          description:
            "Enhancing solutions with augmented and virtual reality for immersive applications.",
        },
        {
          step: "Testing & Validation",
          icon: "FaBug",
          description:
            "Validating models for accuracy, precision, and scalability across different datasets.",
        },
        {
          step: "Deployment & Monitoring",
          icon: "FaCloudUploadAlt",
          description:
            "Deploying AI/ML and AR applications with continuous monitoring and model updates.",
        },
        {
          step: "Optimization & Maintenance",
          icon: "FaCogs",
          description:
            "Optimizing models, updating AR experiences, and ensuring system reliability.",
        },
      ],
    },
  },
  {
    image: "/images/services2/qa.webp",
    title: "Quality Assurance & Testing",
    slug: "quality-assurance",
    sub_title:"Ensuring Flawless Performance and Reliability through Comprehensive Testing and QA Practices",
    short_description:
      "Ensuring flawless software performance through rigorous testing, automated QA, and continuous quality monitoring.",

    long_description:
      "Our Quality Assurance services help organizations deliver reliable, high-performing software. We combine manual and automated testing strategies to identify defects, ensure usability, and maintain consistent quality across web, mobile, and enterprise applications.",

    description:
      "We provide end-to-end QA and software testing solutions to ensure your applications are robust, secure, and user-friendly. Our services include functional, performance, security, and regression testing, alongside test automation and CI/CD integration for faster and reliable releases.",

    detailed_description: {
      section_1: {
        image: "/images/services2/qa_functional.webp",
        title: "Functional & Manual Testing",
        description:
          "Our team conducts comprehensive manual testing to verify that all functionalities of your application work as intended. We perform functional, usability, exploratory, and regression testing to catch issues before they reach users.",
      },
      section_2: {
        image: "/images/services2/qa_automation.webp",
        title: "Automation Testing",
        description:
          "We implement automated testing frameworks using tools like Selenium, Cypress, or Appium to accelerate testing cycles, ensure repeatable results, and reduce human error. Automation ensures faster delivery and higher reliability for complex applications.",
      },
      section_3: {
        image: "/images/services2/qa_performance.webp",
        title: "Performance & Security Testing",
        description:
          "We perform performance, load, and stress testing to ensure your applications handle traffic and workloads efficiently. Our security testing identifies vulnerabilities, ensuring your system is protected against potential threats.",
      },
    },

    /* INDUSTRIES WE SERVE */
    industry_we_serve: {
      title: "Industries We Serve",
      serve_details: [
        { icon: "FaLaptopCode", title: "Software & Web Applications" },
        { icon: "FaMobileAlt", title: "Mobile Applications" },
        { icon: "FaShoppingCart", title: "E-Commerce & Retail" },
        { icon: "FaUniversity", title: "Education & E-Learning" },
        { icon: "FaHeartbeat", title: "Healthcare & Medical Devices" },
        { icon: "FaIndustry", title: "Enterprise & Manufacturing" },
        { icon: "FaCloud", title: "Cloud-Based Platforms" },
        { icon: "FaRocket", title: "Startups & Emerging Tech" },
      ],
    },

    /* QA PROCESS */
    our_process: {
      title: "Our QA & Testing Process",
      process: [
        {
          step: "Requirement Analysis",
          icon: "FaFileAlt",
          description:
            "Understanding application requirements and creating test plans based on business objectives.",
        },
        {
          step: "Test Case Design",
          icon: "FaTasks",
          description:
            "Developing detailed test cases and scenarios for functional and non-functional testing.",
        },
        {
          step: "Manual Testing",
          icon: "FaUserCheck",
          description:
            "Performing exploratory, regression, and usability testing to identify bugs and issues.",
        },
        {
          step: "Automation Testing",
          icon: "FaRobot",
          description:
            "Implementing automation scripts to increase testing efficiency and coverage.",
        },
        {
          step: "Performance & Security Testing",
          icon: "FaTachometerAlt",
          description:
            "Ensuring system performance under load and validating application security.",
        },
        {
          step: "Bug Reporting & Tracking",
          icon: "FaBug",
          description:
            "Documenting and tracking issues using industry-standard tools to ensure resolution.",
        },
        {
          step: "Release & Maintenance Testing",
          icon: "FaCloudUploadAlt",
          description:
            "Verifying application stability after deployment and during continuous updates.",
        },
      ],
    },
  },
  {
    image: "/images/services2/erp.webp",
    title: "ERP Solutions",
    slug: "erp-solutions",
    sub_title:"Streamlining Business Processes with Custom ERP Solutions for Efficiency and Growth",
    short_description:
      "Streamline business operations and improve efficiency with integrated ERP solutions tailored to your organization.",

    long_description:
      "Our ERP services help businesses centralize processes, automate workflows, and gain actionable insights. From finance and HR to supply chain and inventory, we provide comprehensive solutions that enhance productivity and drive growth.",

    description:
      "We offer end-to-end ERP implementation, customization, and support services. Our team ensures seamless integration of your business processes, providing a unified system that improves data accuracy, operational efficiency, and decision-making.",

    /* INDUSTRIES WE SERVE */
    industry_we_serve: {
      title: "Industries We Serve",
      serve_details: [
        { icon: "FaIndustry", title: "Manufacturing & Production" },
        { icon: "FaShoppingCart", title: "Retail & E-Commerce" },
        { icon: "FaBuilding", title: "Real Estate & Property Management" },
        { icon: "FaTruck", title: "Logistics & Supply Chain" },
        { icon: "FaUniversity", title: "Education & Institutions" },
        { icon: "FaHeartbeat", title: "Healthcare & Hospitals" },
        { icon: "FaChartLine", title: "Finance & Banking" },
        { icon: "FaRocket", title: "Startups & Emerging Businesses" },
      ],
    },

    /* ERP PROCESS */
    our_process: {
      title: "Our ERP Implementation Process",
      process: [
        {
          step: "Requirement Gathering",
          icon: "FaClipboardList",
          description:
            "Analyze business processes and define ERP requirements to meet organizational needs.",
        },
        {
          step: "System Design & Customization",
          icon: "FaDraftingCompass",
          description:
            "Design ERP workflows and customize modules to align with your unique processes.",
        },
        {
          step: "Data Migration & Integration",
          icon: "FaDatabase",
          description:
            "Safely migrate existing data and integrate ERP with third-party systems and applications.",
        },
        {
          step: "Implementation & Deployment",
          icon: "FaServer",
          description:
            "Deploy the ERP system across departments ensuring minimal disruption and maximum efficiency.",
        },
        {
          step: "Training & User Adoption",
          icon: "FaChalkboardTeacher",
          description:
            "Train employees and stakeholders for smooth adoption of the new ERP system.",
        },
        {
          step: "Testing & Quality Assurance",
          icon: "FaCheckCircle",
          description:
            "Perform thorough testing to ensure reliability, accuracy, and seamless performance.",
        },
        {
          step: "Support & Maintenance",
          icon: "FaTools",
          description:
            "Provide ongoing support, updates, and optimizations for continued ERP success.",
        },
      ],
    },
  },
];



const Services2 = () => {
  const pathname = usePathname();
  const router = useRouter();

  const contentStyle = {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  };

  const descStyle = {
    fontSize: "0.95rem",
    opacity: 0.85,
    flexGrow: 1, // pushes button to bottom
  };

  const buttonStyle = {
    marginTop: "1rem",
    alignSelf: "flex-start",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "2rem",
  };

  const cardStyle = {
    background: "#0F5A94",
    color: "#fff",
    borderRadius: "16px",
    width: "350px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const titleStyle = {
    margin: 0,
    marginBottom: "0.5rem",
    fontSize: "1.2rem",
  };

  const handleReadMore = (data) => {
    sessionStorage.setItem(data.slug, JSON.stringify(data));
    router.push(`/services/${data.slug}`);
  };

  return (
    <>
      {!pathname.includes("services") && (
        <h1 style={{ textAlign: "center" }}>Our Services</h1>
      )}

      <div style={containerStyle}>
        {cardData.map((card, index) => (
          <div key={index} style={cardStyle}>
            <img src={card.image} alt={card.title} style={imageStyle} />
            <div style={contentStyle}>
              <h2 style={titleStyle}>{card.title}</h2>
              <p style={descStyle}>{card.description}</p>
              <button
                className="rounded-pill btn-rounded pt-3 pb-3"
                style={buttonStyle}
                onClick={() => handleReadMore(card)}
              >
                Read More <FaArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services2;
