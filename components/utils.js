export function getSectionListData(shops, menuitems) {
  const combinedData = shops.map((shop) => {
    const matchedItems = menuitems.filter((item) => {
      return item.shopid === shop.uuid;
    });

    return {
      data: matchedItems,
      ...shop,
    };
  });
  //   console.log("combinedData", combinedData);
  return combinedData;
}
export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
