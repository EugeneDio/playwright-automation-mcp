/**
 * Sample API Tests
 * Demonstrates API testing capabilities
 */

import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

async function runApiTests(): Promise<void> {
  console.log('Running API Tests...\n');

  try {
    // Test 1: GET request
    console.log('Test 1: Fetching user data (GET)');
    const userResponse = await axios.get(`${baseURL}/users/1`);
    console.log('✓ User fetched:', userResponse.data.name);
    console.log('');

    // Test 2: GET with filter
    console.log('Test 2: Fetching posts (GET with params)');
    const postsResponse = await axios.get(`${baseURL}/posts`, {
      params: { userId: 1, _limit: 2 },
    });
    console.log(`✓ Retrieved ${postsResponse.data.length} posts`);
    console.log('');

    // Test 3: POST request
    console.log('Test 3: Creating a new post (POST)');
    const createResponse = await axios.post(`${baseURL}/posts`, {
      title: 'Test Post',
      body: 'This is a test post',
      userId: 1,
    });
    console.log('✓ Post created with ID:', createResponse.data.id);
    console.log('');

    // Test 4: Error handling
    console.log('Test 4: Testing 404 error');
    try {
      await axios.get(`${baseURL}/posts/99999`);
      console.log('✗ Should have thrown error');
    } catch (error: unknown) {
      const axiosError = error as Record<string, unknown>;
      const response = axiosError.response as Record<string, unknown>;
      if (response?.status === 404) {
        console.log('✓ Correctly handled 404 error');
      }
    }

    console.log('\nAPI Tests completed successfully!');
  } catch (error) {
    console.error('API Test failed:', error);
    process.exit(1);
  }
}

runApiTests();
