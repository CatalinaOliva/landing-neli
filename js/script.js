const tabs = document.querySelectorAll('.rail-tab');
const panels = document.querySelectorAll('.panel');
const ghost = document.getElementById('showNumero');
const ghostValues = ['$5.400','$4.900','$6.200'];
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const idx = tab.dataset.idx;
    tabs.forEach(t => t.classList.toggle('activo', t === tab));
    panels.forEach(p => p.classList.toggle('activo', p.dataset.idx === idx));
    ghost.textContent = ghostValues[idx];
  });
});

const filas = document.querySelectorAll('.fila');
filas.forEach(fila => {
  fila.querySelector('.fila-head').addEventListener('click', () => {
    const yaActiva = fila.classList.contains('activa');
    filas.forEach(f => f.classList.remove('activa'));
    if(!yaActiva) fila.classList.add('activa');
  });
});

document.querySelectorAll('.redaccion').forEach(btn => {
  btn.addEventListener('click', () => {
    const celda = btn.closest('.objecion');
    const abierta = celda.classList.toggle('revelado');
    btn.setAttribute('aria-expanded', abierta);
  });
});
