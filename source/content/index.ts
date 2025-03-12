import * as request from "./tools/requests";
import * as env from "./.env/env";
import { debug } from "./tools/debug";


window.onload = () => {
    console.log(document.URL);
    if (env.lunatalk_chatroom_reg.test(document.URL)){
        const popup = document.getElementById(env.popupId);
        const new_p = popup.getElementsByTagName("p").item(1).cloneNode(true);
        const new_h2 = popup.getElementsByTagName("h2").item(1).cloneNode(true) as HTMLButtonElement;
        new_h2.childNodes.item(0).textContent = "애프터 버너";
        new_h2.childNodes.item(3).remove();
        (new_h2.childNodes.item(1) as HTMLButtonElement).style.borderRadius = "5px";
        (new_h2.childNodes.item(1) as HTMLButtonElement).textContent = "시작";
        (new_h2.childNodes.item(1) as HTMLButtonElement).removeAttribute("onclick");
        (new_h2.childNodes.item(1) as HTMLButtonElement).removeAttribute("id");
        const exactly_h2 = new_h2.cloneNode(true);
        popup.insertBefore(exactly_h2,popup.childNodes.item(popup.childNodes.length - 6));
        popup.insertBefore(new_p,popup.childNodes.item(popup.childNodes.length - 6));
    }
}