import { useState } from "react";

const phrases = new Map([
    ['english', 'Happy Birthday'],
    ['german', 'Alles Gute zum Geburtstag'],
    ['spanish', 'Feliz Cumpleaños'],
    ['afrikaans', 'Veels Geluk']
]);

export function BirthdayTranslator() {
    const [currentLanguage, setCurrentLanguage] = useState('english');
    const [phrase, setPhrase] = useState(phrases.get('english'));

    const handleChangeLanguage = (lang) => {
        setCurrentLanguage(lang);
        setPhrase(phrases.get(lang));
    }
    return (
        <div className="BirthdayTranslator componentBox">
            <h3>{phrase}! ({currentLanguage})</h3>
            <button onClick={() =>

                handleChangeLanguage('english')}>English</button>

            <button onClick={() =>

                handleChangeLanguage('german')}>German</button>

            <button onClick={() =>

                handleChangeLanguage('spanish')}>Spanish</button>

            <button onClick={() => handleChangeLanguage('afrikaans')}>Afrikaans</button>

        </div>
    )
}
// Add this to BirthdayTranslator.jsx and render it in App.jsx
// ++ Add support for another language!

export function BirthdayTranslatorNeater() {
    const [currentPhrase, setCurrentPhrase] = useState({ lang: 'english', phrase: 'Happy Birthday' })

    const handleChangeLanguage = (newLang) => {
        setCurrentPhrase({ lang: newLang, phrase: phrases.get(newLang) });
    }
    return (
        <div className="BirthdayTranslator componentBox">
            <h3>{currentPhrase.phrase}! ({currentPhrase.lang})</h3>
            <button onClick={() =>

                handleChangeLanguage('english')}>English</button>

            <button onClick={() =>

                handleChangeLanguage('german')}>German</button>

            <button onClick={() =>

                handleChangeLanguage('spanish')}>Spanish</button>

            <button onClick={() => handleChangeLanguage('afrikaans')}>Afrikaans</button>

        </div>
    )
}

export function BirthdayTranslatorDynamicButtons() {
    const [currentPhrase, setCurrentPhrase] = useState({ lang: 'english', phrase: 'Happy Birthday' })

    const handleChangeLanguage = (newLang) => {
        setCurrentPhrase({ lang: newLang, phrase: phrases.get(newLang) });
    }

    //for each language,create a button
    //syntax phrases.forEach((value, key) => { ... })
    const buttons = [];
    phrases.forEach((_,lang) => {
        buttons.push(
        <button key={lang} onClick={() => handleChangeLanguage(lang)}>{lang}</button>
        );
    });

    return (
        <div className="BirthdayTranslator componentBox">
            <h3>{currentPhrase.phrase}! ({currentPhrase.lang})</h3>
            {buttons}
        </div>
    )
}