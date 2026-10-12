import { Message } from "../domain/Message";
import { MessageList } from "../domain/MessageList";
import "./style.css";

const messages = new MessageList();

const form = document.querySelector<HTMLFormElement>("#contact-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const status = document.querySelector<HTMLElement>("#status");

  try {
    const message = new Message(
      String(data.get("name") ?? ""),
      String(data.get("email") ?? ""),
      String(data.get("message") ?? ""),
      data.get("attended") === "yes",
      data.has("notifications"),
    );
    messages.add(message);
    if (status) status.textContent = "Consulta registrada. ¡Gracias!";
    form.reset();
  } catch (error) {
    if (status) status.textContent = (error as Error).message;
  }
});
