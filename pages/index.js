
const yaml = require('js-yaml');
const fs   = require('fs');
const datasource  = 'data/arcserve.yml'

// Get document, or throw exception on error
function getPageContent(params) {
    try {
        const content = yaml.load(fs.readFileSync(datasource, 'utf8'))
        return content
    } catch (e) {
        console.log(e);
    }
}


function Home(params) { 
    return (
        <>
            <section className="resume">
                <div className="container mx-auto">
                    <h1>E ai! 🤙 sou o<br/>Gustavo Luciano</h1>
                    <p>UX Designer com 10 anos de experiência em Interfaces com background em Front-End, Marketing Digital e Negócios.</p>
                </div>
            </section>

            <section className="about">
                <div className="container mx-auto">
                    <h1>Sobre</h1>
                    <p>Curabitur pulvinar justo ut enim iaculis molestie. Sed pulvinar porttitor elit, nec sollicitudin dui aliquam sed. Nulla auctor molestie scelerisque.</p>
                    <ul>
                        <li><a href="">Curriculum</a></li>
                        <li><a href="">LinkedIn</a></li>                        
                    </ul>
                </div>
            </section>

            <section className="portifolio">
                <div className="container mx-auto">                    
                        <div className="portifolio-item">

                            Landing pages para Campanhas de Ingram Micro Brasil
                        </div>
                        <div className="portifolio-item">
                            Comunicação Integrada
                        </div>
                        rpapp
                        <div className="portifolio-item">
                            Landing pages para Campanhas de Ingram Micro Brasil
                        </div>
                    
                </div>
            </section>

            <section className="contact">
                <div className="container mx-auto">
                    Vamos conversar?
                    <a href="mailto:hello@gstvux.com.br">hello@gstvux.com.br</a>
                </div>
            </section>
        </>
    )
}

export default Home