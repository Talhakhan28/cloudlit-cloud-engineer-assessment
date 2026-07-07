# CloudLit Cloud Engineer Assessment

This repository contains my submission for the CloudLit Cloud Engineer Intern technical assessment.

The assessment demonstrates the use of Git, Next.js, Docker, Docker Compose, and Jenkins by completing the required tasks and running everything successfully in a local cloud environment.

---

## Candidate Information

**Name:** Muhammad Talha Khan

---

## Technologies Used

- Next.js
- Docker
- Docker Compose
- Jenkins
- Git
- GitHub
- Amazon EC2 (Ubuntu)

---

## Project Structure

```
cloudlit-cloud-engineer-assessment/
│
├── nextjs-app/
│   ├── app/
│   ├── public/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── package.json
│   └── ...
│
├── Screenshots/
│   ├── nextjs-running.png
│   └── jenkins-unlock.png
│
└── README.md
```

---

## Task 1 – Version Control Setup

- Created a public GitHub repository.
- Used Git for version control.
- Committed and pushed all project files to GitHub.

---

## Task 2 – Next.js Application with Docker

A simple Next.js application was created and customized for the assessment. The application was containerized using Docker and successfully executed inside a Docker container.

### Build Docker Image

```bash
docker build -t nextjs-assessment .
```

### Run Docker Container

```bash
docker run -d -p 3000:3000 --name nextjs-app nextjs-assessment
```

The application can then be accessed from:

```
http://localhost:3000
```

or

```
http://<EC2-Public-IP>:3000
```

---

## Task 3 – Jenkins using Docker Compose

Jenkins was deployed using the official Jenkins Docker image with Docker Compose.

### Start Jenkins

```bash
docker compose up -d
```

After the container starts, Jenkins can be accessed at:

```
http://localhost:8080
```

or

```
http://<EC2-Public-IP>:8080
```

The Jenkins Unlock page confirms that the container is running successfully.

---

## Screenshots

### Next.js Application
<img width="1892" height="980" alt="image" src="https://github.com/user-attachments/assets/770b0955-95e9-4170-83ee-f6a9468b1e82" />



---

### Jenkins Running

<img width="1920" height="982" alt="image" src="https://github.com/user-attachments/assets/a50f87d7-beb3-44d6-a899-599d7302ce14" />


---

## Repository

GitHub Repository:

https://github.com/Talhakhan28/cloudlit-cloud-engineer-assessment

---

## Notes

- Docker image was successfully built and executed.
- Jenkins was deployed using Docker Compose.
- Both applications were verified through a web browser.
- All source code, configuration files, and screenshots are included in this repository.
