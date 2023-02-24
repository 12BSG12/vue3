import { ref, watch, onMounted } from 'vue';
import { defineStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router';

interface IBody {
  title: string;
  text: string;
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
  return {
    minID,
    maxID,
    setMinAndMaxId,
    setAlerts,
    alertsData,
  };
});
