# 📚 RFID Based Attendance System

An RFID-based real-time attendance tracking system designed as part of a second-year mini-project at **Pune Institute of Computer Technology (PICT)**. This project integrates **NodeMCU ESP8266** and **RFID reader modules** with a custom-built full-stack web interface to enable contactless, automated attendance logging for students and staff.

> ✅ Built with React.js, Express.js, and MySQL  
> 🧠 Led and developed the full-stack web platform

---

## 🚀 Features

- 📲 RFID card tap for attendance logging  
- ⏱️ Real-time name & timestamp recording  
- 🧑‍🏫 Separate access for students and faculty  
- 💾 MySQL-backed persistent storage  
- 🖥️ Simple, clean, and responsive web UI  
- 🔐 Locally hosted for testing; ready for production deployment

---

## ⚙️ Tech Stack

### 💻 Software
- **Frontend**: React.js + Vite  
- **Backend**: Node.js + Express.js  
- **Database**: MySQL  
- **Server**: Apache (Localhost)

### 🔌 Hardware
- NodeMCU ESP8266  
- RC522 RFID Reader Module  
- RFID Tags (13.56 MHz)

---

## 📂 How to Run Locally

1️⃣ Clone the repository:
```bash
git clone https://github.com/bsshardul/attendance_pbl_1.git
cd attendance_pbl_1
2️⃣ Install frontend dependencies:

bash
Copy
Edit
cd Frontend
npm install
npm run dev
3️⃣ Open a new terminal and start the backend:

bash
Copy
Edit
cd ../Server
npm install
node index.js
```

---
## 📐 Architecture Overview
RFID tag is scanned via RC522 module

NodeMCU ESP8266 reads the UID and sends it to the backend server

Backend verifies UID, records timestamp, and logs attendance into MySQL

Frontend displays updated logs in real-time

---

## 👨‍💻 My Role
Full Stack Developer & Team Lead

Designed and developed the entire full-stack web application

Built a responsive React UI and integrated it with backend APIs

Configured Express routes and connected the backend to MySQL

Coordinated with the hardware team for seamless RFID integration

Oversaw project planning, implementation, and debugging

---

## 🔮 Future Scope
Voice announcements on successful scan

Role-based dashboards for admin/students

Cloud deployment for remote access

Attendance reports and data visualization

---

## 👥 Team Members
@bsshardul – Full Stack Development & Team Lead

@AshutoshBhate – Hardware Integration

Krupa Gaikwad – Testing & Documentation

Shruti Bhosale – Testing & Documentation
---
