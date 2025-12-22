import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="section-heading">Sobre mim</h2>
          <hr className="my-4" />
          <p className="text-muted mb-4">
            Profissional empenhado e dedicado em desenvolver soluções que possam solucionar problemas reais.
          </p>
          <h3>Minhas Especializações</h3>
          <p className="text-muted">Sou técnico em desenvolvimento de Sistemas, graduado em Análise e Desenvolvimento de Sistemas, e recentemente finalizei a minha pós-graduação Ciência de Dados e Big Data Analytics.</p>
          <h3>Minha Stack</h3>
          <p className="text-muted">Laravel, Next.js, React.js, HTML, CSS, JavaScript, TypeScript, Python, PHP, MySQL, PostgreSQL, MongoDB, Firebase, Supabase</p>
        </div>
      </div>
    </div>
  );
};

export default About;
