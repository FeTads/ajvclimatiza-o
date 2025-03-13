// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (phone.length < 10) {
        e.preventDefault();
        alert('Por favor, insira um número de telefone válido');
        return;
    }
    
    if (message.length < 10) {
        e.preventDefault();
        alert('A mensagem deve ter pelo menos 10 caracteres');
        return;
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('menu-toggle').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});

// Fechar o menu após clicar em um item no mobile
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('active');
  });
});


document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		const targetId = this.getAttribute('href').substring(1);
		document.getElementById(targetId).scrollIntoView({
			behavior: 'smooth'
		});
	});
});


$(document).ready(function(){
    if ($(window).width() < 768) {
        // Inicia o carrossel dos serviços
        $('.services-grid').slick({
            dots: false,
            arrows: false, // Desativa as setas padrão do Slick
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            autoplay: true,
            autoplaySpeed: 5000,
            centerMode: false,
            pauseOnHover: false,
            pauseOnFocus: false,
            pauseOnDotsHover: false
        });

        // Inicia o carrossel dos aparelhos
        $('.appliance-cards').slick({
            dots: true,
            arrows: false, // Desativa as setas padrão do Slick
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: false,
            pauseOnHover: false,
            pauseOnFocus: false,
            pauseOnDotsHover: false
        });

        // Adiciona evento para os botões de navegação dos serviços
        $('.prev-service').click(function(){
            $('.services-grid').slick('slickPrev');
        });

        $('.next-service').click(function(){
            $('.services-grid').slick('slickNext');
        });

        // Adiciona evento para os botões de navegação dos aparelhos
        $('.prev-appliance').click(function(){
            $('.appliance-cards').slick('slickPrev');
        });

        $('.next-appliance').click(function(){
            $('.appliance-cards').slick('slickNext');
        });
    }
});


// Seleciona o footer e o tooltip
const footer = document.querySelector('footer');
const tooltip = document.querySelector('.tooltip-text');

// Função que esconde o tooltip quando o footer aparece
const hideTooltip = () => {
    if (tooltip) {
        tooltip.style.visibility = 'hidden'; // Esconde o tooltip
    }
};

// Função que mostra o tooltip quando o footer sai da tela
const showTooltip = () => {
    if (tooltip) {
        tooltip.style.visibility = 'visible'; // Exibe o tooltip
    }
};

// Usando o IntersectionObserver para detectar quando o footer entra e sai da tela
const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            hideTooltip(); // Quando o footer aparece, esconde o tooltip
        } else {
            showTooltip(); // Quando o footer sai da tela, mostra o tooltip
        }
    },
    { threshold: 0 } // A qualquer momento que o footer começar a aparecer, a função é chamada
);

// Inicia o observer no footer
observer.observe(footer);


document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const whatsappInput = document.getElementById("phone");

    nameInput.addEventListener("input", function () {
        this.style.borderColor = "";
        this.style.boxShadow = "";
        this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s.]/g, "");
    });

    whatsappInput.addEventListener("input", function () {
        this.style.borderColor = "";
        this.style.boxShadow = "";
        let value = this.value.replace(/\D/g, "");

        if (value.length > 11) value = value.slice(0, 11);

        if (value.length >= 2) value = `(${value.slice(0, 2)}) ${value.slice(2, 3)} ${value.slice(3, 7)}-${value.slice(7, 11)}`;
        this.value = value;
    });

    function validateNumberInput(input) {
        input.value = input.value.replace(/\D/g, "");
        let num = parseInt(input.value, 10);
        if (isNaN(num) || num < 0) num = 0;
        if (num > 15) num = 15;
        input.value = num;
    }
});