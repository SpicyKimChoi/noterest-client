export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
    /**
    * @param {Change after reference under code}
    * 
    */

    xxLarge: mediaQuery(2020),
    xLarge: mediaQuery(1640),
    large: mediaQuery(1500),
    medium: mediaQuery(1160),
    small: mediaQuery(768),
    xSmall: mediaQuery(375),
    custom: mediaQuery,
};

export default media;