## create a new Repo on github

step:1 intial local repo (default branch:main) :
-git init

step:2 Add project's files to index of local repo :
-git add .(it's add all files to the repo)
-git add (path of the file)

step:3 Commit files to local repo :
-git commit -m "message"

- This command commits any files you’ve added with the git add command and also commits any files you’ve changed since then.
  -git commit -a

step:4 link local repo with remote repo :
-git remote add origin <remote_repo_URl>

step:5 push file from local repo to remote repo :
-git push -u origin <branch_name>
-git push <remote_repo_URI>

------------------------- Another Git Commnads -----------------------------------------------------

git config:

Setting user name and email for every repository on your computer, try following command

user email
-git config user.email "your user email"

username    
-git config user.name "your user name"

verifying usrname in git
-git config user.name

---

delete branch locally
-git branch -d localBranchName

delete remotely branch
-git push origin --delete remoteBrnachName

---

This command creates a new branch.
-git branch [branch name]

This command is used to switc h from one branch to another.
-git checkout[branch name]

This command creates a new branch and also switches to it.
-git checkout -b developer

-git push origin develop

This command lists all the local branches in the current repository.
-git brnach

---

It provides several formatting options for displaying committed snapshots.
This command is used to list the version history for the current branch.
-git log

This command is used to obtain a repository from an existing URL.
-git clone [url]

This command lists all the files that have to be committed.
-git status

This command deletes the file from your working directory and stages the deletion.
-git rm [file]

---

This command merges the specified branch’s history into the current branch.
-git merge

This command sends the committed changes of master branch to your remote repository.
-git push origin main

This command pushes all branches to your remote repository.
-git push -all origin


