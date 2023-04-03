function useLocalStorage() {
    const setLocalStorage = (key: string, value: any): any => {
        const valueStr = JSON.stringify(value);
        localStorage.setItem(key, valueStr);
    }

    const readLocalStorage = (key: string): any => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : undefined;
    }

    return { setLocalStorage, readLocalStorage };
}

export default useLocalStorage;
