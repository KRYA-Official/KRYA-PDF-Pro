// टेक्स्ट से PDF बनाने का एडवांस फंक्शन
function generatePDF() {
    const content = document.getElementById('editor').value;
    if (!content.trim()) {
        alert("कृपया कुछ टेक्स्ट लिखें!");
        return;
    }

    const opt = {
        margin: 0.5,
        filename: 'KRYA_Document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    // एक अस्थायी एलिमेंट बनाना ताकि PDF सही से रेंडर हो
    const element = document.createElement('div');
    element.innerHTML = `<pre style="white-space: pre-wrap;">${content}</pre>`;
    
    html2pdf().set(opt).from(element).save();
}

// नया: फोटो से PDF बनाने का फंक्शन
function handleImageToPDF() {
    const input = document.getElementById('imageInput');
    if (input.files.length === 0) {
        alert("कृपया पहले एक फोटो चुनें!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.width = '100%'; // PDF में फोटो को फिट करने के लिए
        
        const opt = {
            filename: 'KRYA_Image_PDF.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(img).save();
    }
    reader.readAsDataURL(input.files[0]);
}

// डार्क मोड टॉगल
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
