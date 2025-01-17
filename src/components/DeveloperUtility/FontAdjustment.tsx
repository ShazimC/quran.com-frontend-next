import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuranTextFontScale,
  increaseQuranTextFontScale,
  increaseTafsirFontScale,
  decreaseTafsirFontScale,
  selectQuranReaderStyles,
  setQuranFont,
  QuranReaderStyles,
  MAXIMUM_FONT_STEP,
  decreaseTranslationFontScale,
  increaseTranslationFontScale,
} from 'src/redux/slices/QuranReader/styles';
import { QuranFont } from '../QuranReader/types';

/**
 * Adjusts the font type and styles
 */
const FontAdjustment = () => {
  const dispatch = useDispatch();
  const quranReaderStyles = useSelector(selectQuranReaderStyles) as QuranReaderStyles;
  const { quranTextFontScale, quranFont, translationFontScale, tafsirFontScale } =
    quranReaderStyles;
  const availableFonts = [];

  Object.values(QuranFont).forEach((font) => availableFonts.push(font));

  return (
    <>
      {/* Font style */}
      <label htmlFor="font-styles">
        Font style{' '}
        <select
          name="font-styles"
          onChange={(event) => dispatch({ type: setQuranFont.type, payload: event.target.value })}
          value={quranFont}
        >
          {availableFonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </label>
      {/* Quran Font size */}
      <div>
        Quran font size ({quranTextFontScale}){' '}
        <button
          onClick={() => dispatch({ type: decreaseQuranTextFontScale.type })}
          type="button"
          disabled={quranTextFontScale === 1}
        >
          -
        </button>{' '}
        <button
          onClick={() => dispatch({ type: increaseQuranTextFontScale.type })}
          type="button"
          disabled={quranTextFontScale === MAXIMUM_FONT_STEP}
        >
          +
        </button>
      </div>
      {/* Translation Font size */}
      <div>
        Translation font size ({translationFontScale}){' '}
        <button
          onClick={() => dispatch({ type: decreaseTranslationFontScale.type })}
          type="button"
          disabled={translationFontScale === 1}
        >
          -
        </button>{' '}
        <button
          onClick={() => dispatch({ type: increaseTranslationFontScale.type })}
          type="button"
          disabled={translationFontScale === MAXIMUM_FONT_STEP}
        >
          +
        </button>
      </div>
      {/* Tafsir Font size */}
      <div>
        Tafsir font size ({tafsirFontScale}){' '}
        <button
          onClick={() => dispatch({ type: decreaseTafsirFontScale.type })}
          type="button"
          disabled={tafsirFontScale === 1}
        >
          -
        </button>{' '}
        <button
          onClick={() => dispatch({ type: increaseTafsirFontScale.type })}
          type="button"
          disabled={tafsirFontScale === MAXIMUM_FONT_STEP}
        >
          +
        </button>
      </div>
    </>
  );
};

export default FontAdjustment;
