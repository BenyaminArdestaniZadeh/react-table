export type TypoVariant = {
  size: {
    initial: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
    lg: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
  };
  weight: {
    initial: "light" | "regular" | "medium" | "bold";
    lg: "light" | "regular" | "medium" | "bold";
  };
};

export const typoVariant: Record<string, TypoVariant> = {
  h1: {
    size: {
      initial: "9",
      lg: "9",
    },
    weight: {
      initial: "regular",
      lg: "regular",
    },
  },
  h2: {
    size: {
      initial: "8",
      lg: "8",
    },
    weight: {
      initial: "regular",
      lg: "regular",
    },
  },
  h3: {
    size: {
      initial: "7",
      lg: "7",
    },
    weight: {
      initial: "medium",
      lg: "medium",
    },
  },
  h4: {
    size: {
      initial: "6",
      lg: "6",
    },
    weight: {
      initial: "bold",
      lg: "bold",
    },
  },
  h5: {
    size: {
      initial: "5",
      lg: "5",
    },
    weight: {
      initial: "medium",
      lg: "medium",
    },
  },
  h6: {
    size: {
      initial: "4",
      lg: "4",
    },
    weight: {
      initial: "regular",
      lg: "regular",
    },
  },
  title1: {
    size: {
      initial: "5",
      lg: "5",
    },
    weight: {
      initial: "regular",
      lg: "regular",
    },
  },
  title2: {
    size: {
      initial: "4",
      lg: "4",
    },
    weight: {
      initial: "medium",
      lg: "medium",
    },
  },
  body1: {
    size: {
      initial: "3",
      lg: "3",
    },
    weight: {
      initial: "regular",
      lg: "regular",
    },
  },
  body2: {
    size: {
      initial: "2",
      lg: "2",
    },
    weight: {
      initial: "regular",
      lg: "regular",
    },
  },
  description1: {
    size: {
      initial: "2",
      lg: "2",
    },
    weight: {
      initial: "light",
      lg: "light",
    },
  },
  description2: {
    size: {
      initial: "1",
      lg: "1",
    },
    weight: {
      initial: "light",
      lg: "light",
    },
  },
  description3: {
    size: {
      initial: "3",
      lg: "3",
    },
    weight: {
      initial: "light",
      lg: "light",
    },
  },
};
