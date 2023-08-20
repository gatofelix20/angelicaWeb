import { Injectable } from '@angular/core';

import { AngularFirestore } from "@angular/fire/compat/firestore";
import { CosturaAng } from '../models/CosturaAng';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderCosturaService {


  constructor(private firestore: AngularFirestore) { }

 
agregarUsuario(usuario: any): Promise<any> {
    return this.firestore.collection('usuarios').add(usuario);
}

//Enviar datos a firebase

getUsuarios(): Observable<any> {
  return this.firestore.collection('usuarios', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
}
  


// fooddetails 
  
foodDetails = [
  {
    id:1,
    foodName:"Vestido de Fiesta",
    foodDetails:"Es un  vestido con escote tipo v confeccionado en tafeta de seda en color champagne y rebordado en chantilly color hueso con pedrería la falda es circular completa en gasa blanca.",
    foodPrice:200,
    foodImg:"assets/img/cost-1.jpg"
  },
  {
    id:2,
    foodName:"Vestido Dharma",
    foodDetails:"El traje está realizado en tela de organza natural, en su parte superior presenta un un escote trapezoidal y en el hombro izquierdo tiene aplicaciones realizadas en pétalos de rosa, va ceñido hasta la cadera desde donde se desprende una falta con caída amplia y cola.",
    foodPrice:369,
    foodImg:"assets/img/cost-2.jpg"
  },
  {
    id:3,
    foodName:"Vestido de Noche",
    foodDetails:"Es un vestido largo ceñido al cuerpo hasta la altura de las rodillas, es en forma de strapless, elaborado en tafetán tornasolado, con detalles y aplicaciones en el costado izquierdo. La falda que se desprende tiene vuelo y termina en cola.",
    foodPrice:149,
    foodImg:"assets/img/cost-3.jpeg"
  },
  {
    id:4,
    foodName:"Vestido Dhrama Elegante",
    foodDetails:"Es un diseño en línea de sirena, confeccionado en tela de Chiffón de seda, enteramente recamado en vistosos acetatos tornasolados, presenta un escote de corte corazón y se complementa en la falda con una abertura lateral dándole un aire de feminidad y elegancia.",
    foodPrice:140,
    foodImg:"assets/img/cost-4.jpeg"
  },
  {
    id:5,
    foodName:"Vestido Galabodas",
    foodDetails:"Es un vestido “palabra de Honor”, del cuál se desprende una amplia falda elaborada en gasa de seda, en color amarillo infinito. La parte superior es en strapless con escote en forma de corazón en crepé satinado, en la cintura se detalla un falso cintillo decorado con canutillos mostacilla y en los mismos tonos del material en que está elaborado el vestido.",
    foodPrice:105,
    foodImg:"assets/img/cost-5.jpeg"
  },
  {
    id:6,
    foodName:"Vestido de Dia y Noche",
    foodDetails:"Es un traje ceñido al cuerpo de color blanco con varias aplicaciones tipo Brokat en color plateado alrededor del cuello, complementado con lentejuelas, lleva un cinturón plateado del que se desprende una falda con capas sueltas en tull.",
    foodPrice:219,
    foodImg:"assets/img/cost-6.jpg"
  },
  {
    id:7,
    foodName:"Traje tipico Venezolano",
    foodDetails:"es un vestido de una sola pieza con un volado en la parte superior. Es blanco y consta de detalles de colores para hacerlo más vistoso. Los colores más utilizados son el amarillo, el azul y el rojo. El vestido no suele tener tiras sino que se ajusta en los hombros.",
    foodPrice:219,
    foodImg:"assets/img/cost-7.jpg"
  },
  {
    id:8,
    foodName:"Traje de Baile",
    foodDetails:"Es un vestido largo o corto a las rodillas, con un hermoso estampado, algunos con armador y de seda. Por lo general, las mujeres lo utilizan con alpargatas y en la cabeza, un tocado de diferentes flores y colores. Se utiliza para bailar joropo, desfiles de moda, concursos de cantos, espectáculos llaneros, entre otros.",
    foodPrice:219,
    foodImg:"assets/img/cost-11.jpeg"
  }
]





}


