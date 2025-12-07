#  Gerador de Senhas Seguro

> Um aplicativo web simples e eficiente para gerar senhas fortes e seguras, com análise de força em tempo real.

![Preview do Projeto](print.png)

##  Demonstração (Live Preview)
Acesse o projeto rodando online:
👉 **[https://fellipedecastro0.github.io/Gerador-de-Senhas/](https://fellipedecastro0.github.io/Gerador-de-Senhas/)**

---

##  Sobre o Projeto
Este projeto foi desenvolvido para praticar manipulação de DOM e lógica de programação. Ele resolve a necessidade de criar senhas complexas de forma rápida, incluindo um **algoritmo visual de força de senha** que avalia não apenas o tamanho, mas a variedade de caracteres (entropia).

##  Funcionalidades

* ✅ **Geração Aleatória:** Cria senhas únicas instantaneamente.
* 🎚️ **Controle de Tamanho:** Slider interativo para definir o comprimento (ex: 8 a 20 caracteres).
* 🔣 **Filtros de Caracteres:** Opções para incluir Maiúsculas, Minúsculas, Números e Símbolos.
* 🚦 **Medidor de Força Inteligente:**
    * Feedback visual (Vermelho/Amarelo/Verde).
    * Feedback textual ("Fraca", "Média", "Forte").
    * Algoritmo de pontuação baseado em variedade + tamanho.
* 📋 **Copiar para Área de Transferência:** Botão dedicado para copiar a senha com um clique.

##  Tecnologias Utilizadas

* **HTML5** (Estrutura semântica)
* **CSS3** (Estilização moderna e responsiva)
* **JavaScript** (Lógica de geração e manipulação do DOM)

##  Lógica do "Medidor de Força"

O diferencial deste projeto é que a barra de força não olha apenas o tamanho. Ela usa um sistema de pontos:
1.  **Base:** Cada caractere adiciona pontos.
2.  **Bônus:** A senha ganha pontos extras se misturar tipos diferentes de caracteres (ex: números + símbolos).
3.  **Resultado:** O visualizador reage dinamicamente para educar o usuário sobre o que torna uma senha segura.

## 📂 Como rodar localmente

Se você quiser clonar este repositório para testar na sua máquina:

1. Clone o repositório:
```bash
git clone [https://github.com/fellipedecastro0/Gerador-de-Senhas.git](https://github.com/fellipedecastro0/Gerador-de-Senhas.git)