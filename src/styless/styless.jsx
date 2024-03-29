import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF4E3',
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: '30px',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    width: '45%',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10, // Ajusta el valor según el redondeo deseado
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardStatus: {
    fontSize: 14,
    color: '#888',
  },
  header: {
    backgroundColor: '#81a9c5',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centrado: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    color: 'white',
    margin: 0,
  },
  logo: {
    height: 50,
    marginRight: 20,
  },
  headerTitle: {
    margin: 0,
    fontWeight: 'bold',
  },
  beta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  betaText: {
    color: 'white',
    margin: 0,
    fontStyle: 'bold',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImg: {
    width: 200,
    height: 200,
    maxWidth: '100%',
    maxHeight: '100%',
  },
  cardBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 15,
    color: '#888',
  },
  btn: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  squareButton: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  btnSuccess: {
    backgroundColor: 'green',
  },
  btnDanger: {
    backgroundColor: 'red',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default styles;
