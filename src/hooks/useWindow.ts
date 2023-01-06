import { ref, onMounted, onUnmounted } from "vue";

export function useWindow() {
  const width = ref(0);
  const height = ref(0);
  const handleResize = () => {
    localStorage.width = window.innerWidth;
    localStorage.height = window.innerHeight;
    width.value = localStorage.width;
    height.value = localStorage.height;
  };

  onMounted(() => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  return {
    width,
    height,
  };
}
