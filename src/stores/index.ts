import { watch, ref } from 'vue';
import { defineStore } from 'pinia';

interface IBody {
  title: string;
  text: string;
  status: "error" | "success"
}

export const useViewsStore = defineStore('views', () => {
  const minID = ref(0);
  const maxID = ref(0);
  const alertsData = ref<IBody[]>([]);

  const setMinAndMaxId = (arrID: number[]) => {
    if (arrID) {
      minID.value = Math.min(...arrID);
      maxID.value = Math.max(...arrID);
    }
  };

  const setAlerts = (body: IBody) => {
    alertsData.value.push(body);
  };

  watch(alertsData.value, () => {
    setTimeout(() => alertsData.value.length = 0, 5000)
  });

  return {
    minID,
    maxID,
    setMinAndMaxId,
    setAlerts,
    alertsData,
  };
});
