# DevOps Project : House Location Web Application
## Getting Started

### Run the Application Locally

#### Clone the project
```


Open two terminal windows:
git clone <your-repo-url>
cd <project-folder>
```
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

 
after that make your changes in your branch and commit and do a pull request as it's instructed in the next section specified to collaborators 

Recommended Git Workflow (PR-Based)

first clone the project 

Always Start with an Updated main Branch

git checkout main
git pull origin main

Create a New feature/ahmed or feature/hatem Branch

git checkout -b feature/your-feature-name

Make Changes & Commit
git add .
git commit -m "Description of changes"  # Be specific!
git push origin feature/your-feature-name
Create a Pull Request (PR) on GitHub

Go to your repo → "Pull Requests" → "New PR".

Set base: main ← compare: feature/your-feature-name.
Add a title/description and tag reviewers (you).


Review & Approve
Teammates review code, suggest changes (via comments).

Merge to main
After approval, click "Merge PR" (use Squash and Merge for clean history).
Delete the Old Branch (optional but recommended)
git branch -d feature/your-feature-name  # Local
git push origin --delete feature/your-feature-name  # Remote

🔹 Critical Recommendations for Teams
✅ Do These:
Pull main before any new work and before creating branches  to avoid conflicts.
Write clear commit messages (e.g., "Fix: Correct login API error handling").

❌ Avoid These:
Pushing directly to main (use PRs!).




