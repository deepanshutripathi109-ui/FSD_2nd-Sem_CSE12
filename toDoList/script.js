let tasks = JSON.parse(localStorage.getItem('taskr_tasks') || '[]');
  let filter = 'all';
 
  const taskInput = document.getElementById('task-input');
  const taskList  = document.getElementById('task-list');
  const emptyState = document.getElementById('empty-state');
  const addBtn    = document.getElementById('add-btn');
  const clearBtn  = document.getElementById('clear-btn');
  const doneCount = document.getElementById('done-count');
  const totalCount = document.getElementById('total-count');
  const progressFill = document.getElementById('progress-fill');
  const progressPct  = document.getElementById('progress-pct');
 
  function save() {
    localStorage.setItem('taskr_tasks', JSON.stringify(tasks));
  }
 
  function render() {
    taskList.innerHTML = '';
 
    const filtered = tasks.filter(t => {
      if (filter === 'active') return !t.done;
      if (filter === 'done')   return t.done;
      return true;
    });
 
    filtered.forEach(task => {
      const item = document.createElement('div');
      item.className = 'task-item' + (task.done ? ' done' : '');
      item.dataset.id = task.id;
 
      item.innerHTML = `
        <div class="check-wrap" title="Toggle done">
          <svg class="check-icon" viewBox="0 0 12 9">
            <path d="M1 4.5L4.5 8L11 1"/>
          </svg>
        </div>
        <div class="task-text">${escapeHtml(task.text)}</div>
        <button class="del-btn" title="Delete">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      `;
 
      item.querySelector('.check-wrap').addEventListener('click', () => toggleTask(task.id));
      item.querySelector('.del-btn').addEventListener('click', () => deleteTask(task.id, item));
 
      taskList.appendChild(item);
    });
 
    // Stats
    const done = tasks.filter(t => t.done).length;
    const total = tasks.length;
    doneCount.textContent = done;
    totalCount.textContent = total;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);
    progressFill.style.width = pct + '%';
    progressPct.textContent = pct + '%';
 
    // Empty state
    emptyState.classList.toggle('visible', filtered.length === 0);
  }
 
  function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
      taskInput.focus();
      taskInput.style.borderColor = 'var(--accent2)';
      setTimeout(() => taskInput.style.borderColor = '', 600);
      return;
    }
    tasks.unshift({ id: Date.now(), text, done: false });
    save(); render();
    taskInput.value = '';
    taskInput.focus();
  }
 
  function toggleTask(id) {
    const t = tasks.find(t => t.id === id);
    if (t) { t.done = !t.done; save(); render(); }
  }
 
  function deleteTask(id, el) {
    el.classList.add('removing');
    el.addEventListener('animationend', () => {
      tasks = tasks.filter(t => t.id !== id);
      save(); render();
    }, { once: true });
  }
 
  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
 
  addBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keydown', e => { if (e.key === 'Enter') addTask(); });
 
  clearBtn.addEventListener('click', () => {
    tasks = tasks.filter(t => !t.done);
    save(); render();
  });
 
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      btn.classList.add('active');
      filter = btn.dataset.filter;
      render();
    });
  });
 
  render();