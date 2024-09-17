// src/app/api/dashboard/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  const response = {
    status: "success",
    message: "Request completed successfully",
    users: [
      {
        id: 123,
        name: "Magendran",
        image: "/assets/media/avatars/profilepic.jpg",
        email: "vmagendran@caci.co.uk",
        phone: "+91 9398451030",
        location: "Hyderabad",
        status: "Active",
        startdate: "04-12-2024",
        current_project: "BMW Backlog",
        sfia_level: "L2",
        reported_to: "Vandana Voruganti",
        role: "Frontend Developer",
        access_role: ["admin", "editor"],
        created_at: "2024-09-13T12:34:56Z",
        skills: [
          "Web Design",
          "Code Review",
          "Figma",
          "Product Development",
          "Webflow",
          "AI",
          "noCode",
          "Management",
        ],
        additional_info: {
          discipline: "Development",
          specialism: ".NET",
          employee_type: "Contract",
          location: "India - Hyderabad",
          cost_centre: "800: DS (India)",
        },
        contributors: [
          {
            name: "Karthik",
            contributors: 6,
            image: "/assets/media/avatars/300-3.png",
          },
          {
            name: "Lakshmikanth",
            contributors: 29,
            image: "/assets/media/avatars/300-1.png",
          },
          {
            name: "Leela Krishnan",
            contributors: 34,
            image: "/assets/media/avatars/300-14.png",
          },
          {
            name: "Chandana",
            contributors: 1,
            image: "/assets/media/avatars/300-7.png",
          },
        ],
        projects: {
          current_project: {
            project_name: "BMW Project",
            start_date: "13 August 2024",
            role: "Senior Engineer",
            description:
              "The first installment of a leadership development series.",
            code: "#leaderdev-1",
            members: [
              {
                name: "Member 1",
                image_url: "assets/media/avatars/300-4.png",
              },
              {
                name: "Member 2",
                image_url: "assets/media/avatars/300-1.png",
              },
              {
                name: "Member 3",
                image_url: "assets/media/avatars/300-2.png",
              },
              {
                name: "Additional Members",
                count: 24,
                placeholder: "+24",
              },
            ],
          },
          previous_projects: [
            {
              project_name: "C&YP Project",
              start_date: "11 January 2022",
              end_date: "12 August 2024",
              role: "E3 Engineer II",
              description:
                "The first installment of a leadership development series.",
              code: "#leaderdev-1",
              members: [
                {
                  name: "Member 1",
                  image_url: "assets/media/avatars/300-4.png",
                },
                {
                  name: "Member 2",
                  image_url: "assets/media/avatars/300-1.png",
                },
                {
                  name: "Member 3",
                  image_url: "assets/media/avatars/300-2.png",
                },
                {
                  name: "Additional Members",
                  count: 24,
                  placeholder: "+24",
                },
              ],
            },
          ],
          employment_history: {
            company: "CACI",
            joined_date: "11 January 2022",
          },
        },
      },
      {
        id: 124,
        name: "Suresh Kumar",
        image: "/assets/media/avatars/300-5.png",
        email: "sureshkumar@caci.co.uk",
        phone: "+91 9456781234",
        location: "Bangalore",
        status: "Active",
        startdate: "01-10-2024",
        current_project: "Audi Backlog",
        sfia_level: "L3",
        reported_to: "Rakesh Naidu",
        role: "Backend Developer",
        access_role: ["editor"],
        created_at: "2024-09-10T12:34:56Z",
        skills: [
          "Java",
          "Microservices",
          "AWS",
          "Spring Boot",
          "Kubernetes",
          "Docker",
        ],
        additional_info: {
          discipline: "Development",
          specialism: "Java",
          employee_type: "Full-time",
          location: "India - Bangalore",
          cost_centre: "801: DS (India)",
        },
        contributors: [
          {
            name: "Amit",
            contributors: 5,
            image: "/assets/media/avatars/300-6.png",
          },
          {
            name: "Raj",
            contributors: 15,
            image: "/assets/media/avatars/300-8.png",
          },
        ],
        projects: {
          current_project: {
            project_name: "Audi Project",
            start_date: "10 August 2024",
            role: "Backend Engineer",
            description: "Backend system design for Audi services.",
            code: "#backenddev-1",
            members: [
              {
                name: "Member 1",
                image_url: "assets/media/avatars/300-5.png",
              },
              {
                name: "Member 2",
                image_url: "assets/media/avatars/300-6.png",
              },
            ],
          },
          previous_projects: [
            {
              project_name: "Tesla Project",
              start_date: "01 February 2022",
              end_date: "10 August 2024",
              role: "Backend Developer",
              description: "Developed microservices for Tesla's supply chain.",
              code: "#backenddev-2",
              members: [
                {
                  name: "Member 1",
                  image_url: "assets/media/avatars/300-5.png",
                },
                {
                  name: "Member 2",
                  image_url: "assets/media/avatars/300-6.png",
                },
              ],
            },
          ],
          employment_history: {
            company: "Tesla",
            joined_date: "01 February 2022",
          },
        },
      },
      {
        id: 125,
        name: "Ananya Singh",
        image: "/assets/media/avatars/300-9.png",
        email: "ananyasingh@caci.co.uk",
        phone: "+91 9391234567",
        location: "Pune",
        status: "Active",
        startdate: "15-09-2024",
        current_project: "Mercedes Project",
        sfia_level: "L1",
        reported_to: "Rahul Mittal",
        role: "Fullstack Developer",
        access_role: ["viewer"],
        created_at: "2024-09-12T11:22:33Z",
        skills: ["React", "Node.js", "MongoDB", "GraphQL", "Express.js"],
        additional_info: {
          discipline: "Development",
          specialism: "Fullstack",
          employee_type: "Full-time",
          location: "India - Pune",
          cost_centre: "802: DS (India)",
        },
        contributors: [
          {
            name: "Priya",
            contributors: 8,
            image: "/assets/media/avatars/300-10.png",
          },
          {
            name: "Deepak",
            contributors: 12,
            image: "/assets/media/avatars/300-11.png",
          },
        ],
        projects: {
          current_project: {
            project_name: "Mercedes Project",
            start_date: "12 September 2024",
            role: "Fullstack Developer",
            description: "Developing a complete web platform for Mercedes.",
            code: "#fullstackdev-1",
            members: [
              {
                name: "Member 1",
                image_url: "assets/media/avatars/300-9.png",
              },
              {
                name: "Member 2",
                image_url: "assets/media/avatars/300-10.png",
              },
            ],
          },
          previous_projects: [
            {
              project_name: "Nissan Project",
              start_date: "01 March 2022",
              end_date: "11 September 2024",
              role: "Fullstack Developer",
              description:
                "Worked on front-end and back-end for Nissan platform.",
              code: "#fullstackdev-2",
              members: [
                {
                  name: "Member 1",
                  image_url: "assets/media/avatars/300-9.png",
                },
                {
                  name: "Member 2",
                  image_url: "assets/media/avatars/300-10.png",
                },
              ],
            },
          ],
          employment_history: {
            company: "Nissan",
            joined_date: "01 March 2022",
          },
        },
      },
      {
        id: 126,
        name: "Rohan Gupta",
        image: "/assets/media/avatars/300-12.png",
        email: "rohan.gupta@caci.co.uk",
        phone: "+91 9987654321",
        location: "Mumbai",
        status: "Active",
        startdate: "05-07-2024",
        current_project: "Lamborghini CRM",
        sfia_level: "L3",
        reported_to: "Neha Sharma",
        role: "UI/UX Designer",
        access_role: ["admin", "designer"],
        created_at: "2024-09-09T09:30:00Z",
        skills: [
          "UI/UX Design",
          "Adobe XD",
          "Sketch",
          "Figma",
          "Wireframing",
          "Prototyping",
          "User Research",
        ],
        additional_info: {
          discipline: "Design",
          specialism: "UI/UX",
          employee_type: "Contract",
          location: "India - Mumbai",
          cost_centre: "803: DS (India)",
        },
        contributors: [
          {
            name: "Sanjay",
            contributors: 8,
            image: "/assets/media/avatars/300-12.png",
          },
          {
            name: "Alok",
            contributors: 12,
            image: "/assets/media/avatars/300-15.png",
          },
        ],
        projects: {
          current_project: {
            project_name: "Lamborghini CRM",
            start_date: "01 July 2024",
            role: "UI/UX Designer",
            description: "Designing the CRM interface for Lamborghini.",
            code: "#uidesign-1",
            members: [
              {
                name: "Member 1",
                image_url: "assets/media/avatars/300-12.png",
              },
              {
                name: "Member 2",
                image_url: "assets/media/avatars/300-15.png",
              },
            ],
          },
          previous_projects: [
            {
              project_name: "Jaguar Design Platform",
              start_date: "01 February 2022",
              end_date: "30 June 2024",
              role: "UI Designer",
              description: "Developed UI components for Jaguar's platform.",
              code: "#uidesign-2",
              members: [
                {
                  name: "Member 1",
                  image_url: "assets/media/avatars/300-12.png",
                },
                {
                  name: "Member 2",
                  image_url: "assets/media/avatars/300-15.png",
                },
              ],
            },
          ],
          employment_history: {
            company: "Jaguar",
            joined_date: "01 February 2022",
          },
        },
      },
      {
        id: 127,
        name: "Priya Nair",
        image: "/assets/media/avatars/300-13.png",
        email: "priya.nair@caci.co.uk",
        phone: "+91 9378561230",
        location: "Chennai",
        status: "Active",
        startdate: "18-08-2024",
        current_project: "Ferrari Marketing Tool",
        sfia_level: "L2",
        reported_to: "Anil Menon",
        role: "Digital Marketing Specialist",
        access_role: ["editor", "viewer"],
        created_at: "2024-09-05T08:45:00Z",
        skills: [
          "SEO",
          "Content Marketing",
          "Google Analytics",
          "PPC",
          "Social Media Strategy",
        ],
        additional_info: {
          discipline: "Marketing",
          specialism: "Digital Marketing",
          employee_type: "Full-time",
          location: "India - Chennai",
          cost_centre: "804: DS (India)",
        },
        contributors: [
          {
            name: "Ajay",
            contributors: 9,
            image: "/assets/media/avatars/300-16.png",
          },
          {
            name: "Simran",
            contributors: 15,
            image: "/assets/media/avatars/300-17.png",
          },
        ],
        projects: {
          current_project: {
            project_name: "Ferrari Marketing Tool",
            start_date: "15 August 2024",
            role: "Marketing Specialist",
            description: "Developing the Ferrari digital marketing strategy.",
            code: "#marketing-1",
            members: [
              {
                name: "Member 1",
                image_url: "assets/media/avatars/300-13.png",
              },
              {
                name: "Member 2",
                image_url: "assets/media/avatars/300-16.png",
              },
            ],
          },
          previous_projects: [
            {
              project_name: "McLaren SEO Project",
              start_date: "01 March 2022",
              end_date: "14 August 2024",
              role: "SEO Specialist",
              description: "Led SEO campaigns for McLaren's global presence.",
              code: "#seo-1",
              members: [
                {
                  name: "Member 1",
                  image_url: "assets/media/avatars/300-13.png",
                },
                {
                  name: "Member 2",
                  image_url: "assets/media/avatars/300-16.png",
                },
              ],
            },
          ],
          employment_history: {
            company: "McLaren",
            joined_date: "01 March 2022",
          },
        },
      },
      {
        id: 128,
        name: "Amit Patel",
        image: "/assets/media/avatars/300-14.png",
        email: "amit.patel@caci.co.uk",
        phone: "+91 9876543210",
        location: "Ahmedabad",
        status: "Active",
        startdate: "12-06-2024",
        current_project: "Rolls Royce Data Analysis",
        sfia_level: "L4",
        reported_to: "Sunil Mehta",
        role: "Data Analyst",
        access_role: ["admin", "analyst"],
        created_at: "2024-09-02T10:00:00Z",
        skills: [
          "Data Analytics",
          "SQL",
          "Python",
          "Tableau",
          "Power BI",
          "Machine Learning",
        ],
        additional_info: {
          discipline: "Analytics",
          specialism: "Data Science",
          employee_type: "Full-time",
          location: "India - Ahmedabad",
          cost_centre: "805: DS (India)",
        },
        contributors: [
          {
            name: "Neeraj",
            contributors: 7,
            image: "/assets/media/avatars/300-18.png",
          },
          {
            name: "Shivani",
            contributors: 10,
            image: "/assets/media/avatars/300-19.png",
          },
        ],
        projects: {
          current_project: {
            project_name: "Rolls Royce Data Analysis",
            start_date: "10 June 2024",
            role: "Data Analyst",
            description: "Analyzing data for Rolls Royce’s engine performance.",
            code: "#data-1",
            members: [
              {
                name: "Member 1",
                image_url: "assets/media/avatars/300-14.png",
              },
              {
                name: "Member 2",
                image_url: "assets/media/avatars/300-18.png",
              },
            ],
          },
          previous_projects: [
            {
              project_name: "Porsche Data Project",
              start_date: "15 April 2022",
              end_date: "09 June 2024",
              role: "Senior Data Scientist",
              description: "Led data analysis for Porsche's sales data.",
              code: "#data-2",
              members: [
                {
                  name: "Member 1",
                  image_url: "assets/media/avatars/300-14.png",
                },
                {
                  name: "Member 2",
                  image_url: "assets/media/avatars/300-18.png",
                },
              ],
            },
          ],
          employment_history: {
            company: "Porsche",
            joined_date: "15 April 2022",
          },
        },
      },
    ],
  };

  return NextResponse.json(response);
}
