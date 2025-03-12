import { debug } from "./debug";

//쿠키 가져오는 함수
export function getCookie(name): string | undefined {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// 클립보드의 텍스트를 가져오기
export function getClipboardTextModern(): Promise<string>{
    debug("getClipboardTextModern",0);
    return navigator.clipboard.readText(); // 붙여넣기
}

// 텍스트를 클립보드에 복사하기
export function copyToClipboard(text): void{
    navigator.clipboard.writeText(text); // 복사하기
    debug("copyToClipboard",0);
}