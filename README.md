# 🧠 Memora — Your AI Memory & Wellness Companion

**Memora** is a GenAI-powered memory and wellness companion designed with care for the elderly. From remembering medications to logging memories, tracking moods, or chatting with a supportive AI — Memora is here to assist. 💬🕰️❤️

> Built with passion by **Team Bengal Blazers** at HELLO WORLD HACKS 🏆

---

## 🚀 Features

- 🧘‍♀️ **Mood & Memory Tracking**  
   Log your feelings and important moments using voice or text.

- 🗓️ **Smart Reminders**  
   Stay on top of medications and appointments effortlessly.

- 🗣️ **GenAI Conversations**  
   Engage in meaningful chats for emotional support, memory recall, or friendly interaction.

- 📖 **Memory Diary**  
   Capture and revisit cherished moments with ease.

- 🚨 **Emergency SOS**  
   Instantly alert caregivers and emergency contacts with one tap.

- 👨‍👩‍👧‍👦 **Caregiver Dashboard**  
   Enable loved ones to monitor reminders, moods, and logs.

---

## 🛠️ Tech Stack

- **Frontend:** React, Expo  
- **Backend:** Python (Flask), Firebase, SQLite, MySQL  
- **AI/Voice:** Ollama (Local AI Inference)  
- **Design:** Figma  
- **DevOps:** GitHub Actions, Expo, Firebase Hosting

---

## ⚙️ Installation & Running the App

### 🔧 Prerequisites

- Node.js (LTS)
- npm or yarn
- Python 3.10+
- Expo CLI (`npm install -g expo-cli`)
- [Ollama](https://ollama.com) for local AI models

---

### 📥 Clone the Repository

```bash
git clone https://github.com/bengalblazers/Memora.git
cd Memora
npm install
```

If you encounter dependency issues, run:

```bash
npm install --legacy-peer-deps
```

---

### ▶️ Run the Expo App

```bash
npx run
```

- Scan the QR code in Expo Go (Android/iOS)  
- Or run on an emulator/simulator

---

### 🧠 Backend Setup (Flask API)

```bash
cd backend  # Navigate to the backend folder
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

- Create a `.env` file for Flask configuration, Firebase, and local endpoints.

---

### 🤖 Run Ollama for AI

```bash
ollama serve
ollama run your-model-name
```

Ensure your frontend/backend points to `http://localhost:11434`.

---

## 👥 Team Bengal Blazers

| Role               | Name          | GitHub           | LinkedIn       |
|--------------------|---------------|------------------|----------------|
| 🧠 Team Lead       | Tousif Azim   | [@tousifazim](https://github.com/Tousif18) | [Tousif Azim](https://linkedin.com/in/tousifazim) |
| 🎨 Developer & Designer | Sayan Dutta   | [@Sd8698621](https://github.com/Sd8698621) | [Sayan Dutta](https://linkedin.com/in/sayandutta8653128442) |
| 🔧 DevOps Engineer | Ranjan        | [@ranjan-github](https://github.com/ds-with-ranjan) | [Ranjan Chakrabortty](https://linkedin.com/in/ranjan-chakraborty-473621315) |

---

## 🌟 Show Us Some Love

If Memora inspires you, please give us a ⭐️ on GitHub!  
👉 [GitHub Repository](https://github.com/Sd8698621/Memora)

---
☕ Buy Me a Coffee
If you appreciate our work and want to support our journey, consider buying us a coffee:

<a href="https://www.buymeacoffee.com/s_a_y_a_n" target="_blank"> <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="200" /> </a>

**Memora: Because memories matter.**
