import React, { useState } from 'react';
import './App.css';

const PrototypeForm = {
  key1: 'Barbara',
  key2: 'Hepworth',
  key3: 'bhepworth@react.com',
  key4: 'love cats'
};

export default function App() {
  const [formData, setFormData] = useState({
    key1: PrototypeForm.key1,
    key2: PrototypeForm.key2,
    key3: PrototypeForm.key3,
    key4: PrototypeForm.key4
  });

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <div className="registration-form">
      <h1>Регистрация пользователя</h1>
      <form>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label htmlFor={key}>{key}</label>
            <input
              type="text"
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
      </form>

      <button onClick={handleButtonClick}>Отобразить данные</button>

      {buttonClicked && (
        <div className="preview">
          <h2>Ваши данные:</h2>
          {Object.keys(formData).map((key) => (
            <p key={key}>
              {key}: {formData[key]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}


