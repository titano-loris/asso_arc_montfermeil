import React, { useState, useRef } from "react";//pour stocker l'état des champs du formulaire
import '../styles/Formulaire.scss'
import Banner from "./Banner";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";


function Formulaire() {
    const [name, setName] = useState("");
    const [club, setclub] = useState("");
    const [numero_licence, setnumero_licence] = useState("");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");
    const [sexe, setSexe] = useState("");
    const [category, setCategory] = useState("");
    const [arme, setArme] = useState("");
    const [session, setSession] = useState("");

    const form = useRef();
    const handleSubmit = (event) => {    //sera appelée lorsque l'utilisateur soumettra le formulaire
        event.preventDefault();          //empêche la soumission par défaut du formulaire

        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        console.log(`Name: ${name}\nNumero: ${numero_licence}\nMessage: ${message}\nDate${date}\nClub: ${club}\nSexe: ${sexe}\nCategory: ${category}\nArme: ${arme}\nSession:${session}`);
    };


    return (
        <div>
            <Banner />
            <h1> FORMULAIRE </h1>
            <form ref={form} onSubmit={handleSubmit} className="lmj-formulaire">
                <label className="Form_label">
                    sexe
                    <select type="category" className="form " value={sexe} onChange={(e) => setSexe(e.target.value)}>
                        <option value="">...</option>
                        <option value="homme">homme</option>
                        <option value="femme">femme</option>
                    </select>
                </label>
                <br />
                <label className="Form_label">
                    Nom:
                    <input type="text" className="form " value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label className="Form_label">
                    numero de licence:
                    <input type="text" className="form " value={numero_licence} onChange={(e) => setnumero_licence(e.target.value)} />
                </label>
                <br />
                <label className="Form_label">
                    numero du CIE/CLUB:
                    <input type="text" className="form " value={club} onChange={(e) => setclub(e.target.value)} />
                </label>
                <br />
                <label className="Form_label">
                    Date de début de tir à l'arc:
                    <input type="text" className="form " value={date} onChange={(e) => setDate(e.target.value)} />
                </label>
                <br />
                <label className="Form_label">
                    Catégorie
                    <select type="category" className="form " value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">...</option>
                        <option value="U13">U13</option>
                        <option value="U15">U15</option>
                        <option value="U18">U18</option>
                        <option value="U21">U21</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                        <option value="S3">S3</option>
                    </select>
                </label>
                <br />
                <label className="Form_label">
                    Arme
                    <select type="category" className="form " value={arme} onChange={(e) => setArme(e.target.value)}>
                        <option value="">...</option>
                        <option value="classique">classique</option>
                        <option value="poulies">poulies</option>
                        <option value="barebow">barebow</option>
                    </select>
                </label>
                <br />
                <label className="Form_label">
                    départ de session de tir
                    <select type="category" className="form " value={session} onChange={(e) => setSession(e.target.value)}>
                        <option value="">...</option>
                        <option value="matin">matin</option>
                        <option value="aprés-midi">aprés-midi</option>
                    </select>
                </label>
                <br />
                <label className="Form_label">
                    Message:
                    <textarea value={message} className="form " onChange={(e) => setMessage(e.target.value)} />
                </label>
                <br />
                <button type="submit" className="form " onClick={(e) => alert("demo tableau, la prochaine fois demande a Bruno de ce qu'on fou de ce formulaire")}>Envoyer</button>
            </form>
            <Footer />
        </div>
    );
}

export default Formulaire;