import * as React from "react";
import seta from "../assets/seta.png"

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article >
      <button
        style={{
          //borda inferior
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "3px solid #393939",
          //cor
          backgroundColor: "#c5d662",
          //tamanho
          width: "90%",
          //localização do texto dentro do botão
          textAlign: "left",
          paddingLeft: "1%",
          paddingBottom: "1%",
          //fonte
          fontFamily: 'arial', 
          fontStyle: 'normal', 
          fontWeight: 700
        }}

        onClick={toggleAccordion}
      >

        <div
          style={{
          display: "flex",
          alignItems: "left",
          padding: "1% 1%",
          gap: "1vw"
          }}
        >
          <img
            src={seta}
            alt="Seta"
            style={{
              width: "1.5vw",
              height: "1.5vw",
              paddingTop: "1.3vw",
              transition: "transform 0.3s ease",
              transform: isOpen ? "rotate(-90deg)" : "rotate(0deg)",
            }}
          />
          <h2>{question}</h2>
        </div>
      </button>

      {isOpen && <p>{answer}</p>}

    </article>
  );
}

function FAQs() {
  const faqs = [
    {
      question: "Célula é uma igreja?",
      answer: "Não é uma igreja, mas uma forma de pastoreio da igreja. As células funcionam como pequenos grupos que cuidam das pessoas mais de perto em um ambiente descontraído e acolhedor.",
    },
    {
      question: "Quem pode participar de uma célula?",
      answer: "Qualquer pessoa pode participar — não precisa ser membro da igreja, nem mesmo cristão. As células recebem visitantes e curiosos abertamente.",
    },
    {
      question: "Qual é o objetivo das células?",
      answer: "Crescimento espiritual, comunhão entre os irmãos, cuidado mútuo e evangelismo. Também ajudam no acompanhamento mais pessoal dos membros e buscam o alcance de pessoas.",
    },
    {
      question: "O que acontece em uma reunião de célula?",
      answer: "Costuma incluir um momento de louvor (com ou sem música), uma leitura e reflexão bíblica, compartilhamento de experiências, oração, conversa e as vezes momento de comida.",
    },
    {
      question: "E se eu não sou cristão ou não conheço a Bíblia?",
      answer: "Não tem problema! As células também são um espaço para aprender mais sobre Deus, de forma informal e sem julgamentos- são todos bem vindos.",
    },
    {
      question: "Vou precisar falar ou orar em voz alta?",
      answer: "Não é obrigatório. Ninguém é forçado a fazer nada. O ambiente costuma ser acolhedor e respeitoso com o ritmo de cada um.",
    },
    // Additional FAQs can be added here
  ];

  return (
    <div>
      <div>
        <h1 
        style={{ 
          color: "#393939", 
          textAlign: "left",
          padding: "3%",
          fontFamily: 'Roca', 
          fontStyle: 'normal', 
          fontWeight: 700,
          fontSize: "4vw"
       }}
        >
          Dúvidas Frequentes
        </h1>
        {/* texto abaixo do título 
        <p className="text-lg text-center mb-14 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p> */}
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
        <div
        style={{
          padding: "2%"
        }}>
          Sua dúvida não está aqui?
          <a
            href="/support"
          >
            Contate-nos
          </a>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
