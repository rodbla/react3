let productos = [
  {
    id: "1",
    categoria: "zapatillas",
    name: "Zapatillas Nike Revolution 6 Next Nature 1",
    price: 29399,
    foto: "https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf69a1410/products/NI_DC3728-003/NI_DC3728-003-1.JPG?sw=400&sh=400",
  },
  {
    id: "2",
    categoria: "zapatillas",
    name: "Zapatillas Nike Revolution 6 Next Nature 2",
    price: 29500,
    foto: "https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf69a1410/products/NI_DC3728-003/NI_DC3728-003-1.JPG?sw=400&sh=400",
  },
  {
    id: "3",
    categoria: "zapatillas",
    name: "Zapatillas Nike Revolution 6 Next Nature 3",
    price: 29510,
    foto: "https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf69a1410/products/NI_DC3728-003/NI_DC3728-003-1.JPG?sw=400&sh=400",
  },
  {
    id: "4",
    categoria: "pelotas",
    name: "Pelota adidas Al Rihla Hologram Foil 4",
    price: 16999,
    foto: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe44ecbb0/products/AD_H57799/AD_H57799-1.JPG",
  },
  {
    id: "5",
    categoria: "pelotas",
    name: "Pelota adidas Al Rihla Hologram Foil 5",
    price: 16900,
    foto: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe44ecbb0/products/AD_H57799/AD_H57799-1.JPG",
  },
  {
    id: "6",
    categoria: "pelotas",
    name: "Pelota adidas Al Rihla Hologram Foil 6",
    price: 16500,
    foto: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe44ecbb0/products/AD_H57799/AD_H57799-1.JPG",
  },
  {
    id: "7",
    categoria: "pelotas",
    name: "Pelota adidas Al Rihla Hologram Foil 7",
    price: 16480,
    foto: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe44ecbb0/products/AD_H57799/AD_H57799-1.JPG",
  },
];

export const gFetch = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(productos);
    }, 1000);
  });
};

export const gFetchOne = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(productos.find((producto) => producto.id === id));
    }, 1000);
  });
};
