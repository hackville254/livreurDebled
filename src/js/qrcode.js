function downloadQRCode() {
    // Get the image element
    var qrCodeImage = document.getElementById("qrCodeImage");
    // Récupérer l'élément input par son ID
    var inputNom = document.getElementById("nom");

    // Récupérer la valeur de l'input
    var nom = inputNom.value;
    // Create a temporary link element
    var link = document.createElement("a");
    link.href = qrCodeImage.src;
    link.download = nom+".png";

    // Simulate a click on the link to trigger the download
    link.click();
}