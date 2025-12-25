import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto px-4 text-center">

      <h2 className="text-3xl font-bold mb-4">Sobre mim</h2>
      <hr className="w-16 h-1 mx-auto my-6 bg-gray-300 border-0 rounded" />
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 mb-8">
          Desenvolvedor web com experiência em aplicações em produção, atuando do backend ao frontend. Domínio em PHP, JavaScript, TypeScript, Laravel, Next.js e bancos de dados relacionais e NoSQL. Foco em código limpo, performance e soluções alinhadas ao cliente.
        </p>
        <h3 className="text-2xl font-bold mb-4">Formação</h3>
        <p className="text-gray-600 mb-8">
          Técnico em Desenvolvimento de Sistemas, graduado em Análise e Desenvolvimento de Sistemas e pós-graduado em Ciência de Dados e Big Data Analytics.
          </p>
        <h3 className="text-2xl font-bold mb-4">Minha Stack</h3>
        <p className="text-gray-600">
          PHP | JavaScript | TypeScript | Laravel | Next.js | MySQL | MongoDB | PostgreSQL | Firebase | Supabase | RESTful APIs</p>
      </div>
    </div>
  );
};

export default About;
