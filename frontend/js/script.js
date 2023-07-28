const tbody = document.querySelector('tbody');

const fetchTask = async () => {
    const response = await fetch('http://localhost:3333/tasks');
    const tasks = await response.json()
    return tasks
}

const createElement = (tag, innerText = '', innerHtml = '') => {

    const element = document.createElement(tag)

    if (innerText) {
        element.innerText = innerText
    }
    if (innerHtml) {
        element.innerHTML = innerHtml
    }

    return element
}
const task = {
    id: 1,
    title: 'testando',
    created_at: '22/05/2023 14:02',
    status: 'concluída'
};

const createSelect = (status) => {

    const options = `
    <option value="pendente">pendente</option>
    <option value="em andamento">em andamento</option>
    <option value="concluida">concluída</option>
    `;

    const select = createElement('select', '', options);
    select.value = status
    return select
}




const createRow = (task) => {

    const { id, title, created_at, status } = task;
    const tr = createElement('tr');
    const tdTitle = createElement('td', title);
    const tdCreatedAt = createElement('td', created_at)
    const tdStatus = createElement('td')
    const tdActions = createElement('td')

    const select = createSelect(status);

    const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>')
    const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>')

    editButton.classList.add('btn-action')
    deleteButton.classList.add('btn-action')

    tdStatus.appendChild(select);

    tdActions.appendChild(editButton)
    tdActions.appendChild(deleteButton)

    tr.appendChild(tdTitle)
    tr.appendChild(tdCreatedAt)
    tr.appendChild(tdStatus)
    tr.appendChild(tdActions)

    tbody.appendChild(tr)


}
createRow(task)