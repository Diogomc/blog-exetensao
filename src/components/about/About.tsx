import "@/components/about/about.css"
import { MdOutlineRecycling } from "react-icons/md";
export const About = () => {
    return (
        <section>
            <div className="about-project">
                <h2 className="about-title">Sobre o Projeto</h2>
                <MdOutlineRecycling size={50} color="green" />
            </div>
            <div className="container-text-about">
                <div className="text-about">
                    <p>Este projeto nasceu da observação de um problema comum em nossa comunidade: o descarte incorreto de resíduos nas ruas. Ao caminhar pelos bairros, é fácil encontrar papelão, plásticos e outros materiais jogados fora de forma inadequada. Por meio deste photo blog, queremos mostrar essa realidade por meio de imagens e incentivar a mudança de comportamento, valorizando ações simples que fazem a diferença no nosso dia a dia.</p>
                </div>
                <div className="text-about">
                    <p>Além de revelar os impactos do descarte incorreto, o projeto também busca ressaltar o potencial de transformação que existe em cada morador da comunidade. Acreditamos que a informação é uma ferramenta poderosa para a mudança, e que, ao mostrar a realidade através de fotos e relatos, podemos despertar a consciência coletiva.</p>
                </div>
            </div>
        </section>
    )
}