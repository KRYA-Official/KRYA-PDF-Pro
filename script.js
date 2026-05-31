// नया: टेक्स्ट और फोटो दोनों को एक साथ PDF में बदलने का फंक्शन
function generateCombinedPDF() {
    const textContent = document.getElementById('editor').value;
    const imageInput = document.getElementById('imageInput');
    const btn = document.querySelector('.btn-primary');
    
    // प्रोसेसिंग शुरू होने पर बटन को डिसेबल करें
    btn.innerText = "प्रोसेसिंग...";
    btn.disabled = true;

    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.fontFamily = 'Arial, sans-serif';

    container.innerHTML = `<h1>KRYA PDF Pro Document</h1><p style="white-space: pre-wrap;">${textContent}</p>`;
    
    if (imageInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100%'; 
            img.style.marginTop = '20px';
            container.appendChild(img);
            
            // PDF जनरेट करें
            savePDF(container, btn);
        }
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        savePDF(container, btn);
    }
}

// PDF सेव करने वाला फंक्शन
function savePDF(element, btn) {
    const opt = {
        margin: 0.5,
        filename: 'KRYA_Combined_Document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save().then(() => {
        // काम खत्म होने पर बटन वापस पहले जैसा करें
        btn.innerText = "एक साथ PDF बनाएं";
        btn.disabled = false;
    });
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
