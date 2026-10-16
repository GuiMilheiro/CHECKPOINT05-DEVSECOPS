console.log("Aplicação iniciada com segurança!");

// Teste de Sabotagem 2: Código vulnerável com eval
const parametroUrl = window.location.search.substring(1);
eval(parametroUrl);