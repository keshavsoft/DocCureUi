
# 🩺 DocCure – Doctor Management System UI

DocCure is a **web-based user interface for a Doctor Management System** built using **HTML, CSS, JavaScript, and Bootstrap**.

The project demonstrates the **complete patient and doctor-side workflow**, allowing users to:

* Search for doctors
* View doctor information
* Book an appointment
* Complete checkout

This project focuses on **frontend implementation and UI workflow simulation** without requiring a backend server.

---

# 🚀 Features

* Doctor search interface
* Dynamic doctor information rendering
* Appointment booking flow
* Checkout confirmation page
* Modular JavaScript structure
* Clean UI built with Bootstrap
* Data persistence using LocalStorage
* Multi-page navigation workflow
* Reusable UI components

---

# 📄 Pages

| Page                    | Description                                |
| ----------------------- | ------------------------------------------ |
| `index.html`            | Home page of the application               |
| `Patient/search.html`   | Search and browse doctors                  |
| `Patient/booking.html`  | Book an appointment with a selected doctor |
| `Patient/checkout.html` | Confirm booking and complete checkout      |

---

# 🛠 Tech Stack

* **HTML5** – Structure of the application
* **CSS3** – Styling and layout
* **JavaScript (Vanilla JS)** – Logic and dynamic rendering
* **Bootstrap** – Responsive UI design
* **LocalStorage** – Used for storing temporary data (doctor selection, booking info)

---

# ▶ Running the Project

This project is purely frontend-based, so **no backend server or installation is required**. However, to ensure everything works correctly, follow these steps carefully:

---

## 🔹 Method 1: Direct Run (Simple Way)

1. Download or clone the project folder
2. Navigate to the project directory:

   ```
   DocCure/V10/
   ```
3. Locate the file:

   ```
   index.html
   ```
4. Double-click the file
   OR
   Right-click → Open with → Your browser (Chrome recommended)
   http://127.0.0.1:5500/
---

## 🔹 Important Notes for Execution

* Make sure the **folder structure is not changed**, otherwise paths will break
* Keep all files inside the `V11` directory intact
* JavaScript depends on correct relative paths (especially inside `Patient/Js`)
* LocalStorage is used to pass data between pages:

  * Doctor selection
  * Booking details

If LocalStorage is cleared, data flow will reset

---

## 🔹 How the Flow Works

1. **Home Page (`index.html`)**

   * Entry point of the application

2. **Search Page (`search.html`)**

   * Doctors are dynamically loaded
   * User selects a doctor

3. **Booking Page (`booking.html`)**

   * Displays selected doctor details
   * User selects time slot

4. **Checkout Page (`checkout.html`)**

   * Displays final booking summary
   * Confirms appointment

---

# 📁 Project Structure

```
DocCure
│
├── V10
│   │
│   ├── assets
│   │   ├── css
│   │   ├── js
│   │   └── img
│   │
│   ├── Patient
│   │   ├── Js
│   │   │   ├── search.js
│   │   │   ├── booking.js
│   │   │   └── checkout.js
│   │   │
│   │   ├── search.html
│   │   ├── booking.html
│   │   └── checkout.html
│   │
│   └── index.html
```

---

# ⚠ Limitations

* No backend integration (data is static/mock)
* No real authentication system
* No database connectivity
* LocalStorage is used instead of API

---

# 🔮 Future Improvements

* Backend integration (Node.js / Spring Boot)
* Database support (MongoDB / MySQL)
* User authentication system
* Admin dashboard
* Real-time appointment availability

---

# 👨‍💻 Author

* **Hujur** – UI development, workflow design, and enhancements