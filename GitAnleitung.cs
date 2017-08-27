
Git Download: https://git-scm.com/download/win

Auf https://github.com/ registrieren.
Oben Rechts -> Create New Repository -> Clone or Download -> URL Link kopieren

Rechtsklick auf Verzeichnis in dem Projekt erstellt werden soll (Auf Desktop z.B.)-> Git Bash oder cmd öffnen

git clone https://github.com/Kexplx/Project1 <!--Erstellt Projekt auf PC mit kopiertem URL Link!-->

Git Bash in erzeugtem Verzeichnis öffnen

git pull <!--Holt sich alle Dateien vom Server, wird am Beginn des Tages gemacht!-->
git status <!--Info über alle Änderungen!-->
git add --all <!--Fügt Datei dem projekt hinzu!-->
git rm 123.txt <!--löscht eine Datei!-->
git commit -m "added index.html" <!--Übernimmt Änderungen in das Projekt, noch kein Upload!-->
git push <!--Lädt Projekt auf den GitHub Server!-->
git mv oldname newname <!--Datei umbenennen!-->
git <!--Befehlsübersicht!-->


______________________________________
Branches

git branch Programm-UIChanges //erstellt branch
git checkout Programm-UIChanges //wechselt in die branch
git checkout master //wechselt zum master
git merge Programm-UIChanges //merged die branch in master stream
git branch -D Programm-UIChanges //löscht branche

git push origin Programm-UIChanges //uploaded die branche auf den github server, davor nur lokal


