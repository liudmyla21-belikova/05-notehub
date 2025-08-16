import axios from "axios";
import type { NoteCreatePayload, Note } from "../types/note";

const myKey = import.meta.env.VITE_NOTEHUB_TOKEN;

interface PostsHttpResponse {
  notes: Note[];
  totalPages: number;
}

const BASE_URL = "https://notehub-public.goit.study/api/notes";
const headers = { Authorization: `Bearer ${myKey}` };

export const fetchNotes = async (
  page: number,
  perPage: number,
  search: string
): Promise<PostsHttpResponse> => {
  const response = await axios.get<PostsHttpResponse>(BASE_URL, {
    headers,
    params: {
      page,
      perPage,
      search,
    },
  });
  return response.data;
};

export const createNote = async (note: NoteCreatePayload): Promise<Note> => {
  const res = await axios.post<Note>(BASE_URL, note, { headers });
  return res.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const res = await axios.delete<Note>(`${BASE_URL}/${id}`, {
    headers,
  });
  return res.data;
};