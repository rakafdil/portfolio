export function navigateWithBubble(target: string) {
  const element = document.querySelector<HTMLElement>(target);

  if (!element) return;

  const offset = 50;

  const targetY =
    element.offsetTop -
    (window.innerHeight - element.offsetHeight) / 2 +
    offset;

  // Update URL
  window.history.pushState(null, "", target);

  // Smooth scroll
  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });

  window.dispatchEvent(new Event("bubble-transition"));
  return;
}
