# 🎵 Discograpphy

**Discograpphy** is an application for vinyl enthusiasts who want to organize, explore, and analyze their record collection with ease.

The app is fully in **English** and stores all data locally using **SQLite**, ensuring a lightweight setup with no external dependencies.

<p align="center">
  <img src= "./assets/Icon.jpg" alt= "Icon" width = 300 height=300/>
</p>
## 🚀 Features

- 📀 **Vinyl Management**
  - Add, edit, and delete vinyl records
  - Mark records as **favorites**
  - View detailed info (title, artist, year, genre, condition, recordLabel, image cover)
  - Upload a cover image:
      -  from your device
      -  by searching one on the internet and pasting the URL
      -  using the default image provided by the app

- 🔍 **Advanced Search**
  - Search records by title or artist
  - Apply filters by:
    - Genre
    - Release year
    - Condition

- 🗂️ **Category Management**
  - Create custom categories 
  - Edit or delete existing categories

- 📊 **Collection Statistics**
  - See the **oldest records** in your collection (by production year)
  - Track **collection growth by year**
  - Monitor the **number of records added in the last 7 days**
  - Monitor the **number of records fro each category**

## 🗄️ Local Database (SQLite)

Discograpphy uses a **local SQLite database** to store all information about your records and categories.  
No external database configuration is needed — the database file is created automatically on first run.



## 🔧 Requirements

- Node.js / React - Native
- SQLite (bundled with most environments)

## 🛠️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/discograpphy.git
cd discograpphy
npm install   # or pip install -r requirements.txt
