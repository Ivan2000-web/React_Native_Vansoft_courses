import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input(props: TextInputProps) {
    return (
        <TextInput style={styles.input} 
        placeholderTextColor= {'#AFB2BF'}
        {...props}/>
    )    
}

    const styles = StyleSheet.create({
        input: {
          height: 58,
          paddingVertical: 0,
          backgroundColor: '#2E2D3D',
          paddingHorizontal: 24,  
          borderRadius: 10,
          fontSize: 16,
          lineHeight: 16,
          color: '#AFB2BF'
        }
      });  
