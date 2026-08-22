/*Componente pai 
- Importa initialDefects e o transforma em estado React: useState(initialDefects). A partir daqui, quem manda nos 
dados é o App, não mais o arquivo data/
- Define handleIncrement(id): recebe um id, mapeia o array defects e incrementa o count do item correspondente, 
criando um novo array e chamando setDefects.
- Cálcula totalDefects somando todos os count via reduce - recalculando a cada renderização
- Renderiza os componentes filhos passando dados via props:
  . Header recebe só o title
  . DefectList recebe defects (o array) e onIncrement (a função)
  . Summary recebe totalDefects 
*/
import React, {useState } from 'react';
import Header from './components/Header';
import DefectList from './components/DefectList';
import Summary from './components/Summary';
import { initialDefects } from './data/defectData';
import './style.css';

export default function App() {
  //Passa o array importado como valor inicial do estado
  const [defects, setDefects] = useState(initialDefects);

  const handleIncrement = (id) => {
    const updateDefects = defects.map((defect) => {
      if (defect.id === id){
        return { ...defect, count: defect.count + 1 };
      }
      return defect;
    });
    setDefects(updateDefects);
  };

  const totalDefects = defects.reduce((sum, defect) => sum + defect.count, 0);

  return(
    <div className='app-container'>
      <Header title="Controle de Defeitos - Linha de Produção"/>
      <DefectList defects={defects} onIncrement={handleIncrement} />
      <Summary totalDefects={totalDefects} />
    </div>
  );
}
