export function getSectionListData(data) {
  const categories = new Set(data?.map((item) => item.category));
  const sections = [];
  categories?.forEach((item) => {
    if (!item) return;
    const filtered = data?.filter((element) => element?.category == item);
    const section = {
      title: item,
      data: filtered,
    };
    sections.push(section);
  });
  console.log(sections);

  return sections;
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
