# Vanliga Git-kommandon

## `git status`

Visar status för arbetskatalogen och staging area. Hjälper dig se vilka
filer som är ändrade, tillagda eller inte spåras.

```bash
git status
```

## `git log`

Visar en lista över commits i det aktuella projektet.

```bash
git log
```

Med flaggor som `--oneline` eller `--graph` kan loggen göras mer
överskådlig:

```bash
git log --oneline --graph --decorate
```

## `git fetch`

Hämtar ner de senaste ändringarna från fjärrrepo men uppdaterar inte din
lokala branch.

```bash
git fetch
```

## `git add`

Lägger till filer i staging area inför commit.

- Lägg till **alla filer**:

  ```bash
  git add .
  ```

- Lägg till en **specifik fil**:

  ```bash
  git add <filnamn>
  ```

## `git commit`

Skapar en commit med de filer som ligger i staging area.

- Ny commit med meddelande:

  ```bash
  git commit -m "commitmeddelande"
  ```

- Ändra senaste commit (t.ex. rätta meddelande eller inkludera fler filer):

  ```bash
  git commit --amend
  ```

- Ändra senaste commit utan att uppdatera commitmeddelandet:

  ```bash
  git commit --amend --no-edit
  ```

  > ⚠️ OBS: Om du gör en --amend på en commit som redan finns på remote
  > (t.ex. GitHub), så ändras commit-historiken. För att pusha ändringen
  > måste du använda force push:

    ```bash
    git push --force
    ```

## `git checkout`

Används för att byta branch eller återställa filer.

```bash
git checkout main
git checkout filnamn.txt
```

### Skapa och byta till en ny branch

```bash
git checkout -b <new-branch-name>
```

## `git pull`

Hämtar ner och integrerar (mergar) ändringar från fjärrrepo till den
aktuella branchen.

```bash
git pull
```

## `git push`

Laddar upp dina commits från din lokala branch till fjärrrepo.

```bash
git push 
```

## `git merge`

Används för att slå ihop två brancher.

- **Mergar in en feature i main**:

  ```bash
  git checkout main
  git merge feature-branch
  ```

  > Detta _(ovan)_ **skall** dock skötas exklusivt via Pull Requests på Github!

- **Uppdatera din feature med ändringar från main (för att lösa
  konflikter tidigt)**:

  ```bash
  git checkout feature-branch
  git merge main
  ```

  > Detta får ni göra hur mycket ni vill och rekommenderas, för att undvika kommande konflikter.

## `git reset`

Flyttar `HEAD` och kan ändra staging/arbetskatalog beroende på flagga.

- **--soft**: behåller ändringar i staging area.
- **--mixed** _(default)_: tar bort ändringar från staging men
  behåller dem i arbetskatalogen.
- **--hard**: tar bort ändringar helt.

Exempel – backa en commit men behåll ändringar:

```bash
git reset --soft HEAD~1
```

### Vad betyder `HEAD~1`?

`HEAD` pekar på din senaste commit.
`HEAD~1` betyder "en commit tillbaka".
`HEAD~2` betyder två commits tillbaka, osv.

## `git revert`

Skapar en ny commit som tar bort effekten av en tidigare commit,
istället för att skriva om historien.

```bash
git revert <commit-id>
```
