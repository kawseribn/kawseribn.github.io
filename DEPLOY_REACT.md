# How to Deploy React App to GitHub Pages

1.  **Setup Folder Structure:**
    Ensure your local folder looks like this:

    ```
    /root
      ├── package.json
      ├── vite.config.js
      ├── tailwind.config.js
      ├── postcss.config.js
      ├── index.html
      ├── public/
      │   └── assets/
      │       └── img/
      │           └── Dp.JPG   <-- MOVE YOUR IMAGE HERE!
      └── src/
          ├── App.jsx
          ├── main.jsx
          └── index.css
    ```

2.  **Move the Image:**

      * **Critical Step:** Move your `assets` folder **inside** the `public` folder.
      * Vite serves everything in `public/` at the root URL. So `public/assets/img/Dp.JPG` becomes accessible at `your-site.com/assets/img/Dp.JPG`.

3.  **Install Dependencies:**
    Open your terminal in the project folder and run:

    ```bash
    npm install
    ```

4.  **Test Locally:**

    ```bash
    npm run dev
    ```

    Open the link shown (usually `http://localhost:5173`) to verify everything works and the image loads.

5.  **Deploy to GitHub:**

      * Make sure your remote origin is set to your repo:
        `git remote add origin https://github.com/kawseribn/kawseribn.github.io.git`
      * Run the deploy script:
        ```bash
        npm run deploy
        ```
      * This script builds your app (creating a `dist` folder) and pushes that folder to a `gh-pages` branch on your repository.

6.  **Configure GitHub Settings:**

      * Go to your GitHub Repository Settings -> **Pages**.
      * Under "Build and deployment" -> "Source", select **Deploy from a branch**.
      * Select the **`gh-pages`** branch (created by the script) as the source.
      * Click Save.

Your site should be live in a few minutes!