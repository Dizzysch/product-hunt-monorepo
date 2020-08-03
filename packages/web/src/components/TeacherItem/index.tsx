import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://upload.wikimedia.org/wikipedia/en/6/65/Walter_White2.jpg" alt="Walter White" />
                <div>
                    <strong>Walter White</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                        <br /> <br />
                        Um professor que descobriu que está com câncer e busca dar aulas particulares para conseguir seguir com o seu tratamento.
                    </p>
            <footer>
                <p>
                    Preço/hora
                            <strong>R$: 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem