import fallbackImage from '../assets/images/hero_unisex_jewelry_1790586987926.jpg';

/**
 * If any <img> fails to load (dead remote URL, offline, hotlink blocked),
 * swap in a bundled local image once so no picture is ever left blank.
 */
export const installImageFallback = () => {
  document.addEventListener(
    'error',
    (e) => {
      const el = e.target;
      if (el instanceof HTMLImageElement && el.dataset.fallbackApplied !== '1') {
        el.dataset.fallbackApplied = '1';
        el.removeAttribute('srcset');
        el.src = fallbackImage;
      }
    },
    true,
  );
};
