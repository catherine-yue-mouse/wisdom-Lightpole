export function getSessionStorage(item) {
    return sessionStorage.getItem(item);
}

export function getLocalStorage(item) {
    return localStorage.getItem(item);
}

export function setNetEnv(item) {
    return localStorage.setItem('netEnv',item);
}

export function setSessionStorage(session) {
    return sessionStorage.setItem('access_token', session);
}

export function setSessionLoginStorage(session) {
    return sessionStorage.setItem('loginName', session);
}

export function removeSessionStorage(key) {
    return sessionStorage.removeItem(key);
}

export function clearSessionStorage() {
    return sessionStorage.clear();
}
