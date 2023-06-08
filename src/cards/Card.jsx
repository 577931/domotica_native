import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styless/styless';
import automatico from './images/automatico.png';
import pasillo from './images/pasillo.png';
import garaje from './images/garaje.png';
import salon from './images/salon.png';
import cocina from './images/cocina.png';
import dormitorio_principal from './images/dormitorio_principal.png';
import dormitorio_invitados from './images/dormitorio_invitados.png';
import aire_acondicionado from './images/aire_acondicionado.png';
import horno from './images/horno.png';
import microondas from './images/microondas.png';
import lavadora from './images/lavadora.png';
import vacio from './images/vacio.png';

const Card = ({ nombre, estado, cambiarEstado }) => {
  let imagen;

  switch (nombre) {
    case 'automatico':
      imagen = automatico;
      break;
    case 'pasillo':
      imagen = pasillo;
      break;
    case 'garaje':
      imagen = garaje;
      break;
    case 'salon':
      imagen = salon;
      break;
    case 'cocina':
      imagen = cocina;
      break;
    case 'dormitorio_principal':
      imagen = dormitorio_principal;
      break;
    case 'dormitorio_invitados':
      imagen = dormitorio_invitados;
      break;
    case 'aire_acondicionado':
      imagen = aire_acondicionado;
      break;
    case 'horno':
      imagen = horno;
      break;
    case 'microondas':
      imagen = microondas;
      break;
    case 'lavadora':
      imagen = lavadora;
      break;
    default:
      // Imagen por defecto si no se encuentra un caso coincidente
      imagen = vacio;
      break;
  }

  const handleCambiarEstado = (nuevoEstado) => {
    cambiarEstado(nuevoEstado, nombre);
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={imagen} style={styles.cardImg} resizeMode="contain" />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{nombre}</Text>
        <Text style={styles.cardSubtitle}>Estado actual: {estado}</Text>
        <TouchableOpacity
          onPress={() => handleCambiarEstado('encendido')}
          style={[styles.btn, styles.btnSuccess]}
        >
          <Text style={styles.btnText}>Encender</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCambiarEstado('apagado')}
          style={[styles.btn, styles.btnDanger]}
        >
          <Text style={styles.btnText}>Apagar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
