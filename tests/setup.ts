// Type declaration for Object.groupBy polyfill
declare global {
  interface ObjectConstructor {
    groupBy<T, K extends PropertyKey>(
      items: T[],
      keySelector: (item: T) => K
    ): Record<K, T[]>;
  }
}

// Polyfill for Object.groupBy (ES2024 feature)
if (!(Object as any).groupBy) {
  (Object as any).groupBy = function<T, K extends PropertyKey>(
    items: T[],
    keySelector: (item: T) => K
  ): Record<K, T[]> {
    return items.reduce((acc, item) => {
      const key = keySelector(item);
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {} as Record<K, T[]>);
  };
}

// Make this file a module
export {}; 