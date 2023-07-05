import { useMediaQuery } from "react-responsive";

export default useBreakpoint = () => {
  const phone = useMediaQuery({ query: "(max-width:1279px)" });
  const desktop = useMediaQuery({ query: "(min-width:1280px)" });

  return {
    phone,
    desktop,
  };
};
