import "@/components/objectives/objective.css"
import { useState } from "react"

export const Objective = () => {

    const [text, setText] = useState(false)

    const handleText = () => {
        setText(!text)
    }
    return (
        <section>
            <div>
                <div className="titles">
                <h1 className="title-objective">Objetivos do Projeto</h1>
                <p className="text-center text-gray-400">*aperte em qualquer imagem*</p>
                </div>
                <div className="container-objectives">
                    <div className="card">
                        <img onClick={handleText} className="image-objective" src="/images/papelao.jpg" alt="" />
                        <h3 className={`${text ? "text-on" : "text-off"}`}>Conscientizar a comunidade sobre os impactos do descarte incorreto</h3>
                    </div>
                    <div className="card">
                        <img onClick={handleText} className="image-objective" src="/images/lixeiras.jpg" alt="" />
                        <h3 className={`${text ? "text-on" : "text-off"}`}>Informar sobre quais resíduos podem ser reciclados e como separá-los</h3>
                    </div>
                    <div className="card">
                        <img onClick={handleText} className="image-objective" id="person" src="/images/pessoa.jpg" alt="" />
                        <h3 className={`${text ? "text-on" : "text-off"}`}>Valorizar o papel de cada pessoa na construção de um ambiente mais limpo</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}