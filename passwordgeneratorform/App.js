import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox, StyleSheet } from 'react-native';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSpecialSymbol, setIncludeSpecialSymbol] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    let characters = '';
    if (includeLowerCase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUpperCase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumber) characters += '0123456789';
    if (includeSpecialSymbol) characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setGeneratedPassword(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>

      {/* Generated Password */}
      <TextInput
        style={styles.generatedPassword}
        value={generatedPassword}
        editable={false}
        placeholder="Your password will appear here"
      />

      {/* Password Length */}
      <View style={styles.inputRow}>
        <Text style={styles.label}>Password length</Text>
        <TextInput
          style={styles.lengthInput}
          value={passwordLength}
          onChangeText={setPasswordLength}
          keyboardType="numeric"
          placeholder="8"
        />
      </View>

      {/* Options */}
      <View style={styles.optionRow}>
        <Text style={styles.label}>Include lower case letters</Text>
        <CheckBox value={includeLowerCase} onValueChange={setIncludeLowerCase} />
      </View>
      <View style={styles.optionRow}>
        <Text style={styles.label}>Include upper case letters</Text>
        <CheckBox value={includeUpperCase} onValueChange={setIncludeUpperCase} />
      </View>
      <View style={styles.optionRow}>
        <Text style={styles.label}>Include number</Text>
        <CheckBox value={includeNumber} onValueChange={setIncludeNumber} />
      </View>
      <View style={styles.optionRow}>
        <Text style={styles.label}>Include special symbol</Text>
        <CheckBox value={includeSpecialSymbol} onValueChange={setIncludeSpecialSymbol} />
      </View>

      {/* Generate Button */}
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2A2A72',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  generatedPassword: {
    height: 50,
    width: '100%',
    backgroundColor: '#000',
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    color: '#FFF',
    fontSize: 16,
    marginRight: 10,
  },
  lengthInput: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    width: 50,
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PasswordGenerator;
