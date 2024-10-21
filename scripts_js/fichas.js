// Abrir e fechar o formulário de criação de personagem
document.getElementById('btn-abrir-form-personagem').addEventListener('click', function() {
    document.getElementById('form-personagem').style.display = 'flex';
  });
  
  document.getElementById('btn-fechar-form-personagem').addEventListener('click', function() {
    document.getElementById('form-personagem').style.display = 'none';
  });
  
  // Função para adicionar personagem à lista
  document.getElementById('btn-adicionar-personagem').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const forca = document.getElementById('forca').value;
    const intelecto = document.getElementById('intelecto').value;
    const destreza = document.getElementById('destreza').value;
    const vigor = document.getElementById('vigor').value;
    const carisma = document.getElementById('carisma').value;
    const arma = document.getElementById('arma').value;
  
    if (nome && forca && intelecto && destreza && vigor && carisma) {
      const listaPersonagens = document.getElementById('lista-personagens');
  
      // Cria o item da lista com os dados do personagem
      const novoPersonagem = document.createElement('li');
      novoPersonagem.textContent = `Nome: ${nome} - Força: ${forca}, Intelecto: ${intelecto}, Destreza: ${destreza}, Vigor: ${vigor}, Carisma: ${carisma}, Arma: ${arma}`;
      listaPersonagens.appendChild(novoPersonagem);
  
      // Criar objeto do personagem
      const personagem = {
        id: Date.now(),
        nome: nome,
        forca: forca,
        intelecto: intelecto,
        destreza: destreza,
        vigor: vigor,
        carisma: carisma,
        arma: arma
      };
  
      // Salvar personagem no LocalStorage
      salvarPersonagem(personagem);
  
      // Limpar o formulário
      document.getElementById('nome').value = '';
      document.getElementById('forca').value = '';
      document.getElementById('intelecto').value = '';
      document.getElementById('destreza').value = '';
      document.getElementById('vigor').value = '';
      document.getElementById('carisma').value = '';
      document.getElementById('arma').value = '';
  
      // Fechar o formulário
      document.getElementById('form-personagem').style.display = 'none';
    } else {
      alert('Preencha todos os campos antes de adicionar o personagem!');
    }
  });
  
  // Função para carregar personagens do LocalStorage
  function carregarPersonagens() {
    const personagensSalvos = localStorage.getItem('personagens');
    if (personagensSalvos) {
      const listaPersonagens = document.getElementById('lista-personagens');
      const personagens = JSON.parse(personagensSalvos);
  
      personagens.forEach(personagem => {
        const novoPersonagem = document.createElement('li');
        novoPersonagem.textContent = `ID: ${personagem.id} - Nome: ${personagem.nome} - Força: ${personagem.forca}, Intelecto: ${personagem.intelecto}, Destreza: ${personagem.destreza}, Vigor: ${personagem.vigor}, Carisma: ${personagem.carisma}, Arma: ${personagem.arma}`;
        listaPersonagens.appendChild(novoPersonagem);
      });
    }
  }
  
  // Função para salvar personagem no LocalStorage
  function salvarPersonagem(personagem) {
    let personagens = localStorage.getItem('personagens');
  
    if (personagens) {
      personagens = JSON.parse(personagens);
    } else {
      personagens = [];
    }
  
    personagens.push(personagem);
    localStorage.setItem('personagens', JSON.stringify(personagens));
  }
  
  // Carregar personagens ao carregar a página
  window.onload = carregarPersonagens;

  function mostrarFormulario() {
    document.getElementById("form-personagens").style.display = "block";
  }
  
  function fecharFormulario() {
    document.getElementById("form-personagens").style.display = "none";
  }

  document.getElementById('btn-abrir-form-personagem').addEventListener('click', function() {
    document.getElementById('form-personagem').style.display = 'block';
  });
  
  document.getElementById('btn-fechar-form-personagem').addEventListener('click', function() {
    document.getElementById('form-personagem').style.display = 'none';
  });