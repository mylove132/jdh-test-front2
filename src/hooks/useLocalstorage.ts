export interface IUseLocalStorage {
    setLocalStorage: (localKey: string, localValue: string) => void;
    getLocalStorage: (localKey: string) => string;
}

/**
 * 操作localstorage
 */
function userLocalStorage(): IUseLocalStorage {

    function setLocalStorage(localKey: string, localValue: string): void {
        localStorage.setItem(localKey, localValue);
    }

    function getLocalStorage(localKey: string): string {
        return localStorage.getItem(localKey)!;
    }
    return {
        setLocalStorage,
        getLocalStorage
    }
}

export default userLocalStorage;
