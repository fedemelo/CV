export function filterForCV<T extends { showInCV?: boolean }>(items: T[]) {
  return items.filter((item) => item.showInCV ?? true);
}

export function filterForResume<T extends { showInResume?: boolean }>(items: T[]) {
  return items.filter((item) => item.showInResume ?? true);
}