// Data de início do contador (18 de abril de 2022)
// Formato: Ano, Mês (0-11), Dia, Hora, Minuto, Segundo
// Cuidado: Abril é o mês 3 no JavaScript (Janeiro é 0, Fevereiro é 1, etc.)
const startDate = new Date("April 18, 2022 00:00:00").getTime();

// Elementos HTML onde o tempo será exibido
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

// Função para atualizar o contador
function updateCounter() {
    const now = new Date().getTime(); // Data e hora atuais
    const elapsedTime = now - startDate; // Tempo decorrido em milissegundos

    // Calcula dias, horas, minutos e segundos
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    // Exibe os resultados nos elementos HTML
    daysSpan.innerHTML = formatTime(days);
    hoursSpan.innerHTML = formatTime(hours);
    minutesSpan.innerHTML = formatTime(minutes);
    secondsSpan.innerHTML = formatTime(seconds);
}

// Função para formatar o tempo (adicionar zero à esquerda se for menor que 10)
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

// Atualiza o contador a cada 1 segundo (para sempre)
setInterval(updateCounter, 1000);

// Executa a função uma vez imediatamente para evitar atraso na exibição inicial
updateCounter();

console.log("Contador de tempo decorrido iniciado!");