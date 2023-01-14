import { onMounted, onUnmounted, type Ref } from 'vue';

export const useOnClickOutside = (ref: Ref<HTMLElement | null>, callback = () => {}) => {
  const handleClickOutside = (e: MouseEvent) => {
    if (ref.value && !ref.value.contains(<Node>(e.target))) {
      callback();
    }
  };

  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  });
};
