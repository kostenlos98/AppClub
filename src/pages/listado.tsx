﻿import React from 'react';
import {IonPage, IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonHeader} from '@ionic/react';
import '../theme/listado.css';
import { Link } from 'react-router-dom';

/* SOLO PARA VER COMO QUEDA */

interface iJugador {
    nombre: string,
    dni: string,
    categoria: string,
    deporte: string,
}

interface iOpcion {
    nombre: string,
    value: string,
}

const jugadores: iJugador[] = [
    { nombre: 'Ivan Aprea', dni: '12345678', categoria: '1', deporte: 'futbol' },
    { nombre: 'Mariquena Gros', dni: '91011121', categoria: '2', deporte: 'basket' },
    { nombre: 'Martín Casas', dni: '33333333', categoria: '3', deporte: 'futbol' },
    { nombre: 'Pablo Porzio', dni: '44444444', categoria: '4', deporte: 'futbol' },
    { nombre: 'Adolfo Spinelli', dni: '5', categoria: '1', deporte: 'futbol' },
    { nombre: 'Leonel Guccione', dni: '6', categoria: '2', deporte: 'basket' },
    { nombre: '"Bigote" Dematteis', dni: '7', categoria: '3', deporte: 'futbol' },
    { nombre: 'Felipe Evans', dni: '8', categoria: '4', deporte: 'futbol' },
    { nombre: 'Marito Baracus', dni: '9', categoria: '1', deporte: 'futbol' },
    { nombre: 'Benito Mussolinni', dni: '10', categoria: '2', deporte: 'basket' },
];

const deportes: iOpcion[] = [
    { nombre: 'Basket', value: 'basket' },
    { nombre: 'Fútbol', value: 'futbol' },
];

const categorias: iOpcion[] = [
    { nombre: '1° Femenina', value: '1F' },
    { nombre: '1° Masculina', value: '1M' },
    { nombre: '5°', value: '5' },
    { nombre: '7° Mixta', value: '7' },
    { nombre: '9° Mixta', value: '9' },
    { nombre: '11° Mixta', value: '11' },
    { nombre: '13° Mixta', value: '13' },
    { nombre: '15° Mixta', value: '15' },
]

/**************************/

const Listado: React.FC = () => {

    const renderJugadores = () => {
        return (
            jugadores.map((jugador: iJugador) => (
                //<Link to={{ pathname: `/listado/jugador/${jugador.dni}`, state: jugador }}>
                <IonItem key={jugador.dni}>
                    
                    <IonLabel>
                        <h2>{jugador.nombre}</h2>
                        <h3 className = 'datos'>{'DNI: ' + jugador.dni + ' | Categoría: ' + jugador.categoria}</h3>
                    </IonLabel>
                   
                </IonItem>
                //<>
            )));
    }

    const renderOpciones = (opciones: iOpcion[]) => {
        return (
            opciones.map((opcion: iOpcion) => (
                <IonSelectOption value={opcion.value} key={opcion.value}>{opcion.nombre}</IonSelectOption>
            )));
    }

    const FiltroCategoria: React.FC = () => {
        return (
            <IonSelect interface='action-sheet' placeholder='Categoría'>
                {renderOpciones(categorias)}
            </IonSelect>
            );
    }

    const FiltroDeporte: React.FC = () => {
        return (
            <IonSelect interface='action-sheet' placeholder='Deporte'>
                {renderOpciones(deportes)}
            </IonSelect>
        );
    }

    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonItem>
                        <IonLabel>Filtros</IonLabel>
                        <FiltroDeporte />
                        <FiltroCategoria />
                    </IonItem>
                </IonHeader>
                <IonList>
                    {renderJugadores()}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Listado;
/*UTF8*/

/* AGREGAR 
   - Posibilidad de deshacer filtro elegido, ver ion-chips
   - Filtros quede flotando?
 */