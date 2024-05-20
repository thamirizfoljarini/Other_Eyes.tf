 <script>
        var images = document.querySelectorAll('.quote2 img');
        var modal = document.getElementById('details-modal');
        var closeBtn = document.querySelector('.close');

        images.forEach(function(image) {
            image.addEventListener('click', function() {
                modal.style.display = "block";
                // Obtém e exibe os detalhes do livro associado à imagem clicada
                var bookTitle = this.getAttribute('data-title');
                var bookSynopsis = this.getAttribute('data-synopsis');
                var bookAuthorYear = this.getAttribute('data-author-year');

                document.getElementById('book-title').textContent = bookTitle;
                document.getElementById('book-synopsis').textContent = bookSynopsis;
                document.getElementById('book-author-year').textContent = bookAuthorYear;
            });
            // Adiciona um evento de clique para fechar o modal quando clicar no botão de fechar (x)
            closeBtn.addEventListener('click', function() {
                modal.style.display = "none"; // Oculta o modal
            });

            // Adiciona um evento de clique para fechar o modal quando clicar dentro dele
            modal.addEventListener('click', function() {
                modal.style.display = "none"; // Oculta o modal
            });
        });

        function scrollToSection(sectionId) {
            var section = document.getElementById(sectionId);
            if (section) {
                // Calcula a posição da seção em relação ao topo da página
                var sectionTop = section.offsetTop;
                // Faz o scroll suave até a seção
                window.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
                // Oculta o menu de navegação após o clique
                var navbar = document.getElementById('navbar');
                navbar.classList.remove('show');
            }
        }

        // Seleciona a bolinha de menu
        var menuToggle = document.getElementById('menu-toggle');

        // Seleciona o menu de navegação
        var navbar = document.getElementById('navbar');

        // Adiciona um evento de clique à bolinha do menu
        menuToggle.addEventListener('click', function() {
            // Verifica se o menu está visível ou oculto
            var isVisible = navbar.classList.contains('show');

            // Se o menu estiver visível, oculta-o; se estiver oculto, exibe-o
            if (isVisible) {
                navbar.classList.remove('show');
            } else {
                navbar.classList.add('show');
            }
        });
    </script>
