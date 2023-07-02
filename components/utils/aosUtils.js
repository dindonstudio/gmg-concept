import { useState, useEffect } from "react";
import AOS from "aos";

export function useAOS() {
  const [useAOS, setUseAOS] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setUseAOS(true);
      AOS.init();
    }
  }, []);

  return useAOS;
}

export function getAosProps(useAOS) {
  if (useAOS) {
    return {
      "data-aos": "fade-in-up",
      "data-aos-duration": "1000",
      "data-aos-easing": "new-easing",
      "data-aos-offset": "300",
      "data-aos-once": "false"
    };
  }
  return {};
}
