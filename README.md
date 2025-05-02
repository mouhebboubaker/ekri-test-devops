# DevOps Project : House Location Web Application
## Getting Started

### Run the Application Locally

#### Clone the project
```
git clone  https://github.com/mouhebboubaker/ekri-test-devops.git
cd ekri-test-devops
```
Open two terminal windows:
#### 1. Frontend
``` 
cd frontend
npm install
npm start
```
#### 2. Backend
```
cd backend
npm install
node server.js
```

## 🚀 Starting the Project with Docker Compose and Terraform

This project can be started and managed using **Docker Compose** for container orchestration and **Terraform** for infrastructure as code.

---

### 🐳 Using Docker Compose

To build and run both the frontend and backend containers locally:

```bash
docker-compose up
```
### using terraform
```bash
cd terraform
terrafrom init
terrafrom apply
```

# to collaborators

##  Recommended Git Workflow (PR-Based)

1. **Clone the project**

2. **Always update `main`**
```bash
git checkout main
git pull origin main
```

* Create a new feature branch

git checkout -b feature/your-feature-name
* Make changes  commit and push
```bash
git add .
git commit -m "Clear description of your changes"
git push origin feature/your-feature-name
``` 
* Create a Pull Request (PR) from your remote branch to the main branch that will be approved by the admin
  
 ## 🔧 Replace the Last Commit (if it didn’t work)

If you want to modify or replace the last commit:

```bash
git reset --soft HEAD~1  # Go back one commit (remove last commit but keep changes)
git add .
git commit -m "Corrected commit message or fixed bug"
git push --force
```

## 🔄 Pull a Remote Branch

To fetch and checkout a new remote branch:

```bash
git fetch --all  # Fetch all remote branches
git checkout -b mouheb origin/mouheb  # Create and switch to a local branch from remote
```bash



