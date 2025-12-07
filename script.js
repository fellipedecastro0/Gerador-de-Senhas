
const inputSenha = document.getElementById("password");
const inputSlider = document.getElementById("length"); 
const textoTamanho = document.getElementById("length-value"); 
const botaoGerar = document.getElementById("gerar");
const botaoCopiar = document.getElementById("copy-icon"); 
const indicadorSeguranca = document.getElementById("strength-bar"); 
const chkMaiusculas = document.getElementById("uppercase");
const chkMinusculas = document.getElementById("lowercase");
const chkNumeros = document.getElementById("numbers");
const chkSimbolos = document.getElementById("symbols");


function calcularForca(senha) {
    let forca = 0;

    if (!senha) return 0;

    forca += senha.length * 3;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const temSimbolo = /[^A-Za-z0-9]/.test(senha);
    if (temMaiuscula) forca += 10;
    if (temNumero) forca += 10;
    if (temSimbolo) forca += 20;
    if (forca > 100) forca = 100;
    return forca;
}


function atualizarBarra() {
    const senha = inputSenha.value; 
    const porcentagem = calcularForca(senha);

    if (senha === "") {
        indicadorSeguranca.style.width = "0%";
        indicadorSeguranca.style.backgroundColor = "transparent";
        return;
    }

    indicadorSeguranca.style.width = `${porcentagem}%`;

    if (porcentagem < 40) {
        indicadorSeguranca.style.backgroundColor = '#ff4d4d'; 
        indicadorSeguranca.style.boxShadow = '0 0 10px #ff4d4d'; 
    } else if (porcentagem < 70) { 
        indicadorSeguranca.style.backgroundColor = '#ffd700'; 
        indicadorSeguranca.style.boxShadow = '0 0 10px #ffd700';
    } else {
        indicadorSeguranca.style.backgroundColor = '#00ff00'; 
        indicadorSeguranca.style.boxShadow = '0 0 10px #00ff00';
    }
}


inputSlider.addEventListener("input", function() {
    textoTamanho.textContent = inputSlider.value;
    atualizarBarra(); 
});


botaoGerar.addEventListener("click", function() {
    let caracteres = "";
    if (chkMaiusculas.checked) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (chkMinusculas.checked) caracteres += "abcdefghijklmnopqrstuvwxyz";
    if (chkNumeros.checked) caracteres += "0123456789";
    if (chkSimbolos.checked) caracteres += "@#$%&*()_+{}[]^~;:.";

    if (caracteres === "") {
        alert("Selecione pelo menos um tipo de caractere!");
        return;
    }

    let senha = "";
    for (let i = 0; i < inputSlider.value; i++) {
        const numeroAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[numeroAleatorio];
    }

    inputSenha.value = senha;
    atualizarBarra(); 
});


botaoCopiar.addEventListener("click", function() {
    const senhaParaCopiar = inputSenha.value;

    if (senhaParaCopiar === "") {
        return; 
    }

    
    inputSenha.select();
    inputSenha.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    
    alert("Senha copiada com sucesso!");
});

atualizarBarra();