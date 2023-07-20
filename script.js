function printResume() {
    // Get the entire HTML content of the resume
    const resumeContent = document.documentElement.innerHTML;

    // Open a new window to display the resume
    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Print Resume</title>
            <style>
                /* Add any print-specific styles here */
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                }
            </style>
        </head>
        <body>
            ${resumeContent}
            <script>
                // Automatically trigger the print dialog
                window.onload = function() {
                    window.print();
                    window.close();
                };
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}
