document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('mauve_cart')) || [];
    updateCartUI();

    //cerinta 3
    const cartBtn = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeBtn = document.querySelector('.close-button');
    const cartList = document.getElementById('cart-items-list');

    
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // cerinta 6
        cartModal.style.display = 'block';
        renderCartItems();
    });

    //cerinta 13
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        cartModal.style.display = 'none';
    });
    window.onclick = (e) => { if (e.target == cartModal) cartModal.style.display = 'none'; };

    //cerinta 12
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-transition')) {
            e.preventDefault();
            const card = e.target.closest('article') || document.querySelector('.produs-detalii');
            const name = card.querySelector('h1, h3').innerText;
            const priceText = card.querySelector('.price, .pret-produs').innerText;
            //cerinta 10,string
            const price = parseInt(priceText.replace(/[^0-9]/g, ''));
            //cerinta 10,array
            cart.push({ id: Date.now(), name: name, price: price });
            localStorage.setItem('mauve_cart', JSON.stringify(cart));
            updateCartUI();
            
            // cerinta 2 stil.
            e.target.style.backgroundColor = '#4CAF50';
            setTimeout(() => { e.target.style.backgroundColor = ''; }, 500);
        }
    });

    // cerinta 4
    function renderCartItems() {
        cartList.innerHTML = '';
        if (cart.length === 0) {
            cartList.innerHTML = '<p>Coșul este gol.</p>';
            return;
        }

        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <span>${item.name} - ${item.price} RON</span>
                <button class="btn-remove" data-id="${item.id}">Șterge</button>
            `;
            cartList.appendChild(itemDiv);
        });
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        document.getElementById('cart-total').innerHTML = `<strong>Total: ${total} RON</strong>`;

        // cerinta 9
        document.querySelectorAll('.btn-remove').forEach(btn => {
            btn.onclick = (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                cart = cart.filter(item => item.id !== id);
                localStorage.setItem('mauve_cart', JSON.stringify(cart));
                updateCartUI();
                renderCartItems();
            };
        });
    }

    function updateCartUI() {
        document.getElementById('cart-count').innerText = cart.length;
    }
    if (document.getElementById('hero')) {
        fetch('date.json')
            .then(response => response.json())
            .then(data => {
                const testimonialSection = document.createElement('section');
                testimonialSection.className = 'container';
                testimonialSection.innerHTML = `<h3>Ce spun clienții</h3><p>"${data.testomoniale[0].text}" - ${data.testomoniale[0].autor}</p>`;
                document.querySelector('main').appendChild(testimonialSection);
            });
    }

    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            //cerinta 7
            const email = document.getElementById('email').value;
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!regex.test(email)) {
                e.preventDefault();
                alert('Email invalid!');
                document.getElementById('email').classList.add('error-input');
            }
        });
    }

    //cerinta 8,11.
    setInterval(() => {
        const heroAnim = document.getElementById('hero-animation');
        
        if (heroAnim) {
            const culoriVii = ['#6a0dad', '#9370db', '#8a2be2', '#dda0dd', '#4b0082', '#ba55d3'];
            
            //cerinta 10,math
            const indexAleator = Math.floor(Math.random() * culoriVii.length);
            const culoareNoua = culoriVii[indexAleator];
            heroAnim.style.borderColor = culoareNoua;
            heroAnim.style.boxShadow = `0 0 30px ${culoareNoua}`;
            
            console.log("Culoarea animației Hero s-a schimbat în: " + culoareNoua);
        }
    }, 3000);

    //cerinta 10 ,Date
    const dataAzi = new Date();
    console.log("Vizită înregistrată la: " + dataAzi.toLocaleString('ro-RO'));
    //cerinta 13
    const hero = document.getElementById('hero');
    if (hero) {
        const stilHero = window.getComputedStyle(hero);
        console.log("Înălțime Hero calculată: " + stilHero.height);
    }

    // cerinta 5
    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") cartModal.style.display = 'none';
    });
    setTimeout(() => {
        const footer = document.querySelector('footer p');
        footer.innerHTML += " | <span style='color: #d8bfd8'>Vă mulțumim pentru vizită!</span>";
    }, 5000);
});