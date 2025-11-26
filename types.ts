export interface CourseModule {
  title: string;
  description: string;
  duration: string;
}

export enum GeminiModel {
  IMAGE_EDITING = 'gemini-2.5-flash-image',
}

export interface ImageEditState {
  originalImage: string | null;
  generatedImage: string | null;
  prompt: string;
  isLoading: boolean;
  error: string | null;
}
