<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
    <!-- You can add additional metadata, stylesheets, or scripts here -->

    <script>
        // JavaScript code
        document.addEventListener('DOMContentLoaded', function () {
            // Code to be executed after the DOM is ready
            var section1Content = document.getElementById('section1-content');
            var changeContentButton = document.getElementById('change-content-button');

            changeContentButton.addEventListener('click', function () {
                section1Content.innerText = "Updated content for Section 1!";
            });
        });
    </script>
</head>
<body>

    <header>
        <h1>Welcome to My Web Page</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
            <!-- Add more navigation links as needed -->
        </ul>
    </nav>

    <section id="section1">
        <h2>Section 1</h2>
        <p id="section1-content">This is the content of Section 1.</p>
        <button id="change-content-button">Change Content</button>
    </section>

    <section id="section2">
        <h2>Section 2</h2>
        <p>This is the content of Section 2.</p>
    </section>

    <footer>
        <p>&copy; 2023 My Web Page. All rights reserved.</p>
    </footer>

    <!-- You can include additional scripts or other elements at the end of the body -->

</body>
</html>
