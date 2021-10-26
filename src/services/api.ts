import axios from 'axios';

const api = axios.create({
  baseURL: "https://upxptycof6.execute-api.us-east-1.amazonaws.com/Dev/dynamodbmanager"
})

export default api