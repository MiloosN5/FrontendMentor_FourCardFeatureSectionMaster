import React from 'react' // not needed for newer versions of React
// icons
import Supervisor from '../assets/icon-supervisor.svg';
import TeamBuilder from '../assets/icon-team-builder.svg';
import Karma from '../assets/icon-karma.svg';
import Calculator from '../assets/icon-calculator.svg';

const Card = ({ id }) => {

  // different variants (instances) 
  var bgcolor = (id==0) ? 'bg-cyan-500' : (id==1) ? 'bg-red-500' : (id==2) ? 'bg-orange-500' : 'bg-blue-500';
  var span = (id==0 || id==3) ? 'd:row-span-2' : '';
  var order = (id==0) ? 'd:order-1' : (id==1) ? 'd:order-2' : (id==2) ? 'd:order-4' : 'd:order-3';
  var title = (id==0) ? 'Supervisor' : (id==1) ? 'Team Builder' : (id==2) ? 'Karma' : 'Calculator';
  var desc = 
    (id==0)
      ? 'Monitors activity to identify project roadblocks' 
      : (id==1) ? 'Scans our talent network to create the optimal team for your project' 
      : (id==2) ? 'Regularly evaluates our talent to ensure quality' 
      : 'Uses data from past projects to provide better delivery estimates';
  var iconSrc = (id==0) ? Supervisor : (id==1) ? TeamBuilder : (id==2) ? Karma : Calculator;
  var iconAlt = 
    (id==0) 
      ? "Icon for the Supervisor" 
      : (id==1) ? "Icon for the TeamBuilder" 
      : (id==2) ? "Icon for the Karma" 
      : "Icon for the Calculator";
  
  return (
    <article className={`card ${span} ${order}`}>
      <h3 className='sr-only'>Tool number {id+1}</h3>
      <div className='card__content'>
        <div className={`card__indicator ${bgcolor}`}></div>
        <section className='card__info'>
          <h4 className='card__title'>{title}</h4>
          <p className='card__description'>{desc}</p>
          <div className='mt-auto'>
            <img className="card__icon" src={iconSrc} alt={iconAlt} />
          </div>
        </section>
      </div>
    </article>
  )
}

export default Card