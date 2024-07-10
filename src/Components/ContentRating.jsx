
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRating: 0,
        handleLike:() => {
            this.setState((prevState) => ({
                likes: prevState.likes + 1,
                totalRating: prevState.totalRating + 1
            }));
        },
        
        handleDislike:() => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes + 1,
                totalRating: prevState.totalRating + 1
            }));
        }
    };
  }
  render() {
    return (
     <div className='content-rating'>
        <strong>En el reino del frontend brilló,</strong>
        <p>Un héroe llamado React surgió.</p>
        <p>Componentes y Hooks en su arsenal,</p>
        <p>Transformando la web de forma genial.</p>
        <br/>
        <strong>Con JSX sus páginas crea,</strong>
        <p>Un lenguaje mixto que en sí se enreda.</p>
        <p>JavaScript y HTML en un solo lienzo,</p>
        <p>Dibujan interfaces con mucho consenso.</p>
        <br/>
        <strong>Estado y propiedades, en armonía,</strong>
        <p>Componentes funcionales llenos de energía.</p>
        <p>Con Hooks maneja el ciclo vital,</p>
        <p>Simplificando el código, todo más natural.</p>
        <br/>
        <strong>Virtual DOM su magia despliega,</strong>
        <p>Actualiza la vista sin que uno lo vea.</p>
        <p>Un rendimiento ágil, sin parpadear,</p>
        <p>La experiencia del usuario, mejora sin cesar.</p>
        <br/>
        <strong>En el vasto océano de la web profunda,</strong>
        <p>React navega, su luz no se confunda.</p>
        <p>Con cada actualización, nuevas fronteras,</p>
        <p>Innovando y creciendo de maneras sinceras.</p>
        <br/>
        <strong>Así es React, un faro en el desarrollo,</strong>
        <p>Un framework que guía, con firmeza y arrojo.</p>
        <p>En cada proyecto, su esencia se siente,</p>
        <p>Haciendo del frontend, un arte, evidente.</p>
        <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handleLike}>
                Like ({this.state.likes})
            </button>
            <button className='dislike-button' onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
            </button>
            <p>Total Ratings: {this.state.totalRating}</p>
        </div>
     </div>
    );
  }
}

export default ContentRating;
