function applyChanges() {
  const title = document.getElementById('titleInput').value;
  const header = document.getElementById('headerInput').value;
  const bgColor = document.getElementById('bgColorInput').value;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title}</title>
      <style>
        body {
          background-color: ${bgColor};
          font-family: Arial, sans-serif;
          padding: 40px;
        }
        h1 {
          text-align: center;
        }
      </style>
    </head>
    <body>
      <h1>${header}</h1>
      <p>This is a modified template preview.</p>
    </body>
    </html>
  `;

  const frame = document.getElementById('previewFrame');
  frame.srcdoc = htmlContent;
}
