import { Injectable } from '@angular/core';

@Injectable()
export class AppConstants {

  // Basic Info
  readonly MY_NAME = "Srdan Ristic";
  readonly MY_LOGO = "initials-logo.png";
  readonly MY_IMAGE = "profile.png";
  readonly MY_TITLE = "Software Engineer";
  readonly MY_SUMMARY = "Software development is my passion and I enjoy working on it on a daily bases. I built various cross-platform applications throughout my career and enjoyed working on every single one of them. I am currently employed by RedSail Technologies (PioneerRx), helping save and revitalize independent pharmacies in United States.";
  readonly MY_EMAIL = "srdanristic2@gmail.com";
  readonly MY_PHONE = "318-944-1294";
  readonly MY_CITY = "Shreveport, LA";
  readonly MY_SKYPE = "srlepn";
  readonly MY_WEBSITE_URL = "srdanristic.com";
  readonly MY_WHATS_NEW = "I am actively pursuing the top goal on my bucket list: embarking on an exciting journey to explore and experience each of the 50 states in the U.S.";
  readonly MY_RESUME = "Srdan_Ristic_Resume.pdf";

  // Links
  readonly MY_GITHUB = "https://github.com/ristics18";
  readonly MY_LINKEDIN = "https://www.linkedin.com/in/srdan-ristic-87577580/";
  readonly MY_STACKOVERFLOW = "https://stackoverflow.com/users/2687059/srdan-ristic";
  readonly MY_SLACK = "https://www.facebook.com/srdjan.ristic.surge";

  // About Me
  readonly MY_IMAGE_AM = "about-me.png";
  readonly MY_TITLE_AM = "Income seldom exceeds personal development";
  readonly MY_SUBTITLE_AM = "Keep evolving";
  readonly MY_SUMMARY_AM = "My name is Srđan Ristic and I am from Serbia, very cool and interesting country in Southeastern Europe. In the United States, I go by Surgen. I live my life by setting goals and pursuing my dreams. I spend most of my time playing sports, socializing and doing software development. Love meeting new people and making new connections.";

  // Experience
  readonly EXPERIENCE = [
    {
      experienceName: "Software Development Team Lead",
      experienceCompany: "RedSail Technologies (PioneerRx)",
      experienceDate: "02 Jan 2023 - Present",
      experienceDesc: "I am leading a team of five offshore developers, balancing technical and project management responsibilities to ensure the success of key initiatives. My role also involves collaborating closely with senior management and other team leads, contributing to the company's long-term goals and innovative strategies."
    },
    {
      experienceName: "Software Developer",
      experienceCompany: "PioneerRx",
      experienceDate: "18 Jun 2018 - 02 Jan 2023",
      experienceDesc: "Developed desktop application for independent pharmacies using C# and SQL technologies. My main focus was on the implementation of data synchronization processes between pharmacies. I was also involved in the Azure DevOps CI/CD development."
    },
    {
      experienceName: "Graduate Research Assistant",
      experienceCompany: "Louisiana State University Shreveport",
      experienceDate: "01 Feb 2017 - 01 May 2018",
      experienceDesc: "I worked on a variety of biomedical informatics projects. With the use of powerful computers, I learned and worked on managing and analyzing biological, chemical, and medical processes in the interest of improving medicine and patient care. I frequently collaborated with doctors regarding the data analysis."
    },
    {
      experienceName: "Intern/Junior Software Developer",
      experienceCompany: "Benetech Corporation",
      experienceDate: "01 Oct 2015 - 01 May 2016",
      experienceDesc: "Besides learning and acquiring new skills using various programming technologies, I worked on development and maintenance of the systems for content management, using technologies such as Java, Spring, REST, SQL, Alfresco, CMIS and AngularJS. I communicated with clients on a daily bases regarding the improvement of the system."
    }
  ];

  // Education
  readonly EDUCATION = [
    {
      educationName: "MS in Computer System Technology",
      educationUniversity: "Louisiana State University Shreveport",
      educationDate: "01 Jan 2017 - 15 May 2018",
      educationDesc: "Attended LSUS for a year and a half in order to complete my Master's. Worked on a variety of projects where my favorite one was a capstone project (Android app)."
    },
    {
      educationName: "BS in Information Technology",
      educationUniversity: "University Metropolitan",
      educationDate: "01 Oct 2012 - 01 Dec 2016",
      educationDesc: "Pursued my Bachelor's degree in Belgrade, Serbia. This was my starting point when it comes to software development. Mainly focused on Java projects."
    },
    {
      educationName: "High School",
      educationUniversity: "Sports High School in Belgrade",
      educationDate: "01 Sep 2008 - 12 Apr 2012",
      educationDesc: "Attended Sports High School in Belgrade where my main focus besides school was basketball. Spent my junior year in Raymond, IL as an exchange student."
    }
  ];

  // Skills
  readonly SKILLS = [
    {
      skillTitle: "Frontend",
      skillImage: "front-end.svg",
      skills: [
        {
          skillName: "HTML/CSS"
        },
        {
          skillName: "Bootstrap"
        },
        {
          skillName: "Angular"
        },
        {
          skillName: "NodeJS"
        },
        {
          skillName: "WinForms"
        }
      ]
    },
    {
      skillTitle: "Backend",
      skillImage: "back-end.svg",
      skills: [
        {
          skillName: "C#"
        },
        {
          skillName: "ASP.NET"
        },
        {
          skillName: "Java"
        },
        {
          skillName: "SQL"
        },
        {
          skillName: "Python"
        }
      ]
    },
    {
      skillTitle: "Other",
      skillImage: "other.svg",
      skills: [
        {
          skillName: "Git/TFS"
        },
        {
          skillName: "Azure/AWS"
        },
        {
          skillName: "Docker/Kubernetes"
        },
        {
          skillName: "Kafka/RabbitMQ"
        },
        {
          skillName: "Powershell"
        }
      ]
    }
  ];

  // Certifications and Awards
  readonly CERTS_AND_AWARDS = [
    {
      caaName: "Microsoft Azure Fundamentals",
      caaOrganization: "Microsoft",
      caaImage: "azure-fundamentals-cert.png",
      caaDate: "21 Dec 2022",
      caaLink: "https://www.credly.com/badges/db97c9d0-8434-4342-b6cf-24f83768d1b7",
      caaDesc: "I started getting more involved with Azure projects at RedSail Technologies (PioneerRx). This has motivated me to pursue this certification and get a solid understanding of Azure cloud fundamentals."
    },
    {
      caaName: "AWS Certified Developer Associate",
      caaOrganization: "Amazon Web Services",
      caaImage: "developer-associate-cert.png",
      caaDate: "14 Aug 2020",
      caaLink: "https://www.youracclaim.com/badges/c6050a5e-126c-4848-8f87-e3f4367f857d?source=linked_in_profile",
      caaDesc: "After doing some projects in AWS and diving deep into roots of AWS services, my motivation led me to pursuing this certification."
    },
    {
      caaName: "AWS Certified Cloud Practitioner",
      caaOrganization: "Amazon Web Services",
      caaImage: "cloud-practitioner-cert.png",
      caaDate: "24 Oct 2019",
      caaLink: "https://www.youracclaim.com/badges/712e83a4-69ef-48b6-853a-17f60e58bf54?source=linked_in_profile",
      caaDesc: "I decided to learn more about cloud computing. AWS has always been on my mind, so I decided to pursue and successfully complete this certification."
    },
    {
      caaName: "MCSA SQL Database Development",
      caaOrganization: "Microsoft",
      caaImage: "microsoft-cert.png",
      caaDate: "16 Oct 2018",
      caaLink: "https://www.youracclaim.com/badges/8ba16afe-0be6-42dc-bc8e-60441ea37c97/linked_in_profile",
      caaDesc: "Successfully completed 70-701 exam, which is part of the MCSA SQL certification. Since Microsoft is retiring this certification, I decided not to move forward with other exams."
    },
    {
      caaName: "Outstanding Student Award",
      caaOrganization: "Louisiana State University Shreveport",
      caaImage: "lsus-award.png",
      caaDate: "03 Apr 2018",
      caaLink: "https://www.lsus.edu/news-and-events/lsus-honors-its-best-of-the-best-at-academic-awards-convocation-2018",
      caaDesc: "I was chosen as an outstanding student at the end of my Master's studies at LSUS. I was honored to receive this award, as it demonstrated that hard works pays off."
    },
    {
      caaName: "Medical Publication",
      caaOrganization: "LSU Health Sciences Center (Shreveport)",
      caaImage: "medical-publication.png",
      caaDate: "18 May 2018",
      caaLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6117539/",
      caaDesc: "Worked on analyzing patient data sets in order to evaluate the impact of sedative agent selection on morbidity, mortality, and length of stay."
    },
    {
      caaName: "Oracle Java Certified Associate",
      caaOrganization: "Oracle",
      caaImage: "oracle-cert.png",
      caaDate: "14 Nov 2017",
      caaLink: "https://www.youracclaim.com/badges/b0610484-16e7-43c4-af31-851ebfc2c002/linked_in_profile",
      caaDesc: "I am a big fan of Java - one of the reasons why I pursued and successfully completed this certification. My future goal is to take Oracle Certified Professional exam."
    }
  ];

  // Projects
  readonly PROJECTS = [
    {
      id: 1,
      projectName: "RedSail Technologies (PioneerRx)",
      projectDesc: "Initially joining PioneerRx as a Software Developer, I progressed to the role of Software Development Team Lead. Presently, I spearhead an offshore team comprising five skilled developers. Our primary objective is to enhance and construct a robust, fail-safe application tailored for independent pharmacies, ensuring superior performance and reliability.",
      projectDate: "Jun 2018 - Present",
      projectImage: "work.png",
      projectUrl: "https://www.pioneerrx.com",
      projectTechnologies:[
        {
          technologyName: "C#"
        },
        {
          technologyName: ".NET, Entity"
        },
        {
          technologyName: "SQL Server"
        },
        {
          technologyName: "HTML, CSS"
        },
        {
          technologyName: "Git"
        },
        {
          technologyName: "Azure (DevOps)"
        },
        {
          technologyName: "Powershell"
        }
      ]
    },
    {
      id: 2,
      projectName: "MetTalks",
      projectDesc: "I was invited to be a guest speaker at the MetTalks event. This event was organized by University Metropolitan, which is the university where I graduated with my Bachelors Degree in IT. Topic of discussion was 'Studying in Serbia vs studying in foreign countries'. I was honored to be invited by my former mentor dr Miroslava Raspopovic Milic.",
      projectDate: "Dec 2021",
      projectImage: "metTalks.png",
      projectUrl: "https://www.metropolitan.ac.rs/dogadjaji/met-talks-it-webinar-studiranje-u-srbiji-vs-studiranje-u-inostranstvu/",
      projectTechnologies:
      [
        {
          technologyName: "N/A"
        }
      ]
    },
    {
      id: 3,
      projectName: "Soccer Notifier",
      projectDesc: "Developed web application that allows soccer players to subscribe to their teams with phone numbers and/or email addresses. The system consumes the subscriptions and notifies players based on already built games schedule.",
      projectDate: "Aug 2021 – Oct 2021",
      projectImage: "soccerNotifier.png",
      projectUrl: "https://soccernotifier.s3.us-east-1.amazonaws.com/index.html",
      projectTechnologies:[
        {
          technologyName: "Angular 12"
        },
        {
          technologyName: "AWS DynamoDB"
        },
        {
          technologyName: "AWS Lambda"
        },
        {
          technologyName: "AWS API Gateway"
        },
        {
          technologyName: "AWS CloudWatch Events"
        },
        {
          technologyName: "Git"
        }
      ]
    },
    {
      id: 4,
      projectName: "WordSym - iOS App",
      projectDesc: "Developed an iOS app that helps people learn new words from English dictionary. Core functionality of the app is to show an arbitrary word to a user and require them to provide a synonym for it. Once user provides a synonym, the app shows details about the word, as well as correct/incorrect response.",
      projectDate: "Feb 2020 – Apr 2020",
      projectImage: "wordSym.png",
      projectUrl: "",
      projectTechnologies:[
        {
          technologyName: "Swift"
        },
        {
          technologyName: "AWS (DynamoDB, AWS Lambda, AWS API Gateway)"
        },
        {
          technologyName: "Git"
        }
      ]
    },
    {
      id: 5,
      projectName: "Oracle Certified Associate Java SE 8 Practice Exams",
      projectDesc: "I have created this Udemy course with an idea to develop practice exams that will help students and developers prepare for OCA Java SE 8 Programmer I (1Z0-808) certification or Java interviews.",
      projectDate: "February 2019 - April 2019",
      projectImage: "udemyCourse.mp4",
      projectUrl: "https://www.udemy.com/oracle-certified-associate-java-se-8-practice-exams/",
      projectTechnologies:[
        {
          technologyName: "Java 8"
        }
      ]
    },
    {
      id: 6,
      projectName: "Srdan Ristic Portfolio",
      projectDesc: "This is my personal website where you can find out more about my career and life.",
      projectDate: "Nov 2018 - Feb 2019",
      projectImage: "portfolio.png",
      projectUrl: "https://www.srdanristic.com",
      projectTechnologies:[
        {
          technologyName: "Angular 7"
        },
        {
          technologyName: "AWS (CloudFront, S3, Route 53)"
        },
        {
          technologyName: "HTML, CSS, Bootstrap"
        },
        {
          technologyName: "Git"
        }
      ]
    },
    {
      id: 7,
      projectName: "Advisor's Tool",
      projectDesc: "This is a system developed at LSUS. The idea of the system is to generate curriculum worksheets based on student's transcript.",
      projectDate: "Aug 2017 - May 2018",
      projectImage: "advisorsTool.png",
      projectUrl: "https://sun.cs.lsus.edu/advisors-tool/index.php",
      projectTechnologies:[
        {
          technologyName: "PHP 7"
        },
        {
          technologyName: "MySQL"
        },
        {
          technologyName: "HTML, CSS, JavaScript"
        },
        {
          technologyName: "Bootstrap"
        },
        {
          technologyName: "Regular Expressions"
        },
        {
          technologyName: "Subversion"
        }
      ]
    },
    {
      id: 8,
      projectName: "Education Tool",
      projectDesc: "This is a system developed with the idea to help medical students at LSUHSC learn by going through cases provided by their professors.",
      projectDate: "Aug 2017 – May 2018",
      projectImage: "education-tool.png",
      projectUrl: "http://www.lsuhscshreveport.edu/",
      projectTechnologies:[
        {
          technologyName: "PHP"
        },
        {
          technologyName: "MySQL"
        },
        {
          technologyName: "HTML, CSS, JavaScript"
        },
        {
          technologyName: "Bootstrap"
        },
        {
          technologyName: "Charts.js"
        },
        {
          technologyName: "Subversion"
        }
      ]
    },
    {
      id: 9,
      projectName: "Laboratory for Advanced Biomedical Informatics",
      projectDesc: "This is when I worked as Graduate Research Assistant at LSUS. My work was focused on biomedical informatics projects.",
      projectDate: "Feb 2017 – May 2018",
      projectImage: "labi.png",
      projectUrl: "http://www.labi.lsus.edu",
      projectTechnologies:[
        {
          technologyName: "R, Java"
        },
        {
          technologyName: "MySQL"
        },
        {
          technologyName: "WEKA"
        },
        {
          technologyName: "Orange"
        },
        {
          technologyName: "Git, Subversion"
        }
      ]
    },
    {
      id: 10,
      projectName: "Orbit",
      projectDesc: "This is a mobile application that helps school systems with the communication between parents and teachers.",
      projectDate: "Aug 2017 – May 2018",
      projectImage: "orbit.png",
      projectUrl: "https://play.google.com/store/apps/details?id=net.orbit.orbit",
      projectTechnologies:[
        {
          technologyName: "Java/Android"
        },
        {
          technologyName: "Spring Boot"
        },
        {
          technologyName: "RESTful Web Services"
        },
        {
          technologyName: "Jenkins"
        },
        {
          technologyName: "AWS (EC2)"
        },
        {
          technologyName: "Git"
        }
      ]
    },
    {
      id: 11,
      projectName: "High Altitude Solar Eclipse Observer",
      projectDesc: "This project consisted of creating and developing a payload for NASA competition that took place in Palestine, TX.",
      projectDate: "Jan 2017 – May 2017",
      projectImage: "highAltitudeSEO.png",
      projectUrl: "https://sites.google.com/site/solareclipseobserver/home",
      projectTechnologies:[
        {
          technologyName: "Python"
        },
        {
          technologyName: "Gnuplot"
        },
        {
          technologyName: "HTML, CSS, JavaScript"
        },
        {
          technologyName: "RaspberryPi, Sensors"
        },
        {
          technologyName: "Raspbian"
        }
      ]
    },
    {
      id: 12,
      projectName: "Twitter Data Collecting, Analyzing and Visualization",
      projectDesc: "This is a web project that is used for Twitter data collecting and visualizing based on hashtags provided.",
      projectDate: "Sep 2016 – Dec 2016",
      projectImage: "capstone-project.png",
      projectUrl: "https://www.metropolitan.ac.rs/en/",
      projectTechnologies:[
        {
          technologyName: "Java"
        },
        {
          technologyName: "Maven"
        },
        {
          technologyName: "MySQL"
        },
        {
          technologyName: "Spring"
        },
        {
          technologyName: "RESTful Web Services"
        },
        {
          technologyName: "AngularJS"
        },
        {
          technologyName: "AWS"
        },
        {
          technologyName: "Git"
        }
      ]
    },

  ];

  // Footer
  readonly COPYRIGHT = "Copyright © 2018 - " + new Date().getFullYear() + " - Created by Srdan Ristic";
}
