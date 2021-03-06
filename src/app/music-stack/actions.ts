import { createAction } from 'typesafe-redux-helpers';

import { Artist, Album, Playlist } from '../../types/music';

export type LoadDataStartedType = {
    key: string;
};

export type LoadDataTriggerType = LoadDataStartedType & {
    id: number;
};

export type LoadArtistCompletedType = LoadDataStartedType & {
    artist: Artist;
};

export type LoadAlbumCompletedType = LoadDataStartedType & {
    album: Album;
};

export type LoadPlaylistCompleted = LoadDataStartedType & {
    playlist: Playlist;
};

export type AddToPlaylistType = {
    trackId: string;
    playlistId: number;
};

export const LOAD_ARTIST = {
    TRIGGER: createAction('[Load Artist Trigger]', (payload: LoadDataTriggerType) => payload),
    STARTED: createAction('[Load Artist Started]', (payload: LoadDataStartedType) => payload),
    COMPLETED: createAction('[Load Artist Completed]', (payload: LoadArtistCompletedType) => payload),
};

export const LOAD_ALBUM = {
    TRIGGER: createAction('[Load Album Trigger]', (payload: LoadDataTriggerType) => payload),
    STARTED: createAction('[Load Album Started]', (payload: LoadDataStartedType) => payload),
    COMPLETED: createAction('[Load Album Completed]', (payload: LoadAlbumCompletedType) => payload),
};

export const ADD_TO_PLAYLIST = {
    TRIGGER: createAction('[Add to playlist Trigger]', (payload: AddToPlaylistType) => payload),
};

export const FOLLOW_OR_UNFOLLOW = {
    TRIGGER: createAction('[Follow or Unfollow trigger]', (payload: number) => payload),
    COMPLETED: createAction('[Follow or unfollow completed]', (payload: number[]) => payload),
};
