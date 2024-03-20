document
  .getElementById("add-depense")
  .addEventListener("click", function () {
    var depensesContainer = document.getElementById(
      "depenses-mere-container"
    );
    var newDepense = document.createElement("div");
    newDepense.classList.add("depense-mere");
    newDepense.innerHTML =
      '<input type="text" name="depenses_mere[]" placeholder="Nom de la dépense">' +
      '<input type="number" name="montants_mere[]" placeholder="Montant de la dépense">' +
      '<button type="button" class="btn-form remove-depense">Supprimer</button>';
    depensesContainer.appendChild(newDepense);
  });

document
  .getElementById("magasin-mere-fields")
  .addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("remove-depense")) {
      e.target.parentElement.remove();
    }
  });


document
  .getElementById("type-magasin")
  .addEventListener("change", function () {
    var typeMagasin = this.value;
    if (typeMagasin === "magasin_mere") {
      document.getElementById("magasin-mere-fields").style.display =
        "block";
      document.getElementById("magasin-fils-fields").style.display =
        "none";
    } else if (typeMagasin === "magasin_fils") {
      document.getElementById("magasin-mere-fields").style.display =
        "none";
      document.getElementById("magasin-fils-fields").style.display =
        "block";
    }
  });


document
  .getElementById("Magasin_mére-select")
  .addEventListener("change", function () {
    var selectedMagasinMereId = this.value;
    console.log(selectedMagasinMereId); // Affiche l'ID sélectionné dans la console

    // Vérifier si l'ID sélectionné est vide
    if (selectedMagasinMereId !== "") {
      // Envoyer l'ID sélectionné à votre script PHP via une requête AJAX
      fetch(
        window.location.href +
        "?id_magasin_mere=" +
        selectedMagasinMereId
      )
        .then((response) => response.json())
        .then((data) => {
          // Traiter les données récupérées (les dépenses)
          console.log(data); // Afficher les données récupérées dans la console
          // Vous pouvez utiliser les données récupérées pour afficher les boutons radio
        })
        .catch((error) =>
          console.error(
            "Erreur lors de la récupération des dépenses:",
            error
          )
        );
    } else {
      console.log("ID du magasin mère non sélectionné");
    }
  });

//nice slect

$(document).ready(function () {
  $('select').niceSelect();
});
