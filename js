
document.getElementById('btnTopo').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btnMeio').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btnFim').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
});



