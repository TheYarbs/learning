// ============================================
// JSON LEARNING NOTES — annotated version
// ============================================
// IMPORTANT: This is a .js file, not .json.
// Real JSON files CANNOT contain comments — this
// is just a JavaScript object literal so I can
// annotate it for you. If you need pure JSON
// (e.g. to paste into a validator or an AJAX
// mock response), use the separate learn-json.json
// file without any of these notes.

const data = {

  // STRING — text, always in double quotes in real JSON
  // NUMBER — no quotes around numbers
  // BOOLEAN — true / false, lowercase, no quotes
  // NULL — represents "no value" (different from 0 or "")
  "student": {
    "name": "Yarbs",                  // string
    "school": "George Mason University",
    "isVeteran": true,                // boolean
    "gpa": 3.7,                       // number (decimal)
    "graduationYear": null,           // null = unknown/not set
    "coursesEnrolled": [              // ARRAY — ordered list, square brackets
      "JSON & AJAX",
      "Data Structures",
      "Java Fundamentals"
    ]
  },

  "company": {
    "name": "Acme Web Co",
    "founded": 2010,                  // number (integer)
    "isPublic": false,                // boolean

    // ARRAY OF OBJECTS — this is the pattern you'll see
    // constantly in real AJAX/API responses: a list where
    // each item is its own object with the same shape.
    "employees": [
      {
        "id": 1,
        "firstName": "Maria",
        "lastName": "Lopez",
        "role": "Frontend Developer",
        "skills": ["JavaScript", "HTML", "CSS"],
        "contact": {                  // OBJECT nested inside an object
          "email": "maria@example.com",
          "phone": "555-0192"
        },
        "active": true
      },
      {
        "id": 2,
        "firstName": "James",
        "lastName": "Chen",
        "role": "Backend Developer",
        "skills": ["Java", "Python", "SQL"],
        "contact": {
          "email": "james@example.com",
          "phone": null               // null used here instead of leaving it out —
                                       // good practice: shows the field exists but is empty
        },
        "active": true
      },
      {
        "id": 3,
        "firstName": "Priya",
        "lastName": "Nair",
        "role": "Project Manager",
        "skills": ["Scrum", "JIRA"],
        "contact": {
          "email": "priya@example.com",
          "phone": "555-0147"
        },
        "active": false              // useful for practicing filtering, e.g.
                                      // "find all employees where active === true"
      }
    ]
  },

  // Simple array of objects with no extra nesting —
  // good for practicing basic loops (for...of, .forEach, .map)
  "products": [
    {
      "sku": "A100",
      "name": "Wireless Mouse",
      "price": 19.99,
      "inStock": true,
      "tags": ["electronics", "accessories"]
    },
    {
      "sku": "B200",
      "name": "Mechanical Keyboard",
      "price": 89.5,
      "inStock": false,
      "tags": ["electronics", "keyboards", "gaming"]
    },
    {
      "sku": "C300",
      "name": "USB-C Hub",
      "price": 34.0,
      "inStock": true,
      "tags": ["electronics", "accessories"]
    }
  ],

  "settings": {
    "theme": "dark",
    "notificationsEnabled": true,
    "volume": 75,
    "recentSearches": [],             // empty array is still valid — means "no items yet"
    "metadata": {
      "lastLogin": "2026-09-01T14:32:00Z",  // dates are just strings in JSON —
                                             // JSON has no native "date" type
      "sessionId": "a1b2c3d4",
      "isAdmin": false
    }
  }
};

// ============================================
// THINGS TO PRACTICE WITH THIS DATA
// ============================================
// 1. Access a top-level value:
//      data.student.name
//
// 2. Drill into a nested object:
//      data.company.employees[0].contact.email
//
// 3. Loop through an array of objects (the AJAX bread-and-butter):
//      data.products.forEach(p => console.log(p.name, p.price));
//
// 4. Filter based on a boolean:
//      const activeEmployees = data.company.employees.filter(e => e.active === true);
//
// 5. Handle a null safely (this one has phone: null — don't assume it's a string!):
//      const phone = data.company.employees[1].contact.phone ?? "No phone on file";
//
// 6. Convert this object to a real JSON STRING (what you'd send over AJAX):
//      const jsonString = JSON.stringify(data);
//
// 7. Convert a JSON STRING back into a usable object (what you get back from AJAX):
//      const parsedBack = JSON.parse(jsonString);

module.exports = data; // (only relevant if you're running this in Node.js)
