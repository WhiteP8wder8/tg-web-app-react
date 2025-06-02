import React, { useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

export const Form = () => {
  const [country, SetCountry] = useState('');
  const [street, SetStreet] = useState('');
  const [subject, SetSubject] = useState('');
  const {tg} = useTelegram();

  useEffect(() => {
    tg.MainButton.SetParams({
      text: 'Send data'
    });
  }, []);

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    };
  }, [country, street]);
  
  const onChangeCounty = (e) => {
    SetCountry(e.target.value);
  };
  
  const onChangeStreet = (e) => {
    SetStreet(e.target.value);
  };
  
  const onChangeSubject = (e) => {
    SetSubject(e.target.value);
  };
  
  return (
    <div className={'form'}>
      <h3>Enter your data</h3>
      <input onChange={onChangeCounty} value={country} className={'input'} type="text" placeholder={'Country'} />
      <input onChange={onChangeStreet} value={street} className={'input'} type="text" placeholder={'Street'} />
      <select onChange={onChangeSubject} value={subject} className={'select'}>
        <option value={'individual'}>individual entity</option>
        <option value={'legal'}>legal entity</option>
      </select>
    </div>
  );
};
