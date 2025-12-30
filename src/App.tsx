import './style.css';

const App = () => {
  return (
    <div className="background">
      {/* background */}
      <div className="body">
        <div className="leftside">
          <div className='photoblock'></div>
          <div className='contactblock'>
            <p>Ад-Абзатов Сейяр</p>
            <p>Fullstack-разработчик</p>
            <p>Россия, Анапа</p>
          </div>
        </div>
        <div className="rightside">
          <h3>Привет, меня зовут Сейяр Ад-Абзатов</h3>
          <h4>Кратко о себе</h4>
          <p>Начинающий Fullstack-разработчик без опыта коммерческой разработки. Но с опытом разработки собственных pet-проектов. Главная цель - получить позицию Junior разработчика с навыками JavaScript/TypeScript и дальнейшего профессионального роста. Мотивирован изучать новые технологии и решать новые для себя задачи.</p>
          <h4>Навыки:</h4>
          <ul>
            <li>Языки программирования: JavaScript, TypeScript</li>
            <li>Backend: Node.js, Express</li>
            <li>Frontend: React</li>
            <li>Базы данных: PostgreSQL, SQLite</li>
            <li>Инструменты и технологии: Git, GitHub, npm</li>
          </ul>
          <h4>Мои контакты:</h4>
        </div>
      </div>
      <div className="footer">©2025</div>
    </div>
  );
}

export default App;
