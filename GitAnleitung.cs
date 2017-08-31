
Git Download: https://git-scm.com/download/win

Auf https://github.com/ registrieren.
Oben Rechts -> Create New Repository -> Clone or Download -> URL Link kopieren

Rechtsklick auf Verzeichnis in dem Projekt erstellt werden soll (Auf Desktop z.B.)-> Git Bash oder cmd öffnen

git clone https://github.com/Kexplx/Project1 <!--Erstellt Projekt auf PC mit kopiertem URL Link!-->

Git Bash in erzeugtem Verzeichnis öffnen

git init //mach aktuelle Directory zu Git Repository
git pull <!--Holt sich alle Dateien vom Server, wird am Beginn des Tages gemacht!-->
git status <!--Info über alle Änderungen!-->
git add --all <!--Fügt Datei dem projekt hinzu!-->
git rm 123.txt <!--löscht eine Datei!-->
git commit -m "added index.html" <!--Übernimmt Änderungen in das Projekt, noch kein Upload!-->
git push <!--Lädt Projekt auf den GitHub Server!-->
git mv oldname newname <!--Datei umbenennen!-->
git <!--Befehlsübersicht!-->
git log --all //eigt alle commits an



________________________________________________________________________________________________________
Branches

git branch //info über alle aktiven Branches, * zeigt die an in der man ist
git branch refactoring/formatting //erstellt branch
git checkout refactoring/formatting //wechselt in die branch
git checkout master //wechselt zum master
git merge refactoring/formatting //merged die branch in master stream
git branch -D refactoring/formatting //löscht branche

git push origin refactoring/formatting //uploaded die branche auf den github server, davor nur lokal


