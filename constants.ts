export const DATA = {
  profile: {
    name: "Affan CP",
    title: "Cybersecurity Analyst",
    email: "cpaffan@gmail.com",
    phone: "7994204671",
    location: "Calicut, Kerala, India",
    summary: "Entry-level cybersecurity analyst with hands-on experience in security monitoring, incident analysis, and network defense. Committed to strengthening security posture through continuous monitoring and proactive risk mitigation.",
    socials: {
      linkedin: "https://www.linkedin.com/in/affan-cp-15b03221b",
      github: "https://github.com/affan1002",
      tryhackme: "https://tryhackme.com/p/Affan"
    }
  },
  skills: [
    { category: "Security Operations", items: ["SIEM", "Splunk", "Wazuh", "Microsoft Sentinel", "Alert Triage", "Incident Response", "Log Analysis"] },
    { category: "Cybersecurity Tools", items: ["IDS/IPS", "EDR", "Defender ATP", "Wireshark", "VirusTotal", "Nessus", "OpenVAS"] },
    { category: "Networking & Security", items: ["TCP/IP", "OSI Model", "DNS", "DHCP", "VPN", "HTTPS", "Access Control", "Encryption", "PKI"] },
    { category: "Systems & Administration", items: ["Windows Admin", "Linux Admin", "Active Directory", "Group Policy"] },
    { category: "Cloud & Infrastructure", items: ["AWS Security", "IAM", "CloudTrail", "CloudWatch", "Azure Security", "Docker"] },
    { category: "Scripting & Automation", items: ["Python", "Bash", "PowerShell", "Regex"] },
    { category: "Frameworks", items: ["NIST CSF", "ISO 27001", "MITRE ATT&CK"] },
    { category: "Soft Skills", items: ["Documentation", "RCA", "Communication", "Problem Solving", "Collaboration"] }
  ],
  experience: [
    { 
      role: "Cybersecurity Self-learning", 
      company: "TryHackMe", 
      period: "2022 - Present", 
      description: [
        "Completed labs on incident response, SIEM operations, Linux privilege escalation, and threat hunting.",
        "Gained exposure to SIEM alert triage, malware analysis, and log correlation techniques.",
        "Conducted vulnerability assessments using Nessus/OpenVAS and remediated findings.",
      ] 
    },
    { 
      role: "Proprietor", 
      company: "Green Drive", 
      period: "2020 - 2022", 
      description: [
        "Founded and managed one of the region's first authorized Ejoy electric bike dealerships.",
        "Managed all business operations including sales, customer service, and vendor coordination.",
        "Performed financial risk assessments for all future business projects."
      ] 
    }
  ],
  projects: [
    { 
      title: "Device Monitor System",
      description: "An open-source, cross-platform system to track employee device usage, power states, and system statistics.",
      tools: ["Python", "JavaScript", "HTML", "Batch", "Shell"],
      link: "https://github.com/affan1002/device-monitor"
    },
    {
      title: "QR carScanner",
      description: "A privacy-focused QR code system to contact car owners without exposing their phone number.",
      tools: ["HTML", "JavaScript"],
      link: "https://github.com/affan1002/car-contact-qr"
    },
     {
      title: "Dockerized Web App on AWS",
      description: "Deployed a Dockerized Web App on AWS ECS using Fargate, including pushing the image to Amazon ECR.",
      tools: ["Docker", "AWS ECS", "Amazon ECR", "Fargate"],
      link: "https://github.com/affan1002"
    },
    {
      title: "Automated Deployment Pipeline",
      description: "Set up an AWS CodePipeline to automatically deploy GitHub changes to an EC2 instance using CodeDeploy.",
      tools: ["AWS CodePipeline", "CodeDeploy", "EC2", "GitHub"],
      link: "https://github.com/affan1002"
    }
  ],
  education: {
    institution: "Lovely Professional University",
    degree: "Bachelor of Computer Application (Honours) in Cybersecurity",
    period: "Sept 2022 - May 2025",
    gpa: "6.43 / 10.0"
  }
};