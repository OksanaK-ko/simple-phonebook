import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import s from './App.module.css';
import { CSSTransition } from 'react-transition-group';
import '../../css/animation.css';

const App = () => (
  <div className={s.container}>
    <CSSTransition in={true} appear={true} classNames="fade" timeout={500}>
      <h1 className={s.title}>Phonebook</h1>
    </CSSTransition>
    <ContactForm />

    <CSSTransition in={true} classNames="fade" timeout={500} unmountOnExit>
      <Filter />
    </CSSTransition>

    <CSSTransition in={true} classNames="fade" timeout={250} unmountOnExit>
      <ContactList />
    </CSSTransition>
  </div>
);

export default App;
