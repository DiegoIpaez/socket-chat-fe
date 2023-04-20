// eslint-disable-next-line import/prefer-default-export
export const REGEX = {
  COUNT_CHARACTERS_NOT_WHITESPACES: /(\S\s*){3,}/,
  ONLY_POSITIVE_NUMBERS: /^[1-9]+[0-9]*$/,
  NOT_VALID_NORMAL_LINESCORE: /^((?!-).)*$/,
  ONLY_ALPHABETIC_VALUES:
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
};
