import homeCelulas from '../assets/imgHome.jpg';

export default function HomeCelulas() {
  return (
   
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "99vw",
          overflow: "hidden",
          fontFamily: 'Roca',
        }}
      >

        <div
          style={{
            backgroundImage: `url(${homeCelulas})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 0,
          }}
        />

        {/* Estilos animados */}
        <style>{`
          .marquee {
            position: absolute;
            width: 200%;
            display: flex;
            white-space: nowrap;
            overflow: hidden;
            font-size: 2rem;
            font-weight: 500;
            color: white;
            pointer-events: none;
            z-index: 1;

          }

          .titulo{
            position: absolute;
            width: 200%;
            display: flex;
            white-space: nowrap;
            overflow: hidden;
            font-size: 6rem;
            font-weight: 500;
            color: white;
            pointer-events: none;
            z-index: 1;
            padding: 3%
          }

          .marquee-inner {
            display: inline-block;
            animation: scroll-left 8s linear infinite;
          }

          .marquee.reverse .marquee-inner {
            animation: scroll-right 8s linear infinite;
          }

          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>

        {/* Texto correndo para a direita (embaixo) */}
        <div className="marquee reverse" 
          style={{ 
            bottom: "1%",
            backgroundColor: "#8cd0db",
            padding: "2%"
            }}>
          <div className="marquee-inner">
            Mateus 28:19 • IDE •&nbsp;
            Mateus 28:19 • IDE •&nbsp;
            Mateus 28:19 • IDE •&nbsp;
            Mateus 28:19 • IDE •&nbsp;
          </div>
          <div className="marquee-inner" aria-hidden="true">
            Mateus 28:19 • IDE •&nbsp;
            Mateus 28:19 • IDE •&nbsp;
            Mateus 28:19 • IDE •&nbsp;
            Mateus 28:19 • IDE •&nbsp;
          </div>
        </div>

        <div className="titulo" style={{ top: "10%" }}>   
           Células
        </div>

      </div>
  );
}
