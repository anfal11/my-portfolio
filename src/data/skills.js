import { FiActivity } from "react-icons/fi";

const icon = (slug) => `https://img.icons8.com/color/96/000000/${slug}`;

export const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    description: "Provisioning and operating scalable cloud platforms.",
    skills: [
      { name: "AWS", icon: icon("amazon-web-services") },
      { name: "Azure", icon: icon("azure-1") },
      { name: "Linux", icon: icon("linux") },
      { name: "Ansible", icon: icon("ansible") },
      { name: "Terraform", icon: icon("terraform") },
    ],
  },
  {
    title: "Containers & CI/CD",
    description: "Automating build, test and deployment workflows.",
    skills: [
      { name: "Docker", icon: icon("docker") },
      { name: "Kubernetes", icon: icon("kubernetes") },
      { name: "Jenkins", icon: icon("jenkins") },
      { name: "Git", icon: icon("git") },
      { name: "GitHub", icon: icon("github") },
      { name: "GitLab", icon: icon("gitlab") },
    ],
  },
  {
    title: "Monitoring & Databases",
    description: "Keeping systems observable, healthy and performant.",
    skills: [
      { name: "Grafana", icon: icon("grafana") },
      { name: "Prometheus", icon: icon("prometheus-app") },
      { name: "Zabbix", Icon: FiActivity, color: "#D40000" },
      { name: "MySQL", icon: icon("mysql") },
      { name: "MongoDB", icon: icon("mongodb--v1.png") },
      { name: "Firebase", icon: icon("firebase") },
    ],
  },
  {
    title: "Web Development",
    description: "Building responsive, modern web applications.",
    skills: [
      { name: "HTML", icon: icon("html-5--v1.png") },
      { name: "CSS", icon: icon("css3.png") },
      { name: "Tailwind", icon: icon("tailwindcss--v1.png") },
      { name: "Bootstrap", icon: icon("bootstrap--v1.png") },
      { name: "JavaScript", icon: icon("javascript--v1.png") },
      { name: "React", icon: icon("react-native.png") },
      { name: "Node.js", icon: icon("nodejs--v1.png") },
      { name: "Express", icon: icon("express-js--v1.png") },
    ],
  },
];
