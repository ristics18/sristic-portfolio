import { Injectable } from '@angular/core';

@Injectable()
export class AppConstants {

  // Basic Info
  readonly MY_NAME = "Srdan Ristic";
  readonly MY_LOGO = "logo.png";
  readonly MY_IMAGE = "profile.png";
  readonly MY_TITLE = "Full Stack Developer";
  readonly MY_SUMMARY = "Hi! Thank you for taking your time to check out my website! Let me introduce myself. I am a dedicated, focused, organized, hardworking and dependable individual who excels at learning new technologies and techniques, working individually or in a team setting, capable of completing multiple tasks simultaneously with high-quality results. I enjoy being involved in both front-end and back-end within the scope of a full software development cycle. I have built various cross-platform projects and enjoyed working on every single one of them. I am currently working for PioneerRx Pharmacy Software in Shreveport, LA.";
  readonly MY_EMAIL = "srdanristic2@gmail.com";
  readonly MY_PHONE = "318-900-1294";
  readonly MY_CITY = "Shreveport, LA";
  readonly MY_SKYPE = "srlepn";
  readonly MY_WEBSITE_URL = "https://www.sristic.com";
  readonly MY_SKILLS_SUMMARY = "I have 3 years of experience building mobile,web and desktop applications. Below is a quick overview of my skills and certifications, feel free to explore. Want to find out more about my experience?";
  readonly MY_WHATS_NEW = "Besides my full-time job I am also tutoring computer science, participating in open source projects and doing some freelancing.";
  readonly MY_RESUME = "Srdan Ristic Resume.pdf";

  // Links
  readonly MY_GITHUB = "https://github.com/ristics18";
  readonly MY_LINKEDIN = "https://www.linkedin.com/in/srdan-ristic-87577580/";
  readonly MY_STACKOVERFLOW = "https://stackoverflow.com/users/2687059/srdan-ristic";
  readonly MY_SLACK = "https://www.sristic.com";

  // About Me
  readonly MY_IMAGE_AM = "about-me.png";
  readonly MY_TITLE_AM = "It's all about happiness";
  readonly MY_SUBTITLE_AM = "Treat people the way you want to be treated.";
  readonly MY_SUMMARY_AM = "Let me start of with a simple introduction. My name is Srđan Ristic and I come from Serbia, a small country in Southeastern Europe. In United States I go by Surgen. My life is focused on happiness just like I stated above. If I am not happy I make a change. I always think of it as if today was the last day on Earth, the question would be: Am I going to start complaining about the things that I don't like or don't want to do? No, the idea is to live this life at it's fullest and be positive. There are two things that make me the happiest person on earth and those are basketball and development. I am all about sports and socializing, always interested in meeting new people and making connections.";

  // Experience
  readonly EXPERIENCE = [
    {
      experienceName: "Full Stack Developer",
      experienceCompany: "PioneerRx Pharmacy Software",
      experienceDate: "18 Jun 2018 - Current",
      experienceDesc: "This is my current job where I develop and maintain software for pharmacies (patients, prescriptions, prescribers etc.). My involvement is mainly focused on centralized part of the pharmacies and their stores. I am also working on some the the internal web projects."
    },
    {
      experienceName: "Graduate Research Assistant",
      experienceCompany: "Louisiana State University Shreveport",
      experienceDate: "31 Jan 2017 - 01 May 2018",
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
      educationName: "MS in Computer Systems Technology",
      educationUniversity: "Louisiana State University Shreveport",
      educationDate: "01 Jan 2017 - 15 May 2018",
      educationDesc: "Attended LSUS for little bit more than a year in order to complete my Master's. Worked on variety of projects in which my favorite one was the capstone project (Android app)."
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
      educationDesc: "Attended Sports High School in Belgrade where the main focus besides school was basketball. Spent my junior year in Raymond, IL."
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
          skillName: "JS/AngularJS/Angular"
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
      projectName: "PioneerRx Work",
      projectDesc: "This is my current job",
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
          technologyName: "SQL Server"
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
      projectDesc: "This is one of my favorite projects",
      projectDate: "Nov 2018 - Jan 2019",
      projectImage: "portfolio.png",
      projectUrl: "https://www.sristic.com",
      projectTechnologies:[
        {
          technologyName: "Angular 7"
        },
        {
          technologyName: "JavaScript"
        },
        {
          technologyName: "AWS"
        },
        {
          technologyName: "CloudFront"
        },
        {
          technologyName: "S3"
        },
        {
          technologyName: "Route53"
        },
        {
          technologyName: "Git"
        }
      ]
    },
    {
      id: 3,
      projectName: "Advisor's Tool",
      projectDesc: "This is one of my favorite projects",
      projectDate: "Aug 2017 - May 2018",
      projectImage: "advisorsTool.png",
      projectUrl: "https://www.lsus.edu",
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
      projectDesc: "This is one of my favorite projects",
      projectDate: "Aug 2017 – May 2018",
      projectImage: "education-tool.png",
      projectUrl: "https://www.lsuhsc.edu",
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
      projectName: "Laboratory for Advanced Biomedical Informatics - Data mining, data analysis and data visualization",
      projectDesc: "This is one of my favorite projects",
      projectDate: "Feb 2017 – May 2018",
      projectImage: "labi.png",
      projectUrl: "https://www.labi.lsus.edu",
      projectTechnologies:[
        {
          technologyName: "R"
        },
        {
          technologyName: "Java"
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
      projectDesc: "This is one of my favorite projects",
      projectDate: "Aug 2017 – May 2018",
      projectImage: "orbit.png",
      projectUrl: "https://play.google.com/store/apps/details?id=net.orbit.orbit",
      projectTechnologies:[
        {
          technologyName: "Android/Java"
        },
        {
          technologyName: "Spring Boot"
        },
        {
          technologyName: "RESTful Web Services"
        },
        {
          technologyName: "Jenkings"
        },
        {
          technologyName: "AWS EC2"
        },
        {
          technologyName: "Git"
        }
      ]
    },
    {
      id: 7,
      projectName: "High Altitude Solar Eclipse Observer",
      projectDesc: "This is one of my favorite projects",
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
          technologyName: "Raspbian"
        }
      ]
    },
    {
      id: 8,
      projectName: "Twitter Data Collecting, Analyzing and Visualization",
      projectDesc: "This is one of my favorite projects",
      projectDate: "Sep 2016 – Dec 2016",
      projectImage: "capstone-project.png",
      projectUrl: "https://someawslink.com",
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
          technologyName: "HTML, CSS, JavaScript"
        }
      ]
    }
  ];

  // Footer
  readonly COPYRIGHT = "Copyright © " + new Date().getFullYear() + " - Created by Srdan Ristic";
}
