// नया: टेक्स्ट और फोटो दोनों को एक साथ PDF में बदलने का फंक्शन
function generateCombinedPDF() {
    const textContent = document.getElementById('editor').value;
    const imageInput = document.getElementById('imageInput');
    
    // एक अस्थायी कंटेनर बनाना
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.fontFamily = 'Arial, sans-serif';

    // टेक्स्ट जोड़ना
    container.innerHTML = `<h1>KRYA PDF Pro Document</h1><p style="white-space: pre-wrap;">${textContent}</p>`;
    
    // अगर फोटो चुनी गई है, तो उसे जोड़ना
    if (imageInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100%'; // फोटो को पेज पर फिट करने के लिए
            img.style.marginTop = '20px';
            container.appendChild(img);
            
            // इमेज लोड होने के बाद PDF जनरेट करना
            savePDF(container);
        }
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        // अगर सिर्फ टेक्स्ट है, तो भी PDF जनरेट करना
        savePDF(container);
    }
}

// PDF सेव करने के लिए कॉमन फंक्शन
function savePDF(element) {
    const opt = {
        margin: 0.5,
        filename: 'KRYA_Combined_Document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}

// डार्क मोड टॉगल
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
