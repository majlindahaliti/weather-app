import { create } from "zustand";

type LoaderStore = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const useLoaderStore = create<LoaderStore>((set) => ({
  isLoading: true,
  setIsLoading(isLoading) {
    set(() => ({ isLoading }));
  },
}));
