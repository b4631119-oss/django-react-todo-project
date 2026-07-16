# 🚀 Fullstack Django + React To-Do Application

Веб-приложение для управления списком задач (To-Do), построенное на связке современного бэкенда **Django REST Framework (DRF)** и интерактивного фронтенда на **React**. 

Этот проект демонстрирует классическую архитектуру взаимодействия клиент-сервер (Client-Server Architecture) через REST API.

---

## 🛠️ Технологический стек

* **Бэкенд:** Python, Django, Django REST Framework, SQLite, django-cors-headers.
* **Фронтенд:** JavaScript, React, Axios / Fetch API, HTML5/CSS3.
* **Окружение:** Linux Fedora (KDE Plasma).

---

## 📦 Архитектура проекта

Проект разделен на две независимые части, которые общаются между собой «по воздуху» через HTTP-запросы:
1. **`backend/`** — серверная часть на Django. Работает на порту `8000`, отдаёт данные из базы в формате JSON и предоставляет удобную админ-панель.
2. **`frontend/`** — клиентская часть на React. Работает на порту `3000`, отправляет запросы к API бэкенда и динамически отрисовывает интерфейс.

---

## 🚀 Инструкция по запуску локально

### 1. Клонирование репозитория
```bash
git clone [https://github.com/YOUR_GITHUB_USERNAME/django-react-todo-project.git](https://github.com/YOUR_GITHUB_USERNAME/django-react-todo-project.git)
cd django-react-todo-project


Настройка Бэкенда (Django)

Откройте новый терминал и перейдите в папку бэкенда:
Bash
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install django djangorestframework django-cors-headers
python manage.py migrate
python manage.py runserver

Бэкенд запустится на: http://127.0.0.1:8000/
```
```bash
Создание Администратора (Django Admin)

В том же терминале бэкенда (остановив сервер через Ctrl + C):
Bash

python manage.py createsuperuser

После создания суперпользователя снова запустите сервер (python manage.py runserver) и управляйте задачами по адресу http://127.0.0.1:8000/admin/.
```

```bash
Настройка Фронтенда (React)

Откройте второй терминал, перейдите в папку фронтенда и запустите клиент:
Bash

cd frontend
npm install
npm start

Фронтенд автоматически откроется на: http://localhost:3000/
```

```bash
Как работает связь (API)

    Компонент React (App.js) после монтирования в браузер делает асинхронный GET-запрос:
    JavaScript

    fetch('[http://127.0.0.1:8000/api/](http://127.0.0.1:8000/api/)')

    Django REST Framework обрабатывает запрос, сериализует модели задач из БД SQLite в формат JSON и отправляет ответ клиенту.

    React принимает JSON-данные, сохраняет их в state.list и рендерит список задач на экране с помощью метода .map().
```