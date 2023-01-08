import { ref, onMounted, onUnmounted } from "vue";

export function useScroll() {
  const scrollY = ref(0);
  const handleResize = () => {
    scrollY.value = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleResize);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return {
    scrollY,
    scrollToTop,
  };
}
