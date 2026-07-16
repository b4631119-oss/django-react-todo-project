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

Проект разделен на две независимые части, которые общаются между собой по протоколу HTTP:
1. **`backend/`** — серверная часть на Django. Работает на порту `8000`, отдаёт данные из базы в формате JSON и предоставляет встроенную админ-панель.
2. **`frontend/`** — клиентская часть на React. Работает на порту `3000`, отправляет запросы к API бэкенда и динамически отрисовывает интерфейс.

---

## 🚀 Инструкция по запуску локально

### 1. Клонирование репозитория
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/django-react-todo-project.git
cd django-react-todo-project
```

### 2. Настройка Бэкенда (Django)
Откройте терминал и перейдите в папку бэкенда:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install django djangorestframework django-cors-headers
python manage.py migrate
python manage.py runserver
```
Бэкенд запустится на: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

### 3. Создание Администратора (Django Admin)
В терминале бэкенда (остановив сервер через `Ctrl + C`):
```bash
python manage.py createsuperuser
```
После создания суперпользователя снова запустите сервер (`python manage.py runserver`). Панель управления доступна по адресу: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

### 4. Настройка Фронтенда (React)
Откройте **второй** терминал, перейдите в папку фронтенда и запустите клиент:
```bash
cd frontend
npm install
npm start
```
Фронтенд автоматически откроется на: [http://localhost:3000/](http://localhost:3000/)

---

## 🔌 Как работает связь (API)

1. **Запрос:** Компонент React (`App.js`) после монтирования в браузер делает асинхронный GET-запрос:
   ```javascript
   fetch('http://127.0.0.1:8000/api/')
   ```
2. **Обработка:** Django REST Framework принимает запрос, извлекает модели задач из БД SQLite, сериализует их в формат JSON и отправляет ответ обратно.
3. **Рендеринг:** React принимает JSON-данные, сохраняет их в состояние (`state.list`) и динамически выводит список задач на экран с помощью метода `.map()`.
