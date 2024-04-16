# Git quiz

1. Can one add directories to git? (yes/no)
Answer: no (can be worked around by special .gitkeep files)

2. Does three-way merge ensure linear history? (yes/no)
Answer: no

3. Which operation for undoing changes is safe (one does not lose the changes)?
A: git restore <file>
B: git clean
C: git reset HEAD~1

Answer: C

4. When one uses git checkout -b, does the new branch automatically branch from main? (yes/no)
Answer: no

5. Can diff display staged deleted files? (yes/no)
Answer: yes (via git diff --cached -- <file>)
