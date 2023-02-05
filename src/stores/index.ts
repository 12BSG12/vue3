import { ref } from 'vue';
import { defineStore } from 'pinia';

interface IBody {
  title: string;
  text: string;
}

export const useViewsStore = defineStore('counter', () => {
  const minID = ref(0);
  const alertsData = ref<IBody[]>([]);

  const setMinId = (_minID: number) => {
    if (_minID) {
      minID.value = _minID;
    }
  };

  const setAlerts = (body: IBody) => {
    alertsData.value.push(body);
  };
  return { minID, setMinId, setAlerts, alertsData };
});
