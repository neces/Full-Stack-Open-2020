# Part 0 Exercises
## 0.4 New note (Traditional website)

Sequence diagram of what requests happen on the website https://studies.cs.helsinki.fi/exampleapp/notes when you add a note.

```
title Traditional Web Application

note over Browser: When user clicks submit
Browser->Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
note over Server: Note added to the list
Server->Browser: new_note

Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
Server->Browser: notes
Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
Server->Browser: main.css
Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
Server->Browser: main.js

note over Browser:
browser starts executing js-code
that requests JSON data from server 
end note

Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server-->Browser: [{ content: "Hello", date: "2020-08-29" }, ...]

note over Browser:
browser executes the event handler
that renders notes to display
end note
```

![0.4 Traditional Web Application (New note)](https://raw.githubusercontent.com/neces/Full-Stack-Open-2020/master/Part%200/0.4%20Traditional%20Web%20Application%20(New%20note).png)

## 0.5 Single page website

Sequence diagram of what requests happen when you load the page https://studies.cs.helsinki.fi/exampleapp/spa.

```
title Single Page Application

Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
Server->Browser: spa
Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
Server->Browser: main.css
Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
Server->Browser: spa.js

note over Browser:
browser starts executing js-code
that requests JSON data from server 
end note

Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server-->Browser: [{ content: "Hello", date: "2020-08-29" }, ...]

note over Browser:
browser executes the event handler
that renders notes to display
end note
```

![0.5 Single Page Application](https://raw.githubusercontent.com/neces/Full-Stack-Open-2020/master/Part%200/0.5%20Single%20Page%20Application.png)

## 0.6 New note (Single page website)

Sequence diagram of what requests happen on the website https://studies.cs.helsinki.fi/exampleapp/spa when you add a note.

```
title Single Page Application (New note)

Browser->Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
Server->Browser: new_note_spa

note over Browser:
browser starts executing spa.js-code
that adds new note and displays it
end note
```

![0.6 Single Page Application (New note)](https://raw.githubusercontent.com/neces/Full-Stack-Open-2020/master/Part%200/0.6%20Single%20Page%20Application%20(New%20note).png)
