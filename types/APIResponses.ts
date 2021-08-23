import Verse from './Verse';
import Chapter from './Chapter';
import AvailableTranslation from './AvailableTranslation';
import TafsirInfo from './TafsirInfo';
import SearchResult from './SearchResult';
import AvailableLanguage from './AvailableLanguage';
import Reciter from './Reciter';
import { AudioFile } from './AudioFile';
import ChapterInfo from './ChapterInfo';

export interface BaseResponse {
  status?: number;
  error?: string;
}

// The response from the verses endpoint that returns a list of verses
export interface VersesResponse extends BaseResponse {
  pagination: {
    perPage: number;
    currentPage: number;
    nextPage: number | null;
    totalRecords: number;
    totalPages: number;
  };
  verses: Verse[];
}

// The response from the chapters endpoint that returns a list of the chapters
export interface ChaptersResponse extends BaseResponse {
  chapters: Chapter[];
}

// The response from the chapter endpoint that returns information on a chapter
export interface ChapterResponse extends BaseResponse {
  chapter: Chapter;
}

export interface TranslationsResponse extends BaseResponse {
  translations?: AvailableTranslation[];
}

export interface LanguagesResponse extends BaseResponse {
  languages?: AvailableLanguage[];
}

export interface RecitersResponse extends BaseResponse {
  reciters?: Reciter[];
}

export interface AudioFilesResponse extends BaseResponse {
  audioFiles: AudioFile[];
}

export interface AudioTimestampsResponse extends BaseResponse {
  result: {
    timestampFrom: number;
    timestampTo: number;
  };
}
export interface SearchResponse extends BaseResponse {
  search?: {
    query: string;
    totalResults: number;
    currentPage: number;
    totalPages: number;
    results: SearchResult[];
  };
}

export interface AdvancedCopyRawResultResponse extends BaseResponse {
  result?: string;
}

export interface TafsirsResponse extends BaseResponse {
  tafsirs?: TafsirInfo[];
}

export interface ChapterInfoResponse extends BaseResponse {
  chapterInfo?: ChapterInfo;
}