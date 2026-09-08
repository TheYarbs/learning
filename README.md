# Learning Workspace

This workspace is a practical path through HTML, CSS, JavaScript, JSON, browser APIs, and data extraction.

## Start Here

Open [master.html](files/JsonLearning/master.html) for the recommended learning sequence, the seven-day plan, project milestones, and calendar export tools.

## Learning Materials

- [Master curriculum](files/JsonLearning/master.html): course sequence, calendar exports, and links to every track.
- The master page contains the Browser Scraping Academy, JSON Basics, and JavaScript for the Browser lessons in expandable panels.
- [JSON lesson data](files/JsonLearning/learn-json.json): nested objects and arrays for practice.
- [Annotated JSON lesson](files/JsonLearning/learn-json-annotated.js): commented JavaScript version of the JSON example.
- [Project resources](files/JsonLearning/project-resources.html): tools, documentation, websites, APIs, debugging, accessibility, and deployment links.
- [Future SysAdmin/DevOps roadmap](files/JsonLearning/future.html): Linux, networking, cloud operations, Terraform, containers, observability, security, and reliability.
- [Airport dataset](files/datasets/airports.json): data for search, filtering, grouping, and export exercises.

## Recommended Order

1. HTML and CSS structure
2. JavaScript variables, functions, conditions, loops, and events
3. Arrays, objects, JSON, and `fetch`
4. DOM rendering and form handling
5. State management and `localStorage`
6. JSON and CSV import/export
7. Scraping and browser automation
8. Testing, accessibility, and packaging

## Running the Files

These lessons are plain HTML, CSS, JavaScript, JSON, and Python files. Open the HTML files directly in a browser, or serve the workspace with a local static server when practicing `fetch()` and browser APIs.

The course uses small practice exercises so you can build confidence one concept at a time.

## How to Use master.html

1. Start at **Recommended sequence** and read the phases in order.
2. Begin with **JSON Basics** when working on data, arrays, objects, or APIs.
3. Choose a start date in the calendar section.
4. Download the **7-day `.ics`** file for the immediate study plan, or the **full course `.ics`** file for the complete schedule.
5. Open the detailed lessons one panel at a time under **Detailed lessons and references**.
6. Write code in a small exercise file or project folder instead of only reading the examples.
7. Record what worked, what broke, and how you diagnosed it.

## Course Order

### 1. Web Foundations

Start with computer and browser concepts, HTML, CSS, DevTools, project structure, and responsive design.

### 2. JavaScript and JSON

Complete JSON Basics, then practice variables, functions, arrays, objects, DOM selection, events, filtering, and rendering. The files [learn-json.json](files/JsonLearning/learn-json.json) and [learn-json-annotated.js](files/JsonLearning/learn-json-annotated.js) provide practice data and explanation.

### 3. Browser Applications

Continue with DOM rendering, events, localStorage, import/export, accessibility, and error states. Build small practice applications before moving to automation.

### 4. APIs and Scraping

Study `fetch()`, async/await, loading and error states, webhooks, DOM extraction, deduplication, CSV export, and responsible scraping. These lessons are embedded in [master.html](files/JsonLearning/master.html).

### 5. Python, Cloud, and Containers

Use the resource hub inside `master.html` after the web foundation is comfortable. It covers Python, webhooks, sports APIs, cloud administration, Docker, Kubernetes, Terraform, Ansible, and free labs.

## Running the Course

Some examples use `fetch()`. Browsers may block local-file requests when pages are opened with `file://`. Serve the workspace with a local server:

```text
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/files/JsonLearning/master.html
```

Stop the server with `Ctrl+C` in the terminal.

## Calendar Files

The calendar controls in `master.html` generate files in your browser:

- **7-day `.ics`** contains the immediate fundamentals practice plan.
- **Full course `.ics`** contains the longer sequence from web foundations through professional delivery.

The `.ics` format can be imported into Apple Calendar or Google Calendar. The master page also includes Google Calendar links for individual seven-day sessions.

## Practice Method

For every topic, make three versions:

1. A small working example.
2. A deliberately broken example.
3. A challenge solved without copying the answer.

Write down the expected output before running the code, then explain any difference between the expected and actual result.

## Study Method

For every topic:

1. Read the objective.
2. Predict the output.
3. Write the smallest example.
4. Break one part deliberately.
5. Diagnose the problem with DevTools or a focused check.
6. Fix it and explain the cause in plain language.
7. Commit the useful change.
