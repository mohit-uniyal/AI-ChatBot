const baseURL='https://ai-chat-bot-server.vercel.app';

export const apiEndpoints={
    login: `${baseURL}/api/user/login`,
    signup: `${baseURL}/api/user/signup`,
    logout: `${baseURL}/api/user/logout`,
    isLoggedIn: `${baseURL}/api/user/isLoggedIn`,
    getChats: `${baseURL}/api/chat/getChats`,
    getPromptAnswer: `${baseURL}/api/chat/getPromptAnswer`,
    clearChats: `${baseURL}/api/chat/clearChats`
}