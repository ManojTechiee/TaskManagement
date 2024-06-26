import {  StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    taskCard: {
      backgroundColor: '#ffffff',
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    taskTitle: {
      fontSize: 18,
      fontWeight: '600',
      textDecorationStyle: 'double',
    },
    taskDescription: {
      fontSize: 14,
      color:"gray",
      marginVertical:10
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
export default styles;