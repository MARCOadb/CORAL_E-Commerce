import { useMediaQuery } from "react-responsive";

const useBreakpoint = () => {
  const phone = useMediaQuery({ query: "(max-width:1279px)" });
  const desktop = useMediaQuery({ query: "(min-width:1280px)" });

  return {
    phone,
    desktop,
  };
};
export default useBreakpoint;
