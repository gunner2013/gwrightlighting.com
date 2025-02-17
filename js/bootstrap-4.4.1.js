<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap-4.4.1.css"> <!-- Adjust path accordingly -->
    <style>
        body, html {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            height: 100%;
            background-color: black;  /* Set background to black */
        }

        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 10px 30px;
            background-color: rgba(0, 0, 0, 0.5);  /* Header background */
            color: white;
            z-index: 100;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        header .logo img {
            width: 70px;
            height: auto;
            cursor: pointer; /* Make the logo appear clickable */
        }

        nav {
            display: flex;
            justify-content: flex-end;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin-left: 40px;
            font-size: 1rem;  /* Relative size */
            font-weight: bold;
            transition: color 0.3s ease, border 0.3s ease;
        }

        /* Hover effect */
        nav a:hover {
            color: #FFD700; /* Golden color for hover effect */
        }

        /* Highlight effect for selected page */
        nav a.selected {
            border: 3px solid #0074FF; /* Accent color for the border */
            padding: 5px 10px; /* Add space between the text and the border */
            border-radius: 12px; /* Rounded corners */
            box-sizing: border-box; /* Ensure padding doesn't interfere with the border size */
        }

        .portfolio-section {
            margin-top: 80px;
            padding: 50px 30px;
            text-align: center;
            background-color: #111;
        }

        .portfolio-section h2 {
            color: white;
            margin-bottom: 50px;
            font-size: 4vw;  /* Using viewport width for scaling */
            text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.7); /* Added text shadow */
            font-weight: bold;
        }

        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .portfolio-item {
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease;
        }

        .portfolio-item:hover {
            transform: scale(1.05); /* Slight zoom on hover */
        }

        .portfolio-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .portfolio-item:hover img {
            transform: scale(1.1); /* Zoom effect on hover */
        }

        /* Fixed font size for text over images */
        .portfolio-item .title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 50px;  /* Larger font size for desktop */
            font-weight: bold;
            z-index: 2;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Added shadow for better contrast */
        }

        /* Adding background overlay behind text */
        .portfolio-item .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
            z-index: 1;
        }

        .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            text-align: center;
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
        }

        .footer p {
            font-size: 1rem;
            font-weight: bold;
            letter-spacing: 1px;
        }

        /* Media Queries for scaling text on different screen sizes */
        @media (max-width: 768px) {
            .portfolio-section h2 {
                font-size: 6vw;  /* Adjust for smaller screens */
            }

            .portfolio-item .title {
                font-size: 35px;  /* Slightly smaller title size for tablets */
            }

            nav a {
                font-size: 0.9rem; /* Slightly smaller nav text */
            }
        }

        @media (max-width: 480px) {
            .portfolio-section h2 {
                font-size: 8vw;  /* Further adjust for very small screens */
            }

            .portfolio-item .title {
                font-size: 25px;  /* Further adjust title size for mobile devices */
            }

            .footer p {
                font-size: 0.8rem; /* Slightly smaller footer text */
            }
        }
    </style>
  </head>
  <body>
    <header>
        <!-- Logo now wrapped in a link to act as the home button -->
        <a href="index.html">
            <div class="logo">
                <img src="https://github.com/gunner2013/gwrightlighting.com/blob/main/Images/Trans-Logo-2024-G.png?raw=true" alt="GW Logo" width="70" height="auto">
            </div>
        </a>
        <nav>
            <a href="portfolio.html" class="selected">Portfolio</a> <!-- Selected page will have the box -->
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <section class="portfolio-section">
        <h2>My Portfolio</h2>
        <div class="portfolio-grid">
            <div class="portfolio-item">
                <div class="overlay"></div> <!-- Background overlay -->
                <img src="https://github.com/gunner2013/gwrightlighting.com/blob/main/Images/Theactrial-Lighting.png?raw=true" alt="Project 1">
                <div class="title">Theatrical</div>
            </div>
            <div class="portfolio-item">
                <div class="overlay"></div> <!-- Background overlay -->
                <img src="https://github.com/gunner2013/gwrightlighting.com/blob/main/Images/LiveLighting.png?raw=true" alt="Project 2">
                <div class="title">Live</div>
            </div>
            <div class="portfolio-item">
                <div class="overlay"></div> <!-- Background overlay -->
                <img src="https://github.com/gunner2013/gwrightlighting.com/blob/main/Images/Other.png?raw=true" alt="Project 3">
                <div class="title">Other</div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <p>&copy; 2024 Gunner Wright</p>
    </footer>

    <!-- jQuery and Bootstrap JS -->
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap-4.4.1.js"></script>
  </body>
</html>
