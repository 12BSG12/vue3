import { useViewsStore } from "@/stores";
import { extractData } from "../../api";
import { useMutation } from "@tanstack/vue-query";
import axios from 'axios';

interface IBody {
  name: string,  
  emailFrom: string,
  emailTo: string,
  message: string
}

const instance = axios.create({
  baseURL: "https://mail-zgno.onrender.com/",
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_API_TOKEN
  }
});


async function sendMail(body: IBody) {
  return extractData(instance.post('mail', JSON.stringify(body)));
}

export function useSendMail() {
  const { setAlerts } = useViewsStore();

  const { mutate, isLoading, isSuccess, error } = useMutation({
    mutationFn: (body: IBody) => sendMail(body),
    onSuccess: () => setAlerts({
      status: "success",
      title: 'Готово',
      text: 'Сообщение успешно отправлено...'
    }),
    onError: () => setAlerts({
      status: "error",
      title: 'Ошибка на стороне сервера',
      text: 'Попробуйте отправить сообщение позже...'
    })
  });

  return {
    mutate,
    isLoading,
    isSuccess, 
    error
  };
}