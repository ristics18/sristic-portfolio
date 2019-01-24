import { Injectable } from '@angular/core';

@Injectable()
export class AppConstants {

  // Basic Info
  readonly MY_NAME = "Srdan Ristic";
  readonly MY_LOGO = "initials-logo.png";
  readonly MY_IMAGE = "profile.png";
  readonly MY_TITLE = "Full Stack Developer";
  readonly MY_SUMMARY = "Hi! Thank you for taking your time to check out my website! Let me introduce myself. I am a hardworking and dependable individual who excels at learning new technologies and techniques, working individually or in a team setting, capable of completing multiple tasks simultaneously with high-quality results. I enjoy being involved in both front-end and back-end within the scope of a full software development cycle. I have built various cross-platform projects and enjoyed working on every single one of them. I am currently working for PioneerRx Pharmacy Software in Shreveport, LA.";
  readonly MY_EMAIL = "srdanristic2@gmail.com";
  readonly MY_PHONE = "318-900-1294";
  readonly MY_CITY = "Shreveport, LA";
  readonly MY_SKYPE = "srlepn";
  readonly MY_WEBSITE_URL = "www.srdanristic.com";
  readonly MY_SKILLS_SUMMARY = "I have 3 years of experience building web, mobile and desktop applications. Below is a quick overview of my skills and certifications. Want to find out more about my experience?";
  readonly MY_WHATS_NEW = "Besides my full-time job I am also tutoring computer science, participating in open source projects and doing some freelancing.";
  readonly MY_RESUME = "Srdan Ristic Resume.pdf";

  // Links
  readonly MY_GITHUB = "https://github.com/ristics18";
  readonly MY_LINKEDIN = "https://www.linkedin.com/in/srdan-ristic-87577580/";
  readonly MY_STACKOVERFLOW = "https://stackoverflow.com/users/2687059/srdan-ristic";
  readonly MY_SLACK = "https://www.facebook.com/srdjan.ristic.surge";

  // About Me
  readonly MY_IMAGE_AM = "about-me.png";
  readonly MY_TITLE_AM = "My life is driven by a word politeness";
  readonly MY_SUBTITLE_AM = "It is all about small things that make a big difference";
  readonly MY_SUMMARY_AM = "Let me start of with a simple introduction. My name is Srđan Ristic and I am from Serbia, a small country in Southeastern Europe. In United States I go by Surgen. My life is focused on happiness just like I stated above. If I am not happy I make a change. I always think of it as if today was the last day on Earth, the question would be: Am I going to start complaining about the things that I don't like or don't want to do? No, the idea is to live this life at it's fullest and be positive. There are two things that make me the happiest person on earth and those are basketball and development. I am all about sports and socializing, always interested in meeting new people and making connections.";

  // Experience
  readonly EXPERIENCE = [
    {
      experienceName: "Full Stack Developer",
      experienceCompany: "PioneerRx Pharmacy Software",
      experienceDate: "18 Jun 2018 - Current",
      experienceDesc: "This is my current job where I develop and maintain software for pharmacies (patients, prescriptions, prescribers etc.). My involvement is mainly focused on centralized part of the pharmacies and their stores. I am also working on some of the internal web projects."
    },
    {
      experienceName: "Graduate Research Assistant",
      experienceCompany: "Louisiana State University Shreveport",
      experienceDate: "01 Feb 2017 - 01 May 2018",
      experienceDesc: "Worked on a variety of biomedical informatics projects. With the use of powerful computers, I learned and worked on managing and analyzing biological, chemical, and medical processes in the interest of improving medicine and patient care."
    },
    {
      experienceName: "Intern/Junior Software Developer",
      experienceCompany: "Benetech Corporation",
      experienceDate: "01 Oct 2015 - 01 May 2016",
      experienceDesc: "Besides learning and acquiring new skills using various programming technologies, I worked on development and maintenance of the systems for content management, using technologies such as Java, Spring, REST, SQL, Alfresco, CMIS and AngularJS. I communicated with clients on a daily bases."
    }
  ];

  // Education
  readonly EDUCATION = [
    {
      educationName: "MS in Computer System Technology",
      educationUniversity: "Louisiana State University Shreveport",
      educationDate: "01 Jan 2017 - 15 May 2018",
      educationDesc: "Attended LSUS for a year and a half in order to complete my Master's. Worked on variety of projects in which my favorite one was a capstone project (Android app)."
    },

    {
      educationName: "BS in Information Technology",
      educationUniversity: "University Metropolitan",
      educationDate: "01 Oct 2012 - 01 Dec 2016",
      educationDesc: "Pursued my Bachelor's degree in Belgrade, Serbia. That was my starting point when it comes to software development. Mainly focused on Java projects."
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
          skillName: "HTML/CSS/SASS"
        },
        {
          skillName: "Bootstrap 3/4"
        },
        {
          skillName: "JavaScript/Angular"
        },
        {
          skillName: "NodeJS"
        },
        {
          skillName: "jQuery"
        }
      ]
    },
    {
      skillTitle: "Backend",
      skillImage: "back-end.svg",
      skills: [
        {
          skillName: "Java/C#"
        },
        {
          skillName: "Spring/.NET"
        },
        {
          skillName: "MySQL/SQL Server"
        },
        {
          skillName: "PHP"
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
          skillName: "Git/TFS/Subversion"
        },
        {
          skillName: "Maven/Gradle"
        },
        {
          skillName: "AWS"
        },
        {
          skillName: "JIRA/Scrum"
        },
        {
          skillName: "Data Mining"
        }
      ]
    }
  ];

  // Certifications and Awards
  readonly CERTS_AND_AWARDS = [
    {
      caaName: "MCSA SQL 2016 Database Development",
      caaOrganization: "Microsoft",
      caaImage: "microsoft-cert.png",
      caaDate: "In Progress",
      caaLink: "#",
      caaDesc: "I am currently pursuing this certification, which is consisted of two exams 70-701 and 70-702. I have already passed the 701 and am currently studying for 702."
    },
    {
      caaName: "Oracle Certified Associate, Java SE 8 Programmer",
      caaOrganization: "Oracle",
      caaImage: "oracle-cert.png",
      caaDate: "14 Nov 2017",
      caaLink: "https://www.youracclaim.com/badges/b0610484-16e7-43c4-af31-851ebfc2c002/linked_in_profile",
      caaDesc: "I am a big fan of Java, one of the reasons why I pursued and successfully completed this certification. My future goal is to take Oracle Certified Professional exam."
    },
    {
      caaName: "University Award for Outstanding Student",
      caaOrganization: "Louisiana State University Shreveport",
      caaImage: "lsus-award.png",
      caaDate: "03 Apr 2018",
      caaLink: "https://www.lsus.edu/news-and-events/lsus-honors-its-best-of-the-best-at-academic-awards-convocation-2018",
      caaDesc: "I was chosen as an outstanding student at the end of my Master's at LSUS. This was a nice surprise for me that showed me that hard work pays off."
    }
  ];

  // Projects
  readonly PROJECTS = [
    {
      id: 1,
      projectName: "PioneerRx Pharmacy Software",
      projectDesc: "This is where I currently work, at my job I develop and maintain software for pharmacies (patients, prescriptions, prescribers etc.).",
      projectDate: "Jun 2018 - Present",
      projectImage: "work.png",
      projectUrl: "https://www.pioneerrx.com",
      projectTechnologies:[
        {
          technologyName: "C#"
        },
        {
          technologyName: ".NET"
        },
        {
          technologyName: "SQL Server, MariaDB"
        },
        {
          technologyName: "HTML, CSS, JavaScript"
        },
        {
          technologyName: "TFS/Git"
        }
      ]
    },
    {
      id: 2,
      projectName: "Srdan Ristic Portfolio",
      projectDesc: "This is my personalised website. Here you can get to know me and find out more about my career.",
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
      id: 3,
      projectName: "Advisor's Tool",
      projectDesc: "This is a system developed at LSUS, the idea of the system is to help generate curriculum worksheets based on your unofficial transcript.",
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
      projectName: "High Altitude Solar Eclipse Observer",
      projectDesc: "This project was consisted of creating and developing a payload for NASA competition that took place in Palestine, TX.",
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
      id: 8,
      projectName: "Twitter Data Collecting, Analyzing and Visualization",
      projectDesc: "This is a web project that is used for Twitter data collecting and visualizing based on hashtags provided.",
      projectDate: "Sep 2016 – Dec 2016",
      projectImage: "capstone-project.png",
      projectUrl: "#",
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
    }
  ];

  // Footer
  readonly COPYRIGHT = "Copyright © " + new Date().getFullYear() + " - Created by Srdan Ristic";
}
