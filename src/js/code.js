fetch('/src/data/code.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('flipcardContainer');

        for (const key in data) {
            const indicatif = key;
            const nomPays = data[key];

            const flipCard = document.createElement('div');
            flipCard.classList.add('flip-card');

            const flipCardInner = document.createElement('div');
            flipCardInner.classList.add('flip-card-inner');

            const flipCardFront = document.createElement('div');
            flipCardFront.classList.add('flip-card-front', 'flex', 'items-center', 'justify-center');

            const image = document.createElement('img');
            const urlImage = `https://flagcdn.com/w160/${indicatif}.png`;
            image.src = urlImage;
            image.alt = 'Image';
            flipCardFront.appendChild(image);

            const flipCardBack = document.createElement('div');
            flipCardBack.classList.add('flip-card-back', 'pt-3');

            const paysHeading = document.createElement('h2');
            paysHeading.textContent = 'Pays : ';
            const paysSpan = document.createElement('span');
            paysSpan.classList.add('uppercase');
            paysSpan.id = 'pays';
            paysSpan.textContent = nomPays;
            paysHeading.appendChild(paysSpan);
            flipCardBack.appendChild(paysHeading);

            const departHeading = document.createElement('h2');
            departHeading.textContent = 'Expediés : ';
            const departSpan = document.createElement('span');
            departSpan.id = 'depart';
            departSpan.textContent = Math.floor(Math.random() * 10000);
            departHeading.appendChild(departSpan);
            flipCardBack.appendChild(departHeading);

            const escaleHeading = document.createElement('h2');
            escaleHeading.textContent = 'Arrivés : ';
            const escaleSpan = document.createElement('span');
            escaleSpan.id = 'escale';
            escaleSpan.textContent = Math.floor(Math.random() * 100);
            escaleHeading.appendChild(escaleSpan);
            flipCardBack.appendChild(escaleHeading);

            flipCardInner.appendChild(flipCardFront);
            flipCardInner.appendChild(flipCardBack);
            flipCard.appendChild(flipCardInner);
            container.appendChild(flipCard);
        }
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors du chargement du fichier JSON :', error);
    });


