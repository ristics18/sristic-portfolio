import { Injectable } from '@angular/core';

@Injectable()
export class AppConstants {

  // Basic Info
  readonly MY_NAME = "Srdan Ristic";
  readonly MY_LOGO = "logo.png";
  readonly MY_IMAGE = "profile.png";
  readonly MY_TITLE = "Full Stack Developer";
  readonly MY_SUMMARY = "Profile info goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.";
  readonly MY_EMAIL = "srdanristic2@gmail.com";
  readonly MY_PHONE = "318-900-1294";
  readonly MY_CITY = "Shreveport, LA";
  readonly MY_SKYPE = "srlepn";
  readonly MY_WEBSITE_URL = "https://www.sristic.com";
  readonly MY_SKILLS_SUMMARY = "I have more than 8 years' experience building rich web applications for clients all over the world. Below is a quick overview of my ma. Want to find out more about my experience?";
  readonly MY_WHATS_NEW = "Here you can use rows and columns here to organize your footer content.asldjasd asdasdasdasdasdas asdha sldaks lkashdlasdkjash";
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
  readonly MY_SUMMARY_AM = "Profile info goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.";

  // Experience
  readonly EXPERIENCE = [
    {
      experienceName: "Full Stack Developer",
      experienceCompany: "PioneerRx Pharmacy Software",
      experienceDate: "18 Jun 2018 - Current",
      experienceDesc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient."
    },
    {
      experienceName: "Graduate Research Assistant",
      experienceCompany: "Louisiana State University Shreveport",
      experienceDate: "31 Jan 2017 - 01 May 2018",
      experienceDesc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient."
    },
    {
      experienceName: "Intern/Junior Software Developer",
      experienceCompany: "Benetech Corporation",
      experienceDate: "01 Oct 2015 - 01 May 2016",
      experienceDesc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient."
    }
  ];

  // Education
  readonly EDUCATION = [
    {
      educationName: "Master of Computer Systems Technology",
      educationUniversity: "Louisiana State University Shreveport",
      educationDate: "01 Jan 2017 - 15 May 2018",
      educationDesc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient"
    },
    {
      educationName: "Bachelor of Information Technology",
      educationUniversity: "University Metropolitan",
      educationDate: "01 Oct 2012 - 01 Dec 2016",
      educationDesc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient"
    },
    {
      educationName: "High School",
      educationUniversity: "Sports High School in Belgrade",
      educationDate: "01 Sep 2008 - 12 Apr 2012",
      educationDesc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient"
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
          skillName: "JS/AngularJS/Angular 7"
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
          skillName: "Git/Subversion"
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
      caaDate: "25 Jan 2019",
      caaDesc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient"
    },
    {
      caaName: "Oracle Certified Associate, Java SE 8 Programmer",
      caaOrganization: "Oracle",
      caaImage: "oracle-cert.png",
      caaDate: "14 Nov 2017",
      caaDesc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient"
    },
    {
      caaName: "University Award for Outstanding Student",
      caaOrganization: "Louisiana State University Shreveport",
      caaImage: "lsus-award.png",
      caaDate: "03 Apr 2018",
      caaDesc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient"
    }
  ];

  // Projects
  readonly PROJECTS = [
    {
      id: 1,
      projectName: "PioneerRx Work",
      projectDesc: "This is my current job",
      projectDate: "Jun 2018 - Current",
      projectImage: "pioneerrx.png",
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
      projectImage: "srdanPortfolio.png",
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
      projectImage: "educationTool.png",
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
      projectImage: "twitterDataCAV.png",
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
