import Menu from "./Menu"
import "../styles/Home.css"
import Logo from "../assets/img/Logo.png" //Import da logo
import PlanoSolo from "../assets/img/PlanoSolo.png"
import PlanoSoloAnual from "../assets/img/PlanoSoloAnual.png"
import PlanoFamilia from "../assets/img/PlanoFamilia.png"
import Video from "../assets/img/video.mp4"

function Home() {
    return (
        <div className="home">
            <header className="header">
                <img width={200} src={Logo} alt="" />
                < Menu />
            </header>
            <nav className="nav1">
                <div className="container">
                    <div className="merchanvideo">
                        <video width={1351} src={Video} autoPlay loop muted playsInline />
                    </div>
                    <div className="merchantexto">
                        <h3>A MELHOR REDE DE ACADEMIA DE ITAQUERA!</h3>
                        <h5>DESCONTOS de 50% OFF na primeira assinatura</h5>
                    </div>
                    <div className="busca">
                        <h2>Academias perto de você</h2>
                        <input type="text" placeholder="digite aqui seu bairro...." />
                    </div>
                    <div className="planos"> {/*PLANOS DA ACADEMIA*/}
                        <div className="planosText">
                            <h2>Conheça Nossos Planos</h2>
                        </div>
                        <div className="container">
                            <div className="card">
                                <div className="cardImg">
                                    <img src={PlanoSolo} alt="Foto de um braço com um halter." />
                                </div>
                                <div className="cardText">
                                    <h4>Plano Solo</h4>
                                    <h5>Mensal</h5>
                                    <p>Apenas você por</p>
                                    <h4>R$ 65,90 por Mês</h4>
                                </div>
                                <div className="cardButton">
                                    <button>Assinar</button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="cardImg">
                                    <img src={PlanoSoloAnual} alt="Foto de homem com um halter." />
                                </div>
                                <div className="cardText">
                                    <h4>Plano Solo</h4>
                                    <h5>Anual</h5>
                                    <p>Apenas você por</p>
                                    <h4>R$ 700,80 por Ano</h4>
                                </div>
                                <div className="cardButton">
                                    <button>Assinar</button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="cardImg">
                                    <img src={PlanoFamilia} alt="Foto de homem com um halter." />
                                </div>
                                <div className="cardText">
                                    <h4>Plano Familia</h4>
                                    <h5>Mensal</h5>
                                    <p>Você +1 pessoa ou mais por</p>
                                    <h4>R$ 85,90 por Mês</h4>
                                </div>
                                <div className="cardButton">
                                    <button>Assinar</button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="cardImg">
                                    <img src={PlanoFamilia} alt="Foto de homem com um halter." />
                                </div>
                                <div className="cardText">
                                    <h4>Plano Familia</h4>
                                    <h5>Anual</h5>
                                    <p>Você +1 pessoa ou mais por</p>
                                    <h4>R$ 1000,90 por Mês</h4>
                                </div>
                                <div className="cardButton">
                                    <button>Assinar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <footer>
                <div className="container">
                    <div className="logofooter">
                        <img width={200} src={Logo} alt="Logo do Site" />
                    </div>
                    <div className="ctt">
                        <h3>Contatos</h3>
                        <ul>
                            <li><a href="#">(11) 9987-3221</a></li>
                            <li><a href="#">itaquerafitness#gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="loc">
                        <h3>Localização</h3>
                        <ul>
                            <li><a href="#">Cep: 08720-070</a></li>
                            <li><a href="#">Rua Josué Alencar - 92 Vila Carmosina</a></li>
                            <li><a href="#">Distrito de Itaquera</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home