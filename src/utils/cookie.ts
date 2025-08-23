export function setCookie(nome: string, valor: string, dias: number): void {
    let expirar = "";
    if (dias) {
        const date = new Date();
        date.setTime(date.getTime() + dias * 24 * 60 * 60 * 1000);
        expirar = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${nome}=${valor || ""}${expirar};path=/`;
}

export function getCookie(nome: string): string | null {
    const nomeEQ = nome + "=";
    const cookies = document.cookie.split(";");

    for (let v of cookies) {
        let cookie = v.trim();

        if (cookie.indexOf(nomeEQ) === 0)
            return cookie.substring(nomeEQ.length, cookie.length);
    }

    return null;
}
