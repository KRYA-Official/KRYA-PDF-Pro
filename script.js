function generatePDF() {
    const element = document.getElementById('editor').value;
    const opt = {
        margin: 1,
        filename: 'KRYA_Document.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
