// Récupérer l'élément d'entrée
const searchInput = document.getElementById('table-search');

// Ajouter un écouteur d'événement à l'élément d'entrée
searchInput.addEventListener('input', function () {
    // Récupérer la valeur saisie par l'utilisateur
    const searchText = this.value.toLowerCase();

    // Récupérer toutes les lignes du tableau
    const rows = document.querySelectorAll('tbody tr');

    // Parcourir chaque ligne et masquer/afficher en fonction du texte de recherche
    rows.forEach(function (row) {
        const name = row.querySelector('th').textContent.toLowerCase();

        if (name.includes(searchText)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});


document.getElementById("exportButton").addEventListener("click", exportToExcel);
function exportToExcel() {
    // Récupérer l'élément de tableau
    var table = document.getElementById("tableDist");
  
    // Convertir le tableau en objet "workbook"
    var workbook = XLSX.utils.table_to_book(table);
  
    // Convertir le "workbook" en fichier Excel
    var excelFile = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  
    // Enregistrer le fichier Excel
    saveAsExcelFile(excelFile, "tableau exporter.xlsx");
}

function saveAsExcelFile(data, filename) {
    // Créer un objet Blob à partir du tableau d'octets
    var blob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  
    // Créer un élément de lien temporaire
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
  
    // Simuler un clic sur le lien pour déclencher le téléchargement
    link.click();
}

  