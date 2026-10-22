/**
 * Interactive Projects logic for filtering, search, and detail modal
 * Styled with Oyster Silk & Warm Silver aesthetic
 */

let activeCategory = 'all';
let searchQuery = '';

function renderProjects() {
  const container = document.getElementById('projects-container');
  const countBadge = document.getElementById('results-count');
  if (!container || typeof PROJECTS_DATA === 'undefined') return;

  const filtered = PROJECTS_DATA.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || 
      p.title.toLowerCase().includes(q) || 
      p.client.toLowerCase().includes(q) || 
      p.summary.toLowerCase().includes(q) ||
      p.technologies.some(t => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} proyectos encontrados`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-400">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <h3 class="text-lg font-semibold text-stone-800 dark:text-stone-200">No se encontraron proyectos</h3>
        <p class="text-sm text-stone-500 dark:text-stone-400 mt-1">Prueba cambiando los términos de búsqueda o el filtro de categoría.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="custom-card rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden">
      ${p.flagship ? '<div class="absolute top-0 right-0 bg-[#1A1918] text-[#FAF9F6] dark:bg-[#FAF9F6] dark:text-[#11100F] text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-bl-lg shadow-sm">Insignia</div>' : ''}
      
      <div>
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300">${p.client || 'Iniciativa Estratégica'}</span>
          <span class="text-stone-300 dark:text-stone-700">•</span>
          <span class="text-xs text-stone-400 dark:text-stone-500 font-mono">${p.period || '2024'}</span>
        </div>

        <h3 class="text-lg font-bold text-[#1A1918] dark:text-[#FAF9F6] mb-2.5 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
          ${p.title}
        </h3>

        <p class="text-sm text-stone-600 dark:text-stone-400 mb-5 leading-relaxed line-clamp-3">
          ${p.summary || 'Diseño de arquitectura escalable, modelado de datos y entrega técnica de alto valor de negocio.'}
        </p>

        <div class="flex flex-wrap gap-1.5 mb-6">
          ${p.technologies.slice(0, 4).map(t => `<span class="badge-tech">${t}</span>`).join('')}
          ${p.technologies.length > 4 ? `<span class="badge-tech">+${p.technologies.length - 4}</span>` : ''}
        </div>
      </div>

      <div class="pt-4 border-t border-[#E8E6E0] dark:border-[#292725] flex items-center justify-between mt-auto">
        <span class="text-xs text-stone-500 dark:text-stone-400 font-mono truncate max-w-[170px]" title="${p.role}">
          ${p.role.split('(')[0].trim() || 'Arquitecto de Solución'}
        </span>
        <button onclick="openProjectModal('${p.id}')" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A1918] dark:text-[#FAF9F6] hover:underline">
          <span>Ver caso completo</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  `).join('');
}

function openProjectModal(projectId) {
  if (typeof PROJECTS_DATA === 'undefined') return;
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('project-modal-content');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="flex items-start justify-between pb-4 border-b border-[#E8E6E0] dark:border-[#292725]">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="px-3 py-0.5 rounded-full text-xs font-bold uppercase bg-[#F3F2EE] dark:bg-[#242220] text-[#1A1918] dark:text-[#FAF9F6] border border-[#C8C5BD] dark:border-[#45423E]">${project.client}</span>
          <span class="text-xs font-mono text-stone-500">${project.period}</span>
          <span class="text-xs text-stone-400">ID: ${project.id}</span>
        </div>
        <h2 class="text-xl md:text-2xl font-extrabold text-[#1A1918] dark:text-[#FAF9F6]">${project.title}</h2>
      </div>
      <button onclick="closeProjectModal()" class="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>

    <div class="py-6 space-y-6 text-sm">
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Objetivo & Desafío de Negocio</h4>
        <p class="text-stone-800 dark:text-stone-200 leading-relaxed bg-[#F3F2EE]/70 dark:bg-[#242220]/70 p-4 rounded-xl border border-[#E8E6E0] dark:border-[#292725]">
          ${project.challenge || project.summary}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Rol & Nivel de Atribución</h4>
          <p class="font-medium text-[#1A1918] dark:text-[#FAF9F6]">${project.role}</p>
        </div>
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Categoría Técnica</h4>
          <p class="font-medium text-[#1A1918] dark:text-[#FAF9F6]">${project.category}</p>
        </div>
      </div>

      ${project.deliverables ? `
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Entregables Clave & Artefactos</h4>
        <p class="text-stone-700 dark:text-stone-300 leading-relaxed">${project.deliverables}</p>
      </div>` : ''}

      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">Stack Tecnológico & Herramientas</h4>
        <div class="flex flex-wrap gap-2">
          ${project.technologies.map(t => `<span class="badge-tech text-xs px-3 py-1">${t}</span>`).join('')}
        </div>
      </div>
    </div>

    <div class="pt-4 border-t border-[#E8E6E0] dark:border-[#292725] flex justify-end gap-3">
      <button onclick="closeProjectModal()" class="btn-secondary text-xs px-4 py-2">Cerrar</button>
      <a href="contacto.html" class="btn-primary text-xs px-4 py-2">Conversar sobre este proyecto</a>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProjects();
    });
  }

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-[#1A1918]', 'text-[#FAF9F6]', 'dark:bg-[#FAF9F6]', 'dark:text-[#11100F]');
        b.classList.add('bg-white', 'dark:bg-[#181716]', 'text-stone-700', 'dark:text-stone-300');
      });
      btn.classList.add('bg-[#1A1918]', 'text-[#FAF9F6]', 'dark:bg-[#FAF9F6]', 'dark:text-[#11100F]');
      btn.classList.remove('bg-white', 'dark:bg-[#181716]', 'text-stone-700', 'dark:text-stone-300');

      activeCategory = btn.getAttribute('data-category');
      renderProjects();
    });
  });

  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });
});
