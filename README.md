# 🦸‍♂️ Marvel Origins Finder

This little project lets you search for any Marvel character and instantly see their story and picture. It connects straight to the **Marvel Developer API** and pulls the info right into the browser — no backend needed.

I built it as a fun way to practice working with APIs, JavaScript, and some responsive design.

---

## 💡 What It Does

Type a character’s name — like “Spider-Man,” “Deadpool,” or “Black Widow” — hit **Search**, and boom: you’ll get their official Marvel bio and image pulled live from the API.

It’s fast, clean, and designed to work on both desktop and mobile screens.

---

## 🧰 Built With

* **HTML** – simple layout and structure
* **CSS** – made it responsive and gave it some style (yes, Deadpool is the background 😎)
* **JavaScript** – handles API calls, error checks, and DOM updates
* **CryptoJS** – used to generate the MD5 hash Marvel requires for authentication

---

## 🚀 How It Works

1. You enter a name.
2. The app builds a Marvel API request using your keys, timestamp, and hash.
3. The data comes back as JSON — the app grabs the description and image.
4. The content updates on the page instantly.

It’s a simple flow, but a great example of how to work with an authenticated external API in JavaScript.

---

## ⚙️ How To Run

1. Clone or download this repo

   ```bash
   git clone https://github.com/yourusername/marvel-origins.git
   cd marvel-origins
   ```
2. Open the `index.html` file in your browser
3. Type in a character name and click **Search**

*(You’ll need valid Marvel API keys — replace the ones in `main.js` with your own.)*

---

## 📚 What I Learned

This project helped me really understand:

* How to authenticate API requests using hashes and timestamps
* How to fetch and handle API data with `fetch()`
* How to manipulate the DOM dynamically without a framework
* How to build a clean responsive UI using just CSS

It’s simple, but it taught me a lot about putting the pieces together from start to finish.

---

## 🖼️ Visual

The background image is Deadpool (because why not?), and the layout automatically adjusts to fit your screen.

If you type “Deadpool,” he basically stares back at you. Creepy. But funny.

---

## 🔮 Future Ideas

* Add a random character button
* Show a list of matching characters instead of one
* Display extra info like comics or movies they’ve appeared in
* Add a loading animation while waiting for results

---

## ✍️ Created By

**Abdirahman Mohamed**
Just a developer building cool stuff, one project at a time.

