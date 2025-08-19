import Celula1 from "../assets/Celula1.png";
import Celula2 from "../assets/Celula2.png";
import Celula3 from "../assets/Celula3.png";
import Celula4 from "../assets/Celula4.png";
import "./ApresentacaoBotao.css";

export default function HomeCelulas() {
  return (
    <div
    style={{
        backgroundColor: "#f6efe9",
    }}>
      <div>
         {/* Titulo */}
        <h1
          style={{
            color: "#393939",
            textAlign: "left",
            padding: "3%",
            fontFamily: "Roca",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "4vw",
          }}
        >
          O que são <br></br>Células?
        </h1>

        {/* Versiculo */}
        <div style={{ 
            display: "flex",
            flexDirection: "row",
            padding: "5%",
            color: "#393939",
            gap: "2vw", 
            textAlign: "left",
            fontSize: "1.5vw",
            }}
        >
            <p>
          <i>"Todos os dias, unidos, se reuniam no pátio do Templo. E nas suas casas partiam o pão e participavam das refeições com alegria 
          e humildade. Louvavam a Deus por tudo e eram estimados por todos. E cada dia o Senhor juntava ao grupo as pessoas que iam sendo 
          salvas.”</i> <br></br>
            Atos 2:46-47
            </p>
            <img
            src={Celula1}
            alt="Células - Imagem 1"
            height={"480vw"}
            ></img>
             <div className='botaoTestem'
               style={{
      marginTop: "10px",
      backgroundColor: "#c5d662",
      border: "none",
      padding: "10px 15px",
      fontWeight: "bold",
      cursor: "pointer",
    }}>
        <button className='botaoFacaParte' onClick={() => {
            const section = document.getElementById("contato");
            section?.scrollIntoView({ behavior: "smooth" });
        }}>Faça Parte</button>
      </div>
     </div>

        {/* Descrição */}
            <div style={{ 
            display: "flex",
            flexDirection: "row",
            padding: "5%",
            color: "#393939",
            gap: "2vw",
            textAlign: "left",
            fontSize: "1.5vw",
            }}
        >
              <img
            src={Celula2}
            alt="Células - Imagem 1"
            height={"240vw"}  
            ></img>
            <p>
          Células são reuniões entre pessoas que já conhecem Jesus e quem ainda é iniciantes na fé. <br></br>
        Por meio das células, as pessoas se tonam mais parecidas com Jesus, estudam a Bíblia e oram umas pelas outras. 
        Um grupo como esse tem o potencial de apresentar a simplicidade do Evangelho às pessoas e é um espaço de profunda 
        transformação pelo Espírito Santo. 
            </p>
          
            </div>

            
        {/* Outro texto */}
            <div style={{ 
            display: "flex",
            flexDirection: "row",
            padding: "5%",
            color: "#393939",
            gap: "2vw",
            textAlign: "left",
            fontSize: "1.5vw",
            }}
        >
            <p>
                <i>Os benefícios que uma célula te traz!</i> <br></br>
          Alguém que frequenta uma célula cristã traz muitos benefícios para sua vida social, pois tem encontro com pessoas,
        cria vínculos e fortalece laços com os outros membros.<br></br>
        Além disso, o participante tem espaço para o estudo da Bíblia e a oportunidade de viver e experimentar uma vida de profunda 
        intimidade com Deus, desenvolvendo sua fé de forma prática e constante.
            </p>
          <img
            src={Celula3}
            alt="Células - Imagem 1"
            height={"240vw"}  
            ></img>
            </div>

            
        {/* Outro texto */}
            <div style={{ 
            display: "flex",
            flexDirection: "row",
            padding: "5%",
            color: "#393939",
            gap: "2vw",
            textAlign: "left", 
            fontSize: "1.5vw",
            }}
        >
              <img
            src={Celula4}
            alt="Células - Imagem 1"
            height={"330vw"}  
            ></img>
            <p>
          Quanto à vida intrapessoal, as células são ambientes de acolhimento e descoberta, onde cada pessoa tem a oportunidade de 
          servir e desenvolver seus talentos em um espaço seguro e encorajador.<br></br>
          Por isso, a célula se torna um lugar de apoio mútuo, onde todos podem compartilhar suas experiências, crescer espiritualmente 
          e encontrar suporte na caminhada cristã com a ajuda dos demais participantes.
            </p>
          
            </div>
        </div>
      </div>
   
  );
}

