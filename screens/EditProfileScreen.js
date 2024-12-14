import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { ProfileContext } from '../ProfileContext';

const EditProfileScreen = ({ navigation }) => {
  const { profile, setProfile } = useContext(ProfileContext);
  const [name, setName] = useState(profile.name);
  const [job, setJob] = useState(profile.job);

  const handleSave = () => {
    setProfile({ name, job }); 
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Title>Edit Profile</Title>
      <TextInput
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}
      />
      <TextInput
        label="Job"
        value={job}
        onChangeText={text => setJob(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Save
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default EditProfileScreen;
