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
      "data-aos-offset": "400",
      "data-aos-once": "true"
    };
  }
  return {};
}
export function getAosPropsFadeShort(useAOS) {
  if (useAOS) {
    return {
      "data-aos": "fade-in-up-short",
      "data-aos-duration": "1000",
      "data-aos-easing": "new-easing",
      "data-aos-offset": "800",
      "data-aos-once": "true"
    };
  }
  return {};
}
export function getAosPropsFadeShortDelay1(useAOS) {
  if (useAOS) {
    return {
      "data-aos": "fade-in-up-short",
      "data-aos-duration": "1000",
      "data-aos-easing": "new-easing-delay-short",
      "data-aos-offset": "500",
      "data-aos-once": "true"
    };
  }
  return {};
}
export function getAosPropsFadeShortDelay2(useAOS) {
  if (useAOS) {
    return {
      "data-aos": "fade-in-up-short",
      "data-aos-duration": "1000",
      "data-aos-easing": "new-easing-delay2-short",
      "data-aos-offset": "500",
      "data-aos-once": "true"
    };
  }
  return {};
}

export function getAosPropsFade(useAOS) {
  if (useAOS) {
    return {
      "data-aos": "fade-opacity",
     
      "data-aos-easing": "new-easing",
      "data-aos-offset": "400",
      "data-aos-once": "true"
    };
  }
  return {};
}
export function getAosPropsFadeDelay(useAOS) {
  if (useAOS) {
    return {
      "data-aos": "fade-opacity",
      "data-aos-delay": "200",
      "data-aos-duration": "1000",
      "data-aos-easing": "new-easing-delay",
      "data-aos-offset": "400",
      "data-aos-once": "true"
    };
  }
  return {};
}
export function getAosPropsWidth(useAOS) {
  if (useAOS) {
    return {
      "data-aos": "width-opacity",
 
      "data-aos-duration": "1000",
      "data-aos-easing": "new-easing",
      "data-aos-offset": "200",
      "data-aos-once": "true"
    };
  }
  return {};
}

export function getAosPropsFadeShortOffset(useAOS) {
  if (useAOS) {
    return {
      "data-aos": "fade-in-up-short",
      "data-aos-duration": "1000",
      "data-aos-easing": "new-easing",
      "data-aos-offset": "200",
      "data-aos-once": "true"
    };
  }
  return {};
}
export function getAosPropsFadeShortOffsetDelay(useAOS) {
  if (useAOS) {
    return {
      "data-aos": "fade-in-up-short",
      "data-aos-duration": "1000",
      "data-aos-easing": "new-easing",
      "data-aos-offset": "200",
      "data-aos-once": "true"
    };
  }
  return {};
}