interface PageData {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
  mapId: string;
  formEndpoint: string;
}

declare global {
  interface Window {
    pageData?: PageData;
  }
}

export const getPageData = (): PageData => {
  const defaultData: PageData = {
    phone: '8 (8352) 37-02-00',
    email: 'info@vafrike21.ru',
    address: 'г. Чебоксары, ул. Ю. Гагарина, 35 Б',
    workingHours: 'Без выходных с 8:00 до 20:00',
    mapId: 'aa567ea711568a2ef0eef5aab4c500db4f3db5454af4bccb5771e76516d236eb',
    formEndpoint: '/assets/snippets/formsubmit.php',
  };

  if (typeof window !== 'undefined' && window.pageData) {
    return {
      ...defaultData,
      ...Object.fromEntries(
        Object.entries(window.pageData).filter(([_, v]) => v && v.trim() !== '')
      ),
    };
  }

  return defaultData;
};

export default getPageData;
