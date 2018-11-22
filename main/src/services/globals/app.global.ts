import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {
  readonly projects = [
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
  ]
}
