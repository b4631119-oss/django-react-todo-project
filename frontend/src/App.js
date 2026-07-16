import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [] // Изначально список пустой
    };
  }

  // Срабатывает при загрузке страницы
  componentDidMount() {
    this.getTodos();
  }

  // Делаем запрос через встроенный fetch
  getTodos() {
    fetch('http://127.0.0.1:8000/api/')
      .then(response => response.json()) // Переводим ответ в JSON
      .then(data => {
        this.setState({ list: data }); // Сохраняем в state
      })
      .catch(err => {
        console.log("Ошибка запроса:", err);
      });
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1 style={{ color: '#2C4A3E' }}>Мой список задач из Django (через fetch):</h1>
        <hr />
        {this.state.list.length === 0 ? (
          <p>Задач пока нет или бэкенд не запущен...</p>
        ) : (
          this.state.list.map(item => (
            <div key={item.id} style={{ margin: '20px 0', padding: '10px', border: '1px solid #eee', borderRadius: '8px' }}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default App;