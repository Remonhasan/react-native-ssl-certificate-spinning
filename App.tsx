import React, { useState } from 'react';
import { fetch } from 'react-native-ssl-pinning'; // SSL Spinning Library
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet, Pressable, Linking } from 'react-native';

const departments = [
  { name: 'CSE', icon: require('./assets/bd-logo.png'), color: '#FF5733' },
  { name: 'CIVIL', icon: require('./assets/bd-logo.png'), color: '#33FF57' },
  { name: 'ENGLISH', icon: require('./assets/bd-logo.png'), color: '#3357FF' },
  { name: 'EEE', icon: require('./assets/bd-logo.png'), color: '#F1C40F' },
  { name: 'ARCHITECTURE', icon: require('./assets/bd-logo.png'), color: '#E67E22' },
  { name: 'BBA', icon: require('./assets/bd-logo.png'), color: '#9B59B6' },
  { name: 'PHARMACY', icon: require('./assets/bd-logo.png'), color: '#1ABC9C' },
  { name: 'LAW', icon: require('./assets/bd-logo.png'), color: '#34495E' },
  // Add other departments
];

const HomeScreen = ({ navigation }) => {
      const [searchQuery, setSearchQuery] = useState('');
      const [loading, setLoading] = useState(false);
      const [filteredDepartments, setFilteredDepartments] = useState(departments);

       // POST request snippets
       const handleLogin = async () => {
           if (email.trim() === '' || password.trim() === '') {
             Alert.alert('Error', 'Please fill in both fields.');
             return;
           }

           const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
           if (!emailRegex.test(email)) {
             Alert.alert('Error', 'Please enter a valid email address.');
             return;
           }

            setIsLoading(true);

           // your payload (passing parameters)
           const payLoad = {
             username: email,
             password,
           };

           try {
               // using fetch from ssl-spinning library
             const response = await fetch('https://yourdomain.com/', {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
               },
               body: JSON.stringify(payLoad),
               sslPinning: {
                   certs: ['mycert'], // SSL certificate file
               },
             });

             const data = await response.json();
             if (data.code == 200) { // check your json response
               setIsLoading(false);
               navigation.navigate('Dashboard');
             } else {
               setIsLoading(false);
               Alert.alert('Error', 'Invalid Credentials.' || 'Login failed.');
             }
           } catch (error) {
             setIsLoading(false);
             console.log("login error:", error)
             Alert.alert('Error', 'Certification Expired.');
           }
       };

       // GET request snippets
       const fetchShows = async () => {
           if (startDate > endDate) {
             setDateError('Start date must be less than or equal to end date.');
             return;
           }
           setDateError('');
           setLoading(true);
           try {
             const apiUrl = "https://yourdomain.com/";
             const response = await fetch(apiUrl, {
                 method: 'GET',
                 sslPinning: {
                   certs: ['mycert'], // SSL certificate file
                 },
             });
             const json = await response.json();

             setData(json?.data?.result);
           } catch (error) {
             console.error(error);
             setError('Error fetching data.');
           } finally {
             setLoading(false);
           }
       };

      const handleSearch = (query) => {
            setSearchQuery(query);
            const filtered = departments.filter((department) =>
              department.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredDepartments(filtered);
      };

      const openGitHub = () => {
            Linking.openURL('https://github.com/your-github-profile');
      };

      return (
        <View style={styles.container}>
          {/* App Header */}
          <View style={styles.header}>
            <Text style={styles.appTitle}>Question Bank</Text>
            <Text style={styles.description}>Access Question Papers by Department</Text>
            <TextInput
              placeholder="Search Departments..."
              style={styles.searchBar}
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>

          {/* Department Grid */}
          <FlatList
            data={filteredDepartments}
            keyExtractor={(item) => item.name}
            numColumns={2}
            renderItem={({ item }) => (
              <Pressable
                style={({ pressed }) => [
                  styles.departmentItem,
                  { backgroundColor: item.color, opacity: pressed ? 0.8 : 1 }
                ]}
                onPress={() => navigation.navigate('SemesterScreen', { department: item.name })}
              >
                <Image source={item.icon} style={styles.departmentIcon} />
                <Text style={styles.departmentName}>{item.name}</Text>
              </Pressable>
            )}
          />

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>© 2024 remonhasan</Text>
            <TouchableOpacity onPress={openGitHub}>
              <Text style={styles.githubLink}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#EAEFF1', // Softer background color
      },
      header: {
        padding: 20,
        marginBottom: 20,
        backgroundColor: '#FFFFFF', // White background for the header
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
      },
      appTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2C3E50', // Darker shade for better readability
        marginBottom: 8,
      },
      description: {
        fontSize: 16,
        color: '#7F8C8D', // Lighter text for description
        marginVertical: 10,
        textAlign: 'center',
      },
      searchBar: {
        backgroundColor: '#F7F9FC', // Lighter search bar
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '100%',
        borderColor: '#BDC3C7',
        borderWidth: 1,
      },
      departmentItem: {
        flex: 1,
        margin: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      },
      departmentIcon: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginBottom: 10,
      },
      departmentName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFFFF',
      },
      footer: {
        padding: 15,
        backgroundColor: '#2C3E50', // Dark footer background
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#BDC3C7',
      },
      footerText: {
        fontSize: 14,
        color: '#ECF0F1', // Lighter footer text
        marginBottom: 5,
      },
      githubLink: {
        fontSize: 14,
        color: '#1E90FF',
        textDecorationLine: 'underline',
      },
    });

export default HomeScreen;