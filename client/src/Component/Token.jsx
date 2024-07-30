const sessionData = window.sessionStorage;

export const token = JSON.parse(sessionData.getItem("adminToken"));
