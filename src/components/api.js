import axios from 'axios';

// Base URL for the APIs
const baseURL = 'https://example.com/api';

// Prescription Management API
export const getPrescriptions = async () => {
  try {
    const response = await axios.get(`${baseURL}/prescriptions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching prescriptions:', error);
    throw error;
  }
};

export const requestPrescription = async (prescription) => {
  try {
    const response = await axios.post(`${baseURL}/prescriptions`, prescription);
    return response.data;
  } catch (error) {
    console.error('Error requesting prescription:', error);
    throw error;
  }
};

// Delivery Tracking API
export const getDeliveries = async () => {
  try {
    const response = await axios.get(`${baseURL}/deliveries`);
    return response.data;
  } catch (error) {
    console.error('Error fetching deliveries:', error);
    throw error;
  }
};

export const trackDelivery = async (deliveryId) => {
  try {
    const response = await axios.get(`${baseURL}/deliveries/${deliveryId}`);
    return response.data;
  } catch (error) {
    console.error('Error tracking delivery:', error);
    throw error;
  }
};

// Patient Communication API
export const getMessages = async () => {
  try {
    const response = await axios.get(`${baseURL}/messages`);
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(`${baseURL}/messages`, message);
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};