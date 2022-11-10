const lsType = {
  set: 'setItem',
  get: 'getItem',
  remove: 'removeItem',
};

const ls = (type: string, itemName: string, itemData?: string): void | string => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-undef
    const LS = window.localStorage;
    if (type === lsType.set && itemData) {
      LS[type](itemName, itemData);
      return;
    }
    return LS[type](itemName);
  }
};

export default {
  set(itemName: string, itemData: string): void {
    ls(lsType.set, itemName, itemData);
  },
  get(itemName: string): string {
    return ls(lsType.get, itemName) as string;
  },
  remove(itemName: string): void {
    ls(lsType.remove, itemName);
  },
};
