const apiUrl = 'https://landing.actblue.com/_hcms/diagnostics';

// Make a GET request using the Fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    // Process the retrieved user data
    console.log('User Data:', userData);
  })
  .catch(error => {
    console.error('Error:', error);
  });
