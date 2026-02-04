import { useState } from 'react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqItems = [
    { id: 1, question: "Qual o valor da sessão?", answer: "Consulte o valor da sessão diretamente com meu time via WhatsApp." },
    { id: 2, question: "Você aceita plano de saúde?", answer: "Não, mas emito Nota Fiscal e você pode pedir reembolso do valor para o seu convênio. De acordo com a legislação atual, os convênios são obrigados a reembolsarem os valores de consultas particulares dos seus segurados." },
    { id: 3, question: "Quanto tempo dura a sessão?", answer: "50 minutos por sessão." },
    { id: 4, question: "Qual é a frequência das sessões?", answer: "Em nossa primeira sessão eu irei avaliar e combinar o melhor acompanhamento para você. A frequência pode ser 2x por semana, 1x por semana ou 1x a cada 15 dias." },
    { id: 5, question: "Em quanto tempo terei alta?", answer: "O tempo de duração do tratamento irá variar de acordo com o seu comprometimento, demanda, contexto, sintomas e objetivos." },
    { id: 6, question: "Preciso baixar algum aplicativo?", answer: "Não. Você irá receber todas as informações e links via WhatsApp após a marcação da primeira sessão." },
    { id: 7, question: "Quais são os horários disponíveis?", answer: "Minha agenda funciona de segunda a sexta entre 9h e 18h. Consulte a disponibilidade clicando no botão 'Iniciar meu Atendimento'." },
    { id: 8, question: "Que abordagem você utiliza?", answer: "Minha abordagem terapêutica é baseada em evidências, utilizando Terapias Cognitivo-Comportamentais (TCC) e técnicas integrativas para promover mudanças eficazes e duradouras." }
  ];

  const services = [
    { title: "Relacionamento", description: "Trabalhamos para melhorar comunicação, fortalecer autoconfiança e construir vínculos mais saudáveis." },
    { title: "Desenvolvimento Pessoal", description: "Identificamos o que está te impedindo de avançar e desenvolvemos habilidades para fortalecer sua autoconfiança." },
    { title: "Procrastinação", description: "Quebramos o ciclo de autossabotagem e desenvolvemos estratégias práticas para retomar o controle da sua vida." },
    { title: "Ansiedade", description: "Entendemos o tipo de ansiedade que você enfrenta e trabalhamos para equilibrar emoções e viver com mais confiança." },
    { title: "Depressão", description: "Desenvolvemos estratégias para restaurar seu bem-estar emocional e trazer de volta a esperança e alegria." },
    { title: "TDAH", description: "Realizamos avaliação detalhada e desenvolvemos estratégias específicas para gerenciar seus sintomas." }
  ];

  const benefits = [
    { title: "Constância no processo", description: "Facilita a regularidade das sessões, essencial para mudanças reais e sustentáveis." },
    { title: "Otimização de tempo", description: "Você consegue se organizar mais facilmente para sempre participar da sessão." },
    { title: "Comodidade e flexibilidade", description: "Você fica livre para estar em qualquer lugar do mundo para fazer a sessão." },
    { title: "Atendimento global", description: "Atendimento para brasileiras em qualquer lugar do mundo." }
  ];

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <>
      <style>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        background-color: #FAF9F6;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #333;
      }
    `}</style>

      <header className="navbar" style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <div className="logo" style={{ fontWeight: "bold", letterSpacing: "2px", color: "#B89470", fontSize: "1.5rem" }}>
          Ananda Motta
        </div>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "1.5rem", alignItems: "center" }}>
            {["Home", "Sobre Mim", "Posso te ajudar?", "Dúvidas Frequentes"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    textDecoration: "none",
                    color: "#666",
                    fontSize: "14px",
                    textTransform: "uppercase"
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section
        id="inicio"
        style={{
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20%",
          backgroundColor: "#FAF9F6",
          gap: "2rem",
          flexWrap: "wrap"
        }}
      >
        {/* TEXTO */}
        <div style={{ maxWidth: "520px" }}>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              color: "#8FAF7C",
              fontWeight: "700",
              lineHeight: "1.25",
              marginBottom: "20px"
            }}
          >
            PSICÓLOGA ONLINE<br />
            ESPECIALIZADA EM<br />
            MULHERES EXAUSTAS
          </h1>

          <p
            style={{
              fontSize: "15px",
              color: "#8FAF7C",
              marginBottom: "20px"
            }}
          >
            Para mulheres que fazem muito, sentem demais e vivem no limite.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#6f6f6f",
              lineHeight: "1.7",
              marginBottom: "35px"
            }}
          >
            Aqui, a terapia é <strong>estruturada</strong> e baseada em evidências,
            com foco em <strong>clareza emocional</strong>,{" "}
            <strong>regulação dos sintomas</strong> e{" "}
            <strong>estratégias práticas</strong> para a vida real — mesmo com pouco
            tempo, muita responsabilidade e quase nenhuma energia sobrando.
          </p>

          <a
            href="https://wa.me/55999999999"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#FFA000",
              color: "#fff",
              padding: "16px 32px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "15px",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 20px rgba(255,160,0,0.25)"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#e89000";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#FFA000";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Quero organizar minha vida agora!
          </a>
        </div>

        {/* IMAGEM */}
        <div
          style={{
            position: "relative",
            maxWidth: "420px",
            width: "100%",
          }}
        >
          {/* Shape decorativo */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              right: "-12px",
              bottom: "-12px",
              borderRadius: "28px",
              background: "linear-gradient(145deg, #9CB58B, #8FAF7C)",
              opacity: 0.9,
              zIndex: 0
            }}
          />

          {/* Sombra suave */}
          <div
            style={{
              position: "absolute",
              inset: "0",
              borderRadius: "28px",
              boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
              zIndex: 0
            }}
          />

          {/* Imagem */}
          <img
            src="/foto-ananda.jpeg"
            alt="Psicóloga Ananda"
            style={{
              width: "100%",
              borderRadius: "24px",
              position: "relative",
              zIndex: 1,
              objectFit: "cover",
              backgroundColor: "#eee"
            }}
          />
        </div>

      </section>


      {/* Sobre Section */}
      <section
        id="sobre"
        className="section-white"
        style={{
          padding: "100px 10%",
          backgroundColor: "white",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "28px",
            marginBottom: "20px",
            color: "#1a1a1a"
          }}>
            Quem é a Psicóloga Ananda Motta
          </h2>

          <div style={{
            width: "50px",
            height: "2px",
            background: "#B89470",
            margin: "0 auto 30px"
          }}></div>

          <p className="quote" style={{
            fontSize: "22px",
            fontStyle: "italic",
            maxWidth: "800px",
            margin: "0 auto 40px",
            color: "#555"
          }}>
            "Meu trabalho é te ajudar a transformar o caos interno em clareza, direção e ações possíveis."
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", textAlign: "left" }}>
            <div>
              <p style={{
                fontSize: "1.125rem",
                lineHeight: "1.7",
                marginBottom: "1.5rem",
                color: "#555"
              }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta ullam debitis enim minus dolore, perferendis quisquam, repellat numquam tenetur ad recusandae sint quo, minima cum aperiam maiores inventore sunt.
              </p>
              <p style={{
                fontSize: "1.125rem",
                lineHeight: "1.7",
                marginBottom: "1.5rem",
                color: "#555"
              }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente perspiciatis et ipsum vitae soluta, possimus reiciendis, optio aliquid necessitatibus, voluptatem ipsam dolorum! Molestiae, est. Perferendis et cupiditate cumque quidem enim.
              </p>
            </div>
            <div style={{
              backgroundColor: "#F5F2ED",
              padding: "2.5rem",
              borderRadius: "15px",
              border: "1px solid #eee"
            }}>
              <h3 style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "#1a1a1a"
              }}>
                Formação e Credenciais
              </h3>
              <p style={{
                fontSize: "1.125rem",
                lineHeight: "1.7",
                color: "#555",
                marginBottom: "1rem"
              }}>
                • CRP 00/00000<br />
                • Formação em Terapias Cognitivo-Comportamentais<br />
                • Certificação em -<br />
                • Especialização em -<br />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section
        id="servicos"
        className="section-beige"
        style={{
          padding: "100px 10%",
          backgroundColor: "#F5F2ED",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "28px",
            marginBottom: "20px",
            color: "#1a1a1a"
          }}>
            Como posso te ajudar
          </h2>

          <div style={{
            width: "50px",
            height: "2px",
            background: "#B89470",
            margin: "0 auto 30px"
          }}></div>

          <div className="services-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginTop: "50px"
          }}>
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                style={{
                  backgroundColor: "white",
                  padding: "40px 25px",
                  borderRadius: "15px",
                  border: "1px solid #eee",
                  fontWeight: "600",
                  textAlign: "center",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h3 style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "#B89470"
                }}>
                  {service.title}
                </h3>
                <p style={{
                  lineHeight: "1.6",
                  color: "#666",
                  fontWeight: "normal",
                  fontSize: "15px"
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios da Terapia Online */}
      <section
        className="section-white"
        style={{
          padding: "100px 10%",
          backgroundColor: "white",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "28px",
            marginBottom: "20px",
            color: "#1a1a1a"
          }}>
            Por que fazer terapia online?
          </h2>

          <div style={{
            width: "50px",
            height: "2px",
            background: "#B89470",
            margin: "0 auto 30px"
          }}></div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "40px",
            textAlign: "left"
          }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1.5rem",
                backgroundColor: "#F5F2ED",
                padding: "30px",
                borderRadius: "15px",
                border: "1px solid #eee"
              }}>
                <div style={{
                  backgroundColor: "#B89470",
                  color: "white",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontWeight: "bold",
                  fontSize: "1.25rem"
                }}>
                  {index + 1}
                </div>
                <div>
                  <h3 style={{
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                    color: "#1a1a1a"
                  }}>
                    {benefit.title}
                  </h3>
                  <p style={{
                    lineHeight: "1.6",
                    color: "#666"
                  }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: "100px 10%",
        backgroundColor: "#B89470",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "28px",
          marginBottom: "20px",
          color: "white"
        }}>
          Vamos juntas organizar a sua vida?
        </h2>

        <div style={{
          width: "50px",
          height: "2px",
          background: "white",
          margin: "0 auto 30px",
          opacity: "0.8"
        }}></div>

        <p style={{
          fontSize: "18px",
          marginBottom: "40px",
          color: "rgba(255,255,255,0.95)",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: "1.6"
        }}>
          Se você sente que chegou no limite e precisa de um acompanhamento sério, humano e prático, estou aqui para caminhar com você.
        </p>
        <a
          href="https://wa.me/55999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "white",
            color: "#B89470",
            padding: "18px 40px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            display: "inline-block",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
          }}
        >
          Iniciar meu Atendimento
        </a>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="section-beige"
        style={{
          padding: "100px 10%",
          backgroundColor: "#F5F2ED",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "28px",
            marginBottom: "20px",
            color: "#1a1a1a"
          }}>
            Dúvidas frequentes
          </h2>

          <div style={{
            width: "50px",
            height: "2px",
            background: "#B89470",
            margin: "0 auto 30px"
          }}></div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            textAlign: "left"
          }}>
            {faqItems.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  overflow: "hidden",
                  border: "1px solid #eee"
                }}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  style={{
                    width: "100%",
                    padding: "25px 30px",
                    textAlign: "left",
                    backgroundColor: "white",
                    border: "none",
                    borderBottom: activeFaq === item.id ? "1px solid #eee" : "none",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    if (activeFaq !== item.id) {
                      e.currentTarget.style.backgroundColor = "#F5F2ED";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeFaq !== item.id) {
                      e.currentTarget.style.backgroundColor = "white";
                    }
                  }}
                >
                  {item.question}
                  <span style={{
                    fontSize: "1.5rem",
                    color: "#B89470",
                    transition: "transform 0.3s ease",
                    transform: activeFaq === item.id ? "rotate(45deg)" : "rotate(0)"
                  }}>
                    +
                  </span>
                </button>
                {activeFaq === item.id && (
                  <div style={{
                    padding: "25px 30px",
                    borderTop: "1px solid #eee",
                    backgroundColor: "#F5F2ED"
                  }}>
                    <p style={{
                      lineHeight: "1.6",
                      color: "#666",
                      margin: 0,
                      fontSize: "16px"
                    }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer style={{
        padding: "60px 10%",
        backgroundColor: "#1a1a1a",
        color: "white",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{
            marginBottom: "30px",
            lineHeight: "1.6",
            color: "rgba(255,255,255,0.8)",
            fontSize: "15px",
            padding: "20px",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderRadius: "10px"
          }}>
            <strong>Atenção:</strong> Este site não oferece atendimento imediato a pessoas em crise suicida.
            Em caso de crise ligue para o CVV – 188. Em caso de emergência, procure o hospital mais próximo.
            Havendo risco de morte, ligue imediatamente para o SAMU (telefone 192).
          </p>
          <p style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "10px"
          }}>
            Psicóloga Amanda Barbacena • CRP 01/26914<br />
            Atendimento online para mulheres • Terapia baseada em evidências
          </p>
          <p style={{
            fontSize: "12px",
            marginTop: "30px",
            color: "rgba(255,255,255,0.5)"
          }}>
            Todos os direitos reservados {new Date().getFullYear()}©
          </p>
        </div>
      </footer> */}

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 8%;
          background: white;
          border-bottom: 1px solid #eee;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        
        .btn-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(184, 148, 112, 0.3);
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
      `}</style>
    </>
  );
}