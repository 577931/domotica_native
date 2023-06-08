import React from 'react';
import { View } from 'react-native';
import Card from './Card';
import styles from '../styless/styless';

const CardRow = ({ cards, setCards }) => {
  const obtenerEstado = (nombre) => {
    fetch(`http://psp.grupito8.com/api/index.php?action=estado&name=${nombre}`)
      .then(response => response.json())
      .then(data => {
        const updatedCards = cards.map(card => {
          if (card.nombre === nombre) {
            return {
              ...card,
              estado: data.estado
            };
          }
          return card;
        });
        setCards(updatedCards);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleCambiarEstado = (nuevoEstado, nombre) => {
    fetch('http://psp.grupito8.com/api/index.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `action=cambiar&name=${nombre}&estado=${nuevoEstado}`,
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        // Actualizar el estado en la interfaz después de recibir la respuesta
        obtenerEstado(nombre); // Obtener el estado actualizado desde la API
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <View style={styles.cardContainer}>
      {cards.map(card => (
        <Card
          key={card.nombre}
          nombre={card.nombre}
          estado={card.estado}
          cambiarEstado={handleCambiarEstado}
        />
      ))}
    </View>
  );
};

export default CardRow;
